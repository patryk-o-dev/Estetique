import styles from "./ButtonMain.module.scss";
import imgArrow from "../../../assets/icons/mainButtonArrow.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

type ButtonMainProps = {
	section?: string;
	text: string;
	bgc: "primary" | "transparent";
	action: "scroll" | "book" | "none";
};

const ButtonMain = ({ section, text, bgc, action }: ButtonMainProps) => {
	gsap.registerPlugin(ScrollToPlugin);

	const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (action === "scroll" && section) {
			e.preventDefault();
			const target = document.getElementById(section);
			if (target) {
				gsap.to(window, {
					duration: 1,
					scrollTo: { y: target, offsetY: 0 },
					ease: "power2.out",
				});
			}
		} else if (action === "book") {
			return () => {
				console.log(
					`Sending appointment information and showing booking popup`,
				);
			};
		} else {
			return () => {};
		}
	};

	return (
		<div className={styles.buttonMainWrapper}>
			<button
				className={`${styles.buttonMain} ${styles[bgc]}`}
				onClick={(e) => handleAction(e)}
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
