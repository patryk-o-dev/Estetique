import styles from "./FooterTop.module.scss";
import mailIcon from "../../../../assets/icons/mail.png";
import phoneIcon from "../../../../assets/icons/phone.png";
import locationIcon from "../../../../assets/icons/location.png";
import ButtonScrollTo from "../../../utils/ButtonScrollTo/ButtonScrollTo";

const FooterTop = () => {
	return (
		<div className={styles.footerTop}>
			<div className={styles.leftSection}>
				<h3>Zarezerwuj wizytę i zadbaj o siebie już dziś</h3>
				<p>
					Nowoczesny salon kosmetyczny oferujący indywidualnie dopasowane
					zabiegi w przyjaznej i spokojnej atmosferze.
				</p>
			</div>
			<div className={styles.rightSection}>
				<div className={styles.infoElement}>
					<strong className={styles.sectionTitle}>Sekcje</strong>
					<ul className={styles.pagesList}>
						<li>
							<ButtonScrollTo section="Home" text="Esthétique" />
						</li>
						<li>
							<ButtonScrollTo section="Services" text="Usługi" />
						</li>
						<li>
							<ButtonScrollTo section="Booking" text="Rezerwacja" />
						</li>
						<li>
							<ButtonScrollTo section="Contact" text="Kontakt" />
						</li>
					</ul>
				</div>
				<div className={styles.infoElement}>
					<strong className={styles.sectionTitle}>Kontakt</strong>
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
							<a href="https://www.facebook.com/profile.php?id=100063622178569">
								Facebook
							</a>
						</li>
						<li>
							<a href="https://www.rezobo.com/salon/gabinet-kosmetyczny-esthetique/oferta">
								Wpadaj.pl
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
