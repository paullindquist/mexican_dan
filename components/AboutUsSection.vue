<template>
	<section class="about-container">
		<div class="heading-container">
			<h2>About Us</h2>
		</div>
		<div class="copy-container">
			<p>
			Welcome to Mexican Dan's, where flooring installation is not just a job, but a passion. We are a dedicated team of flooring experts with over 25 years of experience in the
			industry, committed to enhancing the beauty, comfort, and value of your spaces.
			</p>

			<div class="button-and-logo-container">
				<div class="button-container">
					<Button class="brand read-more" href="/about">Read More</Button>
				</div>
				<div class="logo-container">
					<img class="about-logo" src="/img/painted_logo.png" alt="Mexican Dan's Flooring Logo on Wood" />
				</div></div>
		</div>
	</section>
</template>
<style scoped>
h2 {
	font-size: 1.7rem;
	text-align: center;
}
.read-more {
	text-decoration: none;
	text-shadow: 3px 3px 0px #1b1212;
	margin: 0 auto;
}
.copy-container {
	display: flex;
	flex-direction: column;
}
.copy-container p {
	margin-bottom: 2rem;
	padding: 0 1rem;
	font-size: 1rem;
}
.button-container {
	display: flex;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	height: 54px;
}
.logo-container {
	display: flex;
	flex-direction: column;
	padding: 2rem;
}
.about-logo {
	display: block;
	max-width: 260px;
	align-self: center;
}
	@media screen and (min-width: 768px) {
		h2 {
			font-size: 2rem;
			text-align: center;
		}
		.copy-container {
			flex-direction: row;

		}
		.copy-container p {
			font-size: 1.25rem;
			margin: 0 auto;
			flex-basis: 40%;
			padding: 3rem;
		}
		.button-and-logo-container {
			flex-basis: 60%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
