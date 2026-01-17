import styles from "./ButtonScrollTo.module.scss";

type ButtonScrollToProps = { sectionName: string };

const ButtonScrollTo = ({ sectionName }: ButtonScrollToProps) => {
	const handleScrollTo = (section: string) => {
		console.log(`Scrolling to ${section}`);
	};
	return (
		<button
			className={styles.buttonScrollTo}
			onClick={() => handleScrollTo(sectionName)}
		>
			{sectionName}
		</button>
	);
};

export default ButtonScrollTo;
