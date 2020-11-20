<template>
  <v-container class="content-home">
    <v-row class="content-filters">
      <v-col cols="8">
        <h-filters />
      </v-col>
    </v-row>
    <v-row class="content-title">
      <v-col cols="12">
        <h2 class="content-title__title">LISTA DE MATERIALES</h2>
      </v-col>
    </v-row>
    <v-row class="content-btn">
      <v-col cols="12" class="content-btn__col">
        <v-btn
          dark
          depressed
          color="#E64B16"
          style="height: 38px"
          >
            Nuevo Material
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="content-card">
      <v-col cols="12" class="content">
        <h-card v-for="(material, key) in getMaterials" :material="material" :key="key"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Filters from '../components/Home/Filters.vue'
import Card from '../components/Home/Card.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    HFilters : Filters,   
    HCard : Card   
  },
  data: () => ({
    
  }),
  methods: {
    ...mapActions([
      'loadMaterials'
    ])
  },
  computed: {
    ...mapGetters(['getMaterials']),
  },
  mounted() {
    this.loadMaterials();
  },
}
</script>
<style lang="scss" scoped>
  .content-home {
    padding: 0 6%;
  }

  .content-filters {
    margin: 2% 0;
    justify-content: flex-end;
  }

  .content-title {
    margin: 3% 0;
    &__title {
      font-size: 18px;
      padding: 5px 30px;
      text-align: left;
      color: #FFF;
      background-color: #4A4A4A;
    }
  }

  .content-btn { 
    padding: 0 1%;
    &__col {
      display: flex;
      justify-content: flex-end;
    }
  }

</style>

