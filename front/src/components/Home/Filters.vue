<template>
  <v-row class="form-filters">
    <v-select
      :items="[]"
      label="Filtrar"
      outlined
      solo
      dense
      color="#E64B16"
      background-color=""
      class="select-filter"
      hide-details
      style="max-width: 230px;"
    />

    <v-text-field
      dense
      outlined
      label="Buscar"
      prepend-inner-icon="mdi-magnify"
      hide-details
      color="#E64B16"
      style="max-width: 280px;"
    />
    <v-btn
      dark
      depressed
      color="#E64B16"
      style="height: 38px"
    >
      Buscar
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "HomeFilter"
}
</script>

<style lang="scss" scoped>
.v-text-field__details{ 
  margin-bottom: 0;
}

.form-filters {
  align-items: center;
  justify-content: flex-end;
  > div {
    margin-right: 20px;
  }
}
</style>