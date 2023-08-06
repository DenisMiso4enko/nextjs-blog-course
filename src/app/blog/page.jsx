import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-cache"});
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Blog = async () => {
	const data = await getData()
	console.log(data)
	return (
		<div className={styles.container}>
			{data.map((item) => (
				<Link
					href={`blog/${item.id}`}
					className={styles.container}
					key={item.id}
				>
					<div className={styles.imageContainer}>
						<Image
							src={"https://img.freepik.com/free-photo/free-photo-happy-birthday-background-wallpaper_1340-29843.jpg?size=626&ext=jpg"}
							alt=""
							width={400}
							height={250}
							className={styles.image}
						/>
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.body}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
