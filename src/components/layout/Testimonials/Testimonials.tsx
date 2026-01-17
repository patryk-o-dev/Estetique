import ButtonArrow from "../../utils/ButtonArrow/ButtonArrow";
import styles from "./Testimonials.module.scss";
import testimonialImg from "../../../assets/images/tesimonials/testimonials.png";

const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<h2 className={styles.title}>What Our Clients Say</h2>
			<div className={styles.testimonial}>
				<img src={testimonialImg} alt="Client testimonial" />
				<div className={styles.testimonialContent}>
					<p>
						"The atmosphere is calm and beautifully designed.The staff truly
						listens to your needs and preferences.Every visit feels relaxing and
						personalized. Highly recommended for anyone seeking quality care.
						The booking process was quick and easy."
					</p>
					<div className={styles.testimonialFooter}>
						<div className={styles.clientInfo}>
							<h3>- Alex Johnson</h3>
							<p>FaceSpa Service</p>
						</div>
						<ButtonArrow />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
