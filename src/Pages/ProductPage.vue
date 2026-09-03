<script setup>
import ProductCard from '../components/ProductCard.vue'
 
const daftarProduk = [
  { id: 1, nama: 'Longsleeve The Jeblogs', harga: 210000, gambar: 
'https://th.bing.com/th/id/OIP.sBCLuW0bGAbr4hxbXygMmwHaHa?w=192&h=192&c=7&r=0&o=7&pid=1.7&rm=3' },
  { id: 2, nama: 'longsleeve The Adams', harga: 170000, gambar: 
'https://th.bing.com/th/id/OIP.srbXKsaG0nv4aZF6gsc9fQHaHa?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
  { id: 3, nama: 'Longsleeve The Panturas', harga: 90000, gambar: 
'https://th.bing.com/th/id/OIP.rF_l284KDVwHwupQGiL7sQHaHa?w=192&h=192&c=7&r=0&o=7&pid=1.7&rm=3' },
 { id: 4, nama: 'Longsleeve Kelompok Penerbang roket', harga: 150000, gambar: 
'https://th.bing.com/th/id/OIP.woP6w5_TrUSIGetusR1_nQHaHa?w=192&h=192&c=7&r=0&o=7&pid=1.7&rm=3' }, 
{ id: 5, nama: 'Longsleeve Alkateri', harga: 290000, gambar: 
'https://th.bing.com/th/id/OIP.XKvbVSMu9lnwjeND74l6rwAAAA?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3' },
 { id: 6, nama: 'Longsleeve Morfem', harga: 190000, gambar: 
'https://th.bing.com/th/id/OIP.fQjq5HwP3YuaduswG53vyAHaJ4?w=152&h=202&c=7&r=0&o=7&pid=1.7&rm=3' },
 { id: 7, nama: 'Longsleeve Slank', harga: 390000, gambar: 
'data:image/webp;base64,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' },
 { id: 8, nama: 'Coming Soon', harga: 0, gambar: 
'https://th.bing.com/th/id/OIP.WLXmDSt00-ZTvv-oVjUr8wHaFB?w=296&h=200&c=7&r=0&o=7&pid=1.7&rm=3' },
]
</script>
 
<template>
  <main>
    <h1>Produk Kami</h1>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>
 
<style scoped>
.grid {
  display: flex;
  gap: 16px;
  align-items: stretch;
  flex-wrap: wrap;
}
.btn-grad {
  background-image: linear-gradient(to right, #4b6cb7 0%, #182848 51%, #4b6cb7 100%);
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: rgb(206, 23, 23);
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
