<template>
  <q-page class="q-pa-md">

    <q-img
      src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-04%20at%205.14.12%20PM.jpeg?raw=true"
      class="banner"
      :ratio="21/9"
      fit="cover"
    />

    <div class="q-mt-lg">
      <div class="text-h3 text-primary text-weight-bold">
        Enfermería
      </div>

      <p class="text-body1 q-mt-md">
        Aqui se ofrece todos los servicios de promoción y prevención de
        enfermedades, atención básica en primeros auxilios.
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
            <q-item-section side>
              <div v-for="(jornada, i) in dia.hora" :key="i">
                {{ jornada }}
              </div>
            </q-item-section>
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
          +57 32114153995
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
            <img src="https://github.com/joymarricardopintoortiz/CENTROAGROTURISTICO/blob/main/WhatsApp%20Image%202026-09-11%20at%204.17.48%20PM%20(2).jpeg?raw=true">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">
          <div class="text-h6">
            María Fernanda Gómez Reyes 
          </div>

          <div class="text-subtitle1">
            Enfermera
          </div>

          <div class="q-mt-sm">
            ✉ Mafecita1118@gmail.com
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: ['6:30AM - 10:30AM', '4:00PM - 8:00M']},
    { dia: 'Martes', hora: ['6:30AM - 10:30AM', '4:00PM - 8:00M']},
    { dia: 'Miercoles', hora: ['6:30AM - 10:30AM', '4:00PM - 8:00M']},
    { dia: 'Jueves', hora: ['6:30AM - 10:30AM', '4:00PM - 8:00M']},
    { dia: 'Viernes', hora: ['6:30AM - 10:30AM', '4:00PM - 8:00M']}
]
</script>

<style scoped>
.banner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 12px;
}
</style>