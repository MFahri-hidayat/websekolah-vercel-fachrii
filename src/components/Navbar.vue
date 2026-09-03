<script setup lang="ts">
import { R } from 'vue-router/dist/index-BN0B0y8a.js';

</script>

<template>
  <div class="atas">
    <h2>MFachri - Onlineshop</h2>
    <nav>
    <RouterLink to="/">Landing</RouterLink> |
    <RouterLink to="/product">Product</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <hr/>
  </div>
</template>

<style scoped>
.atas {
  display: flex;
  align-items: center;
  color: white;
  background-color: grey;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  justify-content: space-between;
}
h2 {
  margin: 0;
  font-size: 1.5rem;
}
</style>