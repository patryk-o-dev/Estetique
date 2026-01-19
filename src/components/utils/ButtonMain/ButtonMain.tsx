import styles from "./ButtonMain.module.scss";
import imgArrow from "../../../assets/icons/mainButtonArrow.png";

type ButtonMainProps = {
	section?: string;
	text: string;
	bgc: "primary" | "transparent";
	action: "scroll" | "book" | "none";
};

const ButtonMain = ({ section, text, bgc, action }: ButtonMainProps) => {
	const handleAction = () => {
		if (action === "scroll") {
			return () => {
				console.log(`Scrolling to ${section}`);
			};
		} else if (action === "book") {
			return () => {
				console.log(`Sending appointment information`);
			};
		} else {
			return () => {};
		}
	};

	return (
		<div className={styles.buttonMainWrapper}>
			<button
				className={`${styles.buttonMain} ${styles[bgc]}`}
				onClick={handleAction()}
			>
				<p>{text}</p>
				<div className={styles.arrowContainer}>
					<img src={imgArrow} alt="Arrow" />
				</div>
			</button>
		</div>
	);
};

export default ButtonMain;
