<template>
  <q-page class="q-pa-md">

    <q-img
      src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-07%20at%2012.35.10%20PM.jpeg?raw=true"
      class="banner"
      :ratio="21/9"
      fit="cover"
    />

    <div class="q-mt-lg">
      <div class="text-h3 text-primary text-weight-bold">
        Coordinación
      </div>

      <p class="text-body1 q-mt-md">
        La Coordinación se encarga de orientar y gestionar diferentes
        procesos administrativos y académicos. Este servicio brinda
        información a los usuarios, recibe solicitudes  y facilita
        la comunicación entre las diferentes áreas del centro.
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
          +57 317 4829061
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
            <img src="https://cdn-icons-png.flaticon.com/512/6048/6048343.png">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">
          <div class="text-h6">
            Juan Sebastian Perez
          </div>

          <div class="text-subtitle1">
            Coordinador General
          </div>

          <div class="q-mt-sm">
            ✉ juan.perez@sena.edu.co
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: '8:00AM - 5:00PM'},
    { dia: 'Martes', hora: '8:00AM - 5:00PM'},
    { dia: 'Miercoles', hora: '8:00AM - 5:00PM'},
    { dia: 'Jueves', hora: '8:00AM - 5:00PM'},
    { dia: 'Viernes', hora: '8:00AM - 4:00PM'}
]
</script>

<style scoped>
.banner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 12px;
}
</style>