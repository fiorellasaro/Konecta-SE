<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../src/assets/konecta-b.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="$route.name == 'home'"
        href="https://www.grupokonecta.com/somos-globales/peru/"
        target="_blank"
        text
      >
        <span class="mr-2">Nosotros</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn
        v-if="$route.name == 'home'"
        @click="$router.push('/login')"
        target="_blank"
        class="ml-6"
        outlined
      >
        <span class="mr-2">Postula</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content style="padding-top:37px; ">
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
      <!-- <HelloWorld /> -->
    </v-content>


    <!-- <v-footer color="blue darken-2" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>-->
    <v-footer v-if="$route.name == 'home'" color="teal">
      <v-card flat tile class="white--text text-center" color="teal">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Reconocimientos:
          <br />2013:
          Premio Contacto a la Excelencia, APECCO (Mejor Contribución en Responsabilidad Social)
          Premio Soy Capaz, por la contribución al empleo formal de personas con discapacidad
          <br />2015
          CODESPA, finalistas en la categoría Inclusión de los jóvenes de Pachacútec al mundo laboral
          <br />2016
          APECCO: Mejor operación Call Center "Premio Contacto a la Excelencia"
          APECCO: Mejor contribución Responsabilidad Social "Premio Contacto a la Excelencia"
          <br />2017
          Ranking Equidad de Género. Entre 141 empresas Konecta Perú obtuvo el 5to puesto de ranking PAR (elaborado por Aequales)
          Premiación ABE, "Mejor Programa de Desarrollo del Entorno por la formación e inserción laboral de jóvenes con y sin discapacidad de Pachacútec"
          Premio IMPLICACCIÓN, por la labor realizada en materia de Responsabilidad Social.
          EMPRESAS SOS, Reconocimiento otorgado por el Ministerio de Trabajo a través de Perú Responsable por el apoyo brindado a los damnificados del Niño Costero.
          EMPRESA SEGURA, premio "Sello Empresa Segura libre de Violencia y Discriminación Contra la Mujer" la máxima distinción que otorga el Ministerio de la Mujer y Poblaciones Vulnerables.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Konecta</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data () {
    //
    return {
    icons: [
      "mdi-facebook-box",
      "mdi-twitter",
      // "fab fa-google-plus",
      "mdi-linkedin-box"
      // "fab fa-instagram"
    ]
    };

    

  },



};
</script>
<style>
.v-application--wrap {
  min-height: 93vh !important;
}
</style>