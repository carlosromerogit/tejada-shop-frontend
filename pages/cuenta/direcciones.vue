<template>
  <div class="flex gap-5">
    <div class="basis-96 shrink-0">
      <section class="rounded-md p-5 bg-stone-100 dark:bg-slate-900">
        <h2
          class="text-lg font-bold pb-4 mb-4 border-b border-stone-300 dark:border-slate-800"
        >
          Agregar dirección
        </h2>
        <p>FORMULARIO</p>
      </section>
    </div>
    <div class="grow">
      <section class="rounded-md p-5 bg-stone-100 dark:bg-slate-900">
        <h2
          class="text-lg font-bold pb-4 mb-4 border-b border-stone-300 dark:border-slate-800"
        >
          Listado
        </h2>
        <p>TABLA</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "account" });
</script>

<style scoped></style>
