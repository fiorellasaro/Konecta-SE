<template>
  <div>
    <div id="stepPro1" v-if="countProf == 0" class="px-3 pt-12">
      <!-- <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    > -->
      <p class="text-center black--text headline mb-0">¿Cuál es tu último grado de formación?</p>
      <v-select
        v-model="selectgrado"
        color="teal"
        placeholder="Seleccionar"
        :items="gradoFormacion"
        :rules="[v => !!v || 'El grado es requerido']"
      ></v-select>
      <p class="text-center black--text headline mb-0 pt-10">Nombre de tu Institución:</p>
      <v-text-field
        color="teal"
        class="pt-0"
        placeholder="Nombre de la institución"
        required
        :rules="[v => !!v || 'Nombre de la Instituciónes es requerido']"
      ></v-text-field>
      <!-- </v-form> -->
    </div>
    <div id="stepPro2" v-if="countProf == 1" class="px-3 pt-12">
      <p
        class="text-center black--text headline mb-0"
      >¿En qué estado se encuentra tu último grado de formación?</p>
      <v-select
        v-model="selectEstadoF"
        color="teal"
        placeholder="Seleccionar"
        :items="estadoFormacion"
        :rules="[v => !!v || 'Seleccione un estado de formación']"
      ></v-select>
    </div>
    <div id="stepPro3" v-if="countProf == 2" class="px-3 pt-12">
      <p class="text-center black--text headline mb-0">¿Que especialidad estudias o estudiaste?</p>
      <v-select
        v-model="selectEspecialidadF"
        color="teal"
        placeholder="Seleccionar"
        :items="especialidadFormacion"
        :rules="[v => !!v || 'Item is required']"
      ></v-select>
    </div>
<!-- v-if="countProf == 3 && selectEstadoF==='En curso'" -->
    <div id="stepPro3" v-if="countProf == 3" class="px-3 pt-12">
      <p class="text-center black--text headline mb-0">¿Dónde se encuentra tu centro de estudios?</p>
      <v-text-field required color="teal"></v-text-field>
    </div>
    <div id="stepPro3" v-if="countProf == 4" class="px-3 pt-12">
      <p class="text-center black--text headline mb-0">¿En qué <strong class="teal--text">horario</strong> realizas tus estudios?</p>
      <v-select
        v-model="selectHorarioF"
        color="teal"
        placeholder="Seleccionar"
        :items="HorarioEstudios"
        :rules="[v => !!v || 'Item is required']"
      ></v-select>
    </div>
    <div id="step10" v-if="countProf == 6" class="px-3 pt-12">
          <p
            class="text-center black--text headline"
          >Quisieramos conocer un poco más de tu experiencia laboral</p>
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
      countProf: 0,
    },
  data() {
    return {
    //   countProf: 0,
      selectgrado: null,
       selectEstadoF: null,
      selectEspecialidadF: null,
      selectHorarioF: null,
      gradoFormacion: ["Secundaria", "Técnica", "Univiersitaria"],
      estadoFormacion: ["Completa", "En curso", "Tuve que dejarlo"],
      especialidadFormacion: [
        "Administración (Todas las afines). Ejemplo: Neg.Internacionales, bancaria,etc)",
        "Ciencia de la Comunicación",
        "Computación e Informática",
        "Derecho y Ciencias Políticas",
        "Diseño (Gráfico, Publicitario o Web)",
        "Economía, Contabilidad y Finanzas",
        "Educación",
        "Gastronomía y Repostería",
        "Idiomas",
        "Ing.Agricola o Química",
        "Ing.Civil, Arquitectura, Diseño de Interiores",
        "Ing. Electrónica / Electricidad",
        "Ing. Industrial, Ambiental, Estadística",
        "Ing. Sistemas",
        "Literatura, Historia, Filosofía, Sociología",
        "Psicología",
        "Redes Sociales",
        "Secretariado",
        "Turismo y Aviación Comercial"
      ],
      HorarioEstudios:['Mañana', 'Tarde', 'Noche'],
    };
  }
};
</script>