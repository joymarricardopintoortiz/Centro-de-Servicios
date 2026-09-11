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
          +57 3223038451
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
            <img src="https://github.com/joymarricardopintoortiz/CENTROAGROTURISTICO/blob/main/WhatsApp%20Image%202026-09-11%20at%204.17.48%20PM.jpeg?raw=true">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">

          <div class="text-subtitle1">
            Cordimasora de cafeteria
          </div>

          <div class="q-mt-sm">
            ✉ Icarreno@sena.edu.com
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: ['7:00AM - 12:00PM', '1:00PM - 5:30PM', '7:00PM - 9:30PM'] },
    { dia: 'Martes', hora: ['7:00AM - 12:00PM', '1:00PM - 5:30PM', '7:00PM - 9:30PM'] },
    { dia: 'Miercoles', hora: ['7:00AM - 12:00PM', '1:00PM - 5:30PM', '7:00PM - 9:30PM'] },
    { dia: 'Jueves', hora: ['7:00AM - 12:00PM', '1:00PM - 5:30PM', '7:00PM - 9:30PM'] },
    { dia: 'Viernes', hora: ['7:00AM - 12:00PM', '1:00PM - 5:30PM', '7:00PM - 9:30PM'] },
    { dia: 'Sábados', hora: ['7:30AM - 12:00PM'] }
]
</script>

<style scoped>
.banner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 12px;
}
</style>