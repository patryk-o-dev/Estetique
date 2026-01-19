import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";
import footerBgcVector from "../../../assets/images/footer/footerBgcVector.png";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img
				className={styles.footerBgcVector}
				src={footerBgcVector}
				alt="Footer Background Vector"
			/>
			<FooterTop />
			<FooterBottom />
		</footer>
	);
};

export default Footer;
