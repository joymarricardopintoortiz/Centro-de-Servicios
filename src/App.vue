<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const links = [
  { label: 'Inicio', icon: 'home', to: '/' },
  { label: 'Enfermería', icon: 'medical_services', to: '/enfermeria' },
  { label: 'Bienestar', icon: 'favorite', to: '/bienestar' },
  { label: 'Biblioteca', icon: 'local_library', to: '/biblioteca' },
  { label: 'Cafetería', icon: 'local_cafe', to: '/cafeteria' },
  { label: 'Coordinación', icon: 'groups', to: '/coordinacion' },
  { label: 'Acerca', icon: 'info', to: '/acerca' }
]
</script>

<template>
  <q-layout view="1Hh Lpr 1Ff">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="q-mr-sm"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Servicios del SENA</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered side="left">
      <q-list>
        <q-item-label header class="text-primary text-weight-bold">
          Servicios
        </q-item-label>

        <q-item
          v-for="link in links"
          :key="link.to"
          clickable
          v-ripple
          :to="link.to"
          exact
          active-class="text-primary bg-green-1"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            {{ link.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container><router-view /></q-page-container>
    <q-footer class="bg-primary text-white text-center q-pa-md">
      Servicios del SENA ©️ 2026
    </q-footer>
  </q-layout>
</template>