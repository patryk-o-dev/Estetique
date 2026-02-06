import ButtonArrow from "../../utils/ButtonArrow/ButtonArrow";
import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import imgBack from "../../../assets/images/servicesPricing/servicesPricingBack.png";
import imgFront from "../../../assets/images/servicesPricing/servicesPricingFront.png";
import servicesBackground from "../../../assets/images/servicesPricing/servicesBackground.png";
import styles from "./ServicesPricing.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ServicesPricing = () => {
	const services = [
		{
			title: "Zabieg oczyszczający twarzy",
			desc: "Manualne lub aparatowe oczyszczanie skóry twarzy.",
			price: 180.0,
		},
		{
			title: "Zabieg nawilżający",
			desc: "Intensywne nawilżenie i regeneracja skóry.",
			price: 220.0,
		},
		{
			title: "Peeling kawitacyjny",
			desc: "Delikatne złuszczanie i odświeżenie cery.",
			price: 160.0,
		},
		{
			title: "Mezoterapia bezigłowa",
			desc: "Wprowadzenie składników aktywnych w głąb skóry.",
			price: 280.0,
		},
		{
			title: "Liftingujący zabieg anti-aging",
			desc: "Poprawa jędrności i napięcia skóry.",
			price: 320.0,
		},
		{
			title: "Henna brwi i rzęs",
			desc: "Regulacja brwi oraz koloryzacja henną.",
			price: 70.0,
		},
		{
			title: "Stylizacja brwi",
			desc: "Regulacja, geometria i koloryzacja brwi.",
			price: 90.0,
		},
		{
			title: "Manicure klasyczny",
			desc: "Opracowanie paznokci i skórek.",
			price: 100.0,
		},
		{
			title: "Manicure hybrydowy",
			desc: "Trwała stylizacja paznokci hybrydą.",
			price: 160.0,
		},
		{
			title: "Pedicure kosmetyczny",
			desc: "Pielęgnacja stóp i paznokci.",
			price: 180.0,
		},
		{
			title: "Depilacja woskiem – twarz",
			desc: "Precyzyjna depilacja wybranych partii twarzy.",
			price: 60.0,
		},
		{
			title: "Makijaż dzienny",
			desc: "Lekki, naturalny makijaż podkreślający urodę.",
			price: 180.0,
		},
		{
			title: "Makijaż wieczorowy",
			desc: "Makijaż na specjalne okazje.",
			price: 250.0,
		},
	];
	const ITEMS_PER_PAGE = 5;
	const [currentPage, setCurrentPage] = useState(0);
	const [autoScroll, setAutoScroll] = useState(true);
	const listRef = useRef<HTMLUListElement>(null);

	const maxPage = Math.ceil(services.length / ITEMS_PER_PAGE) - 1;

	const handleNext = useCallback((isUser = false) => {
		if (isUser) setAutoScroll(false);
		if (!listRef.current) return;
		gsap.to(listRef.current, {
			x: "-30%",
			opacity: 0,
			duration: 0.4,
			onComplete: () => {
				if (currentPage === maxPage) {
					setCurrentPage(0);
					gsap.fromTo(
						listRef.current,
						{ x: "30%", opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.4 },
					);
				} else {
					setCurrentPage((prev) => prev + 1);
					gsap.fromTo(
						listRef.current,
						{ x: "30%", opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.4 },
					);
				}
			},
		});
	}, [currentPage, maxPage]);

	const handlePrev = (isUser = false) => {
		if (isUser) setAutoScroll(false);
		if (!listRef.current) return;
		gsap.to(listRef.current, {
			x: "30%",
			opacity: 0,
			duration: 0.4,
			onComplete: () => {
				if (currentPage === 0) {
					setCurrentPage(maxPage);
					gsap.fromTo(
						listRef.current,
						{ x: "-30%", opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.4 },
					);
				} else {
					setCurrentPage((prev) => prev - 1);
					gsap.fromTo(
						listRef.current,
						{ x: "-30%", opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.4 },
					);
				}
			},
		});
	};

	useEffect(() => {
		if (!autoScroll) return;
		const timer = setTimeout(() => {
			handleNext(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [currentPage, autoScroll, handleNext]);

	const startIdx = currentPage * ITEMS_PER_PAGE;
	const visibleServices = services.slice(startIdx, startIdx + ITEMS_PER_PAGE);

	return (
		<section className={styles.servicesPricing} id="Services">
			<div className={styles.images}>
				<img src={imgBack} alt="Background" className={styles.imgBack} />
				<img src={imgFront} alt="Foreground" className={styles.imgFront} />
			</div>
			<div className={styles.content}>
				<div className={styles.buttonArrowContainer}>
					<ButtonArrow
						onLeftClick={() => handlePrev(true)}
						onRightClick={() => handleNext(true)}
					/>
				</div>
				<div className={styles.pricingBox}>
					<h2 className={styles.title}>
						Piękno zaczyna się tutaj <span>Profesjonalna pielęgnacja</span>
					</h2>
					<img
						className={styles.servicesBackground}
						src={servicesBackground}
						alt="Background"
					/>
					<ul className={styles.pricingList} ref={listRef}>
						{visibleServices.map((service, index) => (
							<li key={index} className={styles.serviceItem}>
								<div className={styles.serviceHeader}>
									<h3>{service.title}</h3>
									<div className={styles.price}>
										<div className={styles.separator}></div>
										<span>${service.price}</span>
									</div>
								</div>
								<p>{service.desc}</p>
							</li>
						))}
					</ul>
					<ButtonMain
						section="Contact"
						text="Kontakt"
						bgc="primary"
						action="scroll"
					/>
				</div>
			</div>
		</section>
	);
};

export default ServicesPricing;
