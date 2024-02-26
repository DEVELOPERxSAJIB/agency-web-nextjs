import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";

const SinglePostPage = async ({ params }) => {
  return (
    <div className={styles.container}>
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
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <h4>Md SaJib Shikder</h4>
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>14/12/12</span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum vitae perspiciatis nam temporibus asperiores odit dignissimos in quod? Quisquam, accusantium? Voluptate quia dolor nisi quidem tenetur asperiores aliquam laudantium voluptatem obcaecati consectetur, cum veniam at odit ut? Omnis neque tempora nostrum animi officia, earum architecto eius, ipsa, deserunt recusandae quibusdam qui iure deleniti. Perspiciatis doloribus deleniti voluptatem, enim sunt, nesciunt quae ipsam minus facere animi dolorem suscipit numquam repellat omnis! Eligendi deserunt doloribus, sint odit eaque aliquam! Cumque ab quo at quod aliquid totam facilis ea a quae saepe dolor voluptates, tempore atque libero repellendus voluptas delectus optio rem minus inventore ut laborum magni similique. Facilis, itaque odit eos recusandae nam quod odio exercitationem, modi repudiandae nihil rem, velit dolorem tempore. Dolorum vero officiis adipisci nobis, placeat, voluptatem veniam repellendus dicta quidem, sed explicabo. Aliquam aliquid molestias iusto ex, delectus, laboriosam iure ad vitae perspiciatis fugit magni corporis expedita nobis unde ab facilis maxime porro incidunt ipsam temporibus consequatur suscipit asperiores quasi voluptatum. Quis maiores alias doloribus ipsam ad sit optio quos debitis asperiores illo nam sed magnam vitae iusto, qui a, tenetur iure velit quia atque ab aperiam odit est natus! Ad officiis maiores nulla natus consequatur! Velit cum dicta corrupti, dolorem est quae, rem iusto cumque placeat molestiae sit ad dolores consequatur doloremque aut alias aliquid. Quae fugiat sunt veniam, unde blanditiis doloribus provident. Est, ipsa repellat officiis eius quibusdam voluptate consectetur vitae minima, incidunt assumenda perspiciatis, dolorum quia qui ea pariatur consequuntur molestiae id nisi quam vel itaque? Illo harum nobis fugiat sed iusto nesciunt sapiente accusantium obcaecati alias ipsam, porro eius labore facilis tempora repellendus et temporibus earum, nisi exercitationem! Libero ut quod accusantium nulla amet esse itaque nisi repudiandae enim blanditiis veniam vel ratione cumque aliquam possimus ipsam neque, facilis nobis at. In, nostrum?</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
