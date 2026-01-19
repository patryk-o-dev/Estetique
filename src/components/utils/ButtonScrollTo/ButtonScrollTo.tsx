import styles from "./ButtonScrollTo.module.scss";

type ButtonScrollToProps = { section: string; text: string };

const ButtonScrollTo = ({ section, text }: ButtonScrollToProps) => {
	const handleScrollTo = (section: string) => {
		console.log(`Scrolling to ${section}`);
	};
	return (
		<button
			className={styles.buttonScrollTo}
			onClick={() => handleScrollTo(section)}
		>
			{text}
		</button>
	);
};

export default ButtonScrollTo;
