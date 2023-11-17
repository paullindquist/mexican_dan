<style scoped>
.img-box {
	background-color: var(--brand);
	display: flex;
	justify-content: center;
	align-items: center;
}
h2 {
	font-size: 1.7rem;
	text-align: center;
	margin: 2rem 0;
}
h3 {
	font-size: 1.17rem;
	text-align: center;
	margin: 0;
}
.box {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
p {
	margin-bottom: 2rem;
}
.box .img-box {
	width: 80px;
	min-width: 80px;
	height: 80px;
	margin-right: 0;
	padding-right: 0;
	margin-bottom: 25px;
	padding-bottom: 25px;
	clip-path: polygon(0 85%, 0 0, 100% 0, 100% 85%, 65% 85%, 50% 100%, 35% 85%);
}
.detail-box p {
	max-width: 300px;
	font-size: .8rem;
}
@media screen and (min-width: 768px) {
	h2 {
		font-size: 2rem;
		text-align: center;
	}
	.boxes-container {
		display: flex;
		flex-wrap: wrap;
	}
	.box {
		flex-basis: 50%;
	}
	.detail-box p {
		font-size: 1rem;
	}
	h3 {
		font-size: 1.5rem;
	}
}
</style>
<template>
	<section class="why_us_section layout_padding">
		<div class="container">
			<div class="heading_container">
				<h2>Why Choose Dan?</h2>
			</div>
			<div class="boxes-container">
				<div class="box">
					<div class="img-box">
						<img src="/img/w1.png" alt="" />
					</div>
					<div class="detail-box">
						<h3>Project done on time</h3>
						<p>At Mexican Dan's Flooring, we don't just lay floors; we lay them on schedule. Your timeline is our timeline, and we take pride in always delivering on time.</p>
					</div>
				</div>
				<div class="box">
					<div class="img-box">
						<img src="/img/w2.png" alt="" />
					</div>
					<div class="detail-box">
						<h3>Always avaliable</h3>
						<p>We're not just flooring experts; we're always here for you. Your questions, concerns, and ideas – we're just a call away, ready to assist whenever you need us.</p>
					</div>
				</div>
				<div class="box">
					<div class="img-box">
						<img src="/img/w3.png" alt="" />
					</div>
					<div class="detail-box">
						<h3>Professional and responsible</h3>
						<p>
						We believe in the beauty of responsibility and the strength of professionalism. Our commitment to quality craftsmanship and ethical business practices is the
						foundation of our success.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
