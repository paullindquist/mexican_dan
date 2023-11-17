<style scoped>
.flexmenu {
  width: 100%;
  line-height: 1.4em;
}
.flex {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu {
  display: none;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 1rem;
}
/*
.menu:first-child {
  display: inline-flex;
  justify-content: left;
  width: 80%;
  margin-left: 0;
  margin-right: auto;
}
*/
.menu a {
  text-decoration: none;
  padding: 0.5em;
  color: #0c0c0c;
  text-transform: uppercase;
  margin: 1rem;
}
.menu a.router-link-active {
  color: var(--brand);
  text-decoration: underline;
}
.menu:nth-child(n + 2):hover a {
  background-color: var(--brand);
  border-radius: 0.5em;
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
}
.mobile-menu {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
.menu-icon {
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
}
.hide {
  display: none;
}
.show {
  display: block;
  width: 100%;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
  .flex {
    flex-direction: row;
  }
  .menu {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
  }
}
</style>
<template>
  <nav class="flexmenu">
    <div class="flex">
      <div><TopNavLogo /></div>
      <div class="menu-container">
        <div class="menu" :class="collapsed ? '' : 'show'">
          <NuxtLink href="/gallery">Gallery</NuxtLink>
        </div>
        <div class="menu" :class="collapsed ? '' : 'show'">
          <NuxtLink href="/about">About</NuxtLink>
        </div>
        <div class="menu" :class="collapsed ? '' : 'show'">
          <NuxtLink href="/#contact">Contact</NuxtLink>
        </div>
        <div class="mobile-menu">
          <TopNavButton :collapsed="collapsed" @click="collapsed = !collapsed" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const collapsed = ref(true);
</script>
