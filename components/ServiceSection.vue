<template>
  <section class="service_section">
    <div class="service_container">
      <div class="container">
        <div class="heading_container">
          <h2>Services</h2>
          <p>
            Mexican Dan's Flooring dedicated to transforming your space into something beautiful. With over 25 years of experience in the flooring industry, we take pride in our
            craftsmanship, attention to detail, and commitment to customer satisfaction.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="box">
              <div class="img-box">
                <img src="/img/hardwood.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>Hardwood Flooring Installation</h5>
                <p>
                  Elevate the look and feel of your home with our top-quality hardwood flooring installation services. We offer a wide selection of hardwoods to match your style
                  and preferences.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box">
              <div class="img-box">
                <img src="/img/laminate.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>Laminate and Vinyl Flooring</h5>
                <p>Looking for durable, easy-to-maintain options? Our laminate and vinyl flooring solutions provide the perfect blend of style and resilience.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box">
              <div class="img-box">
                <img src="/img/tiles.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>Tile and Stone Flooring</h5>
                <p>Add a touch of elegance to your space with our tile and stone flooring installation. Choose from an array of patterns and designs to suit your taste.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box">
              <div class="img-box">
                <img src="/img/carpet_plus.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>Carpet Installation</h5>
                <p>Enjoy the warmth and comfort of carpet in your home. We offer a variety of carpets in different textures and colors to suit any room.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.service_section {
  position: relative;
}

.service_section .heading_container h2 {
  text-transform: none;
}

.service_section .service_container {
  -webkit-box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
  padding: 45px 15px;
}

.service_section .box {
  margin-top: 45px;
}

.service_section .box .img-box {
  display: flex;
  justify-content: center;
  height: 65px;
}

.service_section .box .img-box img {
  height: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.service_section .box .detail-box {
  margin-top: 15px;
}

.service_section .box .detail-box h5 {
  font-weight: bold;
  text-transform: uppercase;
}

.service_section .box .detail-box a {
  color: var(--brand);
  font-weight: 600;
}

.service_section .box .detail-box a:hover {
  color: #252525;
}

.service_section .box:hover .img-box img {
  -webkit-filter: brightness(1);
  filter: brightness(1);
}
</style>
