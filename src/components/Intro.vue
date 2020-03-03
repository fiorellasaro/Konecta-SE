<template>
  <v-container pt-10>
    <v-layout pa-2 justify-center>
      <v-flex xs12 md6 xl3 pa-2>
        <div class="px-10" style="display:none">
          <p class="text-center grey--text headline">¡Genial!</p>
          <v-row>
            <p class="grey--text headline">En hora buena, deseas continuar el proceso</p>
            <!-- <v-col cols="6"> -->
            <v-autocomplete v-model="value" :items="items" color="primary"></v-autocomplete>
            <!-- </v-col> -->
          </v-row>

          <v-expand-transition>
            <p class="grey--text headline" v-if="value=='si'">{{message[0]}}</p>
            <p class="grey--text headline" v-if="value=='no'">{{message[1]}}</p>
          </v-expand-transition>
          <v-row class="justify-center py-6">
            <v-btn
              rounded
              color="teal"
              dark
              @click="nextAction()"
            >{{ value=='si' ? 'Empecemos' : 'Salir' }}</v-btn>
          </v-row>
        </div>

        <!-- personas -->
        <div id="step2" class="px-1 pt-12">
          <v-form ref="form">
            <p class="text-center title mb-0">¿Cuántas personas viven contigo?</p>
            <v-row class="justify-center">
                <v-icon large color="teal">share</v-icon>
                <a class="pt-1 pl-2" color="red"
                   href="https://api.whatsapp.com/send?text=¿Quieres ser parte? Postula a nuestro proceso de selección https://vivekonecta.pe"
                >Compartir Proceso</a>
              </v-row>
            <v-row>
              <v-col cols="6" sm="6" class="justify-center">
                <a class="pt-1 pl-2"
                  href="https://api.whatsapp.com/send?text=¿Quieres ser parte? Postula a nuestro proceso de selección https://vivekonecta.pe"
                >Compartir Proceso</a>
                <!-- :rules="[v => !!v || 'Ingresa el número de familiares']" v-on:keyup.enter="createObjFamilia()" -->
                <!-- @keyup="createObjFamilia()" -->
                <v-text-field
                  v-model.number="fam_postulante"
                  maxlength="2"
                  class="pt-2 text-center"
                  color="teal"
                  placeholder="2"
                  required
                  @keypress="isNumber($event)"
                ></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" class="align-self-center">
                <v-btn
                  small
                  color="teal"
                  class="white--text body-2 text-capitalize"
                  @click="arrDatosFamiliares()"
                >Registrar</v-btn>
              </v-col>
            </v-row>

            <!-- Generar Datos Familiares arrFamilia -->
            <div v-if="fam_postulante > 0">
              <v-flex v-for="(famPostulante, index) in fam_postulante" :key="famPostulante.id">
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
            </div>
          </v-form>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import questionnaire from "@/components/Personal-information.vue";
export default {
  data: () => ({
    descriptionLimit: 5,
    message: [
      "¡Estupendo!, no esperemos más, a comenzar.",
      "Descuida, puedes volver cuando sea posible :)"
    ],
    items: ["si", "no"],
    values: ["si", "no"],
    value: null,
    fam_postulante: null,
    arrFamilia: [],
    familiares: [],
    parentescoModel: "",
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
    trabaja: ["Si", "No"],
    edad: null,
    trabajaModel: ""
  }),
  mounted() {
    console.log("mounted");
    console.log(this.createObjFamilia());
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
    returnTrue() {
      return true;
    },

    createObjFamilia: function() {
      // let nroFam = parseInt(this.fam_postulante);
      // if(nroFam > 0){
      for (let i = 1; i <= 20; i++) {
        this.arrFamilia.push({
          parentesco: "",
          edad: null,
          trabaja: ""
        });
        console.log(this.arrFamilia);
        // return this.arrFamilia;
      }
      // this.familiares = this.arrFamilia;
      // }
    },
    arrDatosFamiliares(){
      // var fam_rotacion = [];
      
      this.arrFamilia.forEach(element => {
        if(element.parentesco!== ''){
          this.familiares.push({
            parentesco: element.parentesco,
            edad: element.edad,
            trabaja: element.trabaja
            });
        }
        console.log('rotacion', this.familiares);
      });
    },
    nextAction() {
      if (this.value == "si") {
        this.$router.replace({ name: "selection" });
        // this.questionnaire;
      } else {
        this.$router.replace({ name: "home" });
      }
    }
  }
};
</script>

<style >
.v-application a {
    color:  #000000;
    text-decoration: none;
}
</style>