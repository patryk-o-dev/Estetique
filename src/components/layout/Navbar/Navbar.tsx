import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import ButtonScrollTo from "../../utils/ButtonScrollTo/ButtonScrollTo";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarContent}>
				<span>Esthétique</span>
				<div className={styles.navItems}>
					<nav className={styles.navLinks}>
						<ul className={styles.navList}>
							<li>
								<ButtonScrollTo section="About" text="About" />
							</li>
							<li>
								<ButtonScrollTo section="Services" text="Services" />
							</li>
							<li>
								<ButtonScrollTo section="Gallery" text="Gallery" />
							</li>
							<li>
								<ButtonScrollTo section="Contact" text="Contact" />
							</li>
						</ul>
					</nav>
					<ButtonMain
						section="Booking"
						text="Book Appointment"
						bgc="primary"
						action="scroll"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
