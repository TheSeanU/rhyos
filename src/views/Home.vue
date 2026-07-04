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
  /* Omit background animation for mobile improvements */
  --x: calc(var(--posX, 0) * 1px);
  --y: calc(var(--posY, 0) * 1px);

  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  margin: 0;
  padding-block: max(1.5rem, env(safe-area-inset-top)) max(1.5rem, env(safe-area-inset-bottom));
  padding-inline: max(1.5rem, env(safe-area-inset-left)) max(1.5rem, env(safe-area-inset-right));
  min-height: 100vh;
  min-height: 100dvh;
  /* No background animation for mobile focus */
  background: rgb(30, 36, 45); /* Subtle fallback background */
}

@media (hover: none) and (pointer: coarse) {
  .home-page {
    --posX: 24;
    --posY: 16;
  }
}

.greeting-card {
  flex-shrink: 0;
  width: min(100%, 28rem);
  margin-block: auto;
  padding: 2rem;
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 1.25rem;
  background: rgb(255 255 255 / 0.12);
  -webkit-backdrop-filter: blur(1.25rem);
  backdrop-filter: blur(1.25rem);
  box-shadow: 0 1.5rem 3rem rgb(0 0 0 / 0.2);
  color: rgb(255 255 255);
  font-family: system-ui, sans-serif;
  transition: width 0.3s, padding 0.3s;
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
  padding: 0.625rem 1rem;
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.08);
  color: rgb(255 255 255);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  touch-action: manipulation;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.greeting-card__social-link:hover {
  background: rgb(255 255 255 / 0.16);
}

/* Improved mobile styling (ignore background animation) */
@media (max-width: 600px) {
  .home-page {
    align-items: flex-start;
    padding-block: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-bottom));
    padding-inline: max(0.5rem, env(safe-area-inset-left)) max(0.5rem, env(safe-area-inset-right));
  }

  .greeting-card {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    margin: 1.25rem 0;
    padding: 1.25rem;
    border-radius: 1rem;
    box-shadow: 0 0.75rem 1.5rem rgb(0 0 0 / 0.16);
  }

  .greeting-card__logo {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }

  .greeting-card__title {
    font-size: 1.5rem;
  }

  .greeting-card__role {
    font-size: 1.1rem;
  }

  .greeting-card__intro {
    font-size: 0.95rem;
  }

  .greeting-card__section-title {
    font-size: 0.69rem;
  }

  .greeting-card__social-list {
    gap: 0.5rem;
  }

  .greeting-card__social-link {
    font-size: 0.78rem;
    padding: 0.5rem 0.8rem;
  }
}

@media (max-width: 400px) {
  .greeting-card {
    padding: 0.75rem;
    border-radius: 0.7rem;
  }
  .greeting-card__title {
    font-size: 1.1rem;
  }
  .greeting-card__role {
    font-size: 0.98rem;
  }
  .greeting-card__logo {
    width: 2.2rem;
    height: 2.2rem;
  }
  .greeting-card__intro {
    font-size: 0.87rem;
  }
}
</style>
