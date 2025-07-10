<script setup lang="ts">
const { open, close, acceptAll, declineAll, savePreferences, showDetails, hideDetails, togglePreference, toggleCookie, setLanguage } = window.cookiedock;

console.log(window.cookiedock);
console.log(window);
</script>

<template>
    <div class="page-container">
        <h1 class="page-title">Cookiedock API Demo</h1>

        <section class="card-section">
            <h2 class="section-title">Basic Banner Controls</h2>
            <div class="cards-grid">
                <div class="card basic-card">
                    <button @click="open()">Open</button>
                    <p class="explanation">Resets consent choices and reopens the cookie consent banner to allow users
                        to make new
                        choices</p>
                </div>

                <div class="card basic-card">
                    <button @click="close()">Close</button>
                    <p class="explanation">Closes the cookie consent banner without saving any changes to consent
                        preferences</p>
                </div>

                <div class="card basic-card">
                    <button @click="acceptAll()">Accept all</button>
                    <p class="explanation">Accepts all cookie categories (necessary, analytics, advertising) and closes
                        the banner
                    </p>

                    <span>in development</span>
                </div>

                <div class="card basic-card">
                    <button @click="declineAll()">Decline all</button>
                    <p class="explanation">Declines all optional cookie categories, only keeping necessary cookies, and
                        closes the
                        banner</p>

                    <span>in development</span>
                </div>

                <div class="card basic-card">
                    <button @click="savePreferences()">Save preferences</button>
                    <p class="explanation">Saves the current cookie preference selections and closes the banner</p>

                    <span>in development</span>
                </div>
            </div>
        </section>

        <section class="card-section">
            <h2 class="section-title">Detail Controls</h2>
            <div class="cards-grid">
                <div class="card detail-card">
                    <button @click="showDetails()">Show details</button>
                    <p class="explanation">Opens the detailed cookie preferences dialog with more information about each
                        cookie
                        category</p>
                </div>

                <div class="card detail-card">
                    <button @click="hideDetails()">Hide details</button>
                    <p class="explanation">Closes the detailed cookie preferences dialog without saving changes</p>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
/* Page layout */
.page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
}

.page-title {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.2rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 15px;
}

.page-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4caf50, #2196f3, #ff9800);
    border-radius: 2px;
}

/* Section styling */
.card-section {
    margin-bottom: 40px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 20px;
}

.section-title {
    font-size: 1.5rem;
    color: #444;
    margin-bottom: 20px;
    padding-left: 12px;
    border-left: 5px solid #2196f3;
}

/* Card grid layout */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.language-grid {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}

/* Button styling */
button {
    padding: 10px 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Card styling */
.card {
    background-color: #fff;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    border-top: 4px solid transparent;
    height: 100%;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.explanation {
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.5;
    color: #555;
    flex-grow: 1;
}

/* Card type variations */
.basic-card {
    border-top-color: #4caf50;
}

.basic-card button {
    background-color: #4caf50;
}

.basic-card button:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
}

.detail-card {
    border-top-color: #2196f3;
}

.detail-card button {
    background-color: #2196f3;
}

.detail-card button:hover {
    background-color: #0b7dda;
    box-shadow: 0 4px 8px rgba(33, 150, 243, 0.3);
}

.toggle-card {
    border-top-color: #ff9800;
}

.toggle-card button {
    background-color: #ff9800;
}

.toggle-card button:hover {
    background-color: #e68a00;
    box-shadow: 0 4px 8px rgba(255, 152, 0, 0.3);
}

.cookie-card {
    border-top-color: #9c27b0;
}

.cookie-card button {
    background-color: #9c27b0;
}

.cookie-card button:hover {
    background-color: #7b1fa2;
    box-shadow: 0 4px 8px rgba(156, 39, 176, 0.3);
}

.language-card {
    border-top-color: #00bcd4;
}

.language-card button {
    background-color: #00bcd4;
}

.language-card button:hover {
    background-color: #00a5bb;
    box-shadow: 0 4px 8px rgba(0, 188, 212, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 15px;
    }

    .page-title {
        font-size: 1.8rem;
    }

    .section-title {
        font-size: 1.3rem;
    }
}
</style>
