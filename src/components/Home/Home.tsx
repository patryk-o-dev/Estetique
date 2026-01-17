import About from "../layout/About/About";
import Booking from "../layout/Booking/Booking";
import Footer from "../layout/Footer/Footer";
import Gallery from "../layout/Gallery/Gallery";
import Hero from "../layout/Hero/Hero";
import Navbar from "../layout/Navbar/Navbar";
import ServicesPricing from "../layout/ServicesPricing/ServicesPricing";
import SpecialOffers from "../layout/SpecialOffers/SpecialOffers";
import Testimonials from "../layout/Testimonials/Testimonials";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.mainWrapper}>
			<Navbar />
			<Hero />
			<About />
			<ServicesPricing />
			<Booking />
			<Testimonials />
			<SpecialOffers />
			<Gallery />
			<Footer />
		</div>
	);
};

export default Home;
