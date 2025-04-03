<template>
  <div class="pages-index pt-16">
    <div
      class="overflow-hidden bg-gradient-to-b from-violet-600/[.15] via-transparent"
    >
      <div class="min-h-[calc(100vh-4rem)]">
        <!-- Section Slider -->
        <section
          class="page-index__section-slider w-full mx-auto bg-green-500 text-center h-[300px]"
        >
          <swiper
            :pagination="{
              dynamicBullets: true,
              clickable: true,
            }"
            :modules="modules"
            class="w-full h-full bg-gradient-to-r from-[#134e5e] to-[#71b280]"
          >
            <swiper-slide
              v-for="(slide, index) in slides"
              :key="index"
              class="text-left text-lg bg-transparent block"
            >
              <div class="flex h-full px-12">
                <div
                  class="flex-1 flex items-center justify-center overflow-hidden"
                >
                  <img
                    :src="slide.image"
                    :alt="slide.title"
                    class="w-full h-[250px] object-cover rounded-lg shadow-md"
                  />
                </div>
                <div class="flex-1 p-6 flex flex-col justify-center text-white">
                  <span
                    class="text-sm uppercase text-[#9EFFB3] font-semibold mb-2"
                    >{{ slide.category }}</span
                  >
                  <h2 class="text-2xl font-bold text-white mb-3">
                    {{ slide.title }}
                  </h2>
                  <p class="text-base text-white/85 mb-5 leading-relaxed">
                    {{ slide.description }}
                  </p>
                  <button
                    @click="navigateToDetail(slide.id)"
                    class="self-start px-5 py-2.5 bg-[#4CAF50] text-white border-none rounded font-semibold cursor-pointer transition-colors hover:bg-[#388E3C]"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            </swiper-slide>

            <div class="swiper-pagination"></div>
          </swiper>
        </section>

        <!-- Section Info -->
        <section class="page-index__section-info w-full py-6 text-center">
          <div class="flex items-center mx-12 justify-center">
            <div class="flex flex-1 min-h-16 items-center">
              <div
                class="flex-initial w-3/12 h-16 content-center justify-items-center"
              >
                <div
                  class="w-12 h-12 rounded-full bg-gray-200 justify-items-center items-center content-center"
                >
                  <Truck class="text-green-700" />
                </div>
              </div>
              <div
                class="flex-initial w-9/12 h-16 block justify-center text-start text-wrap"
              >
                <div class="text-base font-bold">Free Shipping and Return</div>
                <div class="text-sm font-normal">
                  For all orders over $100, we offer free shipping and return
                  services.
                </div>
              </div>
            </div>
            <div class="flex flex-1 min-h-16 items-center">
              <div
                class="flex-initial w-3/12 h-16 content-center justify-items-center"
              >
                <div
                  class="w-12 h-12 rounded-full bg-gray-200 justify-items-center items-center content-center"
                >
                  <ShieldAlert class="text-green-700" />
                </div>
              </div>
              <div
                class="flex-initial w-9/12 h-16 block justify-center text-start text-wrap"
              >
                <div class="text-base font-bold">Secure Payment</div>
                <div class="text-sm font-normal">
                  We ensure secure payment with SSL encryption.
                </div>
              </div>
            </div>
            <div class="flex flex-1 min-h-16 items-center">
              <div
                class="flex-initial w-3/12 h-16 content-center justify-items-center"
              >
                <div
                  class="w-12 h-12 rounded-full bg-gray-200 justify-items-center items-center content-center"
                >
                  <HandCoins class="text-green-700" />
                </div>
              </div>
              <div
                class="flex-initial w-9/12 h-16 block justify-center text-start text-wrap"
              >
                <div class="text-base font-bold">Money Back Guarantee</div>
                <div class="text-sm font-normal">
                  Returning items is easy. We offer a 30-day return policy.
                </div>
              </div>
            </div>
            <div class="flex flex-1 min-h-16 items-center">
              <div
                class="flex-initial w-3/12 h-16 content-center justify-items-center"
              >
                <div
                  class="w-12 h-12 rounded-full bg-gray-200 justify-items-center items-center content-center"
                >
                  <PhoneCall class="text-green-700" />
                </div>
              </div>
              <div
                class="flex-initial w-9/12 h-16 block justify-center text-start text-wrap"
              >
                <div class="text-base font-bold">24/7 Customer Support</div>
                <div class="text-sm font-normal">
                  Friendly customer support available 24/7.
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Features -->
        <section
          class="page-index__section-features w-full bg-yellow-500 text-center"
        >
          <div class="grid grid-cols-3 gap-4 py-6 px-12">
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWUlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Feature 1">
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="px-4 py-2 text-center">
                  <h3 class="text-xl font-bold text-white">Feature One</h3>
                  <p class="text-sm text-white mt-2">Discover our amazing feature one</p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Feature 2">
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="px-4 py-2 text-center">
                  <h3 class="text-xl font-bold text-white">Feature Two</h3>
                  <p class="text-sm text-white mt-2">Explore our innovative feature two</p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg">
              <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Feature 3">
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="px-4 py-2 text-center">
                  <h3 class="text-xl font-bold text-white">Feature Three</h3>
                  <p class="text-sm text-white mt-2">Learn about our feature three</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Products -->
        <section
          class="page-index__section-products-trending w-full bg-yellow-500 text-center"
        >
          <h1
            class="text-4xl font-bold bg-gray-500 mx-12 text-gray-800 dark:text-gray-200"
          >
            Build Your Next Project Faster
          </h1>
        </section>

        <!-- Section Products -->
        <section
          class="page-index__section-products-spesial-offer w-full bg-yellow-500 text-center"
        >
          <h1
            class="text-4xl font-bold bg-gray-500 mx-12 text-gray-800 dark:text-gray-200"
          >
            Build Your Next Project Faster
          </h1>
        </section>

        <!-- Section Products -->
        <section
          class="page-index__section-products-top-selling w-full bg-yellow-500 text-center"
        >
          <h1
            class="text-4xl font-bold bg-gray-500 mx-12 text-gray-800 dark:text-gray-200"
          >
            Build Your Next Project Faster
          </h1>
        </section>

        <!-- Section Articles  -->
        <section
          class="page-index__section-articles w-full bg-yellow-500 text-center"
        >
          <h1
            class="text-4xl font-bold bg-gray-500 mx-12 text-gray-800 dark:text-gray-200"
          >
            Build Your Next Project Faster
          </h1>
        </section>

        <!-- Section Questions -->
        <section
          class="page-index__section-questions w-full bg-yellow-500 text-center"
        >
          <h1
            class="text-4xl font-bold bg-gray-500 mx-12 text-gray-800 dark:text-gray-200"
          >
            Build Your Next Project Faster
          </h1>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Truck, ShieldAlert, HandCoins, PhoneCall } from "lucide-vue-next";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// Define modules for Swiper
const modules = [Pagination];
// Data slides dengan URL gambar yang bisa dirender langsung
const slides = ref([
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Produk Terbaru",
    title: "Smartphone XYZ Series 12",
    description:
      "Smartphone terbaru dengan teknologi kamera terbaik dan performa luar biasa untuk semua kebutuhan Anda.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Promo Spesial",
    title: "Laptop UltraBook Pro",
    description:
      "Laptop premium dengan baterai tahan 18 jam dan desain ultra tipis. Dapatkan diskon 20% minggu ini!",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Paling Populer",
    title: "Wireless Headphone XZ-300",
    description:
      "Nikmati musik dengan kualitas suara terbaik dan noise cancelling. Nyaman dipakai sepanjang hari.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Tren Terbaru",
    title: "SmartWatch Health Plus",
    description:
      "Monitor kesehatan dan fitness Anda dengan SmartWatch paling canggih. Fitur deteksi detak jantung & oksigen darah.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Edisi Terbatas",
    title: "Kamera Mirrorless Pro X",
    description:
      "Kamera mirrorless dengan sensor terbaik di kelasnya. Sempurna untuk fotografi profesional.",
  },
]);

// Function to navigate to detail page
const navigateToDetail = (id) => {
  // Replace with your actual navigation logic
  console.log(`Navigating to product detail with ID: ${id}`);
  // For example with vue-router
  // router.push(`/product/${id}`);
};

// Kode ini membantu memastikan pagination Swiper terinisialisasi dengan benar
// Ini berguna jika pagination tidak muncul dengan benar saat pertama kali dimuat
// Jika slider berfungsi dengan baik tanpa kode ini, bisa dihapus
// Namun jika ada masalah dengan pagination dots, sebaiknya dipertahankan
// onMounted(() => {
//   // Force update pagination after component is mounted
//   nextTick(() => {
//     const swiperInstance = document.querySelector('.mySwiper')?.__swiper__;
//     if (swiperInstance) {
//       swiperInstance.pagination.update();
//       swiperInstance.pagination.render();
//     }
//   });
// });
</script>

<style scoped>
/* Pagination styling updated to match green theme */
:deep(.swiper-pagination-bullet) {
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
}

:deep(.swiper-pagination-bullet-active) {
  background: white;
}

:deep(.swiper-pagination-bullet-active-main) {
  background: white;
}

:deep(.swiper-pagination-bullet-active-prev),
:deep(.swiper-pagination-bullet-active-next) {
  transform: scale(0.9);
}

:deep(.swiper-pagination-bullet-active-prev-prev),
:deep(.swiper-pagination-bullet-active-next-next) {
  transform: scale(0.8);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .slide-container {
    flex-direction: column;
  }

  .slide-image,
  .slide-info {
    flex: none;
    width: 100%;
  }

  .slide-image {
    height: 200px;
  }

  .slide-info {
    padding: 15px 0;
  }
}
</style>
