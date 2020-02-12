<template>
  <div>
    <div id="step2" v-if="countRotacion == 1" class="px-1 pt-8">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
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
          value="A"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Negocio propio o familiar"
          value="B"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Cuido a un familiar"
          value="C"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Grupo de danza, música, arte."
          value="D"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Voluntariado"
          value="E"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="No realizo ninguna"
          value="F"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
      </v-radio-group>
      </v-form>
    </div>
    <div id="step2" v-if="countRotacion == 2 && datosRotacionPost.actividades !== 'F'" class="px-1 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center title mb-0">¿Dónde realizas esa actividad?</p>
      <v-text-field
        v-model="datosRotacionPost.text_dir_actividad"
        class="pt-2"
        color="teal"
        placeholder="Calle 3 de febrero, 511, San Isidro"

      ></v-text-field>
      </v-form>
    </div>
    <div id="step2" v-if="countRotacion == 3 && datosRotacionPost.actividades !== 'F'" class="px-1 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center title mb-0">¿En que horario realizas esa actividad?</p>
      <v-select
        :items="horarioActividad"
        v-model="datosRotacionPost.horario_actividad"
        label="Seleccionar"
        color="teal"
         :rules="[v => !!v || 'Selecciona un horario']"
            required
      ></v-select>
      </v-form>
    </div>
    <!-- personas -->
    <div id="step2" v-if="countRotacion == 4" class="px-1 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center title mb-0">¿Cuántas personas viven contigo?</p>
      <v-text-field
        v-model.number="datosRotacionPost.fam_postulante"
        class="pt-2"
        color="teal"
        placeholder="2"
         :rules="[v => !!v || 'Ingresa el número de familiares']"
            required
        v-on:keyup.enter="createObjFamilia()"
      ></v-text-field>

      <!-- Generar Datos Familiares arrFamilia -->
      <v-flex v-for="(famPostulante, index) in datosRotacionPost.fam_postulante" :key="famPostulante.id">
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
      </v-form>
    </div>
    <div id="step2" v-if="countRotacion == 5" class="px-1 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center title mb-0">¿Qué te motiva día a día?</p>
      <v-radio-group
        v-model="datosRotacionPost.motivacion"
        :mandatory="false"
        :rules="[v => !!v || 'Selecciona una opción']"
        required
        class="pt-4 body-1"
      >
        <v-radio label="Mi familia" value="A" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="Mis estudios" value="B" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio
          label="Negocio / proyecto personalr"
          value="C"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio label="Viajar" value="D" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="Otros" value="E" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>
      </v-form>
    </div>
    <div id="step2" v-if="countRotacion == 6" class="px-1 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
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
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jugar Fútbol"
        value="B"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jugar videojuegos"
        value="C"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Pintar/Dibujar"
        value="D"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Tomar fotografía"
        value="E"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Aprender idiomas"
        value="F"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Ir al cine"
        value="G"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jugar voley"
        value="H"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jugar basket"
        value="I"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Salir a comer"
        value="J"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Salir a bailar"
        value="K"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Otros"
        value="L"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
        :disabled="hasAdditional"
      ></v-checkbox>
      </v-form>
    </div>
    <div id="step2" v-if="countRotacion == 7" class="px-1 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p
        class="text-center title mb-0"
      >¿Cuáles son tus sedes de preferencia para trabajar con nosotros?</p>
      <p class="text-center body-2 mb-0 gray--text">Debes de seleccionar 3 opciones</p>
      <v-checkbox
        v-model="actividad_libre"
        label="Sede Centro de Lima"
        value="A"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="actividad_libre"
        label="Sede Surquillo"
        value="B"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="actividad_libre"
        label="Sede Callao - Lima Cargo"
        value="C"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="actividad_libre"
        label="Sede Callao - Bellavista"
        value="D"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      <v-checkbox
        v-model="actividad_libre"
        label="Sede Chiclayo"
        value="E"
        color="teal"
        hide-details
        class="pa-2 radioStateCivil"
      ></v-checkbox>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countRotacion: 0,
    datosRotacionPost: {
      type: Array
    },
    datosPersonalesPost: {
      type: Array,
      required: true
    },
    actividad_libre: Array,
  },
  data() {
    return {
      horarioActi: null,
      horarioActividad: ["Mañana", "Tarde", "Noche", "Horario flexible"],
      selected: [],
      sede_preferencia: [],
      additional_grouped: [],
      // actividad_libre: [],
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
    hasAdditional() {
      return this.selected.length > 2;
    },
    // hasSede() {
    //   return (this.datosRotacionPost.actividad_tiempo_libre).length > 2;
    // }
  },
  methods: {
    createObjFamilia() {
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