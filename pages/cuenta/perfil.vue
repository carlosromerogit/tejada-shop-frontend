<template>
  <div>
   <section class="flex border-b border-stone-300 dark:border-slate-800 pt-4 pb-12">
    <div class="basis-80">
      <h2 class="text-lg font-bold mb-3 ">Información personal</h2>
      <p>Usa una dirección permanente donde puedas recibir correo.</p>
    </div>
    <form class="flex-1">
      <div class="flex space-x-4 mb-4">
        <div class="flex-1">
          <label for="" class="mb-1 block">Nombre</label>
          <UInput color="transparent" size="md"></UInput>
        </div>
        <div class="flex-1">
          <label for="" class="mb-1 block">Apellido</label>
          <UInput color="transparent" size="md"></UInput>
        </div>
      </div>
      <div class="mb-4">
        <label for="" class="mb-1 block">Correo</label>
        <UInput color="transparent" size="md"></UInput>
      </div>
      <div class="mb-4">
        <label for="" class="mb-1 block">Celular</label>
        <UInput color="transparent" size="md"></UInput>
      </div>
      <div>
        <UButton label="Guardar"/>
      </div>
    </form>
   </section>
   <section class="flex border-b border-stone-300 dark:border-slate-800 py-12">
    <div class="basis-80">
      <h2 class="text-lg font-bold mb-3">Direcciones</h2>
      <p>Agregue o actualiza las direcciones que deseas.</p>
    </div>
    <form class="flex-1">
     
      <div class="mb-4">
        <label for="" class="mb-1 block">Dirección #1</label>
        <div class="flex items-center space-x-2">
          <div class="flex-1">
            <UInput color="transparent" size="md"></UInput>
          </div>
          <UButton
          icon="material-symbols:delete-outline-rounded"
          size="sm"
          color="transparent"
          square
          variant="solid"/>
        </div>
      </div>

      <div class="mb-4">
        <label for="" class="mb-1 block">Dirección #2</label>
        <div class="flex items-center space-x-2">
          <div class="flex-1">
            <UInput color="transparent" size="md"></UInput>
          </div>
          <UButton
          icon="material-symbols:delete-outline-rounded"
          size="sm"
          color="transparent"
          square
          variant="solid"/>
        </div>
      </div>

      <div>
        <UButton
          icon="material-symbols:add-location-outline-rounded"
          size="sm"
          color="primary"
          square
          variant="solid"
          label="Agregar"/>
      </div>
    </form>
   </section>
   <section class="flex py-12">
    <div class="basis-80">
      <h2 class="text-lg font-bold mb-3">Cambio de contreseña</h2>
      <p>Actualiza tu contraseña asociada con tu cuenta.</p>
    </div>
    <form class="flex-1">
      <div class="mb-4">
        <label for="" class="mb-1 block">Contraseña actual</label>
        <UInput color="transparent" size="md"></UInput>
      </div>
      <div class="mb-4">
        <label for="" class="mb-1 block">Nueva contraseña</label>
        <UInput color="transparent" size="md"></UInput>
      </div>
      <div class="mb-4">
        <label for="" class="mb-1 block">Confirmar contraseña</label>
        <UInput color="transparent" size="md"></UInput>
      </div>
      <div>
        <UButton label="Guardar"/>
      </div>
    </form>
   </section>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "account" });
</script>

<style scoped></style>
