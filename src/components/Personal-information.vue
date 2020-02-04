<template>
  <v-container>
    <v-layout pa-2 align-center class="d-flex flex-column">
      <v-flex xs12 md6 xl3 pa-2 style="width: 100%;">
        <div class="d-flex">
          <v-progress-linear v-model="skill" color="teal" height="25" reactive v-if="skill !== 100">
            <template v-slot="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
          <v-spacer></v-spacer>
          <!-- <v-progress-linear v-model="professionalProgress" color="teal" height="25" reactive>
            <template v-slot="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>-->
        </div>
        <div id="step0" v-if="counter == 0" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu nombre?</p>
          <v-text-field
            :rules="nameRules"
            v-model="personalInformation.nombres"
            class="pt-0"
            color="teal"
            required
          ></v-text-field>
          <p class="text-center black--text headline mb-0 mt-6">¿Cuáles son tus apellidos?</p>
          <v-row>
            <v-col cols="6" sm="6">
              <v-text-field
                :rules="lastName1Rules"
                v-model="personalInformation.apellido_p"
                color="teal"
                label="Apellido Paterno"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" sm="6">
              <v-text-field
                :rules="lastName2Rules"
                v-model="personalInformation.apellido_m"
                color="teal"
                label="Apellido Materno"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <!-- step 1 -->
        <div id="step1" v-if="counter == 1" class="px-3 pt-12">
          <p
            class="text-center black--text headline mb-4 font-weight-bold"
          >¿Cómo quiseras que te llamemos, brindanos tu nombre Social?</p>
          <v-text-field
            value=""
            v-model="personalInformation.nombre_social"
            class="pt-2"
            color="teal"
            placeholder="Ejemplo : “Cami” , “ Lu”, “Mari”"
          ></v-text-field>
          <p
            class="grey--text subtitle-1 text-center pt-6"
          >Podremos emplear este nombre cuándo nos visites</p>

          <v-row class="justify-end">
            <v-btn
              text
              small
              class="text-capitalize subtitle-2"
              color="#2D9CDB"
              @click="counter += 1"
            >Omitir</v-btn>
          </v-row>
        </div>

        <!-- step 2 -->
        <div id="step2" v-if="counter == 2" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu nacionalidad?</p>
          <v-text-field v-model="personalInformation.nacionalidad" class="pt-0" color="teal"></v-text-field>
        </div>

        <!-- step 3 -->
        <div id="step3" v-if="counter == 3" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu estado civil?</p>
          <v-radio-group
            v-model="personalInformation.estado_civil"
            :mandatory="false"
            class="body-1"
          >
            <v-radio label="Soltero(a)" value="Soltero(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
            <v-radio label="Casado(a)" value="Casado(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
            <v-radio
              label="Divorciado(a)"
              value="Divorciado(a)"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
            <v-radio label="Separado(a)" value="Separado(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
            <v-radio label="Conviviente" value="Conviviente" color="teal" class="pa-2 radioStateCivil"></v-radio>
            <v-radio label="Viudo(a)" value="Viudo(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
          </v-radio-group>
        </div>
        <!-- step 4 -->
        <div id="step4" v-if="counter == 4" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu fecha de nacimiento?</p>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="date" label prepend-icon="event" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>

        <!-- step 5 -->
        <div id="step5" v-if="counter == 5" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu género?</p>
          <v-radio-group v-model="personalInformation.genero" :mandatory="false" class="body-1">
            <v-radio label="Masculino" value="Masculino" color="teal" class="pa-2 radioStateCivil"></v-radio>
            <v-radio label="Femenino" value="Femenino" color="teal" class="pa-2 radioStateCivil"></v-radio>
            <v-radio label="No Binario" value="No_binario" color="teal" class="pa-2 radioStateCivil"></v-radio>
          </v-radio-group>
        </div>

        <!-- step 6 -->
        <div id="step6" v-if="counter == 6" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu correo electrónico?</p>
          <v-text-field
            v-model="personalInformation.correo"
            :rules="emailRules"
            label="E-mail"
            color="teal"
            required
          ></v-text-field>
          <p class="text-center black--text headline mb-0 pt-4">¿Cuál es tu número de celular?</p>
          <v-text-field v-model="personalInformation.telefono" color="teal" required></v-text-field>
        </div>

        <!-- step7 -->
        <div id="step7" v-if="counter == 7" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuántos hijos tienes?</p>
          <v-text-field v-model="personalInformation.n_hijos" color="teal" required></v-text-field>
        </div>
        <!-- step8 -->
        <div id="step8" v-if="counter == 8" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Dónde vives actualmente?</p>
          <v-text-field v-model="personalInformation.coordenadas_direccion" required></v-text-field>
        </div>
        <!-- step9 -->
        <div id="step9" v-if="counter == 9" class="px-3 pt-12 ">
          <p class="text-center black--text headline mb-0">¿Cuentanos cómo conociste a Konecta?</p>
          <v-select
            :items="itemsKonecta"
            label="Selecciona"
            v-model="personalInformation.como_konecta"
          ></v-select>
        </div>
        <!-- Envio de datos -->
        <div v-if="skill == 100" class=" justify-center text-center">
          <p class="headline text-center">¡Gracias por tu postulación! Nuestro equipo de Selección se comunicará contigo muy pronto</p>
          <v-btn   color="#00B8AD" class="text-center white--text mt-4" @click="agregarPersonalDate">Enviar Datos</v-btn>
        </div>
      </v-flex>
      <v-flex class="pt-4" xs12 md6 xl3 pa-2 style="width: 100%">
        <v-row class="mt-12">
          <v-col class="text-start">
            <v-btn
              v-if="counter !== 0 && skill !== 100"
              :disabled="!isNext"
              color="#00B8AD"
              class="white--text"
              fab
              large
              @click="counter -= 1, skill -= 10"
            >
              <v-icon>mdi-arrow-left-bold</v-icon>
            </v-btn>
          </v-col>

          <v-col class="text-end">
            <v-btn v-if="skill !== 100"
              fab
              large
              color="#00B8AD"
              class="white--text"
              @click="counter += 1, skill += 10, isNext=true"
            >
              <v-icon>mdi-arrow-right-bold</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-btn type="submit" class="btn btn-primary" @click="agregarPersonalDate">Add</v-btn>
        </v-row> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import firebase from 'firebase';
import moment from 'moment';

export default {
  data() {
    return {
      skill: 0,
      professionalProgress: 0,
      hasSaved: false,
      isNext: null,
      model: null,
      counter: 0,
      date: null,
      menu: false,
      itemsKonecta: [
        "Familia/ Amigos",
        "Aptitus",
        "Bolsa Universidad ",
        "Bolsa Instituto",
        "Bumeran",
        "Computrabajo",
        "Indeed",
        "Ministerio de Trabajo",
        "Referidos*",
        "Programa Aymimundo",
        "Programa Forge",
        "Programa Integralia",
        "Programa Integra-Chiclayo",
        "Programa Pachacutec",
        "Volantes"
      ],
      datosPostulantes: [],
      personalInformation:[
        {
          tipodoc: "",
          numdoc: "",
          nombres: "",
          apellido_p: "",
          apellido_m: "",
          nombre_social: " ",
          nacionalidad: "",
          estado_civil: "radio-1",
          fecha_nac: false,
          genero: "",
          correo: "",
          telefono: null,
          n_hijos: Number,
          coordenadas_direccion: [,],
          como_konecta: "",
          referidos: "",
          //datos profesionales
          grado_formacion: "Universidad",
          institucion: "Universidad de Lima",
          estado_estudios: "Incompleta",
          rubro_carrera: "",
          coord_estudio: [,], //PASAR UNDEFINED (VACIO) SI NO TIENE QUE LLENAR ESTE DATO
          text_dir_estudio: "",
          horario_estudio: "TARDE",

          //datos experiencia
          experienciaPostulante: ["experienciaUno", "experienciaDos"],

          //datos rotacion
          actividades: "Musica",
          coord_actividad: [1.342, 2.332],
          text_dir_actividad: "Jr. tarantula 889",
          horario_actividad: "Noche",
          fam_postulante: 2,
          motivacion: "Viajar",
          actividad_tiempo_libre: ["Cine", "Comer", "Familia"],
          sede_preferencia: ["Fenix", "Sudameris", "Crillon"],

          //datos familiares
          familiares: ["familiar1", "familiar2"]
        }],
      nameRules: [v => !!v || "El nombre es requerido"],
      lastName1Rules: [v => !!v || "Apellido paterno es requerido"],
      lastName2Rules: [v => !!v || "Apellido materno es requerido"],

      emailRules: [
        v => !!v || "E-mail es requerido",
        v => /.+@.+\..+/.test(v) || "El correo no es válido"
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

    postDatosExperiencia(id, experiencia){
      for(let i=0; i< experiencia.length; i++){
          const experienciaKey = firebase.database().ref("DATOS_EXPERIENCIA").push().key;

          let experiencia_table ={
            flag_se: experiencia[i].flag_se,
            flag_ec: experiencia[i].flag_ec,
            flag_eo: experiencia[i].flag_eo,

            se_p_redes: experiencia[i].se_p_redes,
            se_p_ventas: experiencia[i].se_p_ventas,
            se_p_atc: experiencia[i].se_p_atc,
            se_p_crosselling: experiencia[i].se_p_crosselling,
            se_p_backof: experiencia[i].se_p_backof,
            se_expect_salarial: [experiencia[i].se_expect_salarial[0], experiencia[i].se_expect_salarial[1]] ,

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
          
        }
        firebase.database().ref("DATOS_EXPERIENCIA").child(experienciaKey).set(experiencia_table);

      }


     
    },


    postDatosFamiliares(id, familiares){
      for(let i=0; i< familiares.length; i++){
          const familiaresKey = firebase.database().ref("DATOS_FAMILIARES").push().key;

          let familiares_table ={
            parentesco: familiares[i].parentesco,
            edad: familiares[i].edad,
            trabaja: familiares[i].trabaja,
            id_postulante: id
          }
          firebase.database().ref("DATOS_FAMILIARES").child(familiaresKey).set(familiares_table);

      }
     
    },


    agregarPersonalDate() {

      let date = new Date();
      let dateString = moment().format('L');
      let hour = date.getHours() + ":" + date.getMinutes()+"";
      const registerAt= {
        date: dateString,
        hour: hour
      }

      this.datosPostulantes = {
        tipodoc: "dni",
        numdoc: "456",
        nombres: this.personalInformation.nombres,
        apellido_p: this.personalInformation.apellido_p,
        apellido_m: this.personalInformation.apellido_m,
        nombre_social: this.personalInformation.nombre_social,
        nacionalidad: this.personalInformation.nacionalidad,
        estado_civil: this.personalInformation.estado_civil,
        fecha_nac: "1990-01-04",
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
     let postulantes = JSON.parse( JSON.stringify(this.datosPostulantes) );
      const postulateKey = firebase.database().ref("POSTULANTES").push().key;
      firebase.database().ref("POSTULANTES").child(postulateKey).set(postulantes);

      const profesionalesKey = firebase.database().ref("DATOS_PROFESIONALES").push().key;

      const datos_profesionales = {
        //datos profesionales
        grado_formacion: "Universidad",
        institucion: "Universidad de Lima",
        estado_estudios: "Incompleta",
        rubro_carrera: "",
        coord_estudio: [0,0], //PASAR UNDEFINED (VACIO) SI NO TIENE QUE LLENAR ESTE DATO
        text_dir_estudio: "",
        horario_estudio: "TARDE",
        id_postulante: postulateKey
      }
      firebase.database().ref("DATOS_PROFESIONALES").child(profesionalesKey).set(datos_profesionales);


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
            se_expect_salarial: [0,0],

            ec_empresa: "ATENTO",
            ec_cliente: "Movistar",
            ec_rubro_cliente: "TELECOMUNICACIONES",
            ec_segmento: "ATENCION AL CLIENTE",
            ec_tiempo_exp: 6,
            ec_retribucion_basico: 1000,
            ec_retribucion_comisiones: 300,

            eo_empresa: "",
            eo_rubro_empresa: "",
            eo_puesto: "",
            eo_tiempo_exp: 0,
            eo_retribucion_basico: 0,
            eo_retribucion_comisiones: 0,
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
            se_expect_salarial: [0,0],

            ec_empresa: "",
            ec_cliente: "",
            ec_rubro_cliente: "",
            ec_segmento: "",
            ec_tiempo_exp: 0,
            ec_retribucion_basico: 0,
            ec_retribucion_comisiones: 0,

            eo_empresa: "prueba",
            eo_rubro_empresa: "prueba",
            eo_puesto: "Atencion al cliente",
            eo_tiempo_exp: 8,
            eo_retribucion_basico: 800,
            eo_retribucion_comisiones: 300
          }
      ]

    this.postDatosExperiencia(postulateKey, datos_experiencia);


    let familiares= [{ parentesco: "Esposa", edad: 28, trabaja: true }];
    this.postDatosFamiliares(postulateKey, familiares);


    //datos rotacion
     let datos_rotacion={
          actividades: "Musica",
          coord_actividad: [1.342, 2.332],
          text_dir_actividad: "Jr. tarantula 889",
          horario_actividad: "Noche",
          fam_postulante: 2,
          motivacion: "Viajar",
          actividad_tiempo_libre: ["Cine", "Comer", "Familia"],
          sede_preferencia: ["Fenix", "Sudameris", "Crillon"],
          id_postulante: postulateKey
     }     

      const rotacionKey = firebase.database().ref("DATOS_ROTACION").push().key;
      firebase.database().ref("DATOS_ROTACION").child(rotacionKey).set(datos_rotacion);


    },


  },

};
</script>

<style>
.radioStateCivil {
  background: #e5e5e5;
  border-radius: 4px;
  font-size: 18px;
}
</style>