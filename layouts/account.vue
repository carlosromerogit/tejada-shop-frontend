<template>
  <div class="flex flex-col min-h-screen">
    <HeaderSection></HeaderSection>
    <div class="grow">
      <div>
        <div>
          <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-baseline justify-between pt-12 pb-2"></div>
            <section class="pb-8">
              <div class="flex gap-4">
                <form class="basis-64 hidden lg:block shrink-0">
                  <div class="py-4">
                    <UVerticalNavigation :links="links" />
                  </div>
                </form>
                <div class="grow">
                  <RouterView></RouterView>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
const links = [
  [
    {
      label: "Perfil",
      icon: "material-symbols:person-2-outline",
      to: "/cuenta/perfil",
    },
    {
      label: "Mis órdenes",
      icon: "material-symbols:orders-outline",
      to: "/cuenta/ordenes",
    },
    {
      label: "Facturación y pagos",
      icon: "material-symbols:directions-alt-outline",
      to: "/cuenta/direcciones",
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
