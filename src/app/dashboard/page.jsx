"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  // Fetch data using SWR
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    session?.data?.user?.name
      ? `/api/posts?username=${session.data.user.name}`
      : null,
    fetcher
  );

  // Redirect to login if unauthenticated
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value; // Use 'image' instead of 'img'
    const content = e.target[3].value;
  
    if (!image) {
      alert("Image URL is required");
      return;
    }
  
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          image, // Send 'image' to match the schema
          content,
          username: session.data.user.name,
        }),
      });
  
      console.log("Response:", res);
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error details:", errorData);
        throw new Error("Failed to create post");
      }
  
      mutate(); // Revalidate SWR data
      e.target.reset(); // Reset the form
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }

      mutate(); // Revalidate SWR data
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? (
            <p>Loading posts...</p>
          ) : error ? (
            <p>Error loading posts</p>
          ) : (
            data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  {post.img ? (
                    <Image
                      src={post.img}
                      alt={post.title || "Post Image"}
                      width={200}
                      height={100}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.placeholder}>No Image</div>
                  )}
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))
          )}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }

  return null;
};

export default Dashboard;