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
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/testimonials">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact Us</a>
        </li>
      </ul>
      <div class="quote_btn-container">
        <a href="/contact" class="quote_btn"> Get A Quote </a>
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
