<template>
  <div class="pt-16">
    <!-- Hero Section dengan background gradient -->
    <div class="relative overflow-hidden bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <!-- Title -->
        <div class="mt-5 max-w-xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Build Your Next Project <span class="text-blue-600">Faster</span>
          </h1> 
        </div>

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-gray-400">Professional website template with modern design and powerful features.</p>
        </div>

        <!-- Buttons -->
        <div class="mt-8 gap-3 flex justify-center">
          <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg hover:shadow-xl hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-8 dark:focus:ring-offset-gray-800" href="#">
            Get started
            <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white">Features</h2>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Everything you need to build your next project</p>
      </div>

      <!-- Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(card, index) in cards" :key="index" class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="h-52 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-t-xl">
            <svg class="w-28 h-28 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div class="p-4 md:p-6 flex-grow">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              {{ card.content }}
            </p>
          </div>
          <div class="mt-auto border-t border-gray-200 dark:border-gray-700">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Learn more
              <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Modern Design",
    content: "Clean and modern UI components built with Tailwind CSS and Preline UI.",
  },
  {
    title: "Responsive Layout",
    content: "Fully responsive design that looks great on all devices and screen sizes.",
  },
  {
    title: "Easy Integration",
    content: "Simple to customize and integrate with your existing Vue.js projects.",
  },
];
</script>
