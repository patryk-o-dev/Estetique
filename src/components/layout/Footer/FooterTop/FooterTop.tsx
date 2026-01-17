import ButtonMain from "../../../utils/ButtonMain/ButtonMain";

const FooterTop = () => {
	return (
		<div>
			<div>
				<h3>Book your appointment today for a refreshing experience</h3>
				<p>
					A modern beauty salon offering personalized treatments in a relaxing
					space.
				</p>
			</div>
			<div>
				<div>
					<strong>PAGES</strong>
					<ul>
						<li>
							<ButtonMain />
						</li>
						{/* Home */}
						<li>
							<ButtonMain />
						</li>
						{/* Service */}
						<li>
							<ButtonMain />
						</li>
						{/* Book */}
						<li>
							<ButtonMain />
						</li>
						{/* Contact */}
					</ul>
				</div>
				<div>
					<strong>Contact</strong>
					<ul>
						<li>
							<img src="" alt="" /> contact@logo.ch
						</li>
						<li>
							<img src="" alt="" /> 123456789
						</li>
						<li>
							<img src="" alt="" /> Marszałkowska 21/37, Warszawa
						</li>
					</ul>
				</div>
				<div>
					<strong>Social</strong>
					<ul>
						<li>
							<a href="#">Instagram</a>
						</li>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">Facebook</a>
						</li>
						<li>
							<a href="#">LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
