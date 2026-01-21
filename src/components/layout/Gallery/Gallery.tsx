import styles from "./Gallery.module.scss";
import galleryimg1 from "../../../assets/images/gallery/gallery1.jpg";
import galleryimg2 from "../../../assets/images/gallery/gallery2.jpg";
import galleryimg3 from "../../../assets/images/gallery/gallery3.jpg";
import galleryimg4 from "../../../assets/images/gallery/gallery4.jpg";

const Gallery = () => {
	return (
		<div className={styles.gallery} id="Gallery">
			<h2 className={styles.title}>
				Our <span>Gallery</span>
			</h2>
			<div className={styles.images}>
				<div className={styles.topEclipseContainer}>
					<div className={styles.eclipseTopOuter}></div>
					<div className={styles.eclipseTopInner}></div>
				</div>
				<div className={styles.imagesContainer}>
					<img src={galleryimg1} alt="Gallery Image 1" />
					<img src={galleryimg4} alt="Gallery Image 2" />
					<img src={galleryimg3} alt="Gallery Image 3" />
					<img src={galleryimg2} alt="Gallery Image 4" />
					<img src={galleryimg4} alt="Gallery Image 5" />
					<img src={galleryimg1} alt="Gallery Image 6" />
				</div>
				<div className={styles.bottomEclipseContainer}>
					<div className={styles.eclipseBottomInner}></div>
					<div className={styles.eclipseBottomOuter}></div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
