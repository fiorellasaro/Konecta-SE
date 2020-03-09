<template>
  <div>
    <v-carousel
      id="desk-size"
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
      style="display: block;"
    >
      <v-carousel-item v-for="(slide, i) in slide" :key="i" :src="slide.bannerImg">
     
        <v-row class="fill-height pb-10" align="end" justify="center">
          <v-row class="opasity justify-center">
             <v-col cols="12" md="12" class="pb-0 mb-0">
                <v-btn
                  large
                  @click="$router.push('/selection')"
                  target="_blank"
                  class="ml-6 WHITE--text font-weight-bold"
                  color="orange darken-3"
                >
                  <span class="mr-2">ÚNETE AL EQUIPO</span>
                   <img src="../assets/partner-white.png" alt="">
                  <!-- <v-icon>mdi-open-in-new</v-icon> -->
                </v-btn>
              </v-col>
            <v-col cols="12" md="12" class="pb-0 mb-0">
              <h1
                class="white--text mb-0 display-text text-center pt-0 font-weight-bold"
              >{{slide.text1}}</h1>
            </v-col>

            <v-col cols="12" md="12" class="py-0 mb-0">
              <h3 class="white--text headline-text text-center pt-0 mb-0">{{slide.text2}}</h3>
            </v-col>
            <v-col cols="12" md="12" class="py-0 mb-2">
              <h4 class="white--text mb-2 mx-4 headline-text text-center pt-0 mt-0">{{slide.text}}</h4>
            </v-col>
          </v-row>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-carousel
      id="mob-size"
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
      style="display: none;"
    >
      <v-carousel-item v-for="(slideM, i) in slide_mob" :key="i" :src="slideM.bannerImg">
       
         
          <v-row class="fill-height pb-10" align="end" justify="center">
            <v-row class="opasity justify-center">
              <v-col cols="12" md="12" class="pb-0 mb-0">
                <v-btn
                  large
                  @click="$router.push('/selection')"
                  target="_blank"
                  class="ml-6 WHITE--text font-weight-bold"
                  color="orange darken-3"
                >
                  <span class="mr-2">ÚNETE AL EQUIPO</span>
                  <img src="../assets/partner-white.png" alt="">
                  <!-- <v-icon>mdi-open-in-new</v-icon> -->
                </v-btn>
              </v-col>
              <v-col cols="12" md="12" class="pb-0 mb-0">
                <h1
                  class="white--text mb-0 display-text text-center pt-0 font-weight-bold"
                >{{slideM.text1}}</h1>
              </v-col>
              <v-col cols="12" md="12" class="py-0 mb-0">
                <h3 class="white--text headline-text text-center pt-0 mb-0">{{slideM.text2}}</h3>
              </v-col>
              <v-col cols="12" md="12" class="py-0 mb-2">
                <h4
                  class="white--text mb-2 mx-5 headline-text text-center pt-0 mt-0"
                >{{slideM.text}}</h4>
              </v-col>
            </v-row>
          </v-row>
       
      </v-carousel-item>
    </v-carousel>
    <section>
      <v-layout column wrap class="my-10 mx-2" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center konecta-text">
            <h2 class="display-text font-weight-bold pb-4">Esto es Konecta Perú por dentro.</h2>
            <span class="subheading headline-text my-10">
              Te invitamos a dar una vuelta por Konecta. Hemos preparado una visita muy especial, eres nuestro invitado/a de honor,
              ponte cómodo/a y disfruta.
            </span>
          </div>
          <!-- src="https://www.youtube.com/embed/enZ1OsUuoHw?rel=0&amp;autoplay=1&loop=1" -->
          <!-- src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"  width="640" height="360"-->
          <v-row class="justify-center pt-4 px-10">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/enZ1OsUuoHw?loop=1&playlist=enZ1OsUuoHw&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-row>

          <!-- <div class="text-center pt-10">
            <video
            controls
              class="video"
              src="../assets/video/VIDEO.mp4"
              autoplay
              loop
            ></video>
          </div>-->
          <div class="text-center mt-8 mx-1">
            <h2 class="display-text font-weight-bold pt-4 pb-0">Lo que nos entusiasma</h2>
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
                    <div class="headline">¡Viva la excelencia!</div>
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
        <v-flex xs12 sm4 class="my-4 mx-2">
          <div class="text-center">
            <h2 class="display-text font-weight-bold">No lo decimos nosotros</h2>
            <span class="subheading">Lo dicen nuestros colaboradores</span>
          </div>
        </v-flex>
        <v-flex xs12 md4>
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
                  <v-card-text>“Konecta, mi primera experiencia laboral, se convirtió en mi inspiración para crecer en tanto en lo profesional como personal. En estos 9 años pasé de Representante de Operaciones a Líder de Selección, y pude cumplir uno de mis proyectos personales: emprender mi propia empresa de moda.”</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="pt-0">
                <v-card flat class="transparent">
                  <v-card-text class="text-center pt-0">
                    <v-avatar size="225">
                      <!-- style="transform: rotate(90deg);" -->
                      <img src="../assets/testimonios/IMG_7927.jpeg" alt="Daniel" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Jaime Daniel Tello</div>
                  </v-card-title>
                  <v-card-text>“Llegué a Konecta hace casi 3 años como Representante. Gracias a sus oportunidades y mi desempeño hoy me desarrollo como Analista Senior de Capacitación. Las interacciones de cada día nos traen nuevos aprendizajes y constante crecimiento.”</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
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
            class="mt-12 white--text font-weight-bold"
                  color="orange darken-3"
            dark
            large
            @click="$router.push('/selection')"
          >Quiero ser parte
           <img src="../assets/partner-white.png" alt=""></v-btn>
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
              <v-card-text class="text-justify">
                Somos una empresa de relacionamiento con clientes, apoyados en el mejor talento humano y en las nuevas tecnologías.
                <br />Operamos desde hace 9 años en el país y al 2020 contamos con más de 13,500 colaboradores/as en las ciudades de Lima, Callao y Chiclayo.
              </v-card-text>
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
                    <v-list-item-title>7081100</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      style="white-space: normal!important;"
                    >Jirón Carabaya 933, Cercado de Lima</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      style="white-space: normal!important; font-size: 15px!important;"
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
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1MBMA3N1r99EDFCYOGHkUyj2zDZArglzJ",
        text1: "¡WOOW felizmente llegaste!",
        text2: "Te estábamos esperando,",
        text: "ven a conocernos tenemos un lugar para ti."
      },
      {
        id: 1,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1XMZX5uRWlRdChR0xRdLZCt_Y_MD2wK5U",
        text: "Tenemos el mejor clima, el mejor lugar para que te diviertas"
      },
      {
        id: 2,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1yI6nvUviTM7eTnmnnYEMaKAhQXhAWy2a",
        text: "Nos preocupamos por ti y por tu desarrollo profesional"
      },
      {
        id: 3,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1VrV7y_W9Kj2HFcyIYbzcvOVkefesJhlI",
        text:
          "Pensamos siempre en ti, y hacemos todo lo necesario para que vivas la cultura Konecta"
      },
      {
        id: 4,

        bannerImg:
          "https://drive.google.com/uc?export=view&id=1en8kBAMSe04dqi0eTO7YSwA7HpyDWkv1",
        text:
          "Tenemos el mejor talento que se encarga de crear lo mejor para ti"
      }
    ],
    slide_mob: [
      {
        id: 0,
        // bannerImg: require("../assets/bannersMobile/mobile.png"),
        bannerImg:
          "https://drive.google.com/uc?export=view&id=13Kzz8tWei2MDmJqSHUxCppFLk5Qpa6Bu",
        text1: "¡WOOW felizmente llegaste!",
        text2: "Te estábamos esperando,",
        text: "ven a conocernos tenemos un lugar para ti."
      },
      {
        id: 1,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1E3qkWQETPLO_M_rBidVi343Yb2FOzswn",
        text: "Tenemos el mejor clima, el mejor lugar para que te diviertas"
      },
      {
        id: 2,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1StKOl311bzIHDVzxqGFOkR427YxR-SUx",
        text: "Nos preocupamos por ti y por tu desarrollo profesional"
      },
      {
        id: 3,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1ZLBgYoGnzh1ur48HBwal9TMceU-7GWCE",
        text:
          "Pensamos siempre en ti, y hacemos todo lo necesario para que vivas la cultura Konecta"
      },
      {
        id: 4,
        bannerImg:
          "https://drive.google.com/uc?export=view&id=1H3EW9_JSRA5W5AbAfssTn6cVMPyPGJIn",
        text:
          "Tenemos el mejor talento que se encarga de crear lo mejor para ti"
      }
    ]
  })
};
</script>

<style >
.v-parallax__image {
  min-height: 80% !important;
}
.opasity {
  opacity: 0.83;
  background-color: rgb(0, 0, 0);
  /* height: 2em; */
  /* width: 150px; */
  /* position: absolute; */
  top: 10px;
  text-align: center;
  /* padding-top: 1em; */
}
.btn-postula {
  margin-top: 18em !important;
}
@media screen and (max-width: 600px) {
  .video {
    width: 350px !important;
    height: 300px !important;
  }
  .konecta-text {
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  /* .v-image__image--cover {
    width: 550px !important;
    height: 300 !important;
  } */
  .display-text {
    font-size: 24px !important;
  }
  .headline-text {
    font-size: 20px !important;
  }
  .btn-postula {
    margin-top: 16em !important;
  }
  #mob-size {
    /* content: url("../assets/Banners/Call-600x360.jpg") */
    display: block !important;
  }
  #desk-size {
    display: none !important;
  }
  /* .carousel-img{
    width: 600px!important;
    height: 360!important;
  } */
}
.display-text {
  font-size: 34px;
}
.headline-text {
  font-size: 24px;
}
.video {
  width: 1340px;
  height: 680px;
}
.konecta-text {
  padding-right: 48px;
  padding-left: 48px;
  margin-right: 48px;
  margin-left: 48px;
}
</style>