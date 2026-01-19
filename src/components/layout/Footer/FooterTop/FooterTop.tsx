import ButtonMain from "../../../utils/ButtonMain/ButtonMain";
import styles from "./FooterTop.module.scss";
import mailIcon from "../../../../assets/icons/mail.png";
import phoneIcon from "../../../../assets/icons/phone.png";
import locationIcon from "../../../../assets/icons/location.png";

const FooterTop = () => {
	return (
		<div className={styles.footerTop}>
			<div className={styles.leftSection}>
				<h3>Book your appointment today for a refreshing experience</h3>
				<p>
					A modern beauty salon offering personalized treatments in a relaxing
					space.
				</p>
			</div>
			<div className={styles.rightSection}>
				<div className={styles.infoElement}>
					<strong className={styles.sectionTitle}>PAGES</strong>
					<ul className={styles.pagesList}>
						<li>
							<ButtonMain />
						</li>
						{/* Home */}
						<li>
							<ButtonMain />
						</li>
						{/* Service */}
						<li>
							<ButtonMain />
						</li>
						{/* Book */}
						<li>
							<ButtonMain />
						</li>
						{/* Contact */}
					</ul>
				</div>
				<div className={styles.infoElement}>
					<strong className={styles.sectionTitle}>Contact</strong>
					<ul className={styles.contactList}>
						<li>
							<img src={mailIcon} alt="Mail Icon" /> contact@logo.ch
						</li>
						<li>
							<img src={phoneIcon} alt="Phone Icon" /> 123456789
						</li>
						<li>
							<img src={locationIcon} alt="Location Icon" /> Marszałkowska
							21/37, Warszawa
						</li>
					</ul>
				</div>
				<div className={styles.infoElement}>
					<strong className={styles.sectionTitle}>Social</strong>
					<ul className={styles.socialList}>
						<li>
							<a href="#">Instagram</a>
						</li>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">Facebook</a>
						</li>
						<li>
							<a href="#">LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
