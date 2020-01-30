<template>
  <v-app>
    <v-app-bar app color="#032556" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/k-blanco.png"
          transition="scale-transition"
          width="40"
        /> -->
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../src/assets/konecta-b.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="$route.name == 'home'" href="https://www.grupokonecta.com/somos-globales/peru/" target="_blank" text>
        <span class="mr-2">Nosotros</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn v-if="$route.name == 'home'" @click="$router.push('/login')" target="_blank" class="ml-6" outlined>
        <span class="mr-2" >Postula</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>

        <vue-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
        >
        </vue-google-autocomplete>

      <GmapMap
      :center="{lat:-12.054260, lng:-77.038333}"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      /> -->
    </GmapMap>
      <!-- <HelloWorld /> -->
    </v-content>
    <!-- <v-footer color="blue darken-2" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>-->
    <v-footer v-if="$route.name == 'home'" color="#032556">
      <v-card flat tile class=" white--text text-center" color="#032556">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Konecta</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import VueGoogleAutocomplete from 'vue-google-autocomplete';

export default {
  name: "App",

  components: {
    HelloWorld,
    VueGoogleAutocomplete,
  },

  data () {
    //
    return {
      center: {lat: -12.130745, lng:-77.030030},
      // markers: [
      //   {
      //     position: {lat: -12.130745, lng:-77.030030}
      //   },
      // ],
    address: '',

    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
    };

    

  },
  mounted() {
            // To demonstrate functionality of exposed component functions
            // Here we make focus on the user input
            this.$refs.address.focus();
  },
 
  methods: {
            /**
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
            getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
            }
  }
  // mounted() {
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     (this.$refs.autocomplete),
  //     {types: ['geocode']}
  //   );
  // }

};
</script>
