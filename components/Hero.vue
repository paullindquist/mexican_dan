<template>
  <div id="customCarousel1" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="detail-box">
                <h1>Over 25 Years of Flooring Experience</h1>
                <div class="btn-box">
                  <a href="/contact" class="btn1"> Contact Us </a>
                  <a href="" class="btn2"> About Us </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" v-for="item in items" :key="item">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="detail-box">
                <h1>Carpet Installation</h1>
                <div class="btn-box">
                  <a href="" class="btn1"> Contact Us </a>
                  <a href="" class="btn2"> About Us </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ol class="carousel-indicators">
      <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
      <li data-target="#customCarousel1" data-slide-to="1"></li>
      <li data-target="#customCarousel1" data-slide-to="2"></li>
      <li data-target="#customCarousel1" data-slide-to="3"></li>
    </ol>
  </div>
</template>
<script>
const items = ["Over 25 Years of Flooring Experience", "Carpet Installation", "Tile and Stone Flooring"];
</script>
