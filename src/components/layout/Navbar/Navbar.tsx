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
								<ButtonScrollTo sectionName="About" />
							</li>
							<li>
								<ButtonScrollTo sectionName="Services" />
							</li>
							<li>
								<ButtonScrollTo sectionName="Gallery" />
							</li>
							<li>
								<ButtonScrollTo sectionName="Contact" />
							</li>
						</ul>
					</nav>
					<ButtonMain />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
