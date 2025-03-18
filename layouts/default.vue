<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <FooterSection />
  </div>
</template> 