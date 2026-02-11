import { useEffect, useRef, useState } from "react";
import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import ButtonScrollTo from "../../utils/ButtonScrollTo/ButtonScrollTo";
import styles from "./Navbar.module.scss";
import imgMenu from "../../../assets/icons/menu.png";
import closeIcon from "../../../assets/icons/close.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
	const [extendMenu, setExtendMenu] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);
	const [mobile, setMobile] = useState(window.innerWidth < 768);

	const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLSpanElement>(null);
	const mobileMenuItem1Ref = useRef<HTMLLIElement>(null);
	const mobileMenuItem2Ref = useRef<HTMLLIElement>(null);
	const mobileMenuItem3Ref = useRef<HTMLLIElement>(null);
	const mobileMenuItem4Ref = useRef<HTMLLIElement>(null);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useGSAP(() => {
		if (!mobile) return;
		const menu = mobileMenuRef.current;
		const items = [
			mobileMenuItem1Ref.current,
			mobileMenuItem2Ref.current,
			mobileMenuItem3Ref.current,
			mobileMenuItem4Ref.current,
		];

		if (extendMenu && menu && !menuVisible) {
			setMenuVisible(true);
			gsap.to(logoRef.current, {
				marginLeft: "50%",
				transform: "translateX(-50%)",
				textAlign: "center",
				duration: 1.2,
			});
			gsap.to(menu, {
				opacity: 1,
				pointerEvents: "auto",
				duration: 0.5,
				ease: "power2.out",
			});
			gsap.fromTo(
				items,
				{ x: -30, opacity: 0 },
				{
					right: "16px",
					opacity: 1,
					duration: 0.6,
					stagger: 0.12,
					ease: "power2.out",
					delay: 0.2,
				},
			);
			gsap.to(hamburgerButtonRef.current, {
				disabled: true,
				right: `-40px`,
				duration: 1,
				ease: "elastic.in(1,0.5)",
			});
			gsap
				.to(closeButtonRef.current, {
					disabled: false,
					right: "16px",
					ease: "elastic.out(1,0.5)",
					duration: 1.5,
				})
				.delay(1.5);
		} else if (!extendMenu && menu && menuVisible) {
			gsap.to(menu, {
				opacity: 0,
				duration: 0.4,
				ease: "power4.in",
				onComplete: () => setMenuVisible(false),
			});
			gsap.to(items, {
				x: -30,
				opacity: 0,
				duration: 0.3,
				stagger: 0.08,
				ease: "power4.in",
			});
			gsap.to(logoRef.current, {
				marginLeft: "0%",
				transform: "",
				textAlign: "",
				duration: 1.2,
			});
			gsap.to(closeButtonRef.current, {
				disabled: true,
				right: "-40px",
				duration: 1,
				ease: "elastic.in(1,0.5)",
			});
			gsap
				.to(hamburgerButtonRef.current, {
					disabled: false,
					right: "16px",
					duration: 1.5,
					ease: "elastic.out(1,0.5)",
				})
				.delay(1.5);
		}
	}, [extendMenu, mobile, menuVisible]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setExtendMenu(false);
			setMenuVisible(false);
		}, 0);
		return () => clearTimeout(timeout);
	}, [mobile]);

	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navbarContent}>
					<span className={styles.logo} ref={logoRef}>
						Esthétique
					</span>
					{mobile && (
						<>
							<button
								className={styles.hamburger}
								onClick={() => setExtendMenu((v) => !v)}
								ref={hamburgerButtonRef}
							>
								<img
									src={imgMenu}
									alt="Menu"
									className={styles.hamburgerIcon}
								/>
							</button>
							<button
								className={styles.hamburgerClose}
								onClick={() => setExtendMenu((v) => !v)}
								ref={closeButtonRef}
							>
								<img
									src={closeIcon}
									alt="Close Menu"
									className={styles.hamburgerCloseIcon}
								/>
							</button>
						</>
					)}
					{!mobile && (
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
					)}
				</div>
			</div>
			{mobile && (
				<div
					className={styles.mobileMenu}
					ref={mobileMenuRef}
					style={{
						display: menuVisible ? "flex" : "none",
					}}
				>
					<nav className={styles.navLinks}>
						<ul className={styles.navList}>
							<li ref={mobileMenuItem1Ref}>
								<ButtonScrollTo section="About" text="O nas" />
							</li>
							<li ref={mobileMenuItem2Ref}>
								<ButtonScrollTo section="Services" text="Usługi" />
							</li>
							<li ref={mobileMenuItem3Ref}>
								<ButtonScrollTo section="Gallery" text="Galeria" />
							</li>
							<li ref={mobileMenuItem4Ref}>
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
			)}
		</>
	);
};

export default Navbar;
