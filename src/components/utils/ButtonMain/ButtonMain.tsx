import styles from "./ButtonMain.module.scss";
import imgArrow from "../../../assets/icons/mainButtonArrow.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useRef } from "react";

type ButtonMainProps = {
	section?: string;
	text: string;
	bgc: "primary" | "secondary" | "transparent";
	action: "scroll" | "book" | "fb" | "rezobo" | "none";
};

const ButtonMain = ({ section, text, bgc, action }: ButtonMainProps) => {
	gsap.registerPlugin(ScrollToPlugin);

	const btnRef = useRef<HTMLButtonElement>(null);
	const shineRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (shineRef.current) {
			gsap.fromTo(
				shineRef.current,
				{ left: "-60%" },
				{
					left: "110%",
					duration: 0.7,
					ease: "power2.out",
				},
			);
		}
	};

	const handleMouseLeave = () => {
		if (shineRef.current) {
			gsap.set(shineRef.current, { left: "-60%" });
		}
	};

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
			console.log(`Sending appointment information and showing booking popup`);
		} else if (action === "fb") {
			e.preventDefault();
			window.open(
				"https://www.facebook.com/profile.php?id=100063622178569",
				"_blank",
				"noopener,noreferrer",
			);
		} else if (action === "rezobo") {
			e.preventDefault();
			window.open(
				"https://www.rezobo.com/salon/gabinet-kosmetyczny-esthetique/oferta",
				"_blank",
				"noopener,noreferrer",
			);
		}
	};

	return (
		<div className={styles.buttonMainWrapper}>
			<button
				className={`${styles.buttonMain} ${styles[bgc]}`}
				onClick={(e) => handleAction(e)}
				ref={btnRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{ position: "relative", overflow: "hidden" }}
			>
				<div
					ref={shineRef}
					style={{
						position: "absolute",
						top: 0,
						left: "-60%",
						width: "60%",
						height: "100%",
						background:
							"linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 100%)",
						pointerEvents: "none",
						zIndex: 2,
					}}
				/>
				<p>{text}</p>
				<div className={styles.arrowContainer}>
					<img src={imgArrow} alt="Arrow" />
				</div>
			</button>
		</div>
	);
};

export default ButtonMain;
