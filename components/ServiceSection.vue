<template>
	<section class="service_section">
		<div class="heading-container">
			<h2>Services</h2>
			<p>
			Mexican Dan's Flooring dedicated to transforming your space into something beautiful. With over 25 years of experience in the flooring industry, we take pride in our
			craftsmanship, attention to detail, and commitment to customer satisfaction.
			</p>
		</div>
		<div class="boxes-container">
			<div class="box">
				<div class="img-box">
					<img src="/img/hardwood.png" alt="" />
				</div>
				<div class="detail-box">
					<h3>Hardwood Flooring Installation</h3>
					<p>
					Elevate the look and feel of your home with our top-quality hardwood flooring installation services. We offer a wide selection of hardwoods to match your style
					and preferences.
					</p>
				</div>
			</div>
			<div class="box">
				<div class="img-box">
					<img src="/img/laminate.png" alt="" />
				</div>
				<div class="detail-box">
					<h3>Laminate and Vinyl Flooring</h3>
					<p>Looking for durable, easy-to-maintain options? Our laminate and vinyl flooring solutions provide the perfect blend of style and resilience.</p>
				</div>
			</div>
			<div class="box">
				<div class="img-box">
					<img src="/img/tiles.png" alt="" />
				</div>
				<div class="detail-box">
					<h3>Tile and Stone Flooring</h3>
					<p>Add a touch of elegance to your space with our tile and stone flooring installation. Choose from an array of patterns and designs to suit your taste.</p>
				</div>
			</div>
			<div class="box">
				<div class="img-box">
					<img src="/img/carpet_plus.png" alt="" />
				</div>
				<div class="detail-box">
					<h3>Carpet Installation</h3>
					<p>Enjoy the warmth and comfort of carpet in your home. We offer a variety of carpets in different textures and colors to suit any room.</p>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped>
h2 {
	font-size: 1.7rem;
	text-align: center;

}
.service_section .service_container {
	-webkit-box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
	box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
	padding: 45px 15px;
}
.heading-container p {
	margin-bottom: 2rem;
	padding: 0 1rem;
	font-size: 1rem;

}

.img-box {
	display: flex;
	justify-content: center;
	height: 65px;
}
.boxes-container {
	padding: 1rem;
}
.detail-box {
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.detail-box h3 {
	text-align: center;
	margin: .5rem;
}
.detail-box p {
	padding-bottom: 1rem;
	margin: 0 auto;
	font-size: .8rem;
	max-width: 400px;
}

@media screen and (min-width: 768px) {
	.boxes-container {
		display: flex;
		flex-wrap: wrap;
	}
	.box {
		flex-basis: 50%;
	}
	h3 {
		font-size: 1.5rem;
	}
	h2 {
		font-size: 2rem;
		text-align: center;
	}
	.detail-box {
		margin-bottom: 1.5rem;
	}
	.detail-box p {
		font-size: 1rem;
		padding: 0 1rem;
	}
	.heading-container p {
		margin: 0 auto;
		margin-bottom: 2rem;
		max-width: 600px;
		font-size: 1.25rem;
	}
}
</style>
