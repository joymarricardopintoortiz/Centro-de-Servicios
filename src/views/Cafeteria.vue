<template>
  <q-page class="q-pa-md">

    <q-img
      src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-04%20at%204.47.15%20PM.jpeg?raw=true"
      class="banner"
      :ratio="21/9"
      fit="cover"
    />

    <div class="q-mt-lg">
      <div class="text-h3 text-primary text-weight-bold">
        Cafeteria
      </div>

      <p class="text-body1 q-mt-md">
        La Cafeteria ofrece alimentos y bebidas para los integrantes
        de la comunidad. Cuenta con un espacio comodo para descansar,
        compartir y disfrutar de diferentes opciones durante las
        jornadas academicas y laborales.
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
          +57 314 4254795
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
            <img src="https://static.vecteezy.com/system/resources/previews/011/412/253/non_2x/barista-coffeehouse-coffeeshop-avatar-head-face-plain-icon-illustration-vector.jpg">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">
          <div class="text-h6">
            Andrés Felipe Torres
          </div>

          <div class="text-subtitle1">
            Administrador de Cafetería
          </div>

          <div class="q-mt-sm">
            ✉ andres.torres@sena.edu.co
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: '6:30AM - 6:00PM'},
    { dia: 'Martes', hora: '6:30AM - 6:00PM'},
    { dia: 'Miercoles', hora: '6:30AM - 6:00PM'},
    { dia: 'Jueves', hora: '6:30AM - 6:00PM'},
    { dia: 'Viernes', hora: '6:30AM - 5:00PM'}
]
</script>

<style scoped>
.banner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 12px;
}
</style>