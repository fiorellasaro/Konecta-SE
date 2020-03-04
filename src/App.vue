<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center" v-if="$route.name == 'home'">
        <v-img
          alt="Konecta logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../src/assets/konecta-b.png"
          width="100"
        />
      </div>
      <div class="d-flex align-center" v-if="$route.name !== 'home'">
        <v-btn
        @click="$router.push('/')"
       target="_blank"
        text
      >
        <v-img
          alt="Konecta logo"
          class="shrink mt-1"
          contain
          min-width="100"
          src="../src/assets/konecta-b.png"
          width="100"
        />
        </v-btn>
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
        @click="$router.push('/selection')"
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

    <v-footer v-if="$route.name == 'home'" color="#4db6ac" padless>
      <v-row justify="center" no-gutters>
        <v-btn class="mx-4 white--text" icon href="https://co.linkedin.com/company/konecta-peru">
            <v-icon size="25px">mdi-linkedin-box</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon href="https://twitter.com/konecta_peru?lang=es">
            <v-icon size="25px">mdi-twitter</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon href="https://www.instagram.com/konectaperu/?hl=es-la">
            <v-icon size="25px">mdi-instagram </v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon href="https://www.facebook.com/KonectaPeruOficial/">
            <v-icon size="25px">mdi-facebook </v-icon>
          </v-btn>
        <v-col class="teal py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Konecta Perú</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data() {
    //
    return {
    };
  }
};
</script>
<style>
.v-application--wrap {
  min-height: 93vh !important;
}
</style>