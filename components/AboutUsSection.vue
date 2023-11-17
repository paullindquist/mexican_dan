<template>
  <section class="about-container">
    <div class="heading-container">
      <h2>About Us</h2>
    </div>
    <div class="copy-container">
      <p>
        Welcome to Mexican Dan's, where flooring installation is not just a job, but a passion. We are a dedicated team of flooring experts with over 25 years of experience in the
        industry, committed to enhancing the beauty, comfort, and value of your spaces.
      </p>
      <div class="button-container">
        <Button class="brand read-more" href="/about">Read More</Button>
      </div>
      <div class="logo-container">
        <img class="about-logo" src="/img/painted_logo.png" alt="Mexican Dan's Flooring Logo on Wood" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.read-more {
  text-decoration: none;
  text-shadow: 3px 3px 0px #1b1212;
}
.copy-container {
  display: flex;
  flex-direction: column;
}
.button-container {
  display: flex;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.logo-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.about-logo {
  display: block;
  max-width: 260px;
  align-self: center;
}
</style>
