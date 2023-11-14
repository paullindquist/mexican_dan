<script setup></script>

<template>
  <div class="container">
    <h1>Gallery</h1>
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
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  font-weight: 700;
  padding: 1.5rem;
}
.container {
  margin: 2rem auto;
}
.item {
  position: relative;
  margin: 0;
  overflow: hidden;
}
.item img {
  width: 100%;
  height: auto;
  display: block;
}
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px; /* Adjust the gap between items as needed */
}
img {
  width: 300px;
  height: 300px;
}
</style>
