<script setup>

</script>

<template>
  <q-layout view="1Hh Lpr 1Ff">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>Servicios del SENA</q-toolbar-title>
        <q-btn flat label="Inicio" to="/"></q-btn>
        <q-btn flat label="Acerca" to="/acerca"></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container><router-view /></q-page-container>
    <q-footer class="bg-primary text-white text-center q-pa-md">
      Servicios del SENA ©️ 2026
    </q-footer>
  </q-layout>
</template>