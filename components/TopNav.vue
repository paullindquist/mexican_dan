<style>
.custom_nav-container {
  padding: 0;
}

.custom_nav-container .navbar-nav {
  margin: auto;
}

.custom_nav-container .navbar-nav .nav-item .nav-link {
  padding: 5px 25px;
  color: #000000;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-nav .nav-item:hover .nav-link,
.custom_nav-container .navbar-nav .nav-item .nav-link.router-link-active {
  color: #ffffff;
  background-color: #000000;
}

.custom_nav-container .nav_search-btn {
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  color: #000000;
}

.custom_nav-container .nav_search-btn:hover {
  color: #000000;
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler {
  padding: 0;
  width: 37px;
  height: 42px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span {
  display: block;
  width: 35px;
  height: 4px;
  background-color: #000000;
  margin: 7px 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span::before,
.custom_nav-container .navbar-toggler span::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000;
  top: -10px;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span::after {
  top: 10px;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span::before,
.custom_nav-container .navbar-toggler[aria-expanded="true"] span::after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] .s-1 {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 0;
  margin-bottom: -4px;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] .s-2 {
  display: none;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] .s-3 {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 0;
  margin-top: -4px;
}

.custom_nav-container .navbar-toggler[aria-expanded="false"] .s-1,
.custom_nav-container .navbar-toggler[aria-expanded="false"] .s-2,
.custom_nav-container .navbar-toggler[aria-expanded="false"] .s-3 {
  -webkit-transform: none;
  transform: none;
}
</style>
<template>
  <nav class="navbar navbar-expand-lg custom_nav-container">
    <a class="navbar-brand" href="/">
      <img src="/img/mexican_dans_logo.png" alt="" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      :aria-expanded="!collapsed"
      aria-label="Toggle navigation"
      @click="collapsed = !collapsed"
    >
      <span class=""></span>
    </button>

    <div v-if="!collapsed" class="collapse navbar-collapse show" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/services">Services</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/about"> About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/gallery">Gallery</NuxtLink>
        </li>
        <!--
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/testimonials">Testimonials</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/contact">Contact Us</NuxtLink>
        </li>
      --></ul>
      <div class="quote_btn-container">
        <NuxtLink href="/contact" class="quote_btn"> Get A Quote </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
const collapsed = ref(true);
const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  if (viewport.isGreaterThan("tablet")) {
    collapsed.value = false;
  } else {
    collapsed.value = true;
  }
});
</script>
