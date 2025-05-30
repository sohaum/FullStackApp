import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = async ({ params }) => {
  const awaitedParams = await params;
  const data = await getData(awaitedParams.category);
  console.log('Category:', awaitedParams.category); // Debugging log
  console.log('Data:', data); // Debugging log

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{awaitedParams.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt={item.title} // Changed alt to item.title for better accessibility
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
