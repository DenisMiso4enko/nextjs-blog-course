import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
    </div>
  );
};

export default Category;
