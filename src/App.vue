<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    loadTwitterWidget()
  })
})

const loadTwitterWidget = () => {
  if (window.twttr && typeof window.twttr.load === 'function') {
    window.twttr.load()
  } else {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    script.setAttribute('charset', 'utf-8')
    script.setAttribute('async', 'true')
    document.head.appendChild(script)
  }
}
</script>

<template>
  <div>
    <header>
      <nav class="nav-container">
        <a class="navbar-brand" href="#">Teri's Playground</a>
        <ul class="nav-links">
          <li><a href="#social-medias">Links</a></li>
          <li><a href="#art">Art</a></li>
        </ul>
        <div>
            <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fterichyou.github.io%2F&label=Visitors%3A&labelColor=%23855858&countColor=%23dbc7a2" />
        </div>
      </nav>
    </header>

    <main>
      <section id="social-medias">
        <h2>Social Medias</h2>
        
        <div class="flex flex-col gap-4 max-w-[450px] mx-auto">
          <a href="https://twitter.com/TeriChang21" class="block text-center bg-[#a76666] hover:bg-[#855858] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" target="_blank">
            Twitter(X)
          </a>
          <a href="https://www.instagram.com/teri_chyou" class="block text-center bg-[#a76666] hover:bg-[#855858] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" target="_blank">
            Instagram
          </a>
          <a href="https://www.threads.com/@teri_chyou" class="block text-center bg-[#a76666] hover:bg-[#855858] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" target="_blank">
            Threads
          </a>
          <a href="https://www.facebook.com/teri.chyou" class="block text-center bg-[#a76666] hover:bg-[#855858] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" target="_blank">
            Facebook
          </a>
          <a href="https://www.youtube.com/@TeriChyou21" class="block text-center bg-[#a76666] hover:bg-[#855858] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" target="_blank">
            YouTube
          </a>
        </div>
      </section>

      <div class="relative flex py-6 items-center">
        <div class="flex-grow border-t border-gray-200"></div>
        <span class="flex-shrink mx-4 text-gray-400 text-xs tracking-widest">GALLERY</span>
        <div class="flex-grow border-t border-gray-200"></div>
      </div>

      <section id="art">
        <h2>Art Gallery</h2>
        <div class="max-w-[500px] mx-auto overflow-hidden rounded-xl shadow-sm border border-gray-100">
          <blockquote class="twitter-tweet">
            <a href="https://twitter.com/TeriChang21/status/1872262195847082282">Twitter Art</a>
          </blockquote>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 TeriChyou. All rights reserved.</p>
    </footer>
  </div>
</template>