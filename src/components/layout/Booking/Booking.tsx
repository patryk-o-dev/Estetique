import BookingForm from "../../features/BookingForm/BookingForm";
import Transition from "../../utils/Transition/Transition";
import styles from "./Booking.module.scss";
import backgroundImage from "../../../assets/images/booking/sectionBackground.png";
import ButtonMain from "../../utils/ButtonMain/ButtonMain";

const Booking = () => {
	return (
		<section className={styles.booking} id="Booking">
			<div className={styles.backgroundImage}>
				<div className={styles.gradient}></div>
				<img src={backgroundImage} alt="Booking Background" />
			</div>
			<div className={styles.content}>
				<div className={styles.textBox}>
					<h2>Umów się na wizytę w kilka minut</h2>
					<p>
						Skorzystaj z formularza kontaktowego, a odezwiemy się do Ciebie i
						wspólnie dobierzemy termin, który będzie dla Ciebie najwygodniejszy.
					</p>
					<p>Wolisz rezerwować samodzielnie?</p>
					<div className={styles.buttonContainer}>
						<ButtonMain
							text="Kalendarz Online"
							bgc="secondary"
							action="rezobo"
						/>
					</div>
				</div>
				<div className={styles.formBox}>
					<BookingForm />
				</div>
			</div>
			<Transition />
		</section>
	);
};

export default Booking;
