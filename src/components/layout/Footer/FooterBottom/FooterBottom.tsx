import styles from "./FooterBottom.module.scss";
import mapPlaceholder from "../../../../assets/images/footer/mapPlaceholder.jpg";

const FooterBottom = () => {
	return (
		<div className={styles.footerBottom}>
			<div className={styles.footerBottomLeft}>
				<span className={styles.logo}>Esthétique</span>
			</div>
			<div className={styles.footerBottomRight}>
				<div className={styles.locationSection}>
					<strong>Lokalizacja</strong>
					<div className={styles.mapPlaceholder}>
						<img src={mapPlaceholder} alt="mapPlaceholder" />
					</div>
				</div>
				<div className={styles.newsletterSection}>
					<strong>Zapisz się do naszego newslettera</strong>
					<form className={styles.newsletterForm}>
						<input type="email" />
						<button>Dołącz teraz</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FooterBottom;
