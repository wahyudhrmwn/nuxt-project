<template>
  <main class="max-w-6xl mx-auto py-8 px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :content="card.content"
      />
    </div>
  </main>
</template>

<script setup>
const cards = [
  {
    title: 'Card 1',
    content: 'This is a sample card with some content. You can add more text or other elements here.'
  },
  {
    title: 'Card 2',
    content: 'Another card with different content. Feel free to customize these cards.'
  },
  {
    title: 'Card 3',
    content: 'The last card in our simple layout. You can add images, buttons, or other components.'
  }
]
</script> 