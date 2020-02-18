<template>
  <div>
    <div id="step0" v-if="countDatosPersonales === 0" class="px-3 pt-12 mt-6">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuál es tu nombre?</p>
        <v-text-field
          :rules="nameRules"
          v-model="datosPersonalesPost.nombres"
          class="pt-0"
          color="teal"
          maxlength="40"
        
         
         
        ></v-text-field>
        <p class="text-center black--text title mb-0 mt-6">¿Cuáles son tus apellidos?</p>
        <v-row>
          <v-col cols="6" sm="6">
            <v-text-field
              :rules="lastName1Rules"
              v-model="datosPersonalesPost.apellido_p"
              color="teal"
              label="Apellido Paterno"
              maxlength="30"
              
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="6">
            <v-text-field
              :rules="lastName2Rules"
              v-model="datosPersonalesPost.apellido_m"
              color="teal"
              label="Apellido Materno"
              maxlength="30"
            
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <!-- step 1 -->
    <div id="step1" v-if="countDatosPersonales === 1" class="px-3 pt-12 mt-4">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">¿Cómo te gustaría que te llamemos?*</p>
        <v-text-field
          v-model="datosPersonalesPost.nombre_social"
          class="pt-2"
          color="teal"
          :mandatory="false"
          placeholder="Ejemplo : “Cami” , “ Lu”, “Mari”"
          maxlength="20"
        ></v-text-field>
        <p
          class="grey--text subtitle-1 text-center pt-6"
        >Podremos emplear este nombre cuándo nos visites</p>
        <p class="grey--text body-2 text-center pt-6">* Puedes omitir esta pregunta</p>
      </v-form>
    </div>

    <!-- step 2 -->
    <div id="step2" v-if="countDatosPersonales === 2" class="px-3 pt-12 mt-12">
      <v-form ref="formNac" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title">¿Cuál es tu nacionalidad?</p>
        <v-radio-group
          v-model="datosPersonalesPost.nacionalidad"
          class="body-1 pt-4"
          :mandatory="false"
          :rules="[v => !!v || 'Selecciona una nacionalidad']"
        >
          <v-radio label="Peruana" value="Peruana" color="teal" class="pa-2 radioStateCivil"></v-radio>
          <v-radio label="Extranjera" value="Extranjera" color="teal" class="pa-2 radioStateCivil"></v-radio>
        </v-radio-group>
      </v-form>
    </div>

    <!-- step 3 -->
    <div id="step3" v-if="countDatosPersonales === 3" class="px-3 pt-10">
      <v-form ref="formEstado" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuál es tu estado civil?</p>
        <v-radio-group v-model="datosPersonalesPost.estado_civil"  class="body-1">
          <v-radio label="Soltero(a)" value="Soltero(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
          <v-radio label="Casado(a)" value="Casado(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
          <v-radio
            label="Divorciado(a)"
            value="Divorciado(a)"
            color="teal"
            class="pa-2 radioStateCivil"
          ></v-radio>
          <v-radio
            label="Separado(a)"
            value="Separado(a)"
            color="teal"
            class="pa-2 radioStateCivil"
          ></v-radio>
          <v-radio
            label="Conviviente"
            value="Conviviente"
            color="teal"
            class="pa-2 radioStateCivil"
          ></v-radio>
          <v-radio label="Viudo(a)" value="Viudo(a)" color="teal" class="pa-2 radioStateCivil"></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <!-- step 4 -->
    <div id="step4" v-if="countDatosPersonales === 4" class="px-3 pt-12">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuál es tu fecha de nacimiento?</p>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="datosPersonalesPost.fecha_nac"
              label
              prepend-icon="event"
              color="teal"
              required
              readonly
              v-on="on"
              :rules="[v => !!v || 'Fecha de nacimiento es requerido']"
            ></v-text-field>
          </template>
          <v-date-picker
            color="teal"
            locale="es"
            ref="picker"
            v-model="datosPersonalesPost.fecha_nac"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-form>
    </div>

    <!-- step 5 -->
    <div id="step5" v-if="countDatosPersonales === 5" class="px-3 pt-12">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuál es tu género?</p>
        <v-radio-group
          v-model="datosPersonalesPost.genero"
          class="body-1"
          :mandatory="false"
          :rules="[v => !!v || 'Género es requerido']"
        >
          <v-radio label="Masculino" value="Masculino" color="teal" class="pa-2 radioStateCivil"></v-radio>
          <v-radio label="Femenino" value="Femenino" color="teal" class="pa-2 radioStateCivil"></v-radio>
          <v-radio
            label="Otro"
            value="Otro"
            color="teal"
            class="pa-2 radioStateCivil"
          ></v-radio>
        </v-radio-group>
      </v-form>
    </div>

    <!-- step 6 -->
    <div id="step6" v-if="countDatosPersonales === 6" class="px-3 pt-12">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuál es tu correo electrónico?</p>
        <v-text-field
          v-model="datosPersonalesPost.correo"
          :rules="emailRules"
          placeholder="zulema@gmail.com"
          color="teal"
          required
        ></v-text-field>
        <p class="text-center black--text title mb-0 pt-4">¿Cuál es tu número de celular?</p>
        <v-text-field
          v-model="datosPersonalesPost.telefono"
          placeholder="997251296"
          color="teal"
          required
          maxlength="9"
          @keypress="isNumber($event)"
          :rules="phoneRules"
        ></v-text-field>
      </v-form>
    </div>

    <!-- hijos -->
    <!-- step7 -->
    <div id="step7" v-if="countDatosPersonales === 7" class="px-3 pt-12">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Tienes hijos/as?</p>
        <v-radio-group
          v-model="rdbHijos"
          class="body-1"
          :rules="[v => !!v || 'Selecciona una opción']"
        >
          <v-radio label="Si" value="sihijos" color="teal" class="pa-2 radioStateCivil"></v-radio>
          <v-radio
            label="No"
            value="nohijos"
            color="teal"
            class="pa-2 radioStateCivil"
            v-on:change="rbtSinHijos"
          ></v-radio>
        </v-radio-group>
        <v-expand-transition>
          <div id="step7-1" v-if="rdbHijos === 'sihijos'" class="px-3 pt-8">
            <p class="text-center black--text title mb-0">¿Cuántos hijos tienes?</p>
            <v-text-field
              v-model="datosPersonalesPost.n_hijos"
              color="teal"
              @keypress="isNumber($event)"
              :rules="[v => !!v || 'Número de hijos es obligatorio']"
              required
            ></v-text-field>
          </div>
        </v-expand-transition>
      </v-form>
    </div>
    <!-- step8 -->
    <div id="step8" v-if="countDatosPersonales === 8" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Dónde vives actualmente?</p>

      <!--Map -->
      <div class="input-google-container">
        <!-- <v-form ref="form" v-model="datosPersonalesPost.datosValidPer"> -->
          <gmap-autocomplete
            ref="address"
            id="starting_address"
            class="input is-pulled-left input-autocomplete"
            placeholder="Ingresa la dirección"
            v-on:place_changed="getAddressData"
            v-on:change="inputAutocomplete($event)"
          />
        <!-- </v-form> -->
        <br />
        <div class="text-marker-content">
          <p class="text-center black--text title mb-3">Ahora marca</p>
          <img class="marker-image" src="../assets/marcador.png" alt="googlemarcador" />
          <p class="text-center black--text title mb-3">en el mapa tu dirección</p>
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
    </div>
    <!-- step9 -->
    <div id="step9" v-if="countDatosPersonales === 9" class="px-3 pt-12">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">Cuentanos cómo conociste a Konecta</p>
        <v-select
          v-model="datosPersonalesPost.como_konecta"
          :items="itemsComoKonecta"
          :rules="[v => !!v || 'Selecciona una opción']"
          label="Selecciona"
          color="teal"
        ></v-select>
      </v-form>
      <v-expand-transition>
        <div
          id="step7"
          v-if="datosPersonalesPost.como_konecta === 'Familia/ Amigos'"
          class="px-3 pt-8"
        >
          <p class="text-center black--text body-1 mb-0">¿Cuál es su Nombre y Apellidos?</p>
          <v-text-field
            v-model="datosPersonalesPost.referidos"
            color="teal"
            required
            :rules="[v => !!v || 'Ingresa el nombre de tu Familia/ Amigos']"
          ></v-text-field>
          <v-checkbox
            v-model="datosPersonalesPost.amigo_trabajaK"
            label="Mi Familar/ Amig@ trabaja en Konecta."
            value="Si"
            color="teal"
            hide-details
            class="pa-2 pt-6 body-2 black--text"
          ></v-checkbox>
        </div>
      </v-expand-transition>
    </div>
    <!-- Envio de datos -->
    <div id="step10" v-if="countDatosPersonales === 10" class="px-3 pt-12 mt-6">
      <p class="text-center black--text title">Ahora nos gustaria saber más sobre tus estudios</p>
      <v-img
        src="../assets/profesionales.png"
        aspect-ratio="1.7"
        contain
        style="border-radius: 50%;"
      ></v-img>
    </div>
  </div>
</template>
<script>
//import Map from "../components/Map.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "datosPersonales",
  props: {
    countDatosPersonales: 0,
    // datosValid: Boolean,
    datosPersonalesPost: {
      type: Array,
      required: true
    }
    // nextComponente: ''
  },
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      //maps
      expand: false,
      inputPrueba: {},
      address: "",
      phoneRules: [
        v => !!v || "Ingresa el número de celular"
        // v => v.length >= 9 || 'El número debe ser de 9 dígitos',
      ],
      addressTextPersonal: "",
      markersPersonal: {},
      starting_address: "",
      starting_address_obj: {},
      center: {},
      places: [],
      currentPlace: null,
      address: "",
      coordinates: {},
      rrselect: [],
      hasSaved: false,
      isNext: null,
      model: null,
      fecha_nac: null,
      menu: false,
      rdbHijos: "",
      itemsComoKonecta: [
        "Familia/ Amigos",
        "Aptitus",
        "Bolsa de Trabajo Universidad",
        "Bolsa de Trabajo Instituto",
        "Bumeran",
        "Computrabajo",
        "Indeed",
        "Ministerio de Trabajo",
        "Programa Aymimundo",
        "Programa Forge",
        "Programa Integralia",
        "Programa Integra-Chiclayo",
        "Programa Pachacutec",
        "Volantes"
      ],
      comoKonecta: null,
      amigo_trabajaK: true,
      nameRules: [v => !!v || "El nombre es requerido"],
      lastName1Rules: [v => !!v || "Apellido paterno es requerido"],
      lastName2Rules: [v => !!v || "Apellido materno es requerido"],
      emailRules: [
        v => !!v || "E-mail es requerido",
        v => /.+@.+\..+/.test(v) || "El correo no es válido"
      ]
    };
  },
  mounted() {
    // this.datosPersonalesPost.arrEjm = this.rrselect;
    this.geolocate();
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.datosPersonalesPost.fecha_nac);
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
   mounted() {
    this.geolocate();
  },
  methods: {
    rbtSinHijos() {
      this.rdbHijos = "nohijos";
      this.datosPersonalesPost.n_hijos = null;
      this.datosPersonalesPost.datosValidPer = true;
    },
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
    save(fecha_nac) {
      this.$refs.menu.save(fecha_nac);
    },
    addMarker() {
      // if (this.starting_address_obj.geometry){
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
      // this.$emit('markDirection', this.markers);
      // } else {
      //   this.addressTextPersonal = this.starting_address;
      //   this.$emit("addMarker", this.addressTextPersonal);
      //   //console.log(this.addressTextPersonal);
      // }
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
      //return
      this.markerCoordinates();
      //this.$emit('coordinatesMarker', this.coordinates);
      // return(this.coordinates);
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