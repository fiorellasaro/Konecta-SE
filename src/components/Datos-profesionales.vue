<template>
  <div>
    <div id="stepPro1" v-if="countProf === 0" class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿Cuál es tu último grado de formación?</p>
      <v-select
        v-model="datosProfesionalesPost.grado_formacion"
        color="teal"
        placeholder="Seleccionar"
        :items="gradoFormacion"
        :rules="[v => !!v || 'Selecciona un grado de formación']"
      ></v-select>
      <p class="text-center black--text title mb-0 pt-10">Nombre de tu Institución:</p>
      <v-text-field
      v-model="datosProfesionalesPost.institucion"
        color="teal"
        class="pt-0"
        placeholder="Nombre de la institución"
        required
        :rules="[v => !!v || 'Ingresa el Nombre de tu Institución']"
      ></v-text-field>
      </v-form>
    </div>
    <div id="stepPro2" v-if="countProf === 1" class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p
        class="text-center black--text title mb-0"
      >¿En qué <strong class="teal--text">estado</strong> se encuentra tu último grado de formación?</p>
      <v-select
        v-model="datosProfesionalesPost.estado_estudios"
        color="teal"
        placeholder="Seleccionar"
        :items="estadoFormacion"
        :rules="[v => !!v || 'Seleccione un estado de formación']"
      ></v-select>
      </v-form>
    </div>
    <div id="stepPro3" v-if="countProf === 2" class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿Que <strong class="teal--text">especialidad</strong> estudias o estudiaste?</p>
      <v-select
        v-model="datosProfesionalesPost.rubro_carrera"
        color="teal"
        required
        placeholder="Seleccionar"
        :items="especialidadFormacion"
        :rules="[v => !!v || 'Selecciona una especialidad']"
      ></v-select>
      </v-form>
    </div>
<!-- v-if="countProf == 3 && selectEstadoF==='En curso'" -->
    <div id="stepPro3" v-if="countProf === 3 && datosProfesionalesPost.estado_estudios == 'En curso' " class="px-3 pt-12">
      <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿Dónde se encuentra tu centro de estudios?</p>
      <v-text-field v-model="datosProfesionalesPost.text_dir_estudio" required color="teal"></v-text-field>
      </v-form>
    </div>
    <div id="stepPro3" v-if="countProf === 4 && datosProfesionalesPost.estado_estudios == 'En curso' " class="px-3 pt-12">
     <v-form
      ref="form"
      v-model="datosPersonalesPost.datosValidPer"
    >
      <p class="text-center black--text title mb-0">¿En qué <strong class="teal--text">horario</strong> realizas tus estudios?</p>
      <v-select
        v-model="datosProfesionalesPost.horario_estudio"
        color="teal"
        placeholder="Seleccionar"
        :items="HorarioEstudios"
        :rules="[v => !!v || 'Selecciona un horario']"
        required
      ></v-select>
     </v-form>
    </div>
    <div id="step10" v-if="countProf === 5" class="px-3 pt-12">
          <p
            class="text-center black--text title"
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
      datosProfesionalesPost: {
      type: Array,
      required: true
    },
    datosPersonalesPost: {
      type: Array,
      required: true
    }
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
<style>
.v-application .title {
    line-height: 23px!important;
}
</style>