<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="text-xl font-bold text-gray-800">My Website</div>
        <div class="space-x-4">
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template> 