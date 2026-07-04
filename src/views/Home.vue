<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'

interface SocialLink {
  label: string
  href: string
}

const pageRef = useTemplateRef<HTMLElement>('pageRef')

const contact = {
  name: 'Sean',
  role: 'Developer',
  information: 'I build things for the web. This is my little corner of the internet.',
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/theSeanU' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sean-unett-701014384/' },
]

function handlePointerMove(event: PointerEvent): void {
  const element = pageRef.value
  if (!element) {
    return
  }

  const { clientX, clientY } = event
  const { top, left, width, height } = element.getBoundingClientRect()

  element.style.setProperty('--posX', String(clientX - left - width / 2))
  element.style.setProperty('--posY', String(clientY - top - height / 2))
}

onMounted(() => {
  pageRef.value?.addEventListener('pointermove', handlePointerMove)
})

onUnmounted(() => {
  pageRef.value?.removeEventListener('pointermove', handlePointerMove)
})
</script>

<template>
  <div ref="pageRef" class="home-page">
    <main class="greeting-card">
      <img class="greeting-card__logo" src="/developer-logo.png" alt="Sean developer logo" />
      <p class="greeting-card__eyebrow">Hello, world —</p>
      <h1 class="greeting-card__title">
        I'm {{ contact.name }},
        <span class="greeting-card__role">{{ contact.role }}</span>
      </h1>
      <p class="greeting-card__intro">
        {{ contact.information }}
      </p>
      <section class="greeting-card__section" aria-labelledby="social-heading">
        <h2 id="social-heading" class="greeting-card__section-title">Find me online</h2>
        <ul class="greeting-card__social-list">
          <li v-for="link in socialLinks" :key="link.label">
            <a
              class="greeting-card__social-link"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home-page {
  --x: calc(var(--posX, 0) * 1px);
  --y: calc(var(--posY, 0) * 1px);

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 1.5rem;
  background-image:
    linear-gradient(115deg, rgb(211 255 215), rgb(0 0 0)),
    radial-gradient(
      90% 100% at calc(50% + var(--x)) calc(0% + var(--y)),
      rgb(200 200 200),
      rgb(22 0 45)
    ),
    radial-gradient(
      100% 100% at calc(80% - var(--x)) calc(0% - var(--y)),
      rgb(250 255 0),
      rgb(36 0 0)
    ),
    radial-gradient(
      150% 210% at calc(100% + var(--x)) calc(0% + var(--y)),
      rgb(20 175 125),
      rgb(0 10 255)
    ),
    radial-gradient(
      100% 100% at calc(100% - var(--x)) calc(30% - var(--y)),
      rgb(255 77 0),
      rgb(0 200 255)
    ),
    linear-gradient(60deg, rgb(255 0 0), rgb(120 86 255));
  background-blend-mode: overlay, overlay, difference, difference, difference, normal;
}

.greeting-card {
  width: min(100%, 28rem);
  padding: 2rem;
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 1.25rem;
  background: rgb(255 255 255 / 0.12);
  backdrop-filter: blur(1.25rem);
  box-shadow: 0 1.5rem 3rem rgb(0 0 0 / 0.2);
  color: rgb(255 255 255);
  font-family: system-ui, sans-serif;
}

.greeting-card__logo {
  display: block;
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 1rem 2rem rgb(0 0 0 / 0.16);
}

.greeting-card__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.75);
}

.greeting-card__title {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
}

.greeting-card__role {
  display: block;
  margin-top: 0.25rem;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 500;
  color: rgb(255 255 255 / 0.9);
}

.greeting-card__intro {
  margin: 0 0 1.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: rgb(255 255 255 / 0.85);
}

.greeting-card__section + .greeting-card__section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgb(255 255 255 / 0.15);
}

.greeting-card__section-title {
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.6);
}

.greeting-card__link {
  font-size: 1rem;
  font-weight: 500;
  color: rgb(255 255 255);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.greeting-card__link:hover,
.greeting-card__social-link:hover {
  opacity: 0.75;
}

.greeting-card__social-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.greeting-card__social-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.08);
  color: rgb(255 255 255);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.greeting-card__social-link:hover {
  background: rgb(255 255 255 / 0.16);
}
</style>
