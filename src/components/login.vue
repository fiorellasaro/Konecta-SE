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
              v-model="selectDocumentType"
              :items="DocumentType"
              :rules="[v => !!v || 'el tipo de documento es requerido']"
              label="Seleccionar"
              solo
              required
            ></v-select>
            <p class="text-center black--text title mb-2 mt-2">Número de documento</p>
            <v-text-field
            v-if="selectDocumentType !=='Pasaporte' && selectDocumentType!=='Permiso Temporal de Trabajo'"
              v-model="numeroDoc"
              maxlength="8"
              solo
              pattern="[0-9]*"
              @keypress="isNumber($event)"
              :rules="dniRules"
              placeholder="Ingrese el número"
              required
            ></v-text-field>
            <v-text-field
            v-if="selectDocumentType ==='Pasaporte'"
              v-model="numeroDoc"
              maxlength="11"
              solo
              pattern="[0-9]*"
              @keypress="isNumber($event)"
              :rules="pasaporteRules"
              placeholder="Ingrese el número"
              required
            ></v-text-field>
            <v-text-field
            v-if="selectDocumentType ==='Permiso Temporal de Trabajo'"
              v-model="numeroDoc"
              maxlength="9"
              solo
              pattern="[0-9]*"
              @keypress="isNumber($event)"
              :rules="ptpteRules"
              placeholder="Ingrese el número"
              required
            ></v-text-field>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'Acepta la política de Privacidad!']"
              required
              color="teal"
            >
              <template v-slot:label>
                <div @click.stop style="font-size: 11px;">
                  He leído y acepto la
                  <a
                    href="javascript:;"
                    color="teal"
                    class="teal--text"
                    @click.stop="terms = true"
                  >Política de Privacidad de Postulantes</a>
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
          <v-dialog v-model="terms" width="600px">
            <v-card>
              <v-card-text class="pb-0 body-2" style="font-size: 13px!important;">
                <p class="body-1 font-weight-bold text-justify pt-4">POLÍTICA DE PRIVACIDAD PARA POSTULANTES</p>
                <p class="text-justify">La presente “Política de Privacidad para Postulantes” se aplica a <strong>Konecta Perú</strong>, que ejerce sus actividades a través de sus razones sociales: Konecta BTO S.L. Sucursal en Perú (RUC N° 20546992986), Allus Spain S.L. Sucursal del Perú (RUC N° 20523273851) y Stratton Perú S.A.C. (RUC N° 20520596233), todas con domicilio ubicado en Av. Carabaya 933, Cercado de Lima, Lima, Perú; quienes son responsables de recabar sus datos personales, el uso que se le dé a los mismos y su protección.</p>
                <p class="text-justify"><strong>Konecta Perú</strong>, es una empresa dedicada a brindar servicios de Contact Center y a la externalización de procesos de negocio (BPO), abarcando desde la planificación y ejecución de tareas internas de front office y back office hasta el control de actividades de agentes externos. La compañía se adapta constantemente a las necesidades del mercado mediante:</p>
                <ul>
                  <li class="text-justify">La orientación al cliente y la necesidad de crecer con él dando respuesta a sus necesidades en cada momento</li>
                  <li class="text-justify">La voluntad constante de innovar y adaptar con agilidad nuevas soluciones.</li>
                </ul>
                <p class="text-justify pt-2">Mediante la presente Política <strong>Konecta Perú</strong> hace de su conocimiento en forma detallada, sencilla, expresa e inequívoca la siguiente información:</p>
                <p class="text-justify">Los datos personales que proporcione usted a <strong>Konecta Perú</strong> serán incorporados a la base de datos de postulantes de titularidad de <strong>Konecta Perú</strong> hasta que Usted obtenga un puesto de trabajo con nosotros o decida revocar su consentimiento.</p>
                <p class="text-justify"><strong>Konecta Perú</strong> tratará sus datos personales para las siguientes finalidades:</p>
                <p class="text-justify">i) participar en el proceso de selección en las plazas disponibles en <strong>Konecta Perú</strong>; ii) establecer un medio de contacto con <strong>Konecta Perú</strong>, donde se le informará sobre el estado de su candidatura, citarlo a entrevistas vacantes en el futuro; iii) verificar que la información que ha proporcionado es verídica a través de referencias laborales y/o certificados de estudios; iv) realizar los exámenes necesarios proporcionales al cargo al que aspira; v) realizar el procesamiento de sus pagos mensuales y otros legales en caso haya sido seleccionado; y vi) realizar los trámites administrativos establecidos por Ley.</p>
                <p class="text-justify"><strong>Konecta Perú</strong> podrá tratar sus datos personales directamente o podrá contratar con terceras personas (nacionales e internacionales) quienes, al igual que <strong>Konecta Perú</strong>, han adoptado las medidas de seguridad técnicas, legales y organizativas necesarias para garantizar el uso correcto de los mismos. En ese ese sentido, <strong>Konecta Perú</strong> informa que hace transferencia internacional de datos en los siguientes casos:</p>
                <table style="border-collapse: collapse;">
                  <thead>
                    <th class="caption pr-0 pl-2">DESTINATARIO</th>
                    <th class="caption pr-0 pl-2">PAÍS</th>
                    <th class="caption pr-0 pl-2">FINALIDAD</th>
                  </thead>
                  <tbody>
                    <td class="caption pr-0 pl-2">Konecta BTO S.L. CIF B-62916077 (Casa Matriz)</td>
                    <td class="caption pr-0 pl-2">España</td>
                    <td class="caption pr-0 pl-2">Reclutamiento</td>
                  </tbody>
                </table>
                <p class="text-justify pt-3">Los datos que recibe <strong>Konecta Perú</strong> se encuentran registrados ante la Autoridad de Protección de Datos Personales del Ministerio de Justicia. En estos casos, la compartición de sus datos personales servirá únicamente para las finalidades antes informadas, y se efectuarán bajo condiciones de confidencialidad y medidas de seguridad que <strong>Konecta Perú</strong> garantiza.</p>
                <p class="text-justify"><strong>Konecta Perú</strong> reconoce y garantiza el ejercicio de los derechos de acceso, actualización, inclusión, rectificación, cancelación, oposición, información o revocación de acuerdo a la Ley de Protección de Datos Personales (Ley 29733) y su Reglamento. Para ello, podrá dirigir su solicitud gratuita al correo electrónico: <a>datospersonales@grupokonecta.com</a>, con el asunto: “Derechos Datos Personales”, especificando sus datos, acreditando su identidad y los motivos de su solicitud.</p>
              </v-card-text>
              <v-card-actions class="pb-4">
                <v-spacer></v-spacer>
                <v-btn  color="teal" rounded dark @click="terms = false">Acepto</v-btn>
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
    dniRules: [
      v => !!v || "El número de documento es requerido",
      v => (v && v.length >= 8) || "El número debe ser de 8 carácteres"
    ],
    pasaporteRules: [
      v => !!v || "El número de documento es requerido",
      v => (v && v.length >= 11) || "El número debe ser de 11 carácteres"
    ],
    ptpteRules: [
      v => !!v || "El número de documento es requerido",
      v => (v && v.length >= 9) || "El número debe ser de 9 carácteres"
    ],
    conditions: false,

    email: "",
    selectDocumentType: null,
    DocumentType: ["DNI", "Pasaporte", "Carnet de Extranjeria", 'Permiso Temporal de Trabajo'],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      // @click="$router.push({name: 'oportunidades', params:{ id:convocatoria.id, convocatoria:post[index]}})"
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push({
          name: "selection",
          params: {
            DocumentType: this.selectDocumentType,
            numeroDoc: this.numeroDoc
          }
        });
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
<style>
th,
td {
  border: gray 1px solid;
}
</style>
