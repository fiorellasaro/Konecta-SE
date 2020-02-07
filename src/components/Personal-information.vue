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
            />
          </div>
          <div v-if="progressDatosPersonales == 100 && nextComponente === 'componente2'">
            <datosProfesionales
              :countProf="countProf"
              :datosProfesionalesPost="datosProfesionalesPost"
            />
          </div>
          <div v-if="nextComponente === 'componente3'">
            <expLaboral :countExpLab="countExpLab" :datosExperienciaPost="datosExperienciaPost" />
          </div>
          <div v-if="nextComponente === 'componente4'">
            <datosRotacion :countRotacion="countRotacion" :datosRotacionPost="datosRotacionPost" />
          </div>
          <div v-if="nextComponente === 'componente5'" class="pt-12 px-4">
            <p class="title text-center headline">¡Gracias por tu postulación!</p>
            <p
              class="title text-center headline pt-6"
            >Nuestro equipo de Selección se comunicará contigo muy pronto</p>
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

  data() {
    return {
      hidden: false,
      progressDatosPersonales: 0,
      nextComponente: "componente1",
      nextComp2: 0,
      nextComp3: 0,
      nextComp4: 0,
      countDatosPersonales: 0,
      countProf: -1,
      countExpLab: -1,
      countRotacion: 0,

      progressProfesional: -20,
      progressExpLaboral: -20,
      progressRotation: 0,

      datosPostulantes: [],

      datosPersonalesPost: [
        {
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
          coordenadas_direccion: [1.23254, -2.00655],
          como_konecta: null,
          referidos: ""
        }
      ],
      datosProfesionalesPost: [
        {
          grado_formacion: null,
          institucion: "",
          estado_estudios: "",
          rubro_carrera: "",
          coord_estudio: [undefined, undefined], //PASAR UNDEFINED (VACIO) SI NO TIENE QUE LLENAR ESTE DATO
          text_dir_estudio: "",
          horario_estudio: ""
        }
      ],
      datosExperienciaPost: [
        {
          flag_se: 0,
          flag_ec: 0,
          flag_eo: 0,

          se_p_redes: "",
          se_p_ventas: "",
          se_p_atc: "",
          se_p_crosselling: "",
          se_p_backof: "",
          se_expect_salarial: [,],
          se_expect_salarial_desde: 0,
          se_expect_salarial_hasta: 0,
          ec_empresa: "",
          ec_cliente: "",
          ec_rubro_cliente: "",
          ec_segmento: "",
          ec_tiempo_exp: 6,
          ec_retribucion_basico: 1000,
          ec_retribucion_comisiones: 300,

          eo_empresa: "",
          eo_rubro_empresa: "",
          eo_puesto: "",
          eo_tiempo_exp: 0,
          eo_retribucion_basico: 0,
          eo_retribucion_comisiones: 0
        }
      ],
      datosRotacionPost: [
        {
          actividades: "",
          coord_actividad: [1.342, 2.332],
          text_dir_actividad: "",
          horario_actividad: "",
          fam_postulante: 0,
          motivacion: "",
          actividad_tiempo_libre: [],
          sede_preferencia: [],
          familiares: []
        }
      ]
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
    agregarPersonalDate() {
      this.nextComponente = "componente5";
      this.datosPostulantes.push({
        tipodoc: "dni",
        numdoc: "456",
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
        coordenadas_direccion: [undefined, undefined],
        como_konecta: this.datosPersonalesPost.como_konecta,
        referidos: this.datosPersonalesPost.referidos,
        //datos profesionales
        grado_formacion: this.datosProfesionalesPost.grado_formacion,
        institucion: this.datosProfesionalesPost.institucion,
        estado_estudios: this.datosProfesionalesPost.estado_estudios,
        rubro_carrera: this.datosProfesionalesPost.rubro_carrera,
        coord_estudio: [undefined, undefined], //PASAR UNDEFINED (VACIO) SI NO TIENE QUE LLENAR ESTE DATO
        text_dir_estudio: this.datosProfesionalesPost.text_dir_estudio,
        horario_estudio: this.datosProfesionalesPost.horario_estudio,
        experienciaPostulante: [
          {
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
          },
        ],
        //datos rotacion
        actividades: this.datosRotacionPost.actividades,
        coord_actividad: [1.342, 2.332],
        text_dir_actividad: this.datosRotacionPost.text_dir_estudio,
        horario_actividad: this.datosRotacionPost.horario_actividad,
        fam_postulante: this.datosRotacionPost.fam_postulante,
        motivacion: this.datosRotacionPost.motivacion,
        actividad_tiempo_libre: this.datosRotacionPost.actividad_tiempo_libre,
        sede_preferencia: this.datosRotacionPost.sede_preferencia,
        familiares: [{ parentesco: "Esposa", edad: 28, trabaja: true }]
      });
      localStorage.setItem("datos", JSON.stringify(this.datosPostulantes));
      console.log(this.datosPostulantes);
      // this.nextComponente === 'componente5'
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
          .set(experiencia_table);
      }
    },

    postDatosFamiliares(id, familiares) {
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
          .set(familiares_table);
      }
    },

    btnNextStep() {
      // datos personales
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
      if (this.nextComponente === "componente2" && this.progressProfesional !== 100) {
        this.countProf += 1;
        this.countProf === 0
          ? (this.hidden = false)
          : (this.hidden = true);
        this.progressProfesional += 20;
      }
      if (
        this.countProf === 3 &&
        this.datosProfesionalesPost.estado_estudios !== "En curso"
      ) {
        this.progressProfesional += 40;
        this.countProf += 2;
        this.hidden = false;
      };
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
        this.countExpLab === 0
          ? (this.hidden = false)
          : (this.hidden = true);
        this.progressExpLaboral += 16;
      }
      if (this.countExpLab === 7) {
        this.hidden = false
        this.progressExpLaboral = 100;
        this.nextComp4 += 1;
      }

      if(this.countExpLab === 6  && this.datosExperienciaPost.flag_ec == 'rbtExpOtros'){
        this.countExpLab += 1;
        this.hidden = false
        this.progressExpLaboral = 100;
        console.log('this.progressExpLaboral',this.progressExpLaboral);
        console.log('this.countExpLab',this.countExpLab);
      }
      // Rotacion
      // // Rotacion
      if (this.nextComp4 == 2) {
        this.nextComponente = "componente4";
      }
      if (this.nextComponente === "componente4" && this.countRotacion !== 7) {
        this.countRotacion += 1;
        this.countRotacion === 1
          ? (this.hidden = false)
          : (this.hidden = true);
        this.progressRotation += 14;
      }
      if (this.countRotacion === 7) {
        this.hidden = true
        this.progressRotation = 100;
      }

      this.isNext = true;
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
        this.progressExpLaboral -= 16;
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
    },

    PostPostulante() {
      let date = new Date();
      let dateString = moment().format("L");
      let hour = date.getHours() + ":" + date.getMinutes() + "";
      const registerAt = {
        date: dateString,
        hour: hour
      };

      this.datosPostulantes = {
        tipodoc: "DNI",
        numdoc: "72722297",
        nombres: this.personalInformation.nombres,
        apellido_p: this.personalInformation.apellido_p,
        apellido_m: this.personalInformation.apellido_m,
        nombre_social: this.personalInformation.nombre_social,
        nacionalidad: this.personalInformation.nacionalidad,
        estado_civil: this.personalInformation.estado_civil,
        fecha_nac: "1998-02-07",
        genero: this.personalInformation.genero,
        correo: this.personalInformation.correo,
        telefono: this.personalInformation.telefono,
        n_hijos: this.personalInformation.n_hijos,
        coordenadas_direccion: [1.23254, -2.00655],
        como_konecta: this.personalInformation.como_konecta,
        referidos: this.personalInformation.referidos,

        RegistradoDate: registerAt
      };

      localStorage.setItem("datos", JSON.stringify(this.datosPostulantes[0]));
      let postulantes = JSON.parse(JSON.stringify(this.datosPostulantes));
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
        grado_formacion: "Universidad",
        institucion: "UNMSM",
        estado_estudios: "Incompleta",
        rubro_carrera: "",
        coord_estudio: [0, 0], //PASAR UNDEFINED (VACIO) SI NO TIENE QUE LLENAR ESTE DATO
        text_dir_estudio: "",
        horario_estudio: "TARDE",
        id_postulante: postulateKey
      };
      firebase
        .database()
        .ref("DATOS_PROFESIONALES")
        .child(profesionalesKey)
        .set(datos_profesionales);

      let datos_experiencia = [
        {
          flag_se: 0,
          flag_ec: 1,
          flag_eo: 0,

          se_p_redes: "",
          se_p_ventas: "",
          se_p_atc: "",
          se_p_crosselling: "",
          se_p_backof: "",
          se_expect_salarial: [0, 0],

          ec_empresa: "ATENTO",
          ec_cliente: "Entel Chile",
          ec_rubro_cliente: "TELECOMUNICACIONES",
          ec_segmento: "ATENCION AL CLIENTE",
          ec_tiempo_exp: 12,
          ec_retribucion_basico: 800,
          ec_retribucion_comisiones: 200,

          eo_empresa: "",
          eo_rubro_empresa: "",
          eo_puesto: "",
          eo_tiempo_exp: 0,
          eo_retribucion_basico: 0,
          eo_retribucion_comisiones: 0
        },
        {
          flag_se: 0,
          flag_ec: 0,
          flag_eo: 1,

          se_p_redes: "",
          se_p_ventas: "",
          se_p_atc: "",
          se_p_crosselling: "",
          se_p_backof: "",
          se_expect_salarial: [0, 0],

          ec_empresa: "",
          ec_cliente: "",
          ec_rubro_cliente: "",
          ec_segmento: "",
          ec_tiempo_exp: 0,
          ec_retribucion_basico: 0,
          ec_retribucion_comisiones: 0,

          eo_empresa: "Ripley",
          eo_rubro_empresa: "Retail",
          eo_puesto: "Atencion al cliente",
          eo_tiempo_exp: 6,
          eo_retribucion_basico: 850,
          eo_retribucion_comisiones: 200
        }
      ];

      this.postDatosExperiencia(postulateKey, datos_experiencia);

      let familiares = [
        { parentesco: "Padre", edad: 50, trabaja: true },
        { parentesco: "Hij@", edad: 4, trabaja: false }
      ];
      this.postDatosFamiliares(postulateKey, familiares);

      //datos rotacion
      let datos_rotacion = {
        actividades: "Deporte",
        coord_actividad: [1.342, 2.332],
        text_dir_actividad: "Jr. Ocoña 889",
        horario_actividad: "Noche",
        fam_postulante: 2,
        motivacion: "Viajar",
        actividad_tiempo_libre: ["Playa", "Cine", "Pasear"],
        sede_preferencia: ["Sudameris", "Lima Cargo", "Surquillo"],
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
        .set(datos_rotacion);
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
</style>