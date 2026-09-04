<template>
  <q-page class="q-pa-md">

    <q-img
      src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-04%20at%205.14.12%20PM.jpeg?raw=true"
      class="banner"
    />

    <div class="q-mt-lg">
      <div class="text-h3 text-primary text-weight-bold">
        Enfermería
      </div>

      <p class="text-body1 q-mt-md">
        El servicio de Enfermería brinda atención y orientación básica
        en salud a los integrantes de la comunidad. Ofrece acompañamiento
        ante situaciones que requieran atención inmediata y recomendaciones
        para el cuidado y la prevención de enfermedades.
      </p>
    </div>

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="text-h5 text-primary">
          Horarios de atención
        </div>
      </q-card-section>

      <q-card-section>
        <q-list bordered separator>
          <q-item v-for="dia in horarios" :key="dia.dia">
            <q-item-section>{{ dia.dia }}</q-item-section>
            <q-item-section side>{{ dia.hora }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="text-h5 text-primary">
          📞 Contacto
        </div>
        <div class="text-body1 q-mt-sm">
          +57 300 0004827
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="text-h5 text-primary">
          Encargado de atención
        </div>
      </q-card-section>

      <q-card-section class="row items-center q-col-gutter-lg">
        <div class="col-12 col-md-3 text-center">
          <q-avatar size="120px">
            <img src="https://cdn-icons-png.flaticon.com/512/387/387610.png">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">
          <div class="text-h6">
            Laura Marcela Gomez Rojas
          </div>

          <div class="text-subtitle1">
            Auxiliar de Enfermería
          </div>

          <div class="q-mt-sm">
            ✉ laura.gomez.enfermeria@sena.edu.co
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: '6:30AM - 8:00PM'},
    { dia: 'Martes', hora: '6:30AM - 8:00PM'},
    { dia: 'Miercoles', hora: '6:30AM - 8:00PM'},
    { dia: 'Jueves', hora: '6:30AM - 8:00PM'},
    { dia: 'Viernes', hora: '6:30AM - 8:00PM'}
]
</script>

<style scoped>
.banner {
  height: 280px;
  border-radius: 12px;
}
</style>