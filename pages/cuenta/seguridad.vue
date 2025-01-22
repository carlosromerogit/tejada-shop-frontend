<template>
  <div class="p-4 bg-stone-100 dark:bg-slate-900 rounded-md">
    <div class="flex flex-col">
      <h2
        class="text-lg font-bold pb-4 mb-4 border-b border-stone-300 dark:border-slate-800"
      >
        Cambio de correo
      </h2>
      <div class="flex">
        <div class="flex flex-col basis-1/2 pr-10">
          <div class="flex flex-col">
            <UInput color="transparent"></UInput>
          </div>
        </div>
      </div>

      <form class="mt-10">
        <h2
          class="text-lg font-bold pb-4 mb-4 border-b border-stone-300 dark:border-slate-800"
        >
          Cambio de contraseña
        </h2>
        <div class="flex">
          <div class="flex flex-col gap-8 basis-1/2 pr-10">
            <div class="flex flex-col gap-4">
              <label class=""> Contraseña actual </label>
              <UInput color="transparent"></UInput>
            </div>
            <div class="flex flex-col gap-4">
              <label for="" class=""> Nueva contraseña </label>
              <UInput color="transparent"></UInput>
            </div>
            <div class="flex flex-col gap-4">
              <label class=""> Confirmar nueva contraseña </label>
              <UInput color="transparent"></UInput>
            </div>
          </div>
        </div>
        <div class="max-w-[120px] py-6">
          <button label="Cambiar" severity="primary"></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "account", middleware: "auth-user" });
</script>

<style scoped></style>
