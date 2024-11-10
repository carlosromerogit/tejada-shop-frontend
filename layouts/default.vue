<template>
  <div class="flex flex-col min-h-screen">
    <HeaderSection></HeaderSection>
    <div class="grow">
      <slot></slot>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>

<script setup lang="ts"></script>

<style scoped></style>
