<template>
  <div>
    <div id="step2" v-if="countRotacion == 1" class="px-1 pt-8">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center title mb-0"
        >¿Cuál de las siguientes actividades realizas con mayor frecuencia en la semana?</p>
        <v-radio-group
          v-model="datosRotacionPost.actividades"
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
            class="pa-2 mt-2 radioStateCivil"
          ></v-radio>
          <v-radio label="Cuido a un familiar" value="C" color="teal" class="pa-2 mt-2 radioStateCivil"></v-radio>
          <v-radio
            label="Grupo de danza, música, arte."
            value="D"
            color="teal"
            class="pa-2 mt-2 radioStateCivil"
          ></v-radio>
          <v-radio label="Voluntariado" value="E" color="teal" class="pa-2 mt-2 radioStateCivil"></v-radio>
          <v-radio label="No realizo ninguna" value="F" color="teal" class="pa-2 mt-2 radioStateCivil"></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <div
      id="step2"
      v-if="countRotacion == 2 && datosRotacionPost.actividades !== 'F'"
      class="px-1 pt-12"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center title mb-0">¿Dónde realizas esa actividad?</p>
        <!--Map -->
        <div class="input-google-container">
          <gmap-autocomplete
            ref="address"
            id="starting_address"
            class="input is-pulled-left input-autocomplete"
            placeholder="Ingresa la dirección"
            v-on:place_changed="getAddressData"
            v-on:change="inputAutocomplete($event)"
          />

          <br />
          <div class="text-marker-content">
            <p class="text-center black--text title mb-3">Ahora marca</p>
            <img class="marker-image" src="../assets/marcador.png" alt="googlemarcador" />
            <p class="text-center black--text title mb-3">en el mapa la dirección</p>
          </div>

          <gmap-map
            :center="{lat:this.center.lat, lng:this.center.lng}"
            :zoom="15"
            style="width:100%;  height: 400px;"
            ref="map"
          >
            <gmap-marker
              :position="markersPersonal"
              :draggable="true"
              v-on:dragend="updateCoordinates"
            />
          </gmap-map>
        </div>
      </v-form>
    </div>
    <div
      id="step2"
      v-if="countRotacion == 3 && datosRotacionPost.actividades !== 'F'"
      class="px-1 pt-12"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
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
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center title mb-0">¿Cuántas personas viven contigo?</p>
        <v-row>
          <v-col cols="6" sm="6" class="justify-center">
            <!-- :rules="[v => !!v || 'Ingresa el número de familiares']" v-on:keyup.enter="createObjFamilia()" -->
            <v-text-field
              v-model.number="datosRotacionPost.fam_postulante"
              maxlength="2"
              class="pt-2 text-center"
              color="teal"
              placeholder="2"
              required
              max=20
              @keypress="isNumber($event)"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6" class="align-self-center">
            <v-btn
              small
              color="teal"
              class="white--text body-2 text-capitalize"
              @click="createObjFamilia()"
            >Registrar</v-btn>
          </v-col>
        </v-row>

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
                    v-model="arrFamilia[index].parentesco"
                    color="teal"
                    :rules="[v => !!v || 'Selecciona el parentesco']"
                    required
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
                    :rules="[v => !!v || 'Ingresa la edad']"
                    required
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
                    :rules="[v => !!v || 'Selecciona una opción']"
                    required
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
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
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
            label="Negocio / Proyecto personal"
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
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center title mb-0">¿Qué actividades te gusta realizar en tus tiempos libres?</p>
        <p class="text-center body-2 mb-0 gray--text">Debes de seleccionar 3 opciones</p>
      
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Viajar"
          value="A"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Jugar Fútbol"
          value="B"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Jugar videojuegos"
          value="C"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Pintar/Dibujar"
          value="D"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Tomar fotografía"
          value="E"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Aprender idiomas"
          value="F"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Ir al cine"
          value="G"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Jugar voley"
          value="H"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Jugar basket"
          value="I"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Salir a comer"
          value="J"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Salir a bailar"
          value="K"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].actividad_tiempo_libre"
          label="Otros"
          value="L"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
      </v-form>
    </div>
    <div id="step2" v-if="countRotacion == 7" class="px-1 pt-12">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center title mb-0"
        >¿Cuáles son tus sedes de preferencia para trabajar con nosotros?</p>
        <!-- <p class="text-center body-2 mb-0 gray--text">Debes de seleccionar 3 opciones</p> -->
        <v-checkbox
         v-model="datosRotacionPost[0].sede_preferencia"
          label="Sede Centro de Lima"
          value="A"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].sede_preferencia"
          label="Sede Surquillo"
          value="B"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].sede_preferencia"
          label="Sede Callao - Lima Cargo"
          value="C"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].sede_preferencia"
          label="Sede Callao - Bellavista"
          value="D"
          color="teal"
          hide-details
          class="pa-2 radioStateCivil"
        ></v-checkbox>
        <v-checkbox
          v-model="datosRotacionPost[0].sede_preferencia"
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
import * as VueGoogleMaps from "vue2-google-maps";
import VueGoogleAutocomplete from "vue-google-autocomplete";

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
    actividad_libre: Array
  },
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      //maps
      inputPrueba: {},
      address: "",
      addressTextPersonal: "",
      markersPersonal: {},
      starting_address: "",
      starting_address_obj: {},
      center: {},
      places: [],
      currentPlace: null,
      address: "",
      coordinates: {},

      horarioActi: null,
      horarioActividad: ["Mañana", "Tarde", "Noche", "Horario flexible"],
      selected: [],
      sedeSelected:[],
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
      trabaja: ['Si', 'No'
      ]
    };
  },
  computed: {
    hasAdditional() {
      return this.selected.length > 2;
    },
    hasSede() {
      return this.sedeSelected.length > 2;
    }
  },
   mounted() {
    this.geolocate();
  },
  methods: {
    isNumber: function(evt) {
      // this.testCollection = [];
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    createObjFamilia() {
      let nroFam = this.datosRotacionPost.fam_postulante;
      if(nroFam > 0){
        for (let i = 0; i < nroFam; i++) {
        this.arrFamilia.push({
          parentesco: "",
          edad: null,
          trabaja: ""
        });
        console.log(this.arrFamilia);
        this.datosRotacionPost.familiares = this.arrFamilia;
      }
      }
      
    },

    addMarker() {
      const position = {
        lat: this.starting_address_obj.geometry.location.lat(),
        lng: this.starting_address_obj.geometry.location.lng()
      };

      this.markersPersonal = position;
      console.log(this.markersPersonal);
      this.places.push(this.starting_address_obj);
      this.addressTextPersonal = this.starting_address_obj.formatted_address;
      console.log(this.addressTextPersonal);
      this.center = position;
      this.starting_address_obj = null;
      this.$emit("addMarker", this.addressTextPersonal);
      this.markerCoordinates();
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.markersPersonal = this.center;
        this.markerCoordinates();
      });
    },
    updateCoordinates(location) {
      this.coordinates = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng()
      };

      this.markersPersonal = this.coordinates;
      console.log(this.coordinates);
      this.markerCoordinates();
    },

    markerCoordinates() {
      this.$emit("markerCoordinates", this.markersPersonal);
    },

    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData;
      console.log(this.address);
      if (!this.address.geometry) {
        this.addressTextPersonal = addressData.name;
        this.$emit("addMarker", this.addressTextPersonal);
        console.log(this.addressTextPersonal);
      } else {
        this.starting_address_obj = addressData;
        console.log(this.starting_address_obj);
        this.addMarker();
      }
    },

    inputAutocomplete: function(objectInput) {
      this.inputPrueba = objectInput;
    }
  }
};
</script>
<style>
.v-application .title {
  line-height: 23px !important;
}

.input-google-container {
  width: 100%;
  margin-top: 0.5em;
}
.input-autocomplete {
  margin-bottom: 2em;
  border-bottom: 2px solid #bdbdbd;
  transition: border-bottom 0.5s ease, width 0.5s ease;
  width: 100%;
}

.input-autocomplete:focus {
  width: 100%;
  border-bottom: 2px solid #168d86;
  outline: none;
}
.text-marker-content {
  display: flex;
  margin-bottom: 1em;
}

.marker-image {
  width: 20px;
  height: 30px;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>