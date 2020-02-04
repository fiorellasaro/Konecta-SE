<template>
  <div>
    <div id="stepExp1" v-if="countExpLab == 0" class="px-3 pt-12">
      <p class="text-center black--text headline mb-0">¿Tienes experiencia laboral?</p>
      <v-radio-group
        v-model="rdbExperiencia"
        :mandatory="false"
        class="body-1"
        :rules="[v => !!v || 'Selecciona']"
      >
        <v-radio label="Si" value="siExp" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="No" value="noExp" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>

      <!-- step 8 -->
      <v-expand-transition>
        <div v-if="rdbExperiencia == 'siExp'" class="px-3 pt-8">
          <p class="text-center black--text headline mb-0">¿Tipo de experiencia?</p>
          <v-radio-group
            v-model="rdbExperiencia"
            :mandatory="false"
            class="body-1"
            :rules="[v => !!v || 'Selecciona']"
          >
            <v-radio
              label="En Call Center"
              value="expCall"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
            <v-radio
              label="En otro rubro"
              value="expOtros"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
          </v-radio-group>
        </div>
      </v-expand-transition>
    </div>
    <!-- FLUJO NO EXPERIENCIA -->
    <div id="step2" v-if="countExpLab == 1" class="px-3 pt-12">
      <p
        class="text-center black--text headline mb-0"
      >¿En una reunión familiar en casa te gusta atender a tus invitados y hacer que se sientan cómodos?</p>
      <v-radio-group v-model="reuFamiliar" row>
        <v-radio label="1" value="radio-1"></v-radio>
        <v-radio label="2" value="radio-2"></v-radio>
        <v-radio label="3" value="radio-1"></v-radio>
        <v-radio label="4" value="radio-2"></v-radio>
        <v-radio label="5" value="radio-1"></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 2" class="px-3 pt-12">
      <p
        class="text-center black--text headline mb-0"
      >¿Cómo te desenvuelves en una fiesta o reunión?</p>
      <v-radio-group v-model="rdbExperiencia" :mandatory="false" class="body-1">
        <v-radio
          label="Me gusta ser el alma de la fiesta y reunión."
          value="siExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Me gusta conocer personas nuevas y conversar."
          value="noExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Sólo converso con las personas que conozco."
          value="siExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="No converso mucho y me voy temprano."
          value="noExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 3" class="px-3 pt-8">
      <p
        class="text-center black--text headline mb-0"
      >¿En una conversación con tu amigo sobre un tema en el que no estan de acuerdo?</p>
      
      <v-radio-group
        v-model="rdbExperiencia"
        :mandatory="false"
        class="body-1"
      >
        <v-radio
          label="Doy mis argumentos y busco convencer."
          value="siExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Explico mis ideas y argumentomis motivos."
          value="noExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Sólo doy mi opinión sobre el tema."
          value="siExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
        <v-radio
          label="Escucho la opinión, ideas y propuestas de mi amigo."
          value="noExp"
          color="teal"
          class="pa-2 radioStateCivil"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 4" class="px-3 pt-8" style="overflow: scroll;">
      <p
        class="text-center black--text headline mb-0"
      >¿Imagina que tus padres te pidieron coordinar un tramite cualquiera?</p>
      
      <v-radio-group v-model="rdbExperiencia" :mandatory="false" class="body-2" style="height: 200px;">
        <v-radio
          label="Organizo todo, envio la información, hago seguimiento de que se cumpla y le explico los resultados a mis padres."
          value=""
          color="teal"
          class="pa-2 mt-2 text-justify caption"
        ></v-radio>
        <v-radio
          label="Organizo todo, envio la información, hago seguimiento de que se cumpla pero no me gusta explicarle a mis padres."
          value=""
          color="teal"
          class="pa-2 mt-10 text-justify caption"
        ></v-radio>
        <v-radio
          label="Sólo Organizo todo, envio la información, no me gusta hacer seguimiento ni explicar a mis padres.doy mi opinión sobre el tema."
          value=""
          color="teal"
          class="pa-2 mt-12 text-justify caption"
        ></v-radio>
        <v-radio
          label="No me gusta hacer trámites."
          value=""
          color="teal"
          class="pa-2 mt-8 text-justify caption"
        ></v-radio>
      </v-radio-group>
    </div>
    <div id="stepExp1" v-if="countExpLab == 5" class="px-3 pt-6">
      <p
        class="text-center black--text headline mb-0" style="font-size: 20px!important;"
      >¿Imaginate que un amig@ que no ves hace muchos años te escribe un mensaje por (fb, wsp) y te pregunta sobre los mejores lugares para visitar en lima?</p>
      <v-radio-group
        v-model="rdbExperiencia"
        :mandatory="false"
        class="body-2"
        style="height: 200px;"
      >
        <v-radio
          label="Le brindo una respuesta rápida con toda la información, inclusive le hago un mapa."
        ></v-radio>
        <v-radio
          label="Le brindo una información pero no tan detallada, no me gusta mucho escribir textos largos."
          value="noExp"
          color="teal"
          class="pa-2 "
        ></v-radio>
        <v-radio
          label="Le respondo y le doy sólo los nombres, para que él se encargue de buscar."
          value="siExp"
          color="teal"
          class="pa-2 "
        ></v-radio>
        <v-radio
          label="Le pido su número y lo llamo es muy lento escribir."
          value="noExp"
          color="teal"
          class="pa-2 "
        ></v-radio>
        <v-radio
          label="No le escribo y no la llamo, igual hace tiempo que no nos contactamos."
          value="noExp"
          color="teal"
          class="pa-2 "
        ></v-radio>
      </v-radio-group>
    </div>

    <div id="stepExp1" v-if="countExpLab == 6" class="px-3 pt-12">
      <p class="text-center black--text headline mb-0">¿Cuál es tu expectativa salarial?</p>
      <v-radio-group
        v-model="rdbExperiencia"
        :mandatory="false"
        class="body-1"
        :rules="[v => !!v || 'Selecciona']"
      >
        <v-radio label="930"  value="930" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="930 + comisiones" value="930 + comisiones" color="teal" class="pa-2 radioStateCivil"></v-radio>
      </v-radio-group>
    </div>
    <div id="step10" v-if="countExpLab == 8" class="px-3 pt-12">
      <p class="text-center black--text headline">Para finalizar nos gustaria conocerte un poco más.</p>
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
    countExpLab: 0
  },
  data() {
    return {
      rdbExperiencia: "",
      reuFamiliar: null
    };
  }
};
</script>