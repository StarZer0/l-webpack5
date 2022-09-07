<template>
    <div :class="['main', themeBlack ? 'black' : 'white']">Hello World!</div>
    <br />
    <button @click="toggleTheme">toggle theme</button>
</template>

<script setup>
import {ref} from 'vue'

const themeBlack = ref(false)
const toggleTheme = () => themeBlack.value = !themeBlack.value
</script>

<style>
.main {
    display: inline-block;
    padding: 10px 12px;
}
.black {
    background: #000;
    color: #fff;
}
.white {
    background: #ddd;
    color: #000;
}

button {
    display: inline-block;
    margin-top: 20px;
    border: 1px solid #eaeaea;
    border-radius: 2px;
    padding: 4px 6px;
    background: #fff;
    color: #000;
}

button:hover {
    background: #eaeaea;
}
</style>