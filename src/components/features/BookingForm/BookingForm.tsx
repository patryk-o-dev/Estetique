import ButtonMain from "../../utils/ButtonMain/ButtonMain";

const BookingForm = () => {
	return (
		<form>
			<label>Please tell us your name</label>
			<input type="text" name="name" />
			<label>Phone number</label>
			<input type="text" name="phone" />
			<label>Preffered time</label>
			<input type="text" name="time" />
			<label>Service</label>
			<input type="text" name="service" />
			<label>Message</label>
			<textarea name="message"></textarea>
			<ButtonMain />
		</form>
	);
};

export default BookingForm;
