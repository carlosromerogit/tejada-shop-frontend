<template>
  <div
    class="sticky top-0 z-50 w-full border-b border-border/40 bg-stone-100/95 backdrop-blur supports-[backdrop-filter]:bg-stone-100/60 dark:border-border shadow"
  >
    <div class="flex justify-between items-center py-4 px-9">
      <div class="flex items-center">
        <span class="text-4xl font-semibold text-stone-800 cursor-pointer"
          >𝕿𝖊𝖏𝖆𝖉𝖆</span
        >
      </div>

      <div class="flex ml-2">
        <Button
          variant="ghost"
          class="hover:shadow-lg hover:shadow-stone-300 hover:scale-110 transition-all"
          >Inicio</Button
        >
        <Button
          variant="ghost"
          class="hover:shadow-lg hover:shadow-stone-300 hover:scale-110 transition-all"
          >Tienda</Button
        >
        <!-- <div
          class="flex cursor-pointer items-center gap-1 rounded-md py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
        >
          <i class="pi pi-shop"></i>
          <span class="text-sm font-medium">Tienda</span>
        </div> -->

        <Button
          variant="ghost"
          class="hover:shadow-lg hover:shadow-stone-300 hover:scale-110 transition-all"
          >Favoritos</Button
        >
        <!-- <div
          class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
        >
          <div class="relative">
            <i class="pi pi-heart"></i>
          </div>
          <span class="text-sm font-medium">Favoritos</span>
        </div> -->

        <Button
          variant="ghost"
          class="hover:shadow-lg hover:shadow-stone-300 hover:scale-110 transition-all"
          >Contacto</Button
        >
        <!-- <div
          class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
        >
          <div class="relative">
            <i class="pi pi-shopping-cart"></i>
          </div>
          <span class="text-sm font-medium">Carrito</span>
        </div> -->

        <Button
          variant="ghost"
          class="hover:shadow-lg hover:shadow-stone-300 hover:scale-110 transition-all"
          >Iniciar sesión</Button
        >
        <!-- <div
          class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
        >
          <span class="text-sm font-medium">Iniciar sesión</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
