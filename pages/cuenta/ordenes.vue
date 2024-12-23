<template>
  <div>
    <div class="mb-4"></div>
    <div class="max-w-sm">
      <UInput placeholder="Buscar..." color="transparent" size="md"></UInput>
    </div>
    <div class="py-2"></div>
    <div class="flex flex-col gap-10">
      <article class="bg-stone-100 dark:bg-slate-900 rounded-lg">
        <header
          class="flex justify-between items-center px-8 py-4 border-b border-stone-300 dark:border-slate-800"
        >
          <div class="flex items-center gap-2">
            <div
              class="flex gap-1 bg-stone-200 dark:bg-slate-800 px-4 rounded-lg"
            >
              <p class="font-bold">Orden</p>
              <p class="font-bold text-blue-500">#1234</p>
            </div>
            <p class="text-sm">Orden creada el Jueves 17, Noviembre 2024</p>
          </div>
          <!-- <button>Rastrear orden</button> -->
        </header>
        <section class="rounded-lg px-8 pt-4">
          <ul class="space-y-4">
            <li class="flex gap-8 border-b border-slate-800 pb-4">
              <div class="flex">
                <div class="bg-slate-800 aspect-[3/4] h-24"></div>
                <div class="flex flex-col justify-between p-2">
                  <p class="">Product name</p>
                  <div class="flex gap-2 text-sm">
                    <p>Size: S</p>
                    <p>Cantidad: 3</p>
                    <p class="font-semibold">Precio: $200 RD</p>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <p class="text-sm">Estado</p>
                <p class="font-semibold text-orange-500">Enviado</p>
              </div>
              <div class="p-2">
                <p class="text-sm">Fecha de entrega esperada</p>
                <p class="font-semibold">24 de diciembre 2024</p>
              </div>
            </li>
            <li class="flex gap-8 border-b border-slate-800 pb-4">
              <div class="flex">
                <div class="bg-slate-800 aspect-[3/4] h-24"></div>
                <div class="flex flex-col justify-between p-2">
                  <p class="">Product name</p>
                  <div class="flex gap-2 text-sm">
                    <p>Size: S</p>
                    <p>Cantidad: 3</p>
                    <p class="font-semibold">Precio: $200 RD</p>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <p class="text-sm">Estado</p>
                <p class="font-semibold text-orange-500">Enviado</p>
              </div>
              <div class="p-2">
                <p class="text-sm">Fecha de entrega esperada</p>
                <p class="font-semibold">24 de diciembre 2024</p>
              </div>
            </li>
            <li class="flex gap-8 border-b border-slate-800 pb-2">
              <div class="flex">
                <div class="bg-slate-800 aspect-[3/4] h-24"></div>
                <div class="flex flex-col justify-between p-2">
                  <p class="">Product name</p>
                  <div class="flex gap-2 text-sm">
                    <p>Size: S</p>
                    <p>Cantidad: 3</p>
                    <p class="font-semibold">Precio: $200 RD</p>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <p class="text-sm">Estado</p>
                <p class="font-semibold text-orange-500">Enviado</p>
              </div>
              <div class="p-2">
                <p class="text-sm">Fecha de entrega esperada</p>
                <p class="font-semibold">24 de diciembre 2024</p>
              </div>
            </li>
          </ul>
        </section>
        <footer class="px-8 py-4 flex justify-between">
          <!-- <button>Cancelar orden</button> -->
          <div></div>
          <p class="font-bold">Total: $2,300 RD</p>
        </footer>
      </article>
    </div>
    <div class="p-4 flex justify-center">Pagination</div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "account" });
</script>

<style scoped></style>
