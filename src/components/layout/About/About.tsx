import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import styles from "./About.module.scss";
import Center from "../../../assets/images/about/Center.png";
import LeftBottom from "../../../assets/images/about/LeftBottom.png";
import LeftTop from "../../../assets/images/about/LeftTop.png";
import RightBottom from "../../../assets/images/about/RightBottom.png";
import RightTop from "../../../assets/images/about/RightTop.jpg";
import AboutDecor from "../../../assets/images/about/AboutDecor.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const About = () => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const imgLeftTopRef = useRef<HTMLImageElement>(null);
	const imgRightTopRef = useRef<HTMLImageElement>(null);
	const imgLeftBottomRef = useRef<HTMLImageElement>(null);
	const imgRightBottomRef = useRef<HTMLImageElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const aboutDecorRef = useRef<HTMLImageElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: imgLeftTopRef.current,
				start: "top 75%",
				end: "top top",
				scrub: 3,
			},
		});

		tl.from(imgLeftTopRef.current, {
			x: -500,
			height: 0,
			opacity: 0,
			rotate: -45,
			filter: "blur(20px)",
		});

		tl.from(imgRightTopRef.current, {
			x: 500,
			y: 500,
			opacity: 0,
			scale: 0,
			rotate: 45,
			filter: "blur(20px)",
		});

		tl.from(imgLeftBottomRef.current, {
			x: -500,
			y: -100,
			opacity: 0,
			rotate: -30,
			filter: "blur(20px)",
		});

		tl.from(imgRightBottomRef.current, {
			x: 500,
			opacity: 0,
			rotate: 30,
			y: 200,
			filter: "blur(20px)",
		});

		tl.from(textRef.current, {
			opacity: 0,
			scale: 0.2,
			filter: "blur(20px)",
		});

		if (aboutDecorRef.current) {
			gsap.to(aboutDecorRef.current, {
				scale: 1.08,
				repeat: -1,
				yoyo: true,
				duration: 1.2,
				ease: "power1.inOut",
			});
		}
	}, []);

	return (
		<section className={styles.about} id="About">
			<div className={styles.content}>
				<img
					ref={imgLeftTopRef}
					className={styles.imgLeftTop}
					src={LeftTop}
					alt="Left Top"
				/>
				<img
					ref={imgRightTopRef}
					className={styles.imgRightTop}
					src={RightTop}
					alt="Right Top"
				/>
				<img
					ref={imgLeftBottomRef}
					className={styles.imgLeftBottom}
					src={LeftBottom}
					alt="Left Bottom"
				/>
				<img
					ref={imgRightBottomRef}
					className={styles.imgRightBottom}
					src={RightBottom}
					alt="Right Bottom"
				/>
				<div ref={textRef} className={styles.text}>
					<img
						className={styles.aboutDecor}
						src={AboutDecor}
						alt="About Decor"
						ref={aboutDecorRef}
					/>
					<h2>
						Poznaj <span>nas bliżej</span>
					</h2>
					<p className={styles.aboutParagraph}>
						Wierzymy, że piękno to pewność siebie i troska o detale. Nasz salon
						oferuje wysokiej jakości zabiegi, które podkreślają Twoje naturalne
						piękno w spokojnej i przyjaznej atmosferze.
					</p>
					<div ref={buttonRef}>
						<ButtonMain text="Więcej o nas" bgc="primary" action="link" />
					</div>
				</div>
			</div>
			<img className={styles.imgCenterLeft} src={Center} alt="Center Left" />
			<img className={styles.imgCenterRight} src={Center} alt="Center Right" />
		</section>
	);
};

export default About;
