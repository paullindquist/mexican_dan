<style scoped>
.client_section .box .client_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.client_section .box .client_info .client_name h5 {
  font-weight: bold;
  color: #252525;
  margin-bottom: 0;
  text-transform: uppercase;
}

.client_section .box .client_info .client_name h6 {
  margin-bottom: 0;
  color: var(--brand);
  font-weight: normal;
  font-size: 15px;
  text-transform: uppercase;
}

.client_section .box .client_info i {
  font-size: 24px;
  color: var(--brand);
}

.client_section .box p {
  margin-top: 25px;
}

.client_section .box .detail-box {
  background-color: #ffffff;
  padding: 45px 45px 45px 85px;
}

.client_section .carousel-indicators {
  position: unset;
  margin: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 45px;
}

.client_section .carousel-indicators li {
  background-color: var(--brand);
  width: 10px;
  height: 10px;
  border-radius: 100%;
  opacity: 1;
}

.client_section .carousel-indicators li.active {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
}

</style>
<template>
	<section class="info-section-container">
		<div class="container">
			<div class="contact_nav">
				<div>Address:</div>
				<div>Burlington, CO 80807</div>
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
