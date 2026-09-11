<template>
  <q-page class="q-pa-md">

    <q-img
      src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-04%20at%204.47.17%20PM.jpeg?raw=true"
      class="banner"
      :ratio="21/9"
      fit="cover"
    />

    <div class="q-mt-lg">
      <div class="text-h3 text-primary text-weight-bold">
        Biblioteca
      </div>

      <p class="text-body1 q-mt-md">
        La Biblioteca ofrece espacios destinados a la consulta,
        investigación y estudio. Los usuarios pueden acceder a
        material bibliografico y recursos educativos que apoyan
        sus actividades academicas y de aprendizaje.
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
          +57 312 659 4738
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
            <img src="https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg">
          </q-avatar>
        </div>

        <div class="col-12 col-md-9">
          <div class="text-h6">
            Carlos Andres Martinez
          </div>

          <div class="text-subtitle1">
            Bibliotecario
          </div>

          <div class="q-mt-sm">
            ✉ carlos.martinez@sena.edu.co
          </div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
const horarios = [
    { dia: 'Lunes', hora: '7:00AM - 10:00PM'},
    { dia: 'Martes', hora: '7:00AM - 10:00PM'},
    { dia: 'Miercoles', hora: '7:00AM - 10:00PM'},
    { dia: 'Jueves', hora: '7:00AM - 10:00PM'},
    { dia: 'Viernes', hora: '7:00AM - 10:00PM'}
]
</script>

<style scoped>
.banner {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 12px;
}
</style>