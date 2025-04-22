<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Welcome to the Cookie Dock</h1>
                <p>
                    This is a simple cookie dock that allows you to manage your cookies.
                    You can add, remove, and view cookies in your browser.
                </p>
                <button class="btn btn-primary" @click="openCookiedock()">Reopen the cookie</button>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
// import { onMounted } from 'vue';

declare global {
    interface Window {
        openCookiedock: () => void;
    }
}

const { openCookiedock } = window;

// onMounted(openCookiedock);
</script>


<style scoped>
.container {
    margin-top: 20px;
}

.row {
    margin-bottom: 20px;
}

.col {
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.btn {
    font-size: 1.2rem;
    padding: 10px 20px;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.btn-primary:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-primary:active {
    background-color: #004085;
}

.btn-primary:disabled {
    background-color: #007bff;
    opacity: 0.65;
    cursor: not-allowed;
}
</style>