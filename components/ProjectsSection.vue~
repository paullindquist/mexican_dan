<style scoped>
img {
  max-width: 100%;
}
.slide-item {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  background-color: var(--brand);
}
.copy-container {
  padding: 2rem;
  color: #fff;
  flex: 1;
}
p {
  text-align: left;
}
h3 {
  font-weight: 700;
  font-size: 2rem;
}
</style>
<template>
  <section class="project-section-container">
    <carousel :items-to-show="1" :autoplay="2586" :wrap-around="true" :breakpoints="breakpoints">
      <slide class="slide-item" v-for="item in items" :key="item">
        <div class="image-container">
          <img :src="item.img" :alt="item.heading" />
        </div>
        <div class="copy-container">
          <h3 class="title">{{ item.heading }}</h3>
          <p>{{ item.copy }}</p>
        </div>
      </slide>
    </carousel>
  </section>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const items = [
  {
    img: "/img/bedroom.jpg",
    heading: "Carpet",
    copy: "We source our carpet from trusted suppliers, ensuring the best quality materials for your project. Additionally, we use industry-standard tools and equipment to facilitate a superior installation process. This combination of quality materials and advanced tools is essential for achieving outstanding results",
  },
  {
    img: "/img/tile.jpg",
    heading: "Tile",
    copy: "We put customer satisfaction at the forefront of our service. Throughout the installation, we maintain open communication with our clients, addressing any questions or concerns promptly. Our goal is to make sure you are not just satisfied but thrilled with the final product.",
  },
  {
    img: "/img/steps.jpg",
    heading: "Interior Work",
    copy: "Dan understands the importance of finishing your carpet installation project on time. Our team works efficiently to minimize disruption to your daily life and ensure that the project stays on schedule.",
  },
];
const breakpoints = {
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
};
</script>
