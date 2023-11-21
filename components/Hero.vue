<style scoped>
.carousel {
  height: 250px;
  background-image: url(~/assets/img/hero.jpg);
  background-size: cover;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 3px 3px 0px #1b1212;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.slide-item {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.link-container {
  display: flex;
  gap: 1rem;
}
.nav-link {
  padding: 1rem;
  border-radius: 4px;
  background-color: #000000;
  color: #fff;
  margin-bottom: 1rem;
  text-decoration: none;
}
.nav-link.brand {
  background-color: var(--brand);
}
@media screen and (min-width: 768px) {
  .carousel {
    height: 333px;
  }
  .title {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
  .slide-item {
    padding: 5rem;
  }
}
</style>
<template>
  <carousel :items-to-show="1" :autoplay="2523" :wrap-around="true" :transition="1333">
    <slide class="slide-item" v-for="item in items" :key="item">
      <div class="title">{{ item }}</div>
      <div class="link-container">
        <Button class="nav-link brand" href="/#contact">Contact Us</Button>
        <Button class="nav-link" href="/about">About Us</Button>
      </div>
    </slide>
  </carousel>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const items = ["Over 25 years of flooring experience", "Serving Eastern Colorado area"];
</script>
