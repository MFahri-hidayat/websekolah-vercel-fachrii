<!-- <template>
  <div class="LandingPage">
      <section class="hero">
        <h1>Belanja Outfit Merchandise,HANYA DISINI!!!</h1>
        <p>Temukan produk terbaik dengan harga terjangkau!</p>
        <video controls width="480" muted loop>
 <source src="/video/promo-toko.mp4" type="video/mp4" />
 Browser kamu tidak mendukung pemutaran video.
 </video>

        <Router-Link to="/product" class="btn-primary">Lihat Produk</Router-Link>
      </section>
       <section class="features">
        <div class="card">
          <div class="icon">✨</div>
          <h3>Produk Berkualitas</h3>
          <p>Kami menyediakan produk dengan kualitas terbaik untuk kepuasan para pelanggan.</p>
        </div>
        <div class="card">
          <div class="icon">🤞</div>
          <h3>Harga Terjangkau</h3>
          <p>Dapatkan produk favorit Anda dengan harga yang terjangkau.</p>
        </div>
        <div class="card">
          <div class="icon">😅</div>
          <h3>Layanan Pelanggan</h3>
          <p>Tim kami siap melayani Anda dengan pertanyaan dan masalah yang mungkin timbul.</p>
        </div>
        </section>
    </div>   -->
  <!-- </template> -->

  <!-- <script setup>
  // Tidak ada logic khusus untuk landing page statis ini
  </script>

  <style scoped>
  video {
 margin-top: 16px;
 border-radius: 10px;
 display: block;
}

  .LandingPage {
    font-family: 'Cursive', Lucida Handwriting, sans-serif;
    color: #040303;
  }

  .hero {
    background: linear-gradient(135deg, #17002f, #88b4ff);
    color: #ffffff;
    padding: 80px 20px;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }

  .hero p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 24px;
  }

  .btn-primary {
    display: inline-block;
    background: #ff2713;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 14px 32px;
    border-radius: 999px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .features {
    display: flex;
    justify-content: space-around;
    padding: 60px 20px;
    gap: 24px;
    flex-wrap: wrap;
  }

  .card {
    background: #ece6e6;
    border-radius: 12px;
    padding: 24px;
    width: 280px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-15px);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
   
  }
  </style> -->
  <script setup>
import LandingCard from '../components/LandingCard.vue'
  import PropotitionCard from '../components/PropotitionCard.vue'

  const daftarPropotition = [
    { id: 1, nama: 'Produk Berkualitas', harga: 'Kami menyediakan produk dengan kualitas terbaik untuk kepuasan para pelanggan.', gambar: '✨' },
    { id: 2, nama: 'Harga Terjangkau', harga: 'Dapatkan produk favorit Anda dengan harga yang terjangkau.', gambar: '🤞' },
    { id: 3, nama: 'Layanan Pelanggan', harga: 'Tim kami siap melayani Anda dengan pertanyaan dan masalah yang mungkin timbul.', gambar: '😅' }
  ]
  </script>

  <template>
    <main>
      <landingCard/>
      <div class="features">
        <propotitionCard 
        v-for="propotition in daftarPropotition" 
        :key="propotition.id" 
        :nama="propotition.nama" 
        :harga="propotition.harga" 
        :gambar="propotition.gambar"
        />
      </div>
    </main>
    <video controls width="480" muted loop>
  <source src="/video/promo-toko.mp4" type="video/mp4" />
  Browser kamu tidak mendukung pemutaran video.
  </video>
  </template>

  <style scoped>
    video {
 margin-top: 16px;
 border-radius: 10px;
 display: block;
}
  .hero {
    background: linear-gradient(135deg, #17002f, #88b4ff);
    color: #ffffff;
    padding: 80px 20px;
    text-align: center;
  }
  .features {
    display: flex;
    justify-content: space-around;
    padding: 60px 20px;
    gap: 24px;
    flex-wrap: wrap;
  }
  </style>