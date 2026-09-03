<template>
  <div class="card">
    <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" />
    <h3>{{ nama }}</h3>
    <p>{{ jabatan }}</p>
    <button class="btn-grad" @click="tambahKeTim(nama)">Tambahkan ke Tim</button>
  </div>
  <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
    <img :src="gambarDipilih" class="preview-besar" />
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  nama: String,
  jabatan: String,
  gambar: String
})

const gambarDipilih = ref(null)

const bukaPreview = (gambar) => {
  gambarDipilih.value = gambar
}

const tutupPreview = () => {
  gambarDipilih.value = null
}

const tambahKeTim = (nama) => {
  alert(`${nama} ditambahkan ke tim!`);
}
</script>
<style scoped>
.card {
 display: flex;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
  margin: 10px;
}
.card img {
  width: 100%;
  height: auto;

}
</style>