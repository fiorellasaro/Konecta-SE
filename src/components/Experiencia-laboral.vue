<template>
  <div>
    <div id="stepExp1" v-if="countExpLab == 0" class="px-3 pt-10">
      <div>
        <p class="text-center black--text title mb-0">¿Tienes experiencia laboral?</p>
      <v-radio-group
        v-model="datosExperienciaPost.flag_se"
        :mandatory="false"
        class="body-1"
        :rules="[v => !!v || 'Selecciona']"
      >
        <v-radio label="Si" value="0" color="teal" class="pa-2 radioStateCivil"></v-radio>
        <v-radio label="No" value="1" color="teal" class="pa-2 radioStateCivil" v-on:change="rbtSinExperiencia"></v-radio>
      </v-radio-group>
      </div>

      <!-- step 8 -->
      <v-expand-transition>
        <div v-if="datosExperienciaPost.flag_se == 0" class="px-3 pt-4">
          <p class="text-center black--text title mb-0">¿Tipo de experiencia?</p>
          <v-radio-group
            v-model="datosExperienciaPost.flag_conExp"
            :mandatory="false"
            class="body-1"
            :rules="[v => !!v || 'Selecciona']"
          >
            <v-radio
              label="En Call Center"
              value="rbtExtContact"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
            <v-radio
              label="En otro rubro"
              value="rbtExpOtros"
              color="teal"
              class="pa-2 radioStateCivil"
            ></v-radio>
          </v-radio-group>
        </div>
      </v-expand-transition>
    </div>
    <!-- FLUJO NO EXPERIENCIA -->
    <div id="step2" v-if="countExpLab == 1 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'" class="px-1 pt-12">
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
    <div id="stepExp1" v-if="countExpLab == 2 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Cómo te desenvuelves en una fiesta o reunión?</p>
      <v-radio-group
        v-model="datosExperienciaPost.se_p_crosselling"
        :mandatory="false"
        class="body-1"
      >
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
    <div id="stepExp1" v-if="countExpLab == 3 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'" class="px-3 pt-8">
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
    <div id="stepExp1" v-if="countExpLab == 4 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'" class="px-3 pt-8">
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
    <div id="stepExp1" v-if="countExpLab == 5 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'" class="px-3 pt-8">
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
          value="B"
          color="teal"
          class="pa-2 mt-6 text-justify"
        ></v-radio>
        <v-radio
          label="Le respondo y le doy sólo los nombres, para que él se encargue de buscar."
          value="C"
          color="teal"
          class="pa-2 mt-6 text-justify"
        ></v-radio>
        <v-radio
          label="Le pido su número y lo llamo es muy lento escribir."
          value="D"
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
    <div id="stepExp1" v-if="countExpLab == 6 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'" class="px-3 pt-12">
      <p class="text-center black--text title mb-0">¿Cuál es tu expectativa salarial?</p>
      <v-row class="pt-10">
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="datosExperienciaPost.se_expect_salarial_desde"
            prefix="S/."
            label="Desde"
            color="teal"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="datosExperienciaPost.se_expect_salarial_hasta"
            prefix="S/."
            label="Hasta"
            color="teal"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <!-- FLUJO EXPERIENCIA OTRO RUBRO -->
    <div id="step1" v-if="countExpLab === 1 && datosExperienciaPost.flag_conExp == 'rbtExpOtros'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-2 pt-4">¿En que empresa?</p>
      <v-text-field class="pt-2" color="teal" placeholder="Nombre de la empresa" v-model="datosExperienciaPost.eo_empresa"></v-text-field>

      <p class="text-center black--text title mb-2 pt-4">¿Rubro de la empresa?</p>
      <v-select
        v-model="datosExperienciaPost.eo_rubro_empresa"
        :items="rubroEmpresa"
        :rules="[v => !!v || 'Selecciona un rubro']"
        placeholder="Seleccionar"
        required
      ></v-select>
    </div>
    <div id="step1" v-if="countExpLab === 2  && datosExperienciaPost.flag_conExp == 'rbtExpOtros'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4 pt-8">¿Cuál era el puesto o cargo que desempeñaste?</p>
      <v-select
        v-model="datosExperienciaPost.eo_puesto"
        :items="puesto"
        color="teal"
        :rules="[v => !!v || 'Selecciona un puesto']"
        placeholder="Seleccionar"
        required
      ></v-select>
    </div>
    <div id="step1" v-if="countExpLab === 3  && datosExperienciaPost.flag_conExp == 'rbtExpOtros'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">¿Cuánto tiempo estuviste laborando?</p>
      <v-text-field v-model.number="datosExperienciaPost.eo_tiempo_exp" class="pt-2" color="teal" placeholder="6"></v-text-field>
      <p class="pt-6 body-2 gray--text">El tiempo será considerado en meses.</p>
    </div>
    <div id="step1" v-if="countExpLab === 4  && datosExperienciaPost.flag_conExp == 'rbtExpOtros'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">¿Cuánto recibias de retribución aproximadamente?</p>
      <v-text-field v-model.number="datosExperienciaPost.eo_retribucion_basico" class="pt-2" color="teal" label="Suelo Básico:" prefix="S/"></v-text-field>
      <v-text-field v-model.number="datosExperienciaPost.eo_retribucion_comisiones" class="pt-8" color="teal" label="Comisiones / Incentivos / Bonos:" prefix="S/"></v-text-field>
    </div>
    <div id="step1" v-if="countExpLab === 5 && datosExperienciaPost.flag_conExp == 'rbtExpOtros'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">Puedes añadir una experiencia laboral</p>
      <v-btn rounded color="#00B8AD" class="ma-2 white--text text-capitalize" @click="agregarExperiencia()">
        Añadir experiencia 
        <v-icon right dark size="35">add_circle</v-icon>
      </v-btn>
      <v-row class="justify-end">
        <v-btn
          text
          small
          class="text-capitalize subtitle-2 mt-6"
          color="#2D9CDB"
          @click="countDatosPersonales += 1"
        >Omitir</v-btn>
      </v-row>
    </div>
    <!-- EXPERIENCIA EN CALL CENTER  countExpLabCC-->
    <div id="step1" v-if="countExpLab === 1  && datosExperienciaPost.flag_conExp == 'rbtExtContact'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">¿En que empresa?</p>
      <v-text-field v-model="datosExperienciaPost.ec_empresa" class="pt-2" color="teal" placeholder="Nombre de la empresa"></v-text-field>
      <p class="text-center black--text title mb-0 pt-6">¿Cliente?</p>
      <v-text-field v-model="datosExperienciaPost.ec_cliente" class="pt-2" color="teal" placeholder="Ejemplo : ”Movistar”"></v-text-field>
    </div>
    <div id="step1" v-if="countExpLab === 2  && datosExperienciaPost.flag_conExp == 'rbtExtContact'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">¿Rubro del Cliente?</p>
      <v-select
        v-model="datosExperienciaPost.ec_rubro_cliente"
        :items="rubroEmpresa"
        :rules="[v => !!v || 'Selecciona un rubro']"
        placeholder="Seleccionar"
        required
      ></v-select>
    </div>
    <div id="step1" v-if="countExpLab === 3  && datosExperienciaPost.flag_conExp == 'rbtExtContact'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">¿Segmento del Cliente?</p>
      <v-select
        v-model="datosExperienciaPost.ec_segmento"
        :items="segmento"
        :rules="[v => !!v || 'Selecciona un segmento']"
        placeholder="Seleccionar"
        required
      ></v-select>
    </div>
    <div id="step1" v-if="countExpLab === 4  && datosExperienciaPost.flag_conExp == 'rbtExtContact'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-0">¿Cuánto tiempo estuviste laborando?</p>
      <v-text-field v-model="datosExperienciaPost.ec_tiempo_exp" class="pt-2" color="teal" placeholder="6"></v-text-field>
      <p class="pt-6 body-2 gray--text">El tiempo será considerado en meses.</p>
    </div>
    <div id="step1" v-if="countExpLab === 5  && datosExperienciaPost.flag_conExp == 'rbtExtContact'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">¿Cuánto recibias de retribución aproximadamente?</p>
      <v-text-field v-model="datosExperienciaPost.ec_retribucion_basico" class="pt-2" color="teal" label="Suelo Básico:" prefix="S/"></v-text-field>
      <v-text-field v-model="datosExperienciaPost.ec_retribucion_comisiones" class="pt-8" color="teal" label="Comisiones / Incentivos / Bonos:" prefix="S/"></v-text-field>
    </div>
    <!-- AÑADIR OTRA EXPERIENCIA -->
    <div id="step1" v-if="countExpLab === 6 && datosExperienciaPost.flag_conExp == 'rbtExtContact'" class="px-3 pt-12 mt-4">
      <p class="text-center black--text title mb-4">Puedes añadir una experiencia laboral</p>
      <v-btn rounded color="#00B8AD" class="ma-2 white--text text-capitalize" v-on:click="agregarExperiencia">
        Añadir experiencia 
        <v-icon right dark size="35">add_circle</v-icon>
      </v-btn>
      <v-row class="justify-end">
        <v-btn
          text
          small
          class="text-capitalize subtitle-2 mt-6"
          color="#2D9CDB"
          @click="countExpLab += 1"
        >Omitir</v-btn>
      </v-row>
    </div>

    <!-- FINAL -->
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
    agregarExperiencia: Function,
  },
  data() {
    return {
      select: null,
      rubroEmpresa: [
        "Retail (Saga, Ripley, Paris,Oeshle, etc)",
        "Banco",
        "Telecomunicaciones",
        "Salud",
        "Negocio propio/familiar",
        "Hoteles, restaurantes, comidas y bodegas",
        "Sector Público",
        "Educación",
        "Entretenimiento y Diversión",
        "Construcción, Energía y Minas",
        "Derecho, Leyes, Política y Justicia",
        "Comunicaciones, publicidad y Marketing",
        "Fabricas Industriales"
      ],
      puesto: [
        "Atención al cliente",
        "Ventas",
        "Impulsador de productos",
        "Cajero",
        "Reponedor",
        "Almacén, Distribución y Reparto",
        "Soporte Técnico",
        "Atención en Salud",
        "Administrativo y Tramites",
        "Servicio de Transporte",
        "Operario",
        "Profesor",
        "Desarrollo de contenido(audiovisual, escrito, edición",
        "Community Manager y Redes Sociales",
        "Asistente",
        "Secretaria",
        "Otros"
      ],
      segmento: [
        "Atención al cliente",
        "Ventas",
        "Crosseling",
        "Redes Sociales",
        "Back Office"
      ]
    };
  },
  methods: {
    rbtSinExperiencia(){
      this.datosExperienciaPost.flag_conExp = null;
    }
  }
  
};
</script>
<style>
.v-application .title {
  line-height: 23px !important;
}
</style>