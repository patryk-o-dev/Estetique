import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import ButtonScrollTo from "../../utils/ButtonScrollTo/ButtonScrollTo";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarContent}>
				<span className={styles.logo}>Esthétique</span>
				<div className={styles.navItems}>
					<nav className={styles.navLinks}>
						<ul className={styles.navList}>
							<li>
								<ButtonScrollTo section="About" text="O nas" />
							</li>
							<li>
								<ButtonScrollTo section="Services" text="Usługi" />
							</li>
							<li>
								<ButtonScrollTo section="Gallery" text="Galeria" />
							</li>
							<li>
								<ButtonScrollTo section="Contact" text="Kontakt" />
							</li>
						</ul>
					</nav>
					<ButtonMain
						section="Booking"
						text="Zarezerwuj wizytę"
						bgc="primary"
						action="scroll"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
