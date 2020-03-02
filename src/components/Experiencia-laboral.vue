<template>
  <div>
    <div id="stepExp1" v-if="countExpLab == 0" class="px-3 pt-10">
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <div>
          <p class="text-center black--text title mb-0">¿Tienes experiencia laboral?</p>
          <v-radio-group
            v-model="datosExperienciaPost.flag_se"
            class="body-1"
            :rules="[v => !!v || 'Selecciona una opción']"
            required
          >
            <v-radio label="Si" value="0" color="teal" class="pa-2 radioExp"></v-radio>
            <v-radio
              label="No"
              value="1"
              color="teal"
              class="pa-2 radioExp"
              v-on:change="rbtSinExperiencia"
            ></v-radio>
          </v-radio-group>
          <!-- </v-form> -->
        </div>

        <!-- step 8 -->
        <v-expand-transition>
          <div v-if="datosExperienciaPost.flag_se == 0" class="px-3 pt-4">
            <!-- <v-form ref="form" v-model="datosPersonalesPost.datosValidPer"> -->
            <p class="text-center black--text title mb-0">Tipo de experiencia</p>
            <v-radio-group
              v-model="datosExperienciaPost.flag_conExp"
              class="body-1"
              :rules="[v => !!v || 'Selecciona una opción']"
              required
            >
              <v-radio
                label="En Call Center"
                value="rbtExtContact"
                color="teal"
                class="pa-2 radioExp"
              ></v-radio>
              <v-radio label="En otro rubro" value="rbtExpOtros" color="teal" class="pa-2 radioExp"></v-radio>
            </v-radio-group>
          </div>
        </v-expand-transition>
      </v-form>
    </div>
    <!-- FLUJO NO EXPERIENCIA -->
    <div
      id="step2"
      v-if="countExpLab == 1 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'"
      class="px-1 pt-12"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center title mb-0"
        >¿En una reunión familiar en casa te gusta atender a tus invitados y hacer que se sientan cómodos?</p>
        
        <v-chip-group
          v-model="datosExperienciaPost.se_p_atc"
          class="pt-6 d-flex justify-space-around"
          active-class="teal--text text--accent-4"
          mandatory
          :rules="[v => !!v || 'Selecciona una opción']"
              required
        >
          <v-chip v-for="size in sizes" :key="size" :value="size">{{ size }}</v-chip>
        </v-chip-group>

        <v-row class="justify-space-between mx-3">
          <p class="body-2 pt-2 text-start" style="width: 75px">Nada de acuerdo</p>
          <p class="body-2 pt-2 text-end" style="width: 75px">Muy de acuerdo</p>
        </v-row>
      </v-form>
    </div>
    <div
      id="stepExp1"
      v-if="countExpLab == 2 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'"
      class="px-3 pt-12"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cómo te desenvuelves en una fiesta o reunión?</p>
        <v-radio-group
          v-model="datosExperienciaPost.se_p_crosselling"
          class="body-1"
          :rules="[v => !!v || 'Selecciona una opción']"
          required
        >
          <v-radio
            label="Me gusta ser el alma de la fiesta y reunión."
            value="A"
            color="teal"
            class="pa-3 text-justify radioExp"
          ></v-radio>
          <v-radio
            label="Me gusta conocer personas nuevas y conversar."
            value="B"
            color="teal"
            class="pa-3 text-justify radioExp"
          ></v-radio>
          <v-radio
            label="Sólo converso con las personas que conozco."
            value="C"
            color="teal"
            class="pa-3 text-justify radioExp"
          ></v-radio>
          <v-radio
            label="No converso mucho y me voy temprano."
            value="D"
            color="teal"
            class="pa-3 text-justify radioExp"
          ></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <div
      id="stepExp1"
      v-if="countExpLab == 3 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'"
      class="px-3 pt-8"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center black--text title mb-0"
        >En una conversación con un amigo sobre un tema en el que no estamos de acuerdo, yo:</p>

        <v-radio-group
          v-model="datosExperienciaPost.se_p_ventas"
          class="body-2"
          :rules="[v => !!v || 'Selecciona una opción']"
          required
        >
          <v-radio
            label="Planteo mis argumentos e intento convencerlo."
            value="A"
            color="teal"
            class="pa-3 mb-3 radioExp"
          ></v-radio>
          <v-radio
            label="Explico mis ideas y mis motivos para tenerlas"
            value="B"
            color="teal"
            class="pa-3 mb-3 radioExp"
          ></v-radio>
          <v-radio
            label="Brindo mi opinión personal sobre el tema sin mayor explicación"
            value="C"
            color="teal"
            class="pa-5 mb-3 radioExp"
          ></v-radio>
          <v-radio
            label="Escucho la opinión, las ideas y los argumentos de mi amigo."
            value="D"
            color="teal"
            class="pa-3 mb-3 radioExp"
          ></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <div
      id="stepExp1"
      v-if="countExpLab == 4 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'"
      class="px-3 pt-8"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center black--text title mb-0"
        >Tus padres te piden coordinar un trámite cualquiera, tú:</p>

        <v-radio-group
          v-model="datosExperienciaPost.se_p_backof"
          :rules="[v => !!v || 'Selecciona una opción']"
          required
        >
          <v-radio
            label="Organizas todo, envías la información y realizas el seguimiento correspondiente. Al final les explicas el resultado a tus padres."
            value="A"
            color="teal"
            class="py-11 px-2 mt-2 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="Organizas todo, envías la información y realizas el seguimiento correspondiente. Les dices a tus padres que el trámite ya está hecho sin mayor explicación."
            value="B"
            color="teal"
            class="py-12 px-2 mt-2 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="Organizas todo y envías la información. Pero dejas de lado el seguimiento porque no es tan importante. Les dices a tus padres que el trámite ya está hecho sin mayor explicación."
            value="C"
            color="teal"
            class="py-12 px-2 mt-3 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="No te gusta realizar trámites que no son tuyos."
            value="D"
            color="teal"
            class="py-4 px-2 mt-3 text-justify pr-4 caption radioExp"
          ></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <div
      id="stepExp1"
      v-if="countExpLab == 5 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'"
      class="px-3 pt-8"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center black--text title mb-2"
          style="font-size: 18px!important;"
        >Imagina que un amigo al que no ves hace muchos años te escribe preguntándote por los mejores lugares para visitar en Lima, ¿cuál sería tu respuesta?</p>
        <v-radio-group
          v-model="datosExperienciaPost.se_p_redes"
          class="body-2"
          :rules="[v => !!v || 'Selecciona una opción']"
          required
        >
          <v-radio
            label="Un mensaje conciso con toda la información que pude recopilar. También le adjunto un mapa."
            value="A"
            color="teal"
            class="py-8 px-2 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="Un mensaje con lo primero que se me viene a la mente. No me gusta escribir textos muy largos."
            value="B"
            color="teal"
            class="py-8 px-2 mt-2 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="Le brindo los nombres de los lugares para que él se encargue de buscar. "
            value="C"
            color="teal"
            class="py-6 px-2 mt-2 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="Le pido su número y lo llamo. Escribir toma mucho tiempo."
            value="D"
            color="teal"
            class="py-4 px-2 mt-2 text-justify pr-4 caption radioExp"
          ></v-radio>
          <v-radio
            label="No le contesto. Igual, hace mucho que no nos vemos."
            value="E"
            color="teal"
            class="py-4 px-2 mt-2 text-justify pr-4 caption radioExp"
          ></v-radio>
        </v-radio-group>
      </v-form>
    </div>
    <div
      id="stepExp1"
      v-if="countExpLab == 6 && datosExperienciaPost.flag_conExp !== 'rbtExpOtros' && datosExperienciaPost.flag_conExp !== 'rbtExtContact'"
      class="px-3 pt-12"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuál es tu expectativa salarial?</p>
        <v-row class="pt-10 justify-center">
          <v-col cols="6" md="4">
            <v-text-field
              v-model.number="datosExperienciaPost.se_expect_salarial_desde"
              prefix="S/."
              label="Desde"
              type="number"
              maxlength="4"
              color="teal"
              :rules="[v => !!v || 'Ingresa un monto']"
              required
              pattern="[0-9]*"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              @keypress="isNumber($event)"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              v-model.number="datosExperienciaPost.se_expect_salarial_hasta"
              prefix="S/."
              label="Hasta"
              maxlength="4"
              type="number"
              color="teal"
              :rules="[v => !!v || 'Ingresa un monto']"
              required
              pattern="[0-9]*"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              @keypress="isNumber($event)"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>

    <!-- FLUJO EXPERIENCIA OTRO RUBRO -->
    <div
      id="step1"
      v-if="countExpLab === 1 && datosExperienciaPost.flag_conExp == 'rbtExpOtros'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-2 pt-4">¿En que empresa?</p>
        <v-text-field
          class="pt-2"
          color="teal"
          placeholder="Nombre de la empresa"
          v-model="datosExperienciaPost.eo_empresa"
          :rules="[v => !!v || 'Ingresa el nombre de la empresa']"
          required
        ></v-text-field>

        <p class="text-center black--text title mb-2 pt-4">¿Rubro de la empresa?</p>
        <v-select
          v-model="datosExperienciaPost.eo_rubro_empresa"
          :items="rubroEmpresa"
          color="teal"
          :rules="[v => !!v || 'Selecciona un rubro']"
          placeholder="Seleccionar"
          required
        ></v-select>
      </v-form>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 2  && datosExperienciaPost.flag_conExp == 'rbtExpOtros'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center black--text title mb-4 pt-8"
        >¿Cuál era el puesto o cargo que desempeñaste?</p>
        <v-select
          v-model="datosExperienciaPost.eo_puesto"
          :items="puesto"
          color="teal"
          :rules="[v => !!v || 'Selecciona un puesto']"
          placeholder="Seleccionar"
          required
        ></v-select>
      </v-form>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 3  && datosExperienciaPost.flag_conExp == 'rbtExpOtros'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">¿Cuánto tiempo (meses) estuviste laborando?</p>
        <v-text-field
          v-model.number="datosExperienciaPost.eo_tiempo_exp"
          class="pt-2"
          color="teal"
          placeholder="18"
          maxlength="3"
          type="number"
          pattern="[0-9]*"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          @keypress="isNumber($event)"
          :rules="[v => !!v || 'Ingresa el tiempo en número de meses']"
          required
        ></v-text-field>
        <p class="pt-6 body-2 gray--text">Considera el tiempo en meses.</p>
      </v-form>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 4  && datosExperienciaPost.flag_conExp == 'rbtExpOtros'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center black--text title mb-4"
        >¿Cuánto recibias de retribución aproximadamente?</p>
        <v-text-field
          v-model="datosExperienciaPost.eo_retribucion_basico"
          class="pt-2"
          color="teal"
          maxlength="4"
          type="number"
          label="Sueldo Básico:"
          prefix="S/"
          :rules="[v => !!v || 'Ingresa un monto']"
          required
          pattern="[0-9]*"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          @keypress="isNumber($event)"
        ></v-text-field>
      </v-form>
      <v-text-field
        v-model.number="datosExperienciaPost.eo_retribucion_comisiones"
        class="pt-8"
        color="teal"
        maxlength="4"
        type="number"
        pattern="[0-9]*"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        label="Comisiones / Incentivos / Bonos:"
        prefix="S/"
        @keypress="isNumber($event)"
      ></v-text-field>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 5 && datosExperienciaPost.flag_conExp == 'rbtExpOtros'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">Puedes añadir una experiencia laboral</p>
        <div>
          <v-list disabled>
            <v-list-item-group v-model="allDatosExp" color="primary">
              <v-list-item v-for="(item, i) in allDatosExp" :key="i" class="mb-2" style="background-color: whitesmoke;">
                <v-list-item-icon class="text-end mr-3 mb-0 mt-4">
                  <v-list-item-title v-text="i+1 + ':'"></v-list-item-title>
                </v-list-item-icon>
                <v-list-item-content class="text-start" v-if="item.flag_ec === 1">
                  <v-list-item-title v-text="item.ec_empresa"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content class="text-start"  v-if="item.flag_eo=== 1">
                  <v-list-item-title v-text="item.eo_empresa"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <v-btn
        v-if="countBtnAddExp !==2"
          rounded
          color="#00B8AD"
          class="ma-2 white--text text-capitalize"
          @click="agregarExperiencia()"
        >
          Añadir experiencia
          <v-icon right dark size="35">add_circle</v-icon>
        </v-btn>
        <p class="grey--text body-2 text-center pt-6">* Puedes omitir este paso</p>
        <!-- <v-row class="justify-end">
          <v-btn
            text
            small
            class="text-capitalize subtitle-2 mt-6"
            color="#2D9CDB"
            @click="countDatosPersonales += 1"
          >Omitir</v-btn>
        </v-row>-->
      </v-form>
    </div>
    <!-- EXPERIENCIA EN CALL CENTER  countExpLabCC-->
    <div
      id="step1"
      v-if="countExpLab === 1  && datosExperienciaPost.flag_conExp == 'rbtExtContact'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">¿En que empresa?</p>
        <v-text-field
          v-model="datosExperienciaPost.ec_empresa"
          class="pt-2"
          color="teal"
          placeholder="Nombre de la empresa"
          :rules="[v => !!v || 'Ingresa el nombre de la empresa']"
          required
        ></v-text-field>
        <p class="text-center black--text title mb-0 pt-6">¿Cliente?</p>
        <v-text-field
          v-model="datosExperienciaPost.ec_cliente"
          class="pt-2"
          color="teal"
          placeholder="Ejemplo : ”Movistar”"
          :rules="[v => !!v || 'Ingresa el nombre de cliente']"
          required
        ></v-text-field>
      </v-form>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 2  && datosExperienciaPost.flag_conExp == 'rbtExtContact'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">¿Rubro del Cliente?</p>
        <v-select
          v-model="datosExperienciaPost.ec_rubro_cliente"
          :items="rubroEmpresa"
          :rules="[v => !!v || 'Selecciona un rubro']"
          placeholder="Seleccionar"
          required
        ></v-select>
      </v-form>
    </div>
    <div
      id="step2"
      v-if="countExpLab === 3  && datosExperienciaPost.flag_conExp == 'rbtExtContact'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">¿Segmento del Cliente?</p>
        <v-select
          v-model="datosExperienciaPost.ec_segmento"
          :items="segmento"
          color="teal"
          :rules="[v => !!v || 'Selecciona un segmento']"
          placeholder="Seleccionar"
          required
        ></v-select>
      </v-form>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 4  && datosExperienciaPost.flag_conExp == 'rbtExtContact'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-0">¿Cuánto tiempo (meses) estuviste laborando?</p>
        <v-text-field
          v-model.number="datosExperienciaPost.ec_tiempo_exp"
          class="pt-2"
          color="teal"
          placeholder="36"
          maxlength="3"
          type="number"
           pattern="[0-9]*"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          @keypress="isNumber($event)"
          :rules="[v => !!v || 'Ingresa el tiempo en número de meses']"
          required
        ></v-text-field>
        <p class="pt-6 body-2 gray--text">Considera el tiempo en meses.</p>
      </v-form>
    </div>
    <div
      id="step1"
      v-if="countExpLab === 5  && datosExperienciaPost.flag_conExp == 'rbtExtContact'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p
          class="text-center black--text title mb-4"
        >¿Cuánto recibias de retribución aproximadamente?</p>
        <v-text-field
          v-model="datosExperienciaPost.ec_retribucion_basico"
          class="pt-2"
          color="teal"
          label="Sueldo Básico:"
          maxlength="4"
          prefix="S/"
          :rules="[v => !!v || 'Ingresa un monto']"
          required
          pattern="[0-9]*"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          type="number"
          @keypress="isNumber($event)"
        ></v-text-field>
        <v-text-field
          v-model="datosExperienciaPost.ec_retribucion_comisiones"
          class="pt-8"
          color="teal"
          maxlength="4"
          type="number"
          label="Comisiones / Incentivos / Bonos:"
          pattern="[0-9]*"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          prefix="S/"
          @keypress="isNumber($event)"
        ></v-text-field>
      </v-form>
    </div>
    <!-- AÑADIR OTRA EXPERIENCIA -->
    <div
      id="step1"
      v-if="countExpLab === 6 && datosExperienciaPost.flag_conExp == 'rbtExtContact'"
      class="px-3 pt-12 mt-4"
    >
      <v-form ref="form" v-model="datosPersonalesPost.datosValidPer">
        <p class="text-center black--text title mb-4">Puedes añadir una experiencia laboral</p>
        <div>
          <v-list disabled>
            <v-list-item-group v-model="allDatosExp" color="primary">
              <v-list-item v-for="(item, i) in allDatosExp" :key="i" class="mb-2" style="background-color: whitesmoke;">
                <v-list-item-icon class="text-end mr-4 mb-0 mt-3">
                  <v-list-item-title v-text="i+1 + ':'"></v-list-item-title>
                </v-list-item-icon>
                <v-list-item-content class="text-start" v-if="item.flag_ec === 1">
                  <v-list-item-title v-text="item.ec_empresa"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content class="text-start"  v-if="item.flag_eo=== 1">
                  <v-list-item-title v-text="item.eo_empresa"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <v-btn
        v-if="countBtnAddExp !==2"
          rounded
          color="#00B8AD"
          class="ma-2 white--text text-capitalize"
          v-on:click="agregarExperiencia()"
        >
          Añadir experiencia
          <v-icon right dark size="35">add_circle</v-icon>
        </v-btn>
        <p class="grey--text body-2 text-center pt-6">* Puedes omitir este paso</p>
        <!-- <v-row class="justify-end">
          <v-btn
            text
            small
            class="text-capitalize subtitle-2 mt-6"
            color="#2D9CDB"
            @click="countExpLab += 1"
          >Omitir</v-btn>
        </v-row>-->
      </v-form>
    </div>

    <!-- FINAL -->
    <div id="step10" v-if="countExpLab == 7" class="px-3 pt-12">
      <p class="text-center black--text title">Para finalizar nos gustaría conocerte un poco más.</p>
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
    countBtnAddExp:0,
    datosExperienciaPost: {
      type: Array,
      required: true
    },
    datosPersonalesPost: {
      type: Array,
      required: true
    },
    allDatosExp: Array,
    agregarExperiencia: Function
  },
  data() {
    return {
      select: null,
      sizes: ["1", "2", "3", "4", "5"],
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
        "Fabricas Industriales",
        "Otros"
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
        "Desarrollo de contenido(audiovisual, escrito, edición)",
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
        "Back Office",
        "Otros"
      ]
    };
  },
  mounted() {
    console.log(this.datosExperienciaPost.se_p_atc);
  },
  methods: {
    rbtSinExperiencia() {
      this.datosExperienciaPost.flag_conExp = null;
      this.datosPersonalesPost.datosValidPer = true;
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
<style>
.radioExp {
  background: #e5e5e5;
  border-radius: 4px;
  /* font-size: 15px!important; */
}
.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  font-size: 15px !important;
}
.v-application .title {
  line-height: 23px !important;
}
.v-chip-group .v-slide-group__content {
  display: flex !important;
  justify-content: space-around !important;
}
</style>