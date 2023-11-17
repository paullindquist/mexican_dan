<style scoped>
.info-section-container {
	background-color: #252525;
	padding: 2rem;
	color: #fff;
}
.info-section-container a {
	color: #fff;
	text-decoration: none;
}
.contact_nav {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
<template>
	<section class="info-section-container">
		<div class="container">
			<div class="contact_nav">
				<div>Address: Burlington, CO 80807</div>
				<a href="tel:+17198319505">
					<i class="fa fa-phone" aria-hidden="true"></i>
					<span> Call : (719) 831-9505 </span>
				</a>
				<a href="mailto:danieljralvarez@yahoo.com">
					<i class="fa fa-envelope" aria-hidden="true"></i>
					<span> Email : danieljralvarez@yahoo.com </span>
				</a>
			</div>
		</div>
	</section>
	<footer class="footer_section">
		<div class="container">
			<p>&copy; <span id="displayYear"></span> All Rights Reserved By Mexican Dan's Flooring</p>
		</div>
	</footer>
</template>
