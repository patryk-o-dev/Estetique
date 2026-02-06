import styles from "./Testimonials.module.scss";
import testimonialImg from "../../../assets/images/tesimonials/testimonials.png";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import ButtonArrow from "../../utils/ButtonArrow/ButtonArrow";

const testimonialsData = [
	{
		img: testimonialImg,
		text: `Bardzo miłe miejsce! Pani przecudowna, pełna pasji, uratowała moje paznokcie po małym wypadku.`,
		name: "Klaudia",
		service: "Manicure Hybrydowy",
	},
	{
		img: testimonialImg,
		text: `Byłam już kilka razy i za każdym razem wychodzę bardzo zadowolona. Skóra wygląda świetnie, a dziewczyny zawsze doradzą i wszystko dokładnie tłumaczą.`,
		name: "Maria Nowak",
		service: "Pielęgnacja twarzy",
	},
	{
		img: testimonialImg,
		text: `Super podejście do klienta i bardzo miła atmosfera. Zabieg wykonany dokładnie i bez pośpiechu. Zdecydowanie polecam.`,
		name: "John Smith",
		service: "Manicure",
	},
	{
		img: testimonialImg,
		text: `Pierwsza wizyta i na pewno nie ostatnia. Wszystko na wysokim poziomie, od rezerwacji po sam zabieg. Czułam się zaopiekowana.`,
		name: "Katarzyna Zielińska",
		service: "Stylizacja brwi",
	},
	{
		img: testimonialImg,
		text: `Świetne miejsce, czysto, spokojnie i bardzo profesjonalnie. Efekt zabiegu widoczny od razu. Polecam każdemu, kto chce zadbać o siebie.`,
		name: "Anna Kowalczyk",
		service: "Makijaż",
	},
];

const Testimonials = () => {
	const [current, setCurrent] = useState(0);
	const [autoScroll, setAutoScroll] = useState(true);
	const textRef = useRef<HTMLParagraphElement>(null);
	const clientInfoRef = useRef<HTMLDivElement>(null);

	const handleNext = (isUser = false) => {
		if (isUser) setAutoScroll(false);
		if (textRef.current) {
			gsap.fromTo(
				textRef.current,
				{ x: 0, opacity: 1 },
				{
					x: "100%",
					opacity: 0,
					duration: 0.5,
					onComplete: () => {
						setCurrent((prev) => (prev + 1) % testimonialsData.length);
						gsap.fromTo(
							textRef.current,
							{ x: "-100%", opacity: 0 },
							{ x: 0, opacity: 1, duration: 0.5 },
						);
					},
				},
			);
		}

		if (clientInfoRef.current) {
			gsap.fromTo(
				clientInfoRef.current,
				{ y: 0, scale: 1, opacity: 1 },
				{
					opacity: 0,
					scale: 0,
					duration: 0.5,
					onComplete: () => {
						gsap.fromTo(
							clientInfoRef.current,
							{ y: "100%", scale: 1, opacity: 0 },
							{ y: 0, scale: 1, opacity: 1, duration: 0.5 },
						);
					},
				},
			);
		}
	};

	const handlePrev = (isUser = false) => {
		if (isUser) setAutoScroll(false);
		if (textRef.current) {
			gsap.fromTo(
				textRef.current,
				{ x: 0, opacity: 1 },
				{
					x: "-100%",
					opacity: 0,
					duration: 0.5,
					onComplete: () => {
						setCurrent(
							(prev) =>
								(prev - 1 + testimonialsData.length) % testimonialsData.length,
						);
						gsap.fromTo(
							textRef.current,
							{ x: "100%", opacity: 0 },
							{ x: 0, opacity: 1, duration: 0.5 },
						);
					},
				},
			);
		}

		if (clientInfoRef.current) {
			gsap.fromTo(
				clientInfoRef.current,
				{ y: 0, scale: 1, opacity: 1 },
				{
					opacity: 0,
					scale: 0,
					duration: 0.5,
					onComplete: () => {
						gsap.fromTo(
							clientInfoRef.current,
							{ y: "100%", scale: 1, opacity: 0 },
							{ y: 0, scale: 1, opacity: 1, duration: 0.5 },
						);
					},
				},
			);
		}
	};

	useEffect(() => {
		if (!autoScroll) return;
		const timer = setTimeout(() => {
			handleNext(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [current, autoScroll]);

	return (
		<section className={styles.testimonials}>
			<h2 className={styles.title}>Co mówią nasi klienci</h2>
			<div className={styles.testimonial}>
				<img src={testimonialsData[current].img} alt="Client testimonial" />
				<div className={styles.testimonialContent}>
					<p ref={textRef}>"{testimonialsData[current].text}"</p>
					<div className={styles.testimonialFooter}>
						<div className={styles.clientInfo} ref={clientInfoRef}>
							<strong>- {testimonialsData[current].name}</strong>
							<p>{testimonialsData[current].service}</p>
						</div>
						<ButtonArrow
							onRightClick={() => handleNext(true)}
							onLeftClick={() => handlePrev(true)}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
