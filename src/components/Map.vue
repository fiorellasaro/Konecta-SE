<template>
      <!-- <GmapMap
      :center="{lat:-12.054260, lng:-77.038333}"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
 -->

<!-- 
            <vue-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
        >
        </vue-google-autocomplete> -->
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="{lat:this.center.lat, lng:this.center.lng}"
      :zoom="15"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>

</template>

<script>

import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  name: "Map",


  data(){
    return {
    center: {lat: -12.130745, lng:-77.030030},
    markers: [],
    places: [],
    currentPlace: null,
    address: '',
    };
  },

   mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }

  // mounted() {
  //           // To demonstrate functionality of exposed component functions
  //           // Here we make focus on the user input
  //           this.$refs.address.focus();
  // },
 
  // methods: {
            
  //           // When the location found
  //           // @param {Object} addressData Data of the found location
  //           // @param {Object} placeResultData PlaceResult object
  //           // @param {String} id Input container ID
            
  //           getAddressData: function (addressData, placeResultData, id) {
  //               this.address = addressData;
  //           }
  // }

    // mounted() {
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     (this.$refs.autocomplete),
  //     {types: ['geocode']}
  //   );
  // }
};
</script>