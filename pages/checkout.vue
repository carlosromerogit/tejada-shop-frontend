<script setup lang="ts">
definePageMeta({ layout: "default" });

const columns = [
  {
    key: "image",
    label: "",
  },
  {
    key: "details",
    label: "Producto",
  },
  
  {
    key: "quantity",
    label: "Cantidad",
  },
  {
    key: "price",
    label: "Precio",
  },
];

const people = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg",
    name: "Lindsay Walton",
    price: "300",
    status: "en stock",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg",
    name: "Courtney Henry",
    price: "300",
    status: "en stock",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg",
    name: "Tom Cook",
    price: "300",
    status: "en stock",
  },
];

</script>

<template>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-1">Pago</h1>
      <p class="text-slate-600 dark:text-slate-400">Procedimiento de pago</p>
    </div>
    <div class="flex flex-col md:flex-row  rounded-md">
    <section class="bg-stone-100 dark:bg-slate-900 grow rounded-md">
    <div class=" ">
        <div class="px-4">
        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form action="#" class="w-full  lg:max-w-xl ">
          <div class="mb-6 grid grid-cols-2 gap-4">
            <div class="col-span-2 sm:col-span-1">
              <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Nombre completo*</label>
              <UInput color="transparent"></UInput>
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Número de tarjeta* </label>
              <UInput color="transparent"></UInput>
            </div>

            <div>
              <label for="card-expiration-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Fecha de expiración* </label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg class="h-4 w-4 text-gray-000 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <UInput color="transparent" placeholder="12/12"/>
              </div>
            </div>
            <div>
              <label for="cvv-input" class="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                CVV*
                <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" class="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="cvv-desc" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  The last 3 digits on back of card
                    <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </label>
                <UInput color="transparent" placeholder="***" />
            </div>
            </div>

            <UButton block size="md">Pagar ahora</UButton>
        </form>

        <div class="mt-6 grow sm:mt-8 lg:mt-0">
          
            <div class="dark:bg-slate-800/50 rounded-lg">
                <UTable :columns="columns" :rows="people" >
                    <template #image-data="{row}">
                        <p>Image</p>
                    </template>
    
                    <template #details-data="{row}">
                        <p>Details</p>
                    </template>
    
                    <template #quantity-data="{row}">
                        <p>Quantity</p>
                    </template>
    
                    <template #price-data="{row}">
                        <p>Price</p>
                    </template>
                </UTable>

                <div class="space-y-4 p-6 mt-2 border-t-[1px] dark:border-slate-800">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="">Subtotal</dt>
                      <dd class="font-semibold">$6,592.00</dd>
                    </dl>
      
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="">Descuento</dt>
                      <dd class="font-semibold">-$299.00</dd>
                    </dl>
      
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="">Impuesto</dt>
                      <dd class="font-semibold">$99</dd>
                    </dl>
                  </div>
      
                  <dl class="flex items-center justify-between gap-4 border-t border-stone-200 pt-2 dark:border-slate-800">
                    <dt class="font-bold ">Total</dt>
                    <dd class="font-bold ">$7,191.00</dd>
                  </dl>
                </div>
            </div>
          



          <div class="my-4 flex items-center justify-center gap-8">
            <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
            <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
            <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
            <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
            <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
            <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
          </div>
        </div>
      </div>


    </div>
  </div>
</section>

        

      
    </div>
  </main>
</template>
