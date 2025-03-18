<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  const preline = await import("preline");
  preline.default();
});
</script>
