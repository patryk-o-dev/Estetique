import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import styles from "./BookingForm.module.scss";
import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const SERVICES = [
	"Manicure",
	"Pedicure",
	"Facial",
	"Waxing",
	"Massage",
	"Makeup",
	"Other",
];

const BookingForm = () => {
	const [service, setService] = useState("");
	const [open, setOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	const [state, handleSubmit] = useForm("mdkwbwvl");

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
		<form className={styles.bookingForm} onSubmit={handleSubmit}>
			<div className={styles.formGroup}>
				<label>Please tell us your name</label>
				<input type="text" name="name" placeholder="Enter Your Name" />
				<ValidationError prefix="Name" field="name" errors={state.errors} />
			</div>
			<div className={styles.formGroup}>
				<label>Phone number</label>
				<input type="text" name="phone" placeholder="Enter Your Number" />
				<ValidationError prefix="Phone" field="phone" errors={state.errors} />
			</div>
			<div className={styles.formGroup}>
				<label>Preffered time</label>
				<input type="date" name="time" placeholder="Select a Time" />
				<ValidationError prefix="Time" field="time" errors={state.errors} />
			</div>
			<div className={styles.formGroup}>
				<label>Service</label>
				<div ref={selectRef} className={styles.customSelect}>
					<input
						type="text"
						name="usługa"
						value={service}
						readOnly
						className={styles.inputLike}
						placeholder="Select a service"
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
					prefix="Service"
					field="service"
					errors={state.errors}
				/>
			</div>
			<div className={`${styles.formGroupMessage} ${styles.formGroup}`}>
				<label>Message</label>
				<textarea name="message"></textarea>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<ButtonMain text="Book Appointment" bgc="primary" action="book" />
		</form>
	);
};

export default BookingForm;
