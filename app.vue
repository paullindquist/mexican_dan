<template>
  <div class="hero_area">
    <header class="header_section">
      <TopNavContainer />
    </header>
    <section>
      <ClientOnly> <Hero /></ClientOnly>
    </section>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>
<style>
@import "./assets/css/responsive.css";
:root {
  --brand: #6caf90;
  --brand-hover: #00bd65;
}
body {
  font-family: "Rubik", sans-serif;
}
</style>
