<template>
  <div class="flex flex-col min-h-screen">
    <HeaderSection></HeaderSection>
    <div class="grow">
      <slot></slot>
    </div>
    <FooterSection></FooterSection>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
