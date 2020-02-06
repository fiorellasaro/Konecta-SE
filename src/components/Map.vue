<template>
  <div>
    <div>
        <!-- <gmap-autocomplete class="input-google" 
          @place_changed="setPlace" placeholder="Ingresa la dirección">
        </gmap-autocomplete> -->
       
      <br/>

    <div class="input-google-container">
        <v-text-field label="Dirección" placeholder="Ingresa la dirección" class="" v-model="starting_address" id="starting_address"></v-text-field>
         <v-btn depressed color="primary" @click="addMarker">Buscar</v-btn>
    </div>

    </div>
    <br>
    <gmap-map
      :center="{lat:this.center.lat, lng:this.center.lng}"
      :zoom="15"
      style="width:50%;  height: 400px;"
    >
    <gmap-marker :position="markers" :draggable="true" @drag="updateCoordinates" />
    </gmap-map>
  </div>

</template>

<script>

import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  name: "Map",


  data(){
    return {
    starting_address: '',
    starting_address_obj: {},
    inputAdress: [],  
    center: {},
    markers: {},
    places: [],
    currentPlace: null,
    address: '',
    coordinates: {},
    directionText:''
    };
  },

   mounted() {
    this.geolocate();

    let self = this
    let starting_address_input = document.getElementById('starting_address')
    let starting_address_autocomplete = new google.maps.places.Autocomplete(starting_address_input)
    starting_address_autocomplete.addListener('place_changed', function() {
      let place = starting_address_autocomplete.getPlace();
      self.starting_address_obj = {
       place
      }
    });

  },

  methods: {

    initSearch: function (event) {
      console.log('Shots fired!')
    },

    addMarker() {

      if (this.starting_address_obj.place) {

        const position = {
          lat: this.starting_address_obj.place.geometry.location.lat(),
          lng: this.starting_address_obj.place.geometry.location.lng()
        };



       this.markers = position;
        console.log(this.markers); 
       this.places.push(this.starting_address_obj.place);
        this.directionText = this.starting_address_obj.place.formatted_address;
        console.log(this.directionText);
        this.center = position;
        this.starting_address_obj.place = null;
      }
      
      else{
        this.directionText = this.starting_address;
        console.log(this.directionText);
      }

    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.markers = this.center;

      });
    },
    updateCoordinates(location) {
      this.coordinates = {
          lat: location.latLng.lat(),
          lng: location.latLng.lng(),
      };
      console.log(this.coordinates);
      return(this.coordinates);
    }
  },





};
</script>

<style>
.input-google-container{
width: 50%;
}
</style>