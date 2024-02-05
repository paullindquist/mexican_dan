<style scoped>
.testimonials-container {
  padding: 2rem 0;
  background-color: #eee;
}

h3 {
  text-align: center;
  line-height: 1;
  margin-bottom: 0;
  color: #1b1212;
  font-size: 1rem;
}

h2 {
  text-align: center;
  margin-top: 0;
  color: var(--brand);
  font-size: 1.5rem;
}

img {
  border-radius: 50%;
  height: 56px;
  width: 56px;
}

.title {
  color: var(--brand);
  font-size: 0.8rem;
  font-weight: 700;
}

p.testimonial {
  font-style: italic;
}

p.name {
  margin: 0;
  font-weight: 700;
}

.profile {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item {}

.item-container {
  padding: 20px;
  border-radius: 30px;
  border: solid 3px var(--brand);
  background-color: #fff;
  margin: 10px;
}

@media screen and (min-width: 768px) {
  h3 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }
}
</style>
<template>
  <section class="testimonials-container">
    <div class="title">
      <h3>Testimonials</h3>
      <h2>What Dan's Customers Say:</h2>
    </div>
    <carousel :items-to-show="1" :autoplay="5000" :transition="2222" :wrap-around="true" :breakpoints="breakpoints">
      <slide class="slide-item item" v-for="item in items" :key="item">
        <div class="item-container">
          <div class="profile">
            <img :src="item.img" alt="" />
            <div class="information">
              <div class="stars">
                <Icon name="ic:twotone-star" color="#6caf90" />
                <Icon name="ic:twotone-star" color="#6caf90" />
                <Icon name="ic:twotone-star" color="#6caf90" />
                <Icon name="ic:twotone-star" color="#6caf90" />
                <Icon name="ic:twotone-star" color="#6caf90" />
              </div>
              <p class="name">{{ item.name }}</p>
              <span class="title">{{ item.title }}</span>
            </div>
          </div>
          <p class="testimonial">{{ item.copy }}</p>
        </div>
        <div class="icon">
          <i class="fa fa-quote-right" aria-hidden="true"></i>
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
    name: "Jenny L.",
    title: "Executive Director In Christ Ministries",
    copy: "Recently the 3000 sq ft In Christ Ministries building underwent a complete reconstruction. Two of the new rooms needed carpet squares and the rest of the building needed laminate flooring. The walls would be accented with black rubber trim throughout. Dan Alvarez was the right man for the job! The completion of the building had to meet a specific deadline. As soon as the construction workers gave him the ok to begin, Dan completed the flooring  and trim in an incredibly short period of time. He was strategic and incredibly precise in every room taking the greatest steps of perfection.  We at In Christ Ministries would highly recommend Dan for any large or small job that you might have. You will not be disappointed!",
    img: "/img/headshot.jpg",
  },
  {
    name: "Tammy M.",
    title: "Happy Homeowner",
    copy: "a BIG Thank you for doing such a great job with my carpet! Not only did he remove and haul off the old carpet he did a great job on laying the new! He even vacuumed and made sure everything was cleaned up after he was done! Couldn't ask for a more professional job and just a Super nice guy on top of it! Thank you!",
    img: "/img/headshot.jpg",
  },
  {
    name: "Sherry S.",
    title: "Rental Property Owner",
    copy: "Mexican Dan did a great job carpeting my rental. He took on a job that was a challenge. He was not afraid to advise a different approach to floor replacement. He worked hard and quickly to get the job done. I was very impressed with his work ethic, his friendliness, his knowledge of flooring, and his skill. I highly recommend him for any flooring task.",
    img: "/img/headshot.jpg",
  },
  {
    name: "Linda C",
    title: "Quick and Reliable Service",
    copy: "Working with Dan's Flooring was a seamless experience from start to finish. They guided me through the selection process, provided a clear timeline, and executed the installation flawlessly. The communication and professionalism demonstrated by the team made the entire project stress-free. I highly recommend Mexican Dan's Flooring for anyone in need of flooring services.",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
  },
];
const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: "start",
  },
};
</script>
