import styles from "./ButtonArrow.module.scss";
import arrowLeftIcon from "../../../assets/icons/arrowLeft.png";
import arrowRightIcon from "../../../assets/icons/arrowRight.png";

const ButtonArrow = () => {
	return (
		<div className={styles.buttonArrowContainer}>
			<button className={styles.leftButton}>
				<img src={arrowLeftIcon} alt="Left arrow" />
			</button>
			<button className={styles.rightButton}>
				<img src={arrowRightIcon} alt="Right arrow" />
			</button>
		</div>
	);
};

export default ButtonArrow;
