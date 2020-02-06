<template>
  <div>
    <div id="stepExp1" v-if="countExpLab == 0" class="px-3 pt-10">
      <p class="text-center black--text title mb-0">¿Tienes experiencia laboral?</p>
      <v-radio-group
        v-model.number="datosExperienciaPost.flag_se"
        :mandatory="false"
        class="body-1"
        :rules="[v => !!v || 'Selecciona']"
      >
        <v-radio label="Si" value="1" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="No" value="0" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>

      <!-- step 8 -->
      <v-expand-transition>
        <div v-if="datosExperienciaPost.flag_se == 1" class="px-3 pt-4">
          <p class="text-center black--text title mb-0">¿Tipo de experiencia?</p>
          <v-radio-group v-model.number="datosExperienciaPost.flag_ec" :mandatory="false" class="body-1" :rules="[v => !!v || 'Selecciona']">
            <v-radio
              label="En Call Center"
              value="0"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
            <v-radio
              label="En otro rubro"
              value="1"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
          </v-radio-group>
        </div>
      </v-expand-transition>
    </div>
    <!-- FLUJO NO EXPERIENCIA -->
    <div id="step2" v-if="countExpLab == 1" class="px-1 pt-12">
      <p
        class="text-center title mb-0"
      >¿En una reunión familiar en casa te gusta atender a tus invitados y hacer que se sientan cómodos?</p>
      <v-radio-group v-model="datosExperienciaPost.se_p_atc" row class="pt-6">
        <v-radio label="1" value="1" color="teal"></v-radio>
        <v-radio label="2" value="2" color="teal"></v-radio>
        <v-radio label="3" value="3" color="teal"></v-radio>
        <v-radio label="4" value="4" color="teal"></v-radio>
        <v-radio label="5" value="5" color="teal"></v-radio>
      </v-radio-group>
      <v-row class="justify-space-around">
        <p>Nada de acuerdo</p>
        <p>Muy de acuerdo</p>
      </v-row>
    </div>
    <div id="stepExp1" v-if="countExpLab == 2" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Cómo te desenvuelves en una fiesta o reunión?</p>
      <v-radio-group v-model="datosExperienciaPost.se_p_crosselling" :mandatory="false" class="body-1">
        <v-radio
          label="Me gusta ser el alma de la fiesta y reunión."
          value="A"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Me gusta conocer personas nuevas y conversar."
          value="B"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Sólo converso con las personas que conozco."
          value="C"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="No converso mucho y me voy temprano."
          value="D"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 3" class="px-3 pt-8">
      <p
        class="text-center black--text title mb-0"
      >¿En una conversación con tu amigo sobre un tema en el que no estan de acuerdo?</p>

      <v-radio-group v-model="datosExperienciaPost.se_p_ventas" :mandatory="false" class="body-1">
        <v-radio
          label="Doy mis argumentos y busco convencer."
          value="A"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Explico mis ideas y argumentomis motivos."
          value="B"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Sólo doy mi opinión sobre el tema."
          value="C"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Escucho la opinión, ideas y propuestas de mi amigo."
          value="D"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 4" class="px-3 pt-8">
      <p
        class="text-center black--text title mb-0"
      >¿Imagina que tus padres te pidieron coordinar un tramite cualquiera?</p>

      <v-radio-group v-model="datosExperienciaPost.se_p_backof" :mandatory="false" class="body-2">
        <v-radio
          label="Organizo todo, envio la información, hago seguimiento de que se cumpla y le explico los resultados a mis padres."
          value="A"
          color="teal"
          class="pa-2 mt-4 text-justify caption"
        ></v-radio>
        <v-radio
          label="Organizo todo, envio la información, hago seguimiento de que se cumpla pero no me gusta explicarle a mis padres."
          value="B"
          color="teal"
          class="pa-2 mt-12 mb-4 align-content-space-aroundtext-justify caption"
        ></v-radio>
        <v-radio
          label="Sólo Organizo todo, envio la información, no me gusta hacer seguimiento ni explicar a mis padres.doy mi opinión sobre el tema."
          value="C"
          color="teal"
          class="pa-2 mt-12 text-justify caption"
        ></v-radio>
        <v-radio
          label="No me gusta hacer trámites."
          value="D"
          color="teal"
          class="pa-2 mt-6 text-justify caption"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 5" class="px-3 pt-8">
      <p
        class="text-center black--text title mb-2"
        style="font-size: 20px!important;"
      >¿Imaginate que un amig@ que no ves hace muchos años te escribe un mensaje por (fb, wsp) y te pregunta sobre los mejores lugares para visitar en lima?</p>
      <v-radio-group v-model="datosExperienciaPost.se_p_redes" :mandatory="false" class="body-2">
        <v-radio
          label="Le brindo una respuesta rápida con toda la información, inclusive le hago un mapa."
          value="A"
          color="teal"
          class="pa-2 mt-2 text-justify"
        ></v-radio>
        <v-radio
          label="Le brindo una información pero no tan detallada, no me gusta mucho escribir textos largos."
          value = "B"
          color="teal"
          class="pa-2 mt-6 text-justify"
        ></v-radio>
        <v-radio
          label="Le respondo y le doy sólo los nombres, para que él se encargue de buscar."
          value = "C"
          color="teal"
          class="pa-2 mt-6 text-justify"
        ></v-radio>
        <v-radio
          label="Le pido su número y lo llamo es muy lento escribir."
          value ="D"
          color="teal"
          class="pa-2 mt-4 text-justify"
        ></v-radio>
        <v-radio
          label="No le escribo y no la llamo, igual hace tiempo que no nos contactamos."
          value="E"
          color="teal"
          class="pa-2 mt-4 text-justify"
        ></v-radio>
      </v-radio-group>
    </div>

    <div id="stepExp1" v-if="countExpLab == 6" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Cuál es tu expectativa salarial?</p>
      <v-row>
        <v-col cols="6" md="4"><v-text-field
            v-model.number="datosExperienciaPost.se_expect_salarial_desde"
            prefix="S/."
            label="Desde"
            color="teal"
            required
          ></v-text-field></v-col>
        <v-col cols="6" md="4"><v-text-field
            v-model.number="datosExperienciaPost.se_expect_salarial_hasta"
            prefix="S/."
            label="Hasta"
            color="teal"
            required
          ></v-text-field></v-col>
      </v-row>
    </div>
    <div id="step10" v-if="countExpLab == 7" class="px-3 pt-12">
      <p class="text-center black--text title">Para finalizar nos gustaria conocerte un poco más.</p>
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
export default {
  props: {
    countExpLab: 0,
    datosExperienciaPost: {
      type: Array,
      required: true
		},
  },
  data() {
    return {
      rdbExperiencia: "",
      reuFamiliar: null
    };
  }
};
</script>
<style>
.v-application .title {
  line-height: 23px !important;
}
</style>