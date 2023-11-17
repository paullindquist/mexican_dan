<script setup>
defineProps({
  href: String,
  class: Object,
});
</script>
<template>
  <NuxtLink :class="class" :to="href"><slot /></NuxtLink>
</template>
<style scoped>
a {
  display: block;
  border-radius: 6px;
  padding: 1rem;
  background-color: #000000;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
}
a.brand {
  background-color: var(--brand);
}
</style>
