<style scoped>
.contact-container {
	background-color: #eee;
}
h2 {
	font-size: 2rem;
	padding: 2rem 2rem 0;
}
input {
	padding: 1rem;
	height: 1rem;
	margin: 1rem 0;
	display: block;
	width: 100%;
	border: solid 1px #dfdfdf;
	border-radius: 6px;
	box-sizing: border-box;
	box-shadow: 0px 1px 3px #1b1212;
}
button {
	background-color: var(--brand);
	border: none;
	padding: 0.75rem;
	color: #fff;
	font-weight: 700;
	border-radius: 6px;
}
p {
	margin-bottom: 2rem;
}
.form-container {
	padding: 0 1rem;
}
.map-container {
	min-height: 400px;
	width: 100%;
	padding: 2rem;
	box-sizing: border-box;
}
@media screen and (min-width: 768px) {
	.contact-container {
		display: flex;

	}
}
</style>
<template>
	<section class="contact-container">
		<div class="form-container">
			<div class="heading_container">
				<h2>Contact Dan!</h2>
			</div>
			<p>
			Thank you for considering Mexican Dan's Flooring for your project. We're excited to help you transform your space with our exceptional flooring solutions. Please fill out
			the form below, and our team will get in touch with you shortly.
			</p>
			<form action="https://api.web3forms.com/submit" method="POST" id="contact">
				<div>
					<input name="name" type="text" placeholder="Your Name" />
				</div>
				<div>
					<input name="phone" type="text" placeholder="Phone Number" />
				</div>
				<div>
					<input name="email" type="email" placeholder="Email" />
				</div>
				<div>
					<input name="message" type="text" class="message-box" placeholder="Message" />
					<input type="hidden" name="redirect" value="https://mexicandansfloorcovering.com/success" />
					<input type="hidden" name="access_key" value="24c8c33f-3a46-47f4-845b-a414ce31cbc4" />
				</div>
				<div class="btn_box">
					<button>SEND</button>
				</div>
			</form>
		</div>
		<div class="map-container">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309511.693914154!2d-102.39092137599633!3d39.29103440866302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870cb291012a6035%3A0x61dc0f7bc348cce2!2sBurlington%2C%20CO%2080807!5e0!3m2!1sen!2sus!4v1700237285376!5m2!1sen!2sus"
					style="width: 100%; border: 0; height: 500px"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					></iframe>
		</div>
	</section>
</template>
