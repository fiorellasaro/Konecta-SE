<template>
  <div>
    <div id="step0" v-if="countDatosPersonales === 0" class="px-3 pt-12 mt-6">
      <p class="text-center black--text title mb-0">¿Cuál es tu nombre?</p>
      <v-text-field
        :rules="nameRules"
        v-model="datosPersonalesPost.nombres"
        class="pt-0"
        color="teal"
        required
      ></v-text-field>
      <p class="text-center black--text title mb-0 mt-6">¿Cuáles son tus apellidos?</p>
      <v-row>
        <v-col cols="6" sm="6">
          <v-text-field
            :rules="lastName1Rules"
            v-model="datosPersonalesPost.apellido_p"
            color="teal"
            label="Apellido Paterno"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="6">
          <v-text-field
            :rules="lastName2Rules"
            v-model="datosPersonalesPost.apellido_m"
            color="teal"
            label="Apellido Materno"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <!-- step 1 -->
    <div id="step1" v-if="countDatosPersonales === 1" class="px-3 pt-12 mt-4">
      <p
        class="text-center black--text title mb-4"
      >¿Cómo quisieras que te llamemos, brindanos tu nombre Social?</p>
      <v-text-field
        v-model="datosPersonalesPost.nombre_social"
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
          @click="countDatosPersonales += 1"
        >Omitir</v-btn>
      </v-row>
    </div>

    <!-- step 2 -->
    <div id="step2" v-if="countDatosPersonales === 2" class="px-3 pt-12 mt-12">
      <p class="text-center black--text title">¿Cuál es tu nacionalidad?</p>
      <v-text-field
        v-model="datosPersonalesPost.nacionalidad"
        class="pt-0"
        placeholder="Peruana"
        color="teal"
        required
        :rules="[v => !!v || 'Nacionalidad es requerida']"
      ></v-text-field>
    </div>

    <!-- step 3 -->
    <div id="step3" v-if="countDatosPersonales === 3" class="px-3 pt-10">
      <p class="text-center black--text title mb-0">¿Cuál es tu estado civil?</p>
      <v-radio-group
        v-model="datosPersonalesPost.estado_civil"
        :mandatory="false"
        required
        :rules="[v => !!v || 'Selecciona un estado civil']"
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
    <div id="step4" v-if="countDatosPersonales === 4" class="px-3 pt-12">
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
    </div>

    <!-- step 5 -->
    <div id="step5" v-if="countDatosPersonales === 5" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Cuál es tu género?</p>
      <v-radio-group
        v-model="datosPersonalesPost.genero"
        :mandatory="false"
        class="body-1"
        required
        :rules="[v => !!v || 'Género es requerido']"
      >
        <v-radio label="Masculino" value="Masculino" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="Femenino" value="Femenino" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="No Binario" value="No_binario" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>
    </div>

    <!-- step 6 -->
    <div id="step6" v-if="countDatosPersonales === 6" class="px-3 pt-12">
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
        placeholder="51+ 997251296"
        color="teal"
        required
        :rules="[v => !!v || 'número de celular es requerido']"
      ></v-text-field>
    </div>

    <!-- hijos -->
    <!-- step7 -->
    <div id="step7" v-if="countDatosPersonales === 7" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Tienes hijos?</p>
      <v-radio-group
        v-model="rdbHijos"
        :mandatory="false"
        class="body-1"
        :rules="[v => !!v || 'Selecciona']"
      >
        <v-radio label="Si" value="sihijos" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="No" value="nohijos" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>

      <!-- step 8 -->
      <v-expand-transition>
        <div id="step7" v-if="rdbHijos == 'sihijos'" class="px-3 pt-8">
          <p class="text-center black--text title mb-0">¿Cuántos hijos tienes?</p>
          <v-text-field
            v-model="datosPersonalesPost.n_hijos"
            color="teal"
            required
            :rules="[v => !!v || 'Es obligatorio']"
          ></v-text-field>
        </div>
      </v-expand-transition>
    </div>
    <!-- step8 -->
    <div id="step8" v-if="countDatosPersonales === 8" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Dónde vives actualmente?</p>
      <!-- <v-text-field v-model="datosPersonalesPost.text_dir_estudio" required></v-text-field> -->

      <!-- <Map
        v-on:markerCoordinates="getCoordinates($event)"
        v-on:addMarker="getDirection($event)"
        :markers="markers"
        :directionText="directionText"
      ></Map>-->

      <!--Map -->

      <div class="google-maps">
        <div>
          <!-- <gmap-autocomplete class="input-google"
          @place_changed="setPlace" placeholder="Ingresa la dirección">
          </gmap-autocomplete>-->

          <br />

          <div class="input-google-container">
            <v-text-field
              label="Dirección"
              placeholder="Ingresa la dirección"
              v-model="starting_address"
              id="starting_address"
            ></v-text-field>
            <v-btn depressed color="primary" v-on:click="addMarker">Buscar</v-btn>
          </div>
        </div>
        <br />
        <gmap-map
          :center="{lat:this.center.lat, lng:this.center.lng}"
          :zoom="15"
          style="width:50%;  height: 400px;"
        >
          <gmap-marker :position="markersPersonal" :draggable="true" v-on:dragend="updateCoordinates" />
        </gmap-map>
      </div>

      <p>{{this.addressTextPersonal}}</p>
      <p>{{this.markersPersonal}}</p>
    </div>
    <!-- step9 -->
    <div id="step9" v-if="countDatosPersonales === 9" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Cuentanos cómo conociste a Konecta?</p>
      <v-select
        v-model="datosPersonalesPost.como_konecta"
        :items="itemsComoKonecta"
        label="Selecciona"
        color="teal"
      ></v-select>

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
            :rules="[v => !!v || 'Es obligatorio']"
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

export default {
  name: "datosPersonales",
  props: {

    addressTextPersonal: String,
    markersPersonal: Object,
    countDatosPersonales: 0,
    datosPersonalesPost: {
      type: Array,
      required: true
    }
    // nextComponente: ''
  },
  components: {
    Map
  },
  data() {
    return {
      //maps
      
      
      addressTextPersonal: "",
      markersPersonal: {},
      // markers: {},
      // directionText: "",
      starting_address: "",
      starting_address_obj: {},
      inputAdress: [],
      center: {},
      places: [],
      currentPlace: null,
      address: "",
      coordinates: {},

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
    this.geolocate();

    let self = this;
    let starting_address_input = document.getElementById("starting_address");
    let starting_address_autocomplete = new google.maps.places.Autocomplete(
      starting_address_input
    );
    starting_address_autocomplete.addListener("place_changed", function() {
      let place = starting_address_autocomplete.getPlace();
      self.starting_address_obj = {
        place
      };
    });
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
  methods: {
    save(fecha_nac) {
      this.$refs.menu.save(fecha_nac);
    },
    // getDirection: function(getDirection) {
    //   this.directionText = getDirection;
    //   //this.$emit('getDirection', this.directionText);
    //   console.log(getDirection);
    // },
    // getCoordinates: function(getCoordinates) {
    //   console.log(getCoordinates);
    //   this.markers = getCoordinates;
    //   // this.$emit('getCoordinates', this.markers);
    // },
    initSearch: function(event) {
      console.log("Shots fired!");
    },

    addMarker() {
      if (this.starting_address_obj.place) {
        const position = {
          lat: this.starting_address_obj.place.geometry.location.lat(),
          lng: this.starting_address_obj.place.geometry.location.lng()
        };

        this.markersPersonal = position;
        console.log(this.markersPersonal);
        this.places.push(this.starting_address_obj.place);
        this.addressTextPersonal = this.starting_address_obj.place.formatted_address;
        console.log(this.addressTextPersonal);
        this.center = position;
        this.starting_address_obj.place = null;
        this.$emit("addMarker", this.addressTextPersonal);
        this.markerCoordinates();
        // this.$emit('markDirection', this.markers);
      } else {
        this.addressTextPersonal = this.starting_address;
        this.$emit("addMarker", this.addressTextPersonal);
        console.log(this.addressTextPersonal);
      }
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
    }
  }
  // coordinates(coords){
  //   this.mapCood[0] = coords.lat;
  //   this.mapCood[1] = coords.lng;
  //   console.log(this.mapCood[0] +","+this.mapCood[1]);
  // },
  //   coordinatesMark(coords){
  //   this.mapCood[0] = coords.lat;
  //   this.mapCood[1] = coords.lng;
  //   console.log(this.mapCood[0] +","+this.mapCood[1]);
  // },
  // addressText(address){
  //   this.addressText=address;
  //   console.log(address);
  // }
};
</script>
<style>
.v-application .title {
  line-height: 23px !important;
}

.input-google-container {
  width: 80%;
}
</style>