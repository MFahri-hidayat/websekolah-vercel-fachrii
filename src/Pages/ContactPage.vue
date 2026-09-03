<template>
  <div class="ContactPage">
     <section class="hero">
        <h1>Hubungi Kami</h1>
        <p>Punya pertanyaan atau masukan? Kami ingin mendengar dari Anda!</p>
      </section>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Pesan:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Kirim</button>
    </form>
  </div>
  </template>

  <style scoped>
  .ContactPage {
    font-family: 'Segoe UI', sans-serif;
    color: #040303;
    background: #f9f9f9;
    min-height: 100vh;
    padding: 40px 20px;
  }

  .hero {
    background: linear-gradient(135deg, #3d1469, #8eb4f5);
    color: #f5ecec;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 40px 20px;
    text-align: center;
    margin-bottom: 30px;
  }

  .hero h1 {
    margin: 0 0 10px;
    font-size: 2.5rem;
    color: #ffffff;
  }

  .hero p {
    margin: 0;
    color: #fcfcfc;
    font-size: 1rem;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    margin-bottom: 10px;
    font-weight: 600;
    color: #111827;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 1rem;
    box-sizing: border-box;
    background: #fff;
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }

  button {
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button:hover {
    background: #1d4ed8;
  }
  </style>
  }