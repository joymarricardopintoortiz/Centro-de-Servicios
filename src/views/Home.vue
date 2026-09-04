<template>
    <q-page class="q-pa-lg">
        <div class="text-center q-mb-xl">
            <div class="text-h2 text-primary text-weight-bold">
                Centro de Servicios
            </div>
            <p class="text-h6 text-grey-7">
                Conoce nuestros servicios y encuentra la información que necesitas.
            </p>
        </div>

        <div class="row q-col-gutter-lg">
            <div class="col-12 col-sm-6 col-md-4">
                <q-card class="service-card">
                    <q-card-section class="text-center">
                        <q-icon
                        name="medical_services"
                        size="60px"
                        color="primary"/>

                        <div class="text-h5 q-mt-md">
                            Enfermeria
                        </div>

                        <p class="text-grey-7">
                            Atencion y orientacion basica para el cuidado de la salud.
                        </p>

                        <q-btn
                        color="primary"
                        label="Ver servicio"
                        to="/enfermeria"/>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
                <q-card class="service-card">
                    <q-card-section class="text-center">
                        <q-icon
                        name="favorite"
                        size="60px"
                        color="pink"/>

                        <div class="text-h5 q-mt-md">
                            Bienestar
                        </div>

                        <p class="text-grey-7">
                            Actividades y acompañamiento para el bienestar de la comunidad.
                        </p>

                        <q-btn
                        color="primary"
                        label="Ver servicio"
                        to="/bienestar"/>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
                <q-card class="service-card">
                    <q-card-section class="text-center">
                        <q-icon
                        name="local_library"
                        size="60px"
                        color="orange"/>

                        <div class="text-h5 q-mt-md">
                            Biblioteca
                        </div>

                        <p class="text-grey-7">
                            Espacios y recursos para estudiar, consultar y investigar.
                        </p>

                        <q-btn
                        color="primary"
                        label="Ver servicio"
                        to="/biblioteca"/>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
                <q-card class="service-card">
                    <q-card-section class="text-center">
                        <q-icon
                        name="local_cafe"
                        size="60px"
                        color="brown"/>

                        <div class="text-h5 q-mt-md">
                            Cafeteria
                        </div>

                        <p class="text-grey-7">
                            Alimentos, bebidas y espacios para compartir y descansar.
                        </p>

                        <q-btn
                        color="primary"
                        label="Ver servicio"
                        to="/cafeteria"/>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
                <q-card class="service-card">
                    <q-card-section class="text-center">
                        <q-icon
                        name="groups"
                        size="60px"
                        color="teal"/>

                        <div class="text-h5 q-mt-md">
                            Coordinacion
                        </div>

                        <p class="text-grey-7">
                            Orientacion y gestion de procesos academicos y administrativos.
                        </p>

                        <q-btn
                        color="primary"
                        label="Ver servicio"
                        to="/coordinacion"/>
                    </q-card-section>
                </q-card>
            </div>
        </div>

        <div class="text-center q-mt-xl">
            <q-btn
            outline
            color="primary"
            label="Conoce mas sobre el centro"
            icon="info"
            to="/acerca"/>
        </div>
    </q-page>
</template>

<style scoped>
.service-card {
    height: 100%;
    border-radius: 15px;
}
</style>