<template>
  <div>
    <form class="bg-stone-100 dark:bg-slate-900/80 p-4 rounded-md">
      <h2 class="text-lg font-bold pb-4 mb-4 border-b border-stone-300">
        Información básica
      </h2>
      <div class="flex">
        <div class="flex flex-col gap-8 basis-1/2 pr-10">
          <div class="flex flex-col gap-3">
            <label> Nombre </label>
            <UInput color="transparent"></UInput>
          </div>
          <div class="flex flex-col gap-3">
            <label for=""> Número telefónico </label>
            <UInput color="transparent"></UInput>
          </div>
        </div>
        <div class="basis-1/2 pr-10">
          <div class="flex flex-col gap-3">
            <label for="">Apellido </label>
            <UInput color="transparent"></UInput>
          </div>
        </div>
      </div>
      <div class="py-6 max-w-[120px]">
        <button type="submit" label="Actualizar" severity="primary"></button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "account" });
</script>

<style scoped></style>
