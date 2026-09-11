<template>
    <q-page class="q-pa-md">
        
        <q-img
        src="https://github.com/joymarricardopintoortiz/fotos/blob/main/WhatsApp%20Image%202026-09-04%20at%204.47.16%20PM.jpeg?raw=true"
        class="banner"
        :ratio="21/9"
        fit="cover"
        />

        <div class="q-mt-lg">
            <div class="text-h3 text-primary text-weight-bold">Bienestar</div>

            <p class="text-body1 q-mt-md">
                Bienestar al aprendiz es una estrategia institucional para
                contribuir en la permanencia de los aprendices en su proceso
                formativo. Los servicios que presta están alineados con los objetivos
                estrátegicos y operativos establecidos en la Política Nacional Integral
                de Bienestar al aprendiz, tales como el reconomiento de la Cultura como
                creadora de identidad, generadora de inclusión y catalizadora de diversidad;
                Generación en los aprendices prácticas asociadas a la prevención de la enfermedad
                y promoción de la salud a través de la gestión con entidades competentes (salud física y mental);
                fortalecimiento de habilidades blandas y para la vida; deporte, actividad física y
                aprovechamiento del tiempo libre como elementos fundamentales en mejoramiento de la formación
                profesional integral; promoción de expresiones de arte de los aprendices en su formación profesional integral.
                Además de lo anterior, desde Bienestar al aprendiz se manejan temas como apoyos socioecnómicos
                (apoyos de sostenimiento regular, FIC, medios tecnológicos, alimentación y transporte),
                monitorias y fortalecimiento y ejercicio de liderazgo.
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
                    <q-item v-for="servicio in horarios" :key="servicio.nombre">
                        <q-item-section>
                            <q-item-label>{{ servicio.nombre }}</q-item-label>
                            <q-item-label caption>{{ servicio.dias }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div v-for="(jornada, i) in servicio.hora" :key="i">
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
                    +57 3176377670
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
                        <img src="https://github.com/joymarricardopintoortiz/CENTROAGROTURISTICO/blob/main/WhatsApp%20Image%202026-09-11%20at%204.17.47%20PM.jpeg?raw=true">
                    </q-avatar>
                </div>

                <div class="col-12 col-md-9">
                    <div class="text-h6">
                        María Delea Arenas Mejía
                    </div>
                    <div class="text-subtitle1">
                        Líder de Bienestar al Aprendiz
                    </div>
                    <div class="q-mt-sm">
                        ✉ mdarenas@sena.edu.com
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
const horarios = [
    {
        nombre: 'Enfermería (Sede Principal)',
        dias: 'Lunes a Viernes',
        hora: ['6:30AM - 10:30AM', '4:00PM - 8:00PM']
    },
    {
        nombre: 'Enfermería (Unisangil)',
        dias: 'Lunes a Viernes',
        hora: ['8:00AM - 12:00PM', '4:00PM - 8:00PM']
    },
    {
        nombre: 'Apoyos Socioeconómicos',
        dias: 'Lunes a Viernes',
        hora: ['8:00AM - 12:00PM', '2:00PM - 6:00PM']
    },
    {
        nombre: 'Líder de Bienestar al Aprendiz',
        dias: 'Lunes a Viernes',
        hora: ['7:30AM - 12:00PM', '2:00PM - 6:00PM']
    }
]
</script>

<style scoped>
.banner {
    max-width: 1100px;
    margin: 0 auto;
    border-radius: 12px;
}
</style>