<template>
  <v-container>
    <v-layout pa-2 justify-center class="d-flex flex-column">
      <v-flex xs12 md6 xl3 pa-2>
        <div id="step0" v-if="counter == 0" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu nombre?</p>
          <v-text-field
            :rules="nameRules"
            v-model="personalInformation.name"
            class="pt-0"
            color="teal"
            required
          ></v-text-field>
          <p class="text-center black--text headline mb-0 mt-6">¿Cuáles son tus apellidos?</p>
          <v-row>
            <v-col cols="6" sm="6">
              <v-text-field
                :rules="lastName1Rules"
                v-model="personalInformation.paternalLastName"
                color="teal"
                label="Apellido Paterno"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" sm="6">
              <v-text-field
                :rules="lastName2Rules"
                v-model="personalInformation.maternalLastName"
                color="teal"
                label="Apellido Materno"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <!-- step 2 -->
        <div id="step1" v-if="counter == 1" class="px-3 pt-12">
          <p class="text-center black--text headline mb-0">¿Cuál es tu nacionalidad?</p>
          <v-text-field v-model="personalInformation.name" class="pt-0" color="teal"></v-text-field>
        </div>
        <!-- step 3 -->
      </v-flex>
      <v-flex>
        <div class="my-12 mx-6 d-flex flex-row justify-space-between">
          <v-btn
            v-if="counter !== 0"
            :disabled="!isNext"
            color="#00B8AD"
            fab
            large
            @click="counter -= 1"
          >
            <v-icon>mdi-arrow-left-bold</v-icon>
          </v-btn>

          <v-btn fab large color="#00B8AD" class="white--text" @click="counter += 1, isNext=true">
            <v-icon>mdi-arrow-right-bold</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hasSaved: false,
      isNext: null,
      model: null,
      counter: 0,
      personalInformation: [
        {
          name: '',
          paternalLastName: null,
          maternalLastName: null,
          nationality: null
        }
      ],
      nameRules: [
        v => !!v || "El nombre es requerido",
      ],
      lastName1Rules: [
        v => !!v || "Apellido paterno es requerido",
      ],
      lastName2Rules: [
        v => !!v || "Apellido materno es requerido",
      ]
    };
  }
};
</script>