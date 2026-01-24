import styles from "./Gallery.module.scss";
import galleryimg1 from "../../../assets/images/gallery/gallery1.jpg";
import galleryimg2 from "../../../assets/images/gallery/gallery2.jpg";
import galleryimg3 from "../../../assets/images/gallery/gallery3.jpg";
import galleryimg4 from "../../../assets/images/gallery/gallery4.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function horizontalLoop(
	items: gsap.DOMTarget,
	config?: Partial<{
		repeat: number;
		paused: boolean;
		speed: number;
		snap: boolean | number;
		paddingRight: string;
		reversed: boolean;
	}>,
) {
	items = gsap.utils.toArray(items);
	config = config || {};
	const tl = gsap.timeline({
		repeat: config.repeat,
		paused: config.paused,
		defaults: { ease: "none" },
		onReverseComplete: () => {
			tl.totalTime(tl.rawTime() + tl.duration() * 100);
		},
	});
	const length = items.length;
	const startX = (items[0] as HTMLElement).offsetLeft;
	const times: number[] = [];
	const widths: number[] = [];
	const xPercents: number[] = [];
	let curIndex = 0;
	const pixelsPerSecond = (config.speed || 1) * 100;
	const snap =
		typeof config.snap === "number" || Array.isArray(config.snap)
			? gsap.utils.snap(config.snap)
			: config.snap === false
				? (v: number) => v
				: gsap.utils.snap(1);
	let curX: number;
	let distanceToStart: number;
	let distanceToLoop: number;
	let item: HTMLElement;
	let i: number;

	gsap.set(items, {
		xPercent: (i: number, el: HTMLElement) => {
			const w = (widths[i] = parseFloat(
				gsap.getProperty(el, "width", "px") as string,
			));
			xPercents[i] = snap(
				(parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
					(gsap.getProperty(el, "xPercent") as number),
			);
			return xPercents[i];
		},
	});

	gsap.set(items, { x: 0 });

	const totalWidth =
		(items[length - 1] as HTMLElement).offsetLeft +
		(xPercents[length - 1] / 100) * widths[length - 1] -
		startX +
		(items[length - 1] as HTMLElement).offsetWidth *
			(gsap.getProperty(items[length - 1] as HTMLElement, "scaleX") as number) +
		(parseFloat(config.paddingRight ?? "0") || 0);

	for (i = 0; i < length; i++) {
		item = items[i] as HTMLElement;
		curX = (xPercents[i] / 100) * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop =
			distanceToStart +
			widths[i] * (gsap.getProperty(item, "scaleX") as number);

		tl.to(
			item,
			{
				xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
				duration: distanceToLoop / pixelsPerSecond,
			},
			0,
		)
			.fromTo(
				item,
				{
					xPercent: snap(
						((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
					),
				},
				{
					xPercent: xPercents[i],
					duration:
						(curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
					immediateRender: false,
				},
				distanceToLoop / pixelsPerSecond,
			)
			.add("label" + i, distanceToStart / pixelsPerSecond);

		times[i] = distanceToStart / pixelsPerSecond;
	}

	function toIndex(index: number, vars?: gsap.TweenVars) {
		vars = vars || {};
		if (Math.abs(index - curIndex) > length / 2) {
			index += index > curIndex ? -length : length;
		}

		const newIndex = gsap.utils.wrap(0, length, index) as number;
		let time = times[newIndex];

		if (time > tl.time() !== index > curIndex) {
			vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}

		curIndex = newIndex;
		vars.overwrite = true;
		return tl.tweenTo(time, vars);
	}

	tl.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
	tl.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
	tl.current = () => curIndex;
	tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
	tl.times = times;

	tl.progress(1, true).progress(0, true);

	if (config.reversed) {
		if (typeof tl.vars.onReverseComplete === "function") {
			tl.vars.onReverseComplete();
		}
		tl.reverse();
	}

	return tl;
}

const Gallery = () => {
	const images = [
		galleryimg1,
		galleryimg2,
		galleryimg3,
		galleryimg4,
		galleryimg1,
		galleryimg2,
		galleryimg3,
		galleryimg4,
	];
	const imagesContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!imagesContainerRef.current) return;

		const loop = horizontalLoop(
			imagesContainerRef.current.querySelectorAll("img"),
			{
				speed: 0.3,
				repeat: -1,
				paused: false,
				paddingRight: "20px",
			},
		);

		return () => {
			if (loop) {
				loop.kill();
			}
		};
	}, []);

	return (
		<div className={styles.gallery} id="Gallery">
			<h2 className={styles.title}>
				Our <span>Gallery</span>
			</h2>
			<div className={styles.images}>
				<div className={styles.topEclipseContainer}>
					<div className={styles.eclipseTopOuter}></div>
					<div className={styles.eclipseTopInner}></div>
				</div>
				<div className={styles.imagesContainer} ref={imagesContainerRef}>
					{images.map((img, index) => (
						<img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
					))}
				</div>
				<div className={styles.bottomEclipseContainer}>
					<div className={styles.eclipseBottomInner}></div>
					<div className={styles.eclipseBottomOuter}></div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
