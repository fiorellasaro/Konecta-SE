<template>
  <div>
    <div id="stepPro1" v-if="countProf === 0" class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿Cuál es tu último grado de formación?</p>
      <v-select
        v-model="datosProfesionalesPost.grado_formacion"
        color="teal"
        placeholder="Seleccionar"
        :items="gradoFormacion"
        :rules="[v => !!v || 'Selecciona un grado de formación']"
      ></v-select>
      <p class="text-center black--text title mb-0 pt-10">Nombre de tu Institución:</p>
      <v-text-field
        v-model="datosProfesionalesPost.institucion"
        color="teal"
        class="pt-0"
        placeholder="Nombre de la institución"
        required
        :rules="[v => !!v || 'Ingresa el Nombre de tu Institución']"
      ></v-text-field>
      </v-form>
    </div>
    <div id="stepPro2" v-if="countProf === 1" class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p
        class="text-center black--text title mb-0"
      >¿En qué <strong class="teal--text">estado</strong> se encuentra tu último grado de formación?</p>
      <v-select
        v-model="datosProfesionalesPost.estado_estudios"
        color="teal"
        placeholder="Seleccionar"
        :items="estadoFormacion"
        :rules="[v => !!v || 'Seleccione un estado de formación']"
        required
      ></v-select>
      </v-form>
    </div>
    <div id="stepPro3" v-if="countProf === 2" class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿Que <strong class="teal--text">especialidad</strong> estudias o estudiaste?</p>
      <v-select
        v-model="datosProfesionalesPost.rubro_carrera"
        color="teal"
        required
        placeholder="Seleccionar"
        :items="especialidadFormacion"
        :rules="[v => !!v || 'Selecciona una especialidad']"
      ></v-select>
      </v-form>
    </div>
<!-- v-if="countProf == 3 && selectEstadoF==='En curso'" -->
    <div id="stepPro3" v-if="countProf === 3 && datosProfesionalesPost.estado_estudios == 'En curso' " class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿Dónde se encuentra tu centro de estudios?</p>

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


      <!-- <v-text-field v-model="datosProfesionalesPost.text_dir_estudio" required color="teal"></v-text-field> -->
      </v-form>
    </div>
    <div id="stepPro3" v-if="countProf === 4 && datosProfesionalesPost.estado_estudios == 'En curso' " class="px-3 pt-12">
     <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿En qué <strong class="teal--text">horario</strong> realizas tus estudios?</p>
      <v-select
        v-model="datosProfesionalesPost.horario_estudio"
        color="teal"
        placeholder="Seleccionar"
        :items="HorarioEstudios"
        :rules="[v => !!v || 'Selecciona un horario']"
        required
      ></v-select>
     </v-form>
    </div>
    <div id="step10" v-if="countProf === 5" class="px-3 pt-12">
      <p
        class="text-center black--text title"
      >Quisieramos conocer un poco más de tu experiencia laboral</p>
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

import * as VueGoogleMaps from "vue2-google-maps";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  props: {
    countProf: 0,
    datosProfesionalesPost: {
      type: Array,
      required: true
    },
    datosPersonalesPost: {
      type: Array,
      required: true
    }

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

      //   countProf: 0,
      selectgrado: null,
      selectEstadoF: null,
      selectEspecialidadF: null,
      selectHorarioF: null,
      gradoFormacion: ["Secundaria", "Técnica", "Universitaria"],
      estadoFormacion: ["Completa", "En curso", "Tuve que dejarlo"],
      especialidadFormacion: [
        "Administración (Todas las afines). Ejemplo: Neg.Internacionales, bancaria,etc)",
        "Ciencia de la Comunicación",
        "Computación e Informática",
        "Derecho y Ciencias Políticas",
        "Diseño (Gráfico, Publicitario o Web)",
        "Economía, Contabilidad y Finanzas",
        "Educación",
        "Gastronomía y Repostería",
        "Idiomas",
        "Ing.Agricola o Química",
        "Ing.Civil, Arquitectura, Diseño de Interiores",
        "Ing. Electrónica / Electricidad",
        "Ing. Industrial, Ambiental, Estadística",
        "Ing. Sistemas",
        "Literatura, Historia, Filosofía, Sociología",
        "Psicología",
        "Redes Sociales",
        "Secretariado",
        "Turismo y Aviación Comercial"
      ],
      HorarioEstudios: ["Mañana", "Tarde", "Noche"]
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
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
      if(!this.address.geometry){
        this.addressTextPersonal = addressData.name;
        this.$emit("addMarker", this.addressTextPersonal);
        console.log(this.addressTextPersonal);
      }else{
      this.starting_address_obj = addressData;
       console.log(this.starting_address_obj);
      this.addMarker();
      }

    },

    inputAutocomplete: function(objectInput){
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
.input-autocomplete{
  margin-bottom: 2em;
  border-bottom: 2px solid #BDBDBD;
  transition: border-bottom .5s ease, width .5s ease;
  width: 100%;
}

.input-autocomplete:focus{
  width: 100%;
  border-bottom: 2px solid #168D86;
  outline: none;

}
.text-marker-content{
  display: flex;
  margin-bottom: 1em;

}

.marker-image{
  width:20px;
  height: 30px;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>