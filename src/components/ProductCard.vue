<script setup>
import { ref } from 'vue'
defineProps(['nama', 'harga', 'gambar'])
const gambarDipilih = ref(null)
function bukaPreview(src) {
 gambarDipilih.value = src
}
function tutupPreview() {
 gambarDipilih.value = null
}
// --- bagian baru: efek suara ---
function tambahKeKeranjang(nama) {
 const suara = new Audio('/audio/notifikasi.mp3')
 suara.play()
 alert(`${nama} ditambahkan ke keranjang!`)
}
</script>
<template>
 <div class="card">
 <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" />
 <h3>{{ nama }}</h3>
 <p>Rp {{ harga.toLocaleString('id-ID') }}</p>
 <button class="btn-grad" @click="tambahKeKeranjang(nama)">Tambah ke Keranjang</button>
 </div>
 <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
 <img :src="gambarDipilih" class="preview-besar" />
 </div>
</template>
<style scoped>
.card {

    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 24px;
    width: 280px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

.card img { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; cursor: pointer; }
.preview-overlay {
 position: fixed; top: 0; left: 0; width: 100%; height: 100%;
 background: rgba(0, 0, 0, 0.7);
 display: flex; align-items: center; justify-content: center;
 cursor: zoom-out;
}
.preview-besar { max-width: 80%; max-height: 80%; border-radius: 8px; }
.btn-grad {
  background-image: linear-gradient(to right, #4b6cb7 0%, #182848 51%, #4b6cb7 100%);
}

.btn-grad {
  margin-top: auto;
  padding: 15px ;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  outline: none;
  border: none;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>