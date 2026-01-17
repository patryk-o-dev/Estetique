import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import styles from "./Hero.module.scss";
import imgSmall from "../../../assets/images/heroImageSmall.png";
import imgFull from "../../../assets/images/heroImageFull.png";
import Transition from "../../utils/Transition/Transition";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroImageSmall}>
				<img src={imgSmall} alt="Small hero" />
			</div>
			<div className={styles.heroText}>
				<h3>
					Where Beauty Meets <br /> Calm Elegance
				</h3>
				<ButtonMain />
			</div>
			<div className={styles.heroImageFull}>
				<img src={imgFull} alt="Full hero" />
			</div>
			<Transition />
		</section>
	);
};

export default Hero;
