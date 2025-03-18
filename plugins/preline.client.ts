import "preline";

declare global {
  interface Window {
    HSStaticMethods: {
      autoInit(): void;
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    window.HSStaticMethods.autoInit()
  })
}) 