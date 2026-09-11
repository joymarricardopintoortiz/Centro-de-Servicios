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
        Apoyamos el tema de novedades de los aprendices, retiros deserción
        trámala dos aplazamientos que corresponden a la formación titulada del sena 
        Tambien se apoya con el tema de la programación de los instructores
        para la formacion, logística de los ambientes que los
        ambientes estén en óptimas condiciones.
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
          Encargado de atención
        </div>
      </q-card-section>

      <q-card-section class="row items-center q-col-gutter-lg">
        <div class="col-12 col-md-3 text-center">
          <q-avatar size="120px">
            <img src="https://github.com/joymarricardopintoortiz/CENTROAGROTURISTICO/blob/main/WhatsApp%20Image%202026-09-11%20at%204.17.47%20PM%20(1).jpeg?raw=true">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">
          <div class="text-h6">
            Luis Carlos Reina
          </div>

          <div class="text-subtitle1">
            Coordinador Académico
          </div>

          <div class="q-mt-sm">
            ✉ lreinas@sena.edu.com
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: '7:30AM - 12:00PM'},
    { dia: 'Martes', hora: '7:30AM - 12:00PM'},
    { dia: 'Miercoles', hora: '7:30AM - 12:00PM'},
    { dia: 'Jueves', hora: '7:30AM - 12:00PM'},
    { dia: 'Viernes', hora: '7:30AM - 12:00PM'}
]
</script>

<style scoped>
.banner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 12px;
}
</style>