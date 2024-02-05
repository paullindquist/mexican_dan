<script setup></script>

<template>
  <div class="container">
    <h1>Gallery</h1>
    <h2>Christ Ministries Church</h2>
    <div class="masonry">
      <div class="item">
        <img src="/img/gallery/church_9.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_10.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_11.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_1.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_2.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_3.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_4.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_5.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_6.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_7.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/church_8.jpg" />
      </div>
    </div>
    <h2>Residential Work</h2>
    <div class="masonry">
      <div class="item">
        <img src="/img/gallery/one.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/two.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/three.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/four.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/five.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/six.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/seven.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/eight.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/nine.jpg" />
      </div>
      <div class="item">
        <img src="/img/gallery/ten.jpg" />
      </div>
    </div>
  </div>
</template>
<style scoped>
h1,
h2 {
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  padding: 1.5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--brand);
}

.container {
  margin: 2rem auto;
}

.item {
  position: relative;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.25rem;
}

.item img {
  width: 100%;
  height: auto;
  display: block;
  box-shadow: 3px 3px 6px #121212;
  border-radius: 4px;
}

.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  /* Adjust the gap between items as needed */
}</style>
