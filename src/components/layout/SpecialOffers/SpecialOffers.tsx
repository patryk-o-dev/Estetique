import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import styles from "./SpecialOffers.module.scss";
import backgroundVideo from "../../../assets/videos/specialOfferBackground.mp4";
import specialOfferImage from "../../../assets/images/specialOffers/specialOffer.png";

const SpecialOffers = () => {
	return (
		<section className={styles.specialOffers}>
			<div className={styles.videoContainer}>
				<div className={styles.overlay}></div>
				<video
					className={styles.video}
					src={backgroundVideo}
					autoPlay
					loop
					muted
				></video>
			</div>
			<div className={styles.content}>
				<img src={specialOfferImage} alt="Special Offer" />
				<div className={styles.textContent}>
					<h2>Oferty specjalne</h2>
					<p>
						Skorzystaj z naszego formularza kontaktowego i otrzymaj 20% zniżki
						na wybrane zabiegi. Zadbaj o siebie już dziś!
					</p>

					<div>
						<ButtonMain
							section="Booking"
							text="Zarezerwuj wizytę"
							bgc="transparent"
							action="scroll"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffers;
