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
					<h3>Special Offers</h3>
					<p>
						20% off your first visit, Free consultation with selected treatments
					</p>
					<div>
						<ButtonMain
							section="Booking"
							text="Book Appointment"
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
