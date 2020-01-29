<template>
  <v-container>
    <v-layout pa-2 justify-center>
      <v-flex xs12 md6 xl3 pa-2>
        <div class="px-4">
          <p class="text-center grey--text title">¡Bienvenid@!</p>
          <p class="text-center grey--text body-2 py-10">A ser parte de la familia de Konecta</p>

          <p class="text-center grey--text body-2 mb-0">Tipo de documento</p>
          <v-col class="d-flex" cols="12" sm="12">
            <v-select :items="DocumentType" label="Seleccionar" solo></v-select>
          </v-col>

          <p class="text-center grey--text body-2 mb-0">Número de documento</p>
          <v-col class="d-flex" cols="12" sm="12">
            <v-text-field solo></v-text-field>
          </v-col>
          <v-row class="justify-center py-6">
            <v-btn rounded color="teal" dark @click="$router.push('/intro')">Enviar</v-btn>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    DocumentType: ["DNI", "Pasaporte", "Carnet de Extranjeria"]
  })
};
</script>