<template>
    <q-page class="q-pa-md">
        
        <q-img
        src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-04%20at%204.47.16%20PM.jpeg?raw=true"
        class="banner"
        />

        <div class="q-mt-lg">
            <div class="text-h3 text-primary text-weight-bold">Bienestar</div>

            <p class="text-body1 q-mt-md">
                El servicio de Bienestar busca promover una mejor calidad de vida
                dentro de la comunidad. Desarrolla actividades culturales,
                recreativas y de acompañamiento que favorecen el desarrollo
                personal, social y académico de los usuarios.
            </p>
        </div>

        <q-card class="q-mt-lg">
            <q-card-section>
                <div class="text-h5 text-primary">
                    Horarios de atencion
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
                    +57 300 0006154
                </div>
            </q-card-section>
        </q-card>

        <q-card class="q-mt-lg">
            <q-card-section>
                <div class="text-h5 text-primary">
                    Encargado de atencion
                </div>
            </q-card-section>

            <q-card-section class="row items-center q-col-gutter-lg">
                <div class="col-12 col-md-3 text-center">
                    <q-avatar size="120px">
                        <img src="https://cdn-icons-png.flaticon.com/512/1876/1876899.png">
                    </q-avatar>
                </div>

                <div class="col-12 col-md-9">
                    <div class="text-h6">
                        Laura Valentina Gomez
                    </div>
                    <div class="text-subtitle1">
                        Coordinadora de Bienestar
                    </div>
                    <div class="q-mt-sm">
                        ✉ laura.gomez@sena.edu.co
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
    height: 280px;
    border-radius: 12px;
}
</style>