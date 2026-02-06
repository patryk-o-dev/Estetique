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
				<p className={styles.motto}>
					Chwila dla Ciebie <br /> Efekt na długo
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
			<div className={styles.heroImageFull}>
				<img src={imgFull} alt="Full hero" />
			</div>
			<div className={styles.transition}>
				{/* In future adjust transition for thiner devices */}
				<Transition />
			</div>
		</section>
	);
};

export default Hero;
