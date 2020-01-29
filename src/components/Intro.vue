<template>
  <v-container>
    <v-layout pa-2 justify-center>
      <v-flex xs12 md6 xl3 pa-2>
        <div class="px-10">
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
    value: null
  }),
  methods: {
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