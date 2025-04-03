<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <FooterSection />
  </div>
</template> 

<script setup>
import NavBar from '@/components/navbar/NavBar.vue';
import FooterSection from '@/components/footer/FooterSection.vue';
</script>



