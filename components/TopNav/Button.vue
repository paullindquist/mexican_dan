<style scoped>
.navbar-toggler {
  outline: none;
  padding: 0;
  width: 37px;
  height: 42px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
  background-color: transparent;
}

.navbar-toggler span {
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

.navbar-toggler span::before,
.navbar-toggler span::after {
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

.navbar-toggler span::after {
  top: 10px;
}

.navbar-toggler[aria-expanded="true"] {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

.navbar-toggler[aria-expanded="true"] span {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.navbar-toggler[aria-expanded="true"] span::before,
.navbar-toggler[aria-expanded="true"] span::after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
}

.navbar-toggler[aria-expanded="true"] .s-1 {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 0;
  margin-bottom: -4px;
}

.navbar-toggler[aria-expanded="true"] .s-2 {
  display: none;
}

.navbar-toggler[aria-expanded="true"] .s-3 {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 0;
  margin-top: -4px;
}

.navbar-toggler[aria-expanded="false"] .s-1,
.navbar-toggler[aria-expanded="false"] .s-2,
.navbar-toggler[aria-expanded="false"] .s-3 {
  -webkit-transform: none;
  transform: none;
}
</style>
<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    :aria-expanded="!collapsed"
    aria-label="Toggle navigation"
  >
    <span class=""></span>
  </button>
</template>
<script setup>
defineProps(["collapsed"]);
</script>
