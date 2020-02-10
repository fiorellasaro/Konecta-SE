<template>
  <div>
    <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slide" :key="i" :src="slide.bannerImg">
        <v-row class="fill-height" align="center" justify="center">
          <!-- <h1 class="primary--text mb-2 display-1 text-end">{{ slide.text }} Slide</h1> -->
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline font-weight-bold pb-2">Esto es Konecta Perú por dentro.</h2>
            <span class="subheading subtitle-1 py-12">
              Te invitamos a dar una vuelta por konecta. Hemos preparado una visita muy especial, eres nuestro invitado/a de honor,
              ponte cómodo/a y disfruta.
            </span>
          </div>
          <div class="text-center mt-4">
            <h2 class="headline font-weight-bold pt-12 pb-0">Lo que nos Entusiasma</h2>
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

    <section>
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
    </section>
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline font-weight-bold">BENEFICIOS PARA TI</h2>
            <!-- <span class="subheading">Cras facilisis mi vitae nunc</span> -->
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon size="64" class="blue--text ">home_work</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">
                      Encuentra tu Lugar para Trabajar con Nosotros
                    </div>
                  </v-card-title>
                  <v-card-text
                    class="text-center" style="list-style: none;"
                  ><li>Sede Lima
                    </li>
                    <li>Sede Surquillo</li>
                    <li>Sede Lima Cargo</li>
                    <li>Sede Bellevista</li>
                    <li>Sede Chiclayo</li>
                    </v-card-text>
                </v-card>
              </v-flex>
              <!-- <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">pregnant_woman</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Licencias</div>
                  </v-card-title>
                  <v-card-text
                    class="text-center"
                  >Brindamos licencias para que puedan disfrutar plenamente de: matrimonio, paternidad y maternidad extendida, mudanza, humanitaria y por adopción. Queremos que tu vida laboral y personal se mantengan equilibradas.</v-card-text>
                </v-card>
              </v-flex>-->
              <v-flex xs12 md6>
                <v-card flat class="transparent">
                  <v-card-text class="text-center"> 
                    <v-icon size="64" class="deep-purple--text text--lighten-2">schedule</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Elije tú el horario más conveniente
</div>
                  </v-card-title>
                  <v-card-text
                    class="text-center" style="list-style: none;"
                  ><li>Horario 1
                    </li>
                    <li>Horario 2</li>
                    <li>Horario 3</li>
                    <li>Horario 4</li>
                    <li>Horario 5</li></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">EXPERIENCIAS KONECTA</h2>
            <span class="subheading">Testimonios</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">emoji_people</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Edison Altamirano</div>
                  </v-card-title>
                  <v-card-text>“Vine Konecta hace un año, pensando que era un trabajo más pero hoy puedo decir que he crecido como persona y profesional. Soy líder de un equipo y día a día esto es un reto para mí”</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">emoji_people</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Cynthia Peña</div>
                  </v-card-title>
                  <v-card-text>“Vine Konecta hace un año, pensando que era un trabajo más pero hoy puedo decir que he crecido como persona y profesional. Soy líder de un equipo y día a día esto es un reto para mí”</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">emoji_people</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Ariel Ñique</div>
                  </v-card-title>
                  <v-card-text>“Vine Konecta hace un año, pensando que era un trabajo más pero hoy puedo decir que he crecido como persona y profesional. Soy líder de un equipo y día a día esto es un reto para mí”</v-card-text>
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
/* @media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
} */
</style>