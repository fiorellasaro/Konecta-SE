<template>
  <v-container grid-list-xs pa-6>
    <v-layout row justify-center>
      <v-flex xs12 md6 xl3 pa-2>
        <div class="px-4">
          <p class="text-center teal--text headline font-weight-bold">¡Bienvenid@!</p>
          <p
            class="text-center subtitle-2 py-4"
            style="color: #042B54; font-size: 16px!important;"
          >A ser parte de la familia de Konecta</p>
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <p class="text-center black--text title mb-2 mt-6">Tipo de documento</p>

            <v-select
              v-model="select"
              :items="DocumentType"
              :rules="[v => !!v || 'el tipo de documento es requerido']"
              label="Seleccionar"
              solo
              required
            ></v-select>
            <p class="text-center black--text title mb-2 mt-2">Número de documento</p>
            <v-text-field
              v-model="numeroDoc"
              maxlength="12"
              solo
              @keypress="isNumber($event)"
              :rules="nameRules"
              placeholder="Ingrese el número"
              required
            ></v-text-field>
            <!-- <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Acepto los Términos y Condiciones"
              required
            ></v-checkbox>-->
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              required
              color="teal"
            >
              <template v-slot:label>
                <div @click.stop style="font-size: 11px;">
                  Acepto los
                  <a
                    href="javascript:;"
                    color="teal"
                    class="teal--text"
                    @click.stop="terms = true"
                  >Términos</a>
                  y
                  <a
                    href="javascript:;"
                    color="teal"
                    class="teal--text"
                    @click.stop="conditions = true"
                  >Condiciones</a>
                </div>
              </template>
            </v-checkbox>
            <v-row class="justify-center py-6">
              <v-btn
                rounded
                :disabled="!valid"
                color="teal"
                class="mr-4 white--text"
                @click="validate"
              >Enviar</v-btn>
            </v-row>
          </v-form>
          <v-dialog v-model="terms" width="70%">
            <v-card>
              <v-card-title class="title">Terms</v-card-title>
              <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="purple" @click="terms = false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="conditions" width="70%">
            <v-card>
              <v-card-title class="title">Conditions</v-card-title>
              <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="purple" @click="conditions = false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    numeroDoc: "",
    terms: false,
    nameRules: [
      v => !!v || "El número de documento es requerido",
      // v => (v && v.length > 7) || "El número debe ser de 8 carácteres"
    ],
    conditions: false,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,

    email: "",
    select: null,
    DocumentType: ["DNI", "Pasaporte", "Carnet de Extranjeria"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.replace({ name: "selection" });
      }
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
    }
  }
};
</script>
