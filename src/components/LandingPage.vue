<template>
  <div>
    <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slide" :key="i" :src="slide.bannerImg">
        <v-row class="fill-height pb-10" align="end" justify="center">
          <v-row class="opasity justify-center">
            <v-col cols="12" md="12" class="pb-0 mb-0">
              <h1
                class="white--text mb-0 display-1 text-center pt-0 font-weight-bold"
              >WOOW felizmente llegaste,</h1>
            </v-col>
            <v-col cols="12" md="12" class="py-0 mb-0">
              <h3 class="white--text headline text-center pt-0 mb-0">te estábamos esperando</h3>
            </v-col>
            <v-col cols="12" md="12" class="py-0 mb-2">
              <h4
                class="white--text mb-2 headline text-center pt-0 mt-0"
              >Ven a conocernos tenemos un lugar para ti</h4>
            </v-col>
          </v-row>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <section>
      <v-layout column wrap class="my-10" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center konecta-text">
            <h2 class="display-1 font-weight-bold pb-4">Esto es Konecta Perú por dentro.</h2>
            <span class="subheading headline my-10">
              Te invitamos a dar una vuelta por konecta. Hemos preparado una visita muy especial, eres nuestro invitado/a de honor,
              ponte cómodo/a y disfruta.
            </span>
          </div>
          <div class="text-center pt-10">
            <video
              class="video"
              src="../assets/video/KONECTA_FIN_AÑO_VERSION_CORTA.mp4"
              autoplay
              loop
              width="1340"
              height="680"
            ></video>
          </div>
          <div class="text-center mt-4">
            <h2 class="display-1 font-weight-bold pt-12 pb-0">Lo que nos Entusiasma</h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="64" class="amber--text text--lighten-2">tag_faces</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Primero: las personas</div>
                  </v-card-title>
                  <v-card-text class="text-center">
                    Hacer feliz a nuestra gente en su día a día
                    es lo que realmente
                    nos hace vibrar en nuestros asientos.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="64" class="blue--text text--lighten-2">star</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">¡Viva la Excelencia!</div>
                  </v-card-title>
                  <v-card-text
                    class="text-center"
                  >Somos muy pero muy fans de los pequeños detalles, de mejorar siempre y perseguir la excelencia hasta alcanzarla.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="64" class="red--text">favorite</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Apasionamiento</div>
                  </v-card-title>
                  <v-card-text
                    class="text-center"
                  >Entre todos sabemos cómo hacer que las cosas sucedan. Somos creativos, inclusivos, diversos, equitativos y sobre todo, apasionados.</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- <section>
      <v-parallax src="../assets/section-2.png" height="380">
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-4 text-center"
          >Somos una familia de más de 14K personas</div>
          <em>Tú también puedes ser parte</em>
          <v-btn
            class="mt-12"
            color="teal lighten-2"
            dark
            large
            @click="$router.push('/login')"
          >Quiero ser parte</v-btn>
        </v-layout>
      </v-parallax>
    </section>-->

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="display-1">No lo decimos nosotros</h2>
            <span class="subheading">Lo dicen nuestros colaboradores</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-avatar size="220">
                      <img src="../assets/testimonios/IMG_7899.jpeg" alt="Mary" />
                    </v-avatar>
                    <!-- <v-icon x-large class="blue--text text--lighten-2">emoji_people</v-icon> -->
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Mary Auccaise</div>
                  </v-card-title>
                  <v-card-text>“Konecta, mi primera experiencia laboral, se convirtió en mi inspiración para crecer en tanto en lo profesional como personal. En estos 9 años pasé de Representante de Opreraciones a Líder de Selección, y pude cumplir uno de mis proyectos personales: emprender mi propia empresa de moda.”</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-avatar size="225">
                      <!-- style="transform: rotate(90deg);" -->
                      <img src="../assets/testimonios/IMG_7927.jpeg" alt="Daniel" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Jaime Daniel Tello</div>
                  </v-card-title>
                  <v-card-text>“Llegué a Konecta hace casi 3 años como Representante. Gracias a sus oportunidades y mi desempeño hoy me desarrollo como Analista Senior de Capacitación. Las interacciones de cada día nos taren nuevos aprendizajes y constante crecimiento.”</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center pt-0">
                    <v-avatar size="220">
                      <img src="../assets/testimonios/IMG_7920.jpeg" alt="Briana" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Briana Pinday</div>
                  </v-card-title>
                  <v-card-text>“Hace 5 años aterricé en Konecta. Como todos, ingresé con ganas de crecer laboralmente. Ahora formo parte del equipo de Formación impartiendo mis conocimientos, ayudando a los demás y aprendiendo constantemente de las situaciones fortuitas”</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <!-- aqui -->

    <section>
      <v-parallax src="../assets/section-1.png" height="380">
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-4 text-center"
          >Somos una familia de más de 14K personas</div>
          <em>Tú también puedes ser parte</em>
          <v-btn
            class="mt-12"
            color="teal lighten-2"
            dark
            large
            @click="$router.push('/login')"
          >Quiero ser parte</v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Konecta Perú</div>
              </v-card-title>
              <v-card-text>Konecta Perú es una empresa dedicada a prestar servicios de BPO y de contact center. Opera hace nueve años en el país y al 2020 cuenta con más de 13,500 colaboradores/as en las ciudades de Lima, Callao y Chiclayo. Buscamos maximizar la creación de valor compartido, tanto para la Compañía como para nuestros grupos de interés y las comunidades en las que desarrollamos operaciones, mediante la implantación de prácticas de gestión basadas en la rentabilidad, innovación, igualdad de oportunidades, ética y la sostenibilidad.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contáctanos</div>
              </v-card-title>
              <!-- <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.</v-card-text> -->
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>016346070</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title style="white-space: normal!important;">
                      Av. República de Panamá 4575 piso 5
                      Lima, Peru
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      style="white-space: normal!important;"
                    >comunicacionesperu@grupokonecta.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- </v-content> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ],
    slide: [
      {
        id: 0,
        // bannerImg: require("../assets/bannersMobile/mobile.png"),
        bannerImg: require("../assets/Banners/banneop1.jpg"),
        text: "Web development has never been easier"
      },
      {
        id: 1,
        bannerImg: require("../assets/Banners/06.png"),
        text: "Web development has never been easier 2"
      },
      {
        id: 2,
        bannerImg: require("../assets/Banners/05.png"),
        text: "Web development has never been easier 3"
      },
      {
        id: 3,
        bannerImg: require("../assets/Banners/01.png"),
        text: "Web development has never been easier 3"
      },
      {
        id: 4,
        bannerImg: require("../assets/Banners/02.png"),
        text: "Web development has never been easier 3"
      }
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"]
  })
};
</script>

<style >
.v-parallax__image {
  min-height: 80% !important;
}
.opasity {
  opacity: 0.8;
  background-color: rgb(0, 0, 0);
  /* height: 2em; */
  /* width: 150px; */
  /* position: absolute; */
  top: 10px;
  text-align: center;
  /* padding-top: 1em; */
}
@media screen and (max-width: 600px) {
  .video {
    width: 350px!important;
    height: 300px !important;
  }
  .konecta-text{
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
}
.video {
    width: 1340px;
    height:680px;
  }
  .konecta-text{
    padding-right: 48px ;
    padding-left: 48px ;
    margin-right: 48px ;
    margin-left: 48px ;
  }

</style>