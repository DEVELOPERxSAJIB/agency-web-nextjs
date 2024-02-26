import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://www.ryrob.com/wp-content/uploads/2021/11/iStock-496848472-1024x1024.jpg"
            }
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>10/12/12</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Demo 1</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          iste.
        </p>
        <Link className={styles.link} href={`/blog/sdf`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
