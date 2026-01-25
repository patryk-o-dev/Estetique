import ButtonArrow from "../../utils/ButtonArrow/ButtonArrow";
import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import imgBack from "../../../assets/images/servicesPricing/servicesPricingBack.png";
import imgFront from "../../../assets/images/servicesPricing/servicesPricingFront.png";
import servicesBackground from "../../../assets/images/servicesPricing/servicesBackground.png";
import styles from "./ServicesPricing.module.scss";
import { useRef, useState } from "react";
import gsap from "gsap";

const ServicesPricing = () => {
	const services = [
		{
			title: "Face Treatments",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 50.0,
		},
		{
			title: "Facial & Massage",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 90.0,
		},
		{
			title: "Hair & Treatment",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 95.0,
		},
		{
			title: "Face Treatments",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 95.0,
		},
		{
			title: "Manicure & Pedicure",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 70.0,
		},
		{
			title: "Body Scrub",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 80.0,
		},
		{
			title: "Waxing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 60.0,
		},
		{
			title: "Makeup",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 120.0,
		},
		{
			title: "Face Treatments",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 50.0,
		},
		{
			title: "Facial & Massage",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 90.0,
		},
		{
			title: "Hair & Treatment",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 95.0,
		},
		{
			title: "Face Treatments",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 95.0,
		},
		{
			title: "Manicure & Pedicure",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 70.0,
		},
		{
			title: "Body Scrub",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 80.0,
		},
		{
			title: "Waxing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 60.0,
		},
		{
			title: "Makeup",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 120.0,
		},
	];
	const ITEMS_PER_PAGE = 5;
	const [currentPage, setCurrentPage] = useState(0);
	const listRef = useRef<HTMLUListElement>(null);

	const maxPage = Math.ceil(services.length / ITEMS_PER_PAGE) - 1;

	const handleNext = () => {
		if (currentPage < maxPage && listRef.current) {
			gsap.to(listRef.current, {
				x: "-30%",
				opacity: 0,
				duration: 0.4,
				onComplete: () => {
					setCurrentPage((prev) => prev + 1);
					gsap.fromTo(
						listRef.current,
						{ x: "30%", opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.4 },
					);
				},
			});
		}
	};

	const handlePrev = () => {
		if (currentPage > 0 && listRef.current) {
			gsap.to(listRef.current, {
				x: "30%",
				opacity: 0,
				duration: 0.4,
				onComplete: () => {
					setCurrentPage((prev) => prev - 1);
					gsap.fromTo(
						listRef.current,
						{ x: "-30%", opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.4 },
					);
				},
			});
		}
	};

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
					<ButtonArrow onLeftClick={handlePrev} onRightClick={handleNext} />
				</div>
				<div className={styles.pricingBox}>
					<h3 className={styles.title}>
						Relax & Rejuvenate <span>Expert Spa Treatments</span>
					</h3>
					<img src={servicesBackground} alt="Background" />
					<ul className={styles.pricingList} ref={listRef}>
						{visibleServices.map((service, index) => (
							<li key={index} className={styles.serviceItem}>
								<div className={styles.serviceHeader}>
									<h4>{service.title}</h4>
									<div className={styles.price}>
										<div className={styles.separator}></div>
										<span>${service.price}</span>
									</div>
								</div>
								<p>{service.desc}</p>
							</li>
						))}
					</ul>
					<ButtonMain text="View More Services" bgc="primary" action="none" />
				</div>
			</div>
		</section>
	);
};

export default ServicesPricing;
