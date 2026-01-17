import styles from "./Transition.module.scss";
import imgTransition from "../../../assets/images/transition.png";

const Transition = () => {
	return (
		<div className={styles.transition}>
			<img src={imgTransition} alt="Transition" />
		</div>
	);
};

export default Transition;
