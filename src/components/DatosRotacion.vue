<template>
  <div>
    <div id="step2" v-if="countRotacion == 1" class="px-1 pt-8">
      <p
        class="text-center title mb-0"
      >¿Cuál de las siguientes actividades realizas con mayor frecuencia en la semanal?</p>
      <v-radio-group
        v-model="datosRotacionPost.actividades"
        :mandatory="false"
        required
        :rules="[v => !!v || 'Selecciona una actividad']"
        class="body-1"
      >
        <v-radio
          label="Deportes de competencia"
          value="Deportes de competencia"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Negocio propio o familiar"
          value="Negocio propio o familiar"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Cuido a un familiar"
          value="Cuido a un familiar"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Grupo de danza, música, arte."
          value="Grupo de danza, música, arte."
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Voluntariado"
          value="Voluntariado"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="No realizo ninguna"
          value="No realizo ninguna"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="step2" v-if="countRotacion == 2" class="px-1 pt-12">
      <p class="text-center title mb-0">¿Dónde realizas esa actividad?</p>
      <v-text-field v-model="datosRotacionPost.text_dir_actividad" class="pt-2" color="teal" placeholder="Calle 3 de febrero, 511, San Isidro"></v-text-field>
    </div>
    <div id="step2" v-if="countRotacion == 3" class="px-1 pt-12">
      <p class="text-center title mb-0">¿En que horario realizas esa actividad?</p>
      <v-select
        :items="horarioActividad"
        v-model="datosRotacionPost.horario_actividad"
        label="Seleccionar"
        color="teal"
      ></v-select>
    </div>
    <!-- personas -->
    <div id="step2" v-if="countRotacion == 4" class="px-1 pt-12">
      <p class="text-center title mb-0">¿Cuántas personas viven contigo?</p>
      <v-text-field
        v-model.number="datosRotacionPost.fam_postulante"
        class="pt-2"
        color="teal"
        placeholder="2"
        v-on:keyup.enter="createObjFamilia()"
      ></v-text-field>
      <!-- <span v-for="n in 5">{{ n }} </span> -->
      <v-flex v-for="(famPostulante, index) in arrFamilia" :key="famPostulante.id">
        <v-card outlined class="mx-auto mb-4" max-width="344">
          <v-card-title
            class="color: teal lighten-2 white--text subtitle-1 py-3 justify-center"
          >Familiar - {{index + 1}}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="mr-6">
              <v-col cols="6" md="6" class="align-self-center pa-0">
                <label for class="pt-0">Parentesco :</label>
              </v-col>
              <v-col cols="6" md="6" class="pa-0">
                <v-select
                  class="mt-0 pa-0 pt-2"
                  :items="parentesco"
                  v-model="arrFamilia[index].parentesco"
                  color="teal"
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="mr-6">
              <v-col cols="6" md="6" class="align-self-center pa-0">
                <label for>Edad :</label>
              </v-col>
              <v-col cols="6" md="6" class="pa-0">
                <v-text-field
                  v-model="arrFamilia[index].edad"
                  color="teal"
                  class="pa-0"
                  placeholder="2"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mr-6">
              <v-col cols="6" md="6" class="align-self-center pa-0">
                <label for>Trabaja :</label>
              </v-col>
              <v-col cols="6" md="6" class="pa-0">
                <v-select
                  :items="trabaja"
                  v-model="arrFamilia[index].trabaja"
                  color="teal"
                  label="Seleccionar"
                  class="pa-0"
                >
                  <!-- <option v-for="option in options" :value="option.value">{{option.text}}</option> -->
                </v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>
    <div id="step2" v-if="countRotacion == 5" class="px-1 pt-12">
      <p class="text-center title mb-0">¿Qué te motiva día a día?</p>
      <v-radio-group
        v-model="datosRotacionPost.motivacion"
        :mandatory="false"
        required
        class="pt-4 body-1"
      >
        <v-radio label="Mi familia" value="Mi familia" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio
          label="Mis estudios"
          value="Mis estudios"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Negocio / proyecto personalr"
          value="Negocio / proyecto personal"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio label="Viajar" value="Viajar" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="Otros" value="Otros" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>
    </div>
    <div id="step2" v-if="countRotacion == 6" class="px-1 pt-12">
      <p class="text-center title mb-0">¿Qué actividades te gusta realizar en tus tiempo libres?</p>
      <p class="text-center body-2 mb-0 gray--text">Debes de seleccionar 3 opciones</p>
      <!-- <p>{{ selected }}</p>
      <p>{{ datosRotacionPost[0].actividad_tiempo_libre }}</p>-->
      <v-checkbox
        v-model="selected"
        label="Viajar"
        value="A"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jugar Fútbol"
        value="B"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jugar videojuegos"
        value="C"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil only-one"
      ></v-checkbox>
      <v-checkbox
        label="Pintar/Dibujar"
        value="D"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil only-one"
      ></v-checkbox>
      <v-checkbox
        label="Tomar fotografía"
        value="E"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil only-one"
      ></v-checkbox>
      <v-checkbox
        label="Aprender idiomas"
        value="F"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.actividad_tiempo_libre"
        label="Ir al cine"
        value="G"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.actividad_tiempo_libre"
        label="Jugar voley"
        value="H"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.actividad_tiempo_libre"
        label="Jugar basket"
        value="I"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.actividad_tiempo_libre"
        label="Salir a comer"
        value="J"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.actividad_tiempo_libre"
        label="Salir a bailar"
        value="K"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.actividad_tiempo_libre"
        label="Otros"
        value="L"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
    </div>
    <div id="step2" v-if="countRotacion == 7" class="px-1 pt-12">
      <p
        class="text-center title mb-0"
      >¿Cuáles son tus sedes de preferencia para trabajar con nosotros?</p>
      <p class="text-center body-2 mb-0 gray--text">Debes de seleccionar 3 opciones</p>
      <v-checkbox
        v-model="datosRotacionPost.sede_preferencia"
        label="Lima - Crillón"
        value="A"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.sede_preferencia"
        label="Lima - Fénix"
        value="Lima - Fénix"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.sede_preferencia"
        label="Lima - Sudameris"
        value="Lima - Sudameris"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.sede_preferencia"
        label="Lima - Surquillo"
        value="Lima - Surquillo"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.sede_preferencia"
        label="Callao - Lima Cargo"
        value="Callao - Lima Cargo"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="datosRotacionPost.sede_preferencia"
        label="Chiclayo - Sede Chiclayo"
        value="Chiclayo - Sede Chiclayo"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countRotacion: 0,
    datosRotacionPost: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      horarioActi: null,
      horarioActividad: ["Mañana", "Tarde", "Noche", "Horario flexible"],
      selected: [],
      additional_grouped: [],
      // datosRotacionPost.actividad_tiempo_libre: selected
      parentesco: [
        "Padre",
        "Madre",
        "Hermano(a)",
        "Hijo(a)",
        "Pareja",
        "Tio(a)",
        "Sobrino(a)",
        "Abuelo(a)",
        "Suegro(a)",
        "Otros"
      ],
      familiaPost: [{ parentesco: "", edad: 0, trabaja: false }],
      arrFamilia: [],
      trabaja: [
        { text: "Si", value: true },
        { text: "No", value: false }
      ]
      // trabaja: ["Si", "No"],
    };
  },
  mounted() {
    // invocar los métodos
    // this.createObjFamilia();
  },
  computed: {
    final: function() {
      // return this.selected.concat(this.additional_grouped);
    }
  },
  methods: {
    createObjFamilia() {
      // debugger;
      // if(this.datosRotacionPost.fam_postulante === undefined){
      //   // let nroFam = 0;
      //   this.arrFamilia.push({
      //     parentesco: "",
      //     edad: 0,
      //     trabaja: '',
      //   });
      // } else{
      let nroFam = this.datosRotacionPost.fam_postulante;
      for (let i = 0; i < nroFam; i++) {
        this.arrFamilia.push({
          parentesco: "",
          edad: null,
          trabaja: null
        });
        this.datosRotacionPost.familiares = this.arrFamilia;
      }
    }
  }
};
</script>
<style>
.v-application .title {
  line-height: 23px !important;
}
</style>