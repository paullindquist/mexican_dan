<template>
  <div class="hero_area">
    <header class="header_section">
      <div class="header_bottom">
        <div class="container-fluid">
          <TopNav />
        </div>
      </div>
    </header>
    <section class="slider_section">
      <ClientOnly> <Hero /></ClientOnly>
    </section>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <section class="info_section">
    <div class="container">
      <div class="contact_nav">
        <a href="tel:+17198319505">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span> Call : (719) 831-9505 </span>
        </a>
        <a href="mailto:danieljalvarez@yahoo.com">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span> Email : danieljalvarez@yahoo.com </span>
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
<style>
@import "./assets/css/bootstrap.css";
@import "./assets/css/style.css";
@import "./assets/css/responsive.css";
</style>
