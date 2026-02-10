import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import styles from "./BookingForm.module.scss";
import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import smsIcon from "../../../assets/icons/sms.png";
import callIcon from "../../../assets/icons/call.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SERVICES = [
	"Oczyszczanie twarzy",
	"Pielęgnacja twarzy",
	"Mezoterapia",
	"Anti-aging",
	"Brwi i rzęsy",
	"Manicure",
	"Pedicure",
	"Depilacja",
	"Makijaż",
];

const BookingForm = () => {
	const [service, setService] = useState("");
	const [open, setOpen] = useState(false);
	const [selectedContact, setSelectedContact] = useState<"sms" | "call" | null>(
		null,
	);
	const [showSuccess, setShowSuccess] = useState(false);

	gsap.registerPlugin(useGSAP);
	const selectRef = useRef<HTMLDivElement>(null);
	const smsInputRef = useRef<HTMLInputElement>(null);
	const callInputRef = useRef<HTMLInputElement>(null);
	const optionHighlightRef = useRef<HTMLDivElement>(null);
	const smsTextRef = useRef<HTMLParagraphElement>(null);
	const callTextRef = useRef<HTMLParagraphElement>(null);
	const smsIconRef = useRef<HTMLImageElement>(null);
	const callIconRef = useRef<HTMLImageElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	const [state, handleSubmit] = useForm("mdkwbwvl");

	useEffect(() => {
		if (state.succeeded) {
			setShowSuccess(true);
			if (overlayRef.current) {
				gsap.fromTo(
					overlayRef.current,
					{ opacity: 0, y: 50 },
					{ opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
				);
			}
		}
	}, [state.succeeded]);

	const handleContactOption = (option: "sms" | "call") => {
		setSelectedContact(option);
		const highlight = optionHighlightRef.current;
		const smsText = smsTextRef.current;
		const callText = callTextRef.current;
		if (!highlight || !smsText || !callText) return;
		if (smsIconRef.current && callIconRef.current) {
			if (option === "sms") {
				gsap.to(callIconRef.current, {
					filter: "none",
					duration: 0.3,
					scale: 1,
				});
				gsap.to(smsIconRef.current, {
					filter: "brightness(0) invert(1)",
					duration: 0.3,
					scale: 0,
				});
				gsap.to(smsTextRef.current, {
					scale: 1,
					duration: 0.3,
				});
				gsap.to(callTextRef.current, {
					scale: 0,
					duration: 0.3,
				});
				gsap.to(highlight, {
					x: 0,
					duration: 0.4,
					ease: "power2.out",
					scale: 1,
				});
			} else {
				gsap.to(callIconRef.current, {
					filter: "brightness(0) invert(1)",
					duration: 0.3,
					scale: 0,
				});
				gsap.to(smsIconRef.current, {
					filter: "none",
					duration: 0.3,
					scale: 1,
				});
				gsap.to(highlight, {
					x: "100%",
					duration: 0.4,
					ease: "power2.out",
					scale: 1,
				});
				gsap.to(smsTextRef.current, {
					scale: 0,
					duration: 0.3,
				});
				gsap.to(callTextRef.current, {
					scale: 1,
					duration: 0.3,
				});
			}
		}
	};

	useGSAP(() => {
		const highlight = optionHighlightRef.current;
		const smsText = smsTextRef.current;
		if (highlight && smsText) {
			gsap.set(highlight, {
				x: smsText.offsetLeft,
			});
		}
	}, []);

	useEffect(() => {
		if (!open) return;
		const handleClick = (e: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [open]);

	return (
		<div className={styles.formWrapper}>
			<form
				className={styles.bookingForm}
				onSubmit={handleSubmit}
				style={{ filter: showSuccess ? "blur(2px)" : "none" }}
			>
				<div className={styles.formGroup}>
					<label>Jak się nazywasz?</label>
					<input
						type="text"
						name="name"
						placeholder="Wpisz swoje imię/nazwisko"
					/>
					<ValidationError prefix="Name" field="name" errors={state.errors} />
				</div>
				<div className={styles.formGroup}>
					<label>Numer telefonu</label>
					<input type="text" name="phone" placeholder="Wpisz swój numer" />
					<ValidationError prefix="Phone" field="phone" errors={state.errors} />
				</div>
				<div className={styles.formGroup}>
					<label>Preferowany czas</label>
					<input type="date" name="time" placeholder="Wybierz czas" />
					<ValidationError prefix="Time" field="time" errors={state.errors} />
				</div>
				<div className={styles.formGroup}>
					<label>Usługa</label>
					<div ref={selectRef} className={styles.customSelect}>
						<input
							type="text"
							name="usługa"
							value={service}
							readOnly
							className={styles.inputLike}
							placeholder="Wybierz usługę"
							onClick={() => setOpen((v) => !v)}
						/>
						<button
							type="button"
							className={styles.selectButton}
							onClick={() => setOpen((v) => !v)}
							tabIndex={-1}
						>
							▼
						</button>
						{open && (
							<ul className={styles.selectList}>
								{SERVICES.map((s) => (
									<li
										key={s}
										className={styles.selectListItem}
										onClick={() => {
											setService(s);
											setOpen(false);
										}}
									>
										{s}
									</li>
								))}
							</ul>
						)}
					</div>
					<ValidationError
						prefix="Usługa"
						field="service"
						errors={state.errors}
					/>
				</div>
				<div className={`${styles.formGroupWide} ${styles.formGroup}`}>
					<label>Wiadomość</label>
					<textarea name="message"></textarea>
					<ValidationError
						prefix="Wiadomość"
						field="message"
						errors={state.errors}
					/>
				</div>
				<div className={`${styles.formGroupWide} ${styles.formGroup}`}>
					<label>Jak się z tobą skontaktować?</label>
					<div className={styles.contactButtons}>
						<div
							className={styles.optionHighlight}
							ref={optionHighlightRef}
						></div>
						<label>
							<input
								type="radio"
								name="contactMethod"
								value="sms"
								ref={smsInputRef}
								checked={selectedContact === "sms"}
								onChange={() => handleContactOption("sms")}
							/>
							<p className={styles.contactOptionText} ref={smsTextRef}>
								SMS
							</p>
							<img src={smsIcon} alt="smsIcon" ref={smsIconRef} />
						</label>
						<label>
							<input
								type="radio"
								name="contactMethod"
								value="call"
								ref={callInputRef}
								checked={selectedContact === "call"}
								onChange={() => handleContactOption("call")}
							/>
							<p className={styles.contactOptionText} ref={callTextRef}>
								Zadzwoń
							</p>
							<img src={callIcon} alt="callIcon" ref={callIconRef} />
						</label>
					</div>
					<ValidationError
						prefix="Jak się z tobą skontaktować?"
						field="contactMethod"
						errors={state.errors}
					/>
				</div>
				<ButtonMain text="Zarezerwuj wizytę" bgc="primary" action="book" />
			</form>
			{showSuccess && (
				<div ref={overlayRef} className={styles.successOverlay}>
					<h2 className={styles.successTitle}>Dziękujemy za rezerwację!</h2>
					<p className={styles.successText}>
						Skontaktujemy się z Tobą wkrótce!
					</p>
				</div>
			)}
		</div>
	);
};

export default BookingForm;
