<template>
  <v-container>
    <v-layout pa-2 align-center class="d-flex flex-column">
      <v-flex xs12 md6 xl3 pa-2 style="width: 100%;">
        <div class="d-flex align-content-space-around">
          <v-progress-linear
            :value="progressDatosPersonales"
            color="teal"
            height="20"
            style="border-radius: 100px;"
            v-if="nextComponente !== 'componente5'"
          >
            <template v-slot="{ value }">
              <strong
                class="white--text body-2"
                v-if="progressDatosPersonales > 0"
              >{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
          <v-progress-linear
            :value="progressProfesional"
            class="ml-4"
            color="teal"
            height="20"
            style="border-radius: 100px;"
            reactive
            v-if="nextComponente !== 'componente5'"
          >
            <template v-slot="{ value }">
              <strong
                class="white--text body-2"
                v-if="progressProfesional > 0"
              >{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
          <v-progress-linear
            v-if="nextComponente !== 'componente5'"
            :value="progressExpLaboral"
            class="ml-4"
            color="teal"
            height="20"
            style="border-radius: 100px;"
            reactive
          >
            <template v-slot="{ value }">
              <strong
                class="white--text body-2"
                v-if="progressExpLaboral > 0"
              >{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
          <v-progress-linear
            v-if="nextComponente !== 'componente5'"
            :value="progressRotation"
            class="ml-4"
            color="teal"
            height="20"
            style="border-radius: 100px;"
            reactive
          >
            <template v-slot="{ value }">
              <strong class="white--text body-2" v-if="progressRotation > 0">{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
        </div>

        <div class="justify-center text-center" style="margin-bottom: 70px;">
          <div v-if="nextComponente === 'componente1'">
            <datosPersonales
              :countDatosPersonales="countDatosPersonales"
              :datosPersonalesPost="datosPersonalesPost"
              v-on:markerCoordinates="getCoordinates($event)"
              v-on:addMarker="getDirection($event)"
            />
          </div>
          <div v-if="progressDatosPersonales == 100 && nextComponente === 'componente2'">
            <datosProfesionales
              :countProf="countProf"
              :datosProfesionalesPost="datosProfesionalesPost"
              v-on:markerCoordinates="getCoordinatesStudy($event)"
              v-on:addMarker="getDirectionStudy($event)"
              :datosPersonalesPost="datosPersonalesPost"
            />
          </div>
          <div v-if="nextComponente === 'componente3'">
            <expLaboral
              :countExpLab="countExpLab"
              :datosExperienciaPost="datosExperienciaPost"
              :datosPersonalesPost="datosPersonalesPost"
              :agregarExperiencia="agregarExperiencia"
              :countBtnAddExp="countBtnAddExp"
              :allDatosExp="allDatosExp"
            />
          </div>
          <div v-if="nextComponente === 'componente4'">
            <datosRotacion
              :countRotacion="countRotacion"
              :datosRotacionPost="datosRotacionPost"
              v-on:markerCoordinates="getCoordinatesActivity($event)"
              v-on:addMarker="getDirectionActivity($event)"
              :datosPersonalesPost="datosPersonalesPost"
              :actividad_libre="actividad_libre"
            />
          </div>
          <div v-if="nextComponente === 'componente5'" class="pt-2 px-2">
            <p class="title text-center title font-weight-medium mt-0">¡Felicidades!</p>
            <p
              v-if="this.datosPersonalesPost.nombre_social!==undefined"
              class="title text-center title font-weight-medium pt-2"
            >{{this.datosPersonalesPost.nombre_social}}, ¡acabas de culminar la primera etapa de tu postulación!</p>

            <p
              v-else
              class="title text-center title font-weight-medium pt-2"
            >{{this.datosPersonalesPost.nombres}}, ¡acabas de culminar la primera etapa de tu postulación!</p>

            <img src="../assets/confetti.png" style="vertical-align: middle; width: 50px;" />
            <p
              class="pb-0 pt-4 body-2 text-justify"
            >Nuestro equipo de Selección se contactará contigo dentro de las 24 horas.</p>

            <p class="body-2 text-center">Si tienes dudas escríbenos al WhatsApp :</p>
            <v-row class="justify-center pb-12">
              <img src="../assets/logos_whatsapp.png" style="height: 35px;" />
              <p class="primary--text pl-4 pt-1">945787170</p>
            </v-row>

            <p class="body-2 pt-4 pb-0 mb-0">Califica la experiencia de tu proceso :</p>
            <div class="text-center teal--text">
              <v-rating
                v-model="rating"
                color="#FDD835"
                class="teal--text"
                v-on:input="buttonFeedbackStatus()"
              ></v-rating>
            </div>
            <v-text-field
              v-on:input="buttonFeedbackStatus()"
              name="name"
              v-model="ratingComment"
              placeholder="Algún comentario"
              id="id"
              class="pa-0"
            ></v-text-field>
            <v-row class="justify-center mb-0">
              <v-btn
                :disabled="this.countFeedback"
                color="#00B8AD"
                class="white--text feedbackButton"
                rounded
                @click="sendFeedback()"
              >Enviar</v-btn>
            </v-row>
            <v-row class="justify-center">
              <p
                v-if="countFeedback"
                class="feedback-message"
              >¡Gracias por tu calificación/comentarios!</p>
              <p v-else class="message-blank">¡Gracias por tu calificación/comentarios!</p>
            </v-row>
            <v-row class="justify-center">
              <v-btn
                color="#00B8AD"
                class="white--text mt-4"
                rounded
                @click="$router.push({name: 'home'})"
              >Regresar a la página de inicio</v-btn>
            </v-row>
          </div>
        </div>
        <v-row v-if="nextComponente !== 'componente5'">
          <v-col class="text-start">
            <v-btn
              color="#00B8AD"
              v-show="hidden"
              class="white--text"
              fab
              large
              absolute
              dark
              bottom
              left
              @click="btnPrevStep()"
            >
              <v-icon>mdi-arrow-left-bold</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-end">
            <v-btn
              v-if="countRotacion !== 7"
              fab
              large
              :disabled="!datosPersonalesPost.datosValidPer"
              color="#00B8AD"
              class="white--text"
              absolute
              bottom
              right
              @click="btnNextStep()"
            >
              <v-icon>mdi-arrow-right-bold</v-icon>
            </v-btn>
            <v-btn
              v-if="countRotacion === 7"
              color="#00B8AD"
              class="white--text"
              absolute
              bottom
              right
              @click="agregarPersonalDate()"
            >Finalizar</v-btn>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <!-- <v-card-title class="headline">Se registro tu experiencia laboral</v-card-title> -->
            <v-row class="justify-center pt-6 pb-4">
              <v-icon color="teal" size="48">work</v-icon>
            </v-row>
            <v-card-text
              class="subtitle-1 black--text text-center"
            >Se registro tu experiencia laboral</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="teal" text @click="dialog = false">Aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
import moment from "moment";

import datosPersonales from "../components/Datos-personales.vue";
import datosProfesionales from "../components/Datos-profesionales.vue";
import expLaboral from "../components/Experiencia-laboral.vue";
import datosRotacion from "../components/DatosRotacion";

export default {
  components: {
    datosPersonales,
    datosProfesionales,
    expLaboral,
    datosRotacion
  },
  props: {
    DocumentType: null,
    numeroDoc: ""
  },
  data() {
    return {
      dialog: false,
      addressTextPersonal: "",
      markersPersonal: {},
      addressTextStudy: "",
      markersStudy: {},
      addressTextActivity: "",
      markersActivity: {},
      rating: null,
      ratingComment: "",
      countFeedback: false,

      // addressVP: '',
      // coordsVP: [0,0],
      hidden: false,
      progressDatosPersonales: 0,
      nextComponente: "componente1",
      añadirExp: false,
      nextComp2: 0,
      nextComp3: 0,
      nextComp4: 0,
      countDatosPersonales: 0,
      countProf: -1,
      countExpLab: -1,
      countRotacion: 0,
      countBtnAddExp: 0,

      progressProfesional: -20,
      progressExpLaboral: -20,
      progressRotation: 0,

      datosPostulantes: [],
      datosPersonalesPost: [
        {
          datosValidPer: true,
          tipodoc: "",
          numdoc: "",
          nombres: "",
          apellido_p: "",
          apellido_m: "",
          nombre_social: " ",
          nacionalidad: "",
          estado_civil: "radio-1",
          fecha_nac: null,
          genero: "",
          correo: "",
          telefono: null,

          n_hijos: 0,
          text_dir: "",
          coordenadas_direccion: [0, 0],
          como_konecta: null,
          referidos: "",
          trabaja_k: ""
        }
      ],
      datosProfesionalesPost: [
        {
          datosValidProf: true,
          grado_formacion: null,
          institucion: "",
          estado_estudios: "",
          rubro_carrera: "",
          coord_estudio: [,], //PASAR UNDEFINED (VACIO) SI NO TIENE QUE LLENAR ESTE DATO
          text_dir_estudio: "",
          horario_estudio: "",
        }
      ],
      datosExperienciaPost: [
        {
          datosValidExp: true,
          flag_se: 0,
          flag_conExp: 0,
          flag_ec: 0,
          flag_eo: 0,

          se_p_redes: "",
          se_p_ventas: "",
          se_p_atc: null,
          se_p_crosselling: "",
          se_p_backof: "",
          se_expect_salarial: [,],
          se_expect_salarial_desde: 0,
          se_expect_salarial_hasta: 0,
          ec_empresa: "",
          ec_cliente: "",
          ec_rubro_cliente: "",
          ec_segmento: "",
          ec_tiempo_exp: 0,
          ec_retribucion_basico: 0,
          ec_retribucion_comisiones: 0,

          eo_empresa: "",
          eo_rubro_empresa: "",
          eo_puesto: "",
          eo_tiempo_exp: 0,
          eo_retribucion_basico: 0,
          eo_retribucion_comisiones: 0
        }
      ],
      allDatosExp: [],
      datosRotacionPost: [
        {
          actividades: "",
          coord_actividad: [0, 0],
          text_dir_actividad: "",
          horario_actividad: "",
          fam_postulante: 0,
          motivacion: "",
          actividad_tiempo_libre: [],
          sede_preferencia: [],
          arrFamiliares:[],
          familiares: [],
        }
      ],
      actividad_libre: [],
      familia:[]
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
   
    agregarExperiencia() {
      if (this.countBtnAddExp < 2) {
        this.countExpLab = 0;
        this.añadirExp = true;
        this.countBtnAddExp += 1;
      }
    },
    arrExperiencias() {

      if (this.datosExperienciaPost.flag_conExp === "rbtExtContact") {
        this.datosExperienciaPost.flag_ec = 1;
        this.datosExperienciaPost.flag_eo = 0;
      }
      if (this.datosExperienciaPost.flag_conExp === "rbtExpOtros") {
        this.datosExperienciaPost.flag_ec = 0;
        this.datosExperienciaPost.flag_eo = 1;
      }
      this.allDatosExp.push({
        flag_se: this.datosExperienciaPost.flag_se,
        flag_ec: this.datosExperienciaPost.flag_ec,
        flag_eo: this.datosExperienciaPost.flag_eo,
        se_p_redes: this.datosExperienciaPost.se_p_redes,
        se_p_ventas: this.datosExperienciaPost.se_p_ventas,
        se_p_atc: this.datosExperienciaPost.se_p_atc,
        se_p_crosselling: this.datosExperienciaPost.se_p_crosselling,
        se_p_backof: this.datosExperienciaPost.se_p_backof,
        se_expect_salarial: [
          this.datosExperienciaPost.se_expect_salarial_desde,
          this.datosExperienciaPost.se_expect_salarial_hasta
        ],

        ec_empresa: this.datosExperienciaPost.ec_empresa,
        ec_cliente: this.datosExperienciaPost.ec_cliente,
        ec_rubro_cliente: this.datosExperienciaPost.ec_rubro_cliente,
        ec_segmento: this.datosExperienciaPost.ec_segmento,
        ec_tiempo_exp: this.datosExperienciaPost.ec_tiempo_exp,
        ec_retribucion_basico: this.datosExperienciaPost.ec_retribucion_basico,
        ec_retribucion_comisiones: this.datosExperienciaPost
          .ec_retribucion_comisiones,

        eo_empresa: this.datosExperienciaPost.eo_empresa,
        eo_rubro_empresa: this.datosExperienciaPost.eo_rubro_empresa,
        eo_puesto: this.datosExperienciaPost.eo_puesto,
        eo_tiempo_exp: this.datosExperienciaPost.eo_tiempo_exp,
        eo_retribucion_basico: this.datosExperienciaPost.eo_retribucion_basico,
        eo_retribucion_comisiones: this.datosExperienciaPost
          .eo_retribucion_comisiones
      });
      (this.datosExperienciaPost.ec_empresa = ""),
        (this.datosExperienciaPost.ec_cliente = ""),
        (this.datosExperienciaPost.ec_rubro_cliente = ""),
        (this.datosExperienciaPost.ec_segmento = ""),
        (this.datosExperienciaPost.ec_tiempo_exp = null),
        (this.datosExperienciaPost.ec_retribucion_basico = null),
        (this.datosExperienciaPost.ec_retribucion_comisiones = null),
        (this.datosExperienciaPost.eo_empresa = ""),
        (this.datosExperienciaPost.eo_rubro_empresa = ""),
        (this.datosExperienciaPost.eo_puesto = ""),
        (this.datosExperienciaPost.eo_tiempo_exp = null),
        (this.datosExperienciaPost.eo_retribucion_basico = null),
        (this.datosExperienciaPost.eo_retribucion_comisiones = null),
        localStorage.setItem("datos", JSON.stringify(this.allDatosExp));
      // console.log(this.allDatosExp);
    },
    arrDatosFamiliares() {
      // var fam_rotacion = [];
      this.datosRotacionPost.arrFamiliares.forEach(element => {
        if(element.parentesco !== ''){
          this.familia.push({
            parentesco: element.parentesco,
            edad: element.edad,
            trabaja: element.trabaja
            });
        }
      });
      // this.familia = [];
      console.log('arrFamiliares',this.datosRotacionPost.arrFamiliares);
      console.log('array familia',this.familia);
      console.log('rotacion', this.datosRotacionPost.familiares);
    },
    agregarPersonalDate() {
      this.nextComponente = "componente5";
      this.datosPostulantes.push({
        tipodoc: this.DocumentType,
        numdoc: this.numeroDoc,
        nombres: this.datosPersonalesPost.nombres,
        apellido_p: this.datosPersonalesPost.apellido_p,
        apellido_m: this.datosPersonalesPost.apellido_m,
        nombre_social: this.datosPersonalesPost.nombre_social,
        nacionalidad: this.datosPersonalesPost.nacionalidad,
        estado_civil: this.datosPersonalesPost.estado_civil,
        fecha_nac: this.datosPersonalesPost.fecha_nac,
        genero: this.datosPersonalesPost.genero,
        correo: this.datosPersonalesPost.correo,
        telefono: this.datosPersonalesPost.telefono,
        n_hijos: this.datosPersonalesPost.n_hijos,
        text_dir: this.addressTextPersonal,
        coordenadas_direccion: [
          this.markersPersonal.lat,
          this.markersPersonal.lng
        ],
        como_konecta: this.datosPersonalesPost.como_konecta,
        referidos: this.datosPersonalesPost.referidos,
        trabaja_k: this.datosPersonalesPost.amigo_trabajaK,
        //datos profesionales
        grado_formacion: this.datosProfesionalesPost.grado_formacion,
        institucion: this.datosProfesionalesPost.institucion,
        estado_estudios: this.datosProfesionalesPost.estado_estudios,
        rubro_carrera: this.datosProfesionalesPost.rubro_carrera,
        coord_estudio: [this.markersStudy.lat, this.markersStudy.lng],
        text_dir_estudio: this.addressTextStudy,

        horario_estudio: this.datosProfesionalesPost.horario_estudio,
        //DATOS EXPERIENCIA
        experienciaPostulante: this.allDatosExp,
        //datos rotacion
        actividades: this.datosRotacionPost.actividades,
        coord_actividad: [this.markersActivity.lat, this.markersActivity.lng],
        text_dir_actividad: this.addressTextActivity,
        horario_actividad: this.datosRotacionPost.horario_actividad,
        fam_postulante: this.datosRotacionPost.fam_postulante,
        motivacion: this.datosRotacionPost.motivacion,
        actividad_tiempo_libre: this.datosRotacionPost[0]
          .actividad_tiempo_libre,
        sede_preferencia: this.datosRotacionPost[0].sede_preferencia,
        familiares: this.familia
      });
      localStorage.setItem("datos", JSON.stringify(this.datosPostulantes));
      console.log(this.datosPostulantes);
      console.log(this.familiares);
      this.PostPostulante(this.datosPostulantes[0]);
    },

    postDatosExperiencia(id, experiencia) {
      for (let i = 0; i < experiencia.length; i++) {
        const experienciaKey = firebase
          .database()
          .ref("DATOS_EXPERIENCIA")
          .push().key;

        let experiencia_table = {
          flag_se: experiencia[i].flag_se,
          flag_ec: experiencia[i].flag_ec,
          flag_eo: experiencia[i].flag_eo,

          se_p_redes: experiencia[i].se_p_redes,
          se_p_ventas: experiencia[i].se_p_ventas,
          se_p_atc: experiencia[i].se_p_atc,
          se_p_crosselling: experiencia[i].se_p_crosselling,
          se_p_backof: experiencia[i].se_p_backof,
          se_expect_salarial: [
            experiencia[i].se_expect_salarial[0],
            experiencia[i].se_expect_salarial[1]
          ],

          ec_empresa: experiencia[i].ec_empresa,
          ec_cliente: experiencia[i].ec_cliente,
          ec_rubro_cliente: experiencia[i].ec_rubro_cliente,
          ec_segmento: experiencia[i].ec_segmento,
          ec_tiempo_exp: experiencia[i].ec_tiempo_exp,
          ec_retribucion_basico: experiencia[i].ec_retribucion_basico,
          ec_retribucion_comisiones: experiencia[i].ec_retribucion_comisiones,

          eo_empresa: experiencia[i].eo_empresa,
          eo_rubro_empresa: experiencia[i].eo_rubro_empresa,
          eo_puesto: experiencia[i].eo_puesto,
          eo_tiempo_exp: experiencia[i].eo_tiempo_exp,
          eo_retribucion_basico: experiencia[i].eo_retribucion_basico,
          eo_retribucion_comisiones: experiencia[i].eo_retribucion_comisiones,
          id_postulante: id
        };
        firebase
          .database()
          .ref("DATOS_EXPERIENCIA")
          .child(experienciaKey)
          .set(JSON.parse(JSON.stringify(experiencia_table)));
      }
    },

    postDatosFamiliares(id, familiares) {
     if (familiares != undefined) {
        for (let i = 0; i < familiares.length; i++) {
          const familiaresKey = firebase
            .database()
            .ref("DATOS_FAMILIARES")
            .push().key;

          let familiares_table = {
            parentesco: familiares[i].parentesco,
            edad: familiares[i].edad,
            trabaja: familiares[i].trabaja,
            id_postulante: id
          };
          firebase
            .database()
            .ref("DATOS_FAMILIARES")
            .child(familiaresKey)
            .set(JSON.parse(JSON.stringify(familiares_table)));
        }
      }
    },

    btnNextStep() {
      // datos personales
      // if (this.$refs.form.validate()) {
      if (this.progressDatosPersonales !== 100) {
        this.hidden = true;
        this.countDatosPersonales += 1;
        this.progressDatosPersonales += 10;
      }

      if (this.progressDatosPersonales === 100) {
        this.progressDatosPersonales += 0;
        this.hidden = false;
        this.nextComp2 += 1;
      }
      // Datos profesionales
      if (this.nextComp2 === 2) {
        this.nextComponente = "componente2";
      }
      if (
        this.nextComponente === "componente2" &&
        this.progressProfesional !== 100
      ) {
        this.countProf += 1;
        this.countProf === 0 ? (this.hidden = false) : (this.hidden = true);
        this.progressProfesional += 20;
      }
      if (
        this.countProf === 2 &&
        this.datosProfesionalesPost.grado_formacion == "Secundaria"
      ) {
        this.progressProfesional += 60;
        this.countProf += 3;
        this.hidden = false;
      }

      if (
        this.countProf === 3 &&
        this.datosProfesionalesPost.estado_estudios !== "En curso"
      ) {
        this.progressProfesional += 40;
        this.countProf += 2;
        this.hidden = false;
      }
      if (this.countProf === 5 && this.progressProfesional == 100) {
        this.progressProfesional += 0;
        this.hidden = false;
        this.nextComp3 += 1;
      }
      // Experiencia Laboral sin Experiencia
      if (this.nextComp3 == 2) {
        this.nextComponente = "componente3";
      }
      if (this.nextComponente === "componente3" && this.countExpLab !== 7) {
        this.countExpLab += 1;
        this.countExpLab === 0 ? (this.hidden = false) : (this.hidden = true);
        this.añadirExp === false
          ? (this.progressExpLaboral += 16)
          : (this.progressExpLaboral += 0);
      }
      if (this.countExpLab === 7) {
        this.hidden = false;
        this.progressExpLaboral = 100;
        this.nextComp4 += 1;
      }
      //Agregar experiencia
      if (
        (this.countExpLab === 5 &&
          this.datosExperienciaPost.flag_conExp == "rbtExpOtros") ||
        (this.countExpLab === 6 &&
          this.datosExperienciaPost.flag_conExp == "rbtExtContact")
      ) {
        this.arrExperiencias();
        this.dialog = true;
        // alert("con experiencia");
        this.hidden = false;
      }

      if (
        this.countExpLab === 6 &&
        this.datosExperienciaPost.flag_conExp == "rbtExpOtros"
      ) {
        this.countExpLab += 1;
        this.hidden = false;
        this.progressExpLaboral = 100;
      }
      // Rotacion
      // // Rotacion
      if (this.nextComp4 == 2) {
        this.nextComponente = "componente4";
        if (
          this.datosExperienciaPost.flag_conExp !== "rbtExpOtros" &&
          this.datosExperienciaPost.flag_conExp !== "rbtExtContact"
        ) {
          this.arrExperiencias();
        }
      }
      if (this.nextComponente === "componente4" && this.countRotacion !== 7) {
        this.countRotacion += 1;
        this.progressRotation += 14;
        this.countRotacion === 1 ? (this.hidden = false) : (this.hidden = true);

      }
      if (
        this.countRotacion === 2 &&
        this.datosRotacionPost.actividades === "F"
      ) {
        this.countRotacion += 2;
        this.progressRotation += 28;
      }
      if (this.countRotacion === 7) {
        this.hidden = true;
        this.progressRotation = 100;
      }
      if(this.countRotacion === 5){
        this.arrDatosFamiliares();
        console.log('numero count rotacion', this.countRotacion);
      }
      // }

      this.isNext = true;
      // this.datosPersonalesPost.datosValidPer = true;
    },
    btnPrevStep() {
      if (
        this.countDatosPersonales !== 0 &&
        this.nextComponente === "componente1"
      ) {
        this.countDatosPersonales -= 1;
        this.progressDatosPersonales -= 10;
      }
      this.countDatosPersonales === 0 || this.countDatosPersonales === 100
        ? (this.hidden = false)
        : (this.hidden = true);
      if (this.nextComponente === "componente2") {
        this.countProf -= 1;
        this.progressProfesional -= 20;
        this.countProf === 0 || this.progressProfesional === 100
          ? (this.hidden = false)
          : (this.hidden = true);
      }
      // Experiencia Laboral
      if (this.nextComponente === "componente3") {
        this.countExpLab -= 1;
        this.añadirExp === false
          ? (this.progressExpLaboral -= 16)
          : (this.progressExpLaboral -= 0);
        this.countExpLab === 0 || this.progressExpLaboral === 100
          ? (this.hidden = false)
          : (this.hidden = true);
      }

      //rotacion
      if (this.nextComponente === "componente4") {
        this.countRotacion -= 1;
        this.progressRotation -= 14;
        this.countRotacion === 1 || this.progressRotation === 100
          ? (this.hidden = false)
          : (this.hidden = true);
      }
      if (
        this.countRotacion === 3 &&
        this.datosRotacionPost.actividades === "F"
      ) {
        this.countRotacion -= 2;
        this.progressRotation -= 28;
        this.hidden = false;
      }
      if(this.countRotacion === 4){
        // this.datosRotacionPost.arrFamiliares = [];
        this.familia = [];
        console.log('limpiando array',this.datosRotacionPost.arrFamiliares);
        console.log('this familia', this.familia);
      }
    },

    PostPostulante(personalInformation) {
      let date = new Date();
      let dateString = moment().format("L");
      let hour = date.getHours() + ":" + date.getMinutes() + "";
      const registerAt = {
        date: dateString,
        hour: hour
      };

      let datosPostulantes = {
        tipodoc: personalInformation.tipodoc,
        numdoc: personalInformation.numdoc,
        nombres: personalInformation.nombres,
        apellido_p: personalInformation.apellido_p,
        apellido_m: personalInformation.apellido_m,
        nombre_social: personalInformation.nombre_social,
        nacionalidad: personalInformation.nacionalidad,
        estado_civil: personalInformation.estado_civil,
        fecha_nac: personalInformation.fecha_nac,
        genero: personalInformation.genero,
        correo: personalInformation.correo,
        telefono: personalInformation.telefono,
        n_hijos: personalInformation.n_hijos,
        text_dir: personalInformation.text_dir,
        coordenadas_direccion: personalInformation.coordenadas_direccion,
        como_konecta: personalInformation.como_konecta,
        referidos: personalInformation.referidos,
        trabaja_k: personalInformation.amigo_trabajaK,

        RegistradoDate: registerAt
      };

      //localStorage.setItem("datos", JSON.stringify(this.datosPostulantes[0]));
      let postulantes = JSON.parse(JSON.stringify(datosPostulantes));
      const postulateKey = firebase
        .database()
        .ref("POSTULANTES")
        .push().key;
      firebase
        .database()
        .ref("POSTULANTES")
        .child(postulateKey)
        .set(postulantes);

      const profesionalesKey = firebase
        .database()
        .ref("DATOS_PROFESIONALES")
        .push().key;

      const datos_profesionales = {
        //datos profesionales
        grado_formacion: personalInformation.grado_formacion,
        institucion: personalInformation.institucion,
        estado_estudios: personalInformation.estado_estudios,
        rubro_carrera: personalInformation.rubro_carrera,
        coord_estudio: personalInformation.coord_estudio,
        text_dir_estudio: personalInformation.text_dir_estudio,
        horario_estudio: personalInformation.horario_estudio,
        id_postulante: postulateKey
      };

      firebase
        .database()
        .ref("DATOS_PROFESIONALES")
        .child(profesionalesKey)
        .set(JSON.parse(JSON.stringify(datos_profesionales)));

      let datos_experiencia = [];
      datos_experiencia = personalInformation.experienciaPostulante;

      this.postDatosExperiencia(postulateKey, datos_experiencia);

      let familiares = [];
      familiares = personalInformation.familiares;
      this.postDatosFamiliares(postulateKey, familiares);

      let datos_rotacion = {
        //datos rotacion
        actividades: personalInformation.actividades,
        coord_actividad: personalInformation.coord_actividad,
        text_dir_actividad: personalInformation.text_dir_actividad,
        horario_actividad: personalInformation.horario_actividad,
        fam_postulante: personalInformation.fam_postulante,
        motivacion: personalInformation.motivacion,
        actividad_tiempo_libre: personalInformation.actividad_tiempo_libre,
        sede_preferencia: personalInformation.sede_preferencia,

        id_postulante: postulateKey
      };

      const rotacionKey = firebase
        .database()
        .ref("DATOS_ROTACION")
        .push().key;
      firebase
        .database()
        .ref("DATOS_ROTACION")
        .child(rotacionKey)
        .set(JSON.parse(JSON.stringify(datos_rotacion)));
    },

    getDirection: function(getDirection) {
      this.addressTextPersonal = getDirection;
      console.log(this.addressTextPersonal);
    },
    getCoordinates: function(getCoordinates) {
      this.markersPersonal = getCoordinates;
      console.log(this.markersPersonal);
    },

    getDirectionStudy: function(getDirectionStudy) {
      this.addressTextStudy = getDirectionStudy;
      console.log(this.addressTextStudy);
    },
    getCoordinatesStudy: function(getCoordinatesStudy) {
      this.markersStudy = getCoordinatesStudy;
      console.log(this.markersStudy);
    },

    getDirectionActivity: function(getDirectionActivity) {
      this.addressTextActivity = getDirectionActivity;
      console.log(this.addressTextActivity);
    },
    getCoordinatesActivity: function(getCoordinatesActivity) {
      this.markersActivity = getCoordinatesActivity;
      console.log(this.markersActivity);
    },
    sendFeedback() {
      let feedback = {
        numDoc: this.numeroDoc,
        rating: this.rating,
        comment: this.ratingComment
      };

      const feedbackKey = firebase
        .database()
        .ref("FEEDBACK")
        .push().key;
      firebase
        .database()
        .ref("FEEDBACK")
        .child(feedbackKey)
        .set(JSON.parse(JSON.stringify(feedback)));

      this.countFeedback = true;
    },
    buttonFeedbackStatus() {
      this.countFeedback = false;
    }
  }
};
</script>

<style>
.radioStateCivil {
  background: #e5e5e5;
  border-radius: 4px;
  font-size: 18px;
}
.v-btn--absolute.v-btn--right,
.v-btn--fixed.v-btn--right {
  right: 24px;
}
.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom,
.v-btn--absolute.v-btn--bottom {
  bottom: 40px;
}
.v-btn--absolute.v-btn--left,
.v-btn--fixed.v-btn--left {
  left: 24px;
}
.v-application .title {
  line-height: 23px !important;
}

.feedbackButton {
  margin-bottom: 2em;
}

.feedback-message {
  color: #00b8ad !important;
}
.message-blank {
  visibility: hidden;
}
</style>