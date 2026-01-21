import styles from "./ButtonScrollTo.module.scss";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

type ButtonScrollToProps = { section: string; text: string };

const ButtonScrollTo = ({ section, text }: ButtonScrollToProps) => {
	gsap.registerPlugin(ScrollToPlugin);

	const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const target = document.getElementById(section);
		if (target) {
			gsap.to(window, {
				duration: 1,
				scrollTo: { y: target, offsetY: 0 },
				ease: "power2.out",
			});
		}
	};

	return (
		<button className={styles.buttonScrollTo} onClick={handleScrollTo}>
			{text}
		</button>
	);
};

export default ButtonScrollTo;
