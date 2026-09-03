<script setup>
defineProps(['nama', 'harga', 'gambar'])
</script>

<template>
    <div class="card">
        <div class="icon"><p>{{ gambar }}</p></div>
        <h1>{{ nama }}</h1>
        <p>{{ harga }}</p>
    </div>
</template>

<style scoped>
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px)
}
.icon {
    
    font-size: 2rem;
    margin-bottom: 16px;
}
</style>