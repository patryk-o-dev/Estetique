import BookingForm from "../../features/BookingForm/BookingForm";
import Transition from "../../utils/Transition/Transition";
import styles from "./Booking.module.scss";
import backgroundImage from "../../../assets/images/booking/sectionBackground.png";

const Booking = () => {
	return (
		<section className={styles.booking}>
			<div className={styles.backgroundImage}>
				<div className={styles.gradient}></div>
				<img src={backgroundImage} alt="Booking Background" />
			</div>
			<div className={styles.content}>
				<div className={styles.textBox}>
					<h4>Book a session in minutes</h4>
					<p>
						Choose your preferred date and time. We will confirm availability by
						email or phone.
					</p>
				</div>
				<BookingForm />
			</div>
			<Transition />
		</section>
	);
};

export default Booking;
