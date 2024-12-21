<template>
  <div>
    <div>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between pt-12 pb-2"></div>
        <section class="pb-8">
          <div class="flex gap-4">
            <form class="basis-48 hidden lg:block shrink-0">
              <div>
                <UVerticalNavigation :links="links" />
              </div>
            </form>
            <div class="grow">Main</div>
          </div>
        </section>
      </main>
    </div>
  </div>
  <div></div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "default" });

const links = [
  [
    {
      label: "Perfil",
      icon: "material-symbols:person-2-outline",
      to: "",
    },
    {
      label: "Mis órdenes",
      icon: "material-symbols:orders-outline",
      to: "",
    },
    {
      label: "Direcciones",
      icon: "material-symbols:directions-alt-outline",
      to: "",
    },
    {
      label: "Favoritos",
      icon: "material-symbols:favorite-outline",
      to: "",
    },
  ],
  [
    {
      label: "Cerrar sesión",
      icon: "material-symbols:logout",
    },
  ],
];
</script>

<style scoped></style>
