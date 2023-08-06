import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: "no-cache"});
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Details = async ({params}) => {
	const data = await getData(params.id);
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.desc}>{data.body}</p>
					<div className={styles.author}>
						<Image
							src={"https://img.freepik.com/free-photo/free-photo-happy-birthday-background-wallpaper_1340-29843.jpg?size=626&ext=jpg"}
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						{/*<span className={styles.username}>{data.username}</span>*/}
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src={"https://img.freepik.com/free-photo/free-photo-happy-birthday-background-wallpaper_1340-29843.jpg?size=626&ext=jpg"} alt="" fill={true} className={styles.image}/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>{data.body}</p>
			</div>
		</div>
	);
};

export default Details;
