<template>
    <div class="hero">
        <div class="card">
        <h1>Selamat Datang di Onlineshop Kami!</h1>
        <p>Temukan berbagai produk berkualitas dengan harga terjangkau.</p>
        <RouterLink to="/product" class="btn-grad">Lihat Produk</RouterLink>
        </div>
    </div>
    </template>

    <style scoped>
    .btn-grad {
  background-image: linear-gradient(to right, #4CB8C4 0%, #3CD3AD 51%, #4CB8C4 100%);
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
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
    .hero {
        margin-top: 20px;
        background: linear-gradient(135deg, #17002f, #88b4ff);
        color: #ffffff;
        padding: 80px 20px;
        text-align: center;
    }
    .card {
        margin-left: auto;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 40px;
        border-radius: 10px;
        display: inline-block;
    }
    .button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ffffff;
        color: #17002f;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    </style>
