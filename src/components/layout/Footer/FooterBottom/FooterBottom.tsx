import styles from "./FooterBottom.module.scss";
import mailIcon from "../../../../assets/icons/mail.png";
import { useForm, ValidationError } from "@formspree/react";

const FooterBottom = () => {
	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
	const [state, handleSubmit] = useForm("mdkwbwvl");
	return (
		<div className={styles.footerBottom}>
			<div className={styles.footerBottomLeft}>
				<span className={styles.logo}>Esthétique</span>
			</div>
			<div className={styles.footerBottomRight}>
				<div className={styles.locationSection}>
					<strong>Lokalizacja</strong>
					<div className={styles.mapPlaceholder}>
						<iframe
							height="250"
							className={styles.abc}
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsQFsvVkvHEcRjL7Tsl5s77k&key=${apiKey}`}
						></iframe>
					</div>
				</div>
				<div className={styles.newsletterSection}>
					<strong>Zapisz się do naszego newslettera</strong>
					{state.succeeded ? (
						<p className={styles.thankYou}>Dziękujemy!</p>
					) : (
						<form className={styles.newsletterForm} onSubmit={handleSubmit}>
							<input
								type="email"
								name="email"
								placeholder="Twój email"
								required
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<button type="submit">
								<img
									className={styles.mailIcon}
									src={mailIcon}
									alt="Mail Icon"
								/>
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default FooterBottom;
