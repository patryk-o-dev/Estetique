import ButtonArrow from "../../utils/ButtonArrow/ButtonArrow";
import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import imgBack from "../../../assets/images/servicesPricing/servicesPricingBack.png";
import imgFront from "../../../assets/images/servicesPricing/servicesPricingFront.png";
import servicesBackground from "../../../assets/images/servicesPricing/servicesBackground.png";
import styles from "./ServicesPricing.module.scss";

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
	];
	return (
		<section className={styles.servicesPricing}>
			<div className={styles.images}>
				<img src={imgBack} alt="Background" className={styles.imgBack} />
				<img src={imgFront} alt="Foreground" className={styles.imgFront} />
			</div>
			<div className={styles.content}>
				<ButtonArrow />
				<div className={styles.pricingBox}>
					<h3 className={styles.title}>
						Relax & Rejuvenate <span>Expert Spa Treatments</span>
					</h3>
					<img src={servicesBackground} alt="Background" />
					<ul className={styles.pricingList}>
						{services.map((service, index) => (
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
