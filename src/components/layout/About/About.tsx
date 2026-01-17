import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import styles from "./About.module.scss";
import Center from "../../../assets/images/about/Center.png";
import LeftBottom from "../../../assets/images/about/LeftBottom.png";
import LeftTop from "../../../assets/images/about/LeftTop.png";
import RightBottom from "../../../assets/images/about/RightBottom.png";
import RightTop from "../../../assets/images/about/RightTop.jpg";

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.content}>
				<img className={styles.imgLeftTop} src={LeftTop} alt="Left Top" />
				<img className={styles.imgRightTop} src={RightTop} alt="Right Top" />
				<img
					className={styles.imgLeftBottom}
					src={LeftBottom}
					alt="Left Bottom"
				/>
				<img
					className={styles.imgRightBottom}
					src={RightBottom}
					alt="Right Bottom"
				/>
				<img src="" alt="" />
				<div className={styles.text}>
					<h4>
						Learn <span>About Us</span>
					</h4>
					<p>
						We believe beauty is about confidence and care. Our salon provides
						high-quality treatments designed to enhance your natural glow in a
						calm and welcoming environment.
					</p>
					<ButtonMain />
				</div>
			</div>
			<img className={styles.imgCenterLeft} src={Center} alt="Center Left" />
			<img className={styles.imgCenterRight} src={Center} alt="Center Right" />
		</section>
	);
};

export default About;
