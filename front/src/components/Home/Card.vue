<template>
  <v-card class="card">
    <v-row align="center">
      <v-col class="card__title" cols="5">
        <h2 class="card__title-main">{{ title.original }}</h2>

        <div class="card__title-new" v-if="title.premieres">
          <span>Estreno</span>  
        </div>
        <div class="card__title-cod">
          <span>Cod. Material: {{ id }}</span>
        </div>
        <div class="card__title-validit" v-if="title.premieres">
          <h-validit />
        </div>
      </v-col>

      <v-col class="card__details" cols="7" >
        <v-row justify="end">
          <v-col cols="4">
            <div class="card__details-actions">
              <v-btn class="mx-2" fab
                dark
                small
                color="primary"
              >
                <v-icon dark>mdi-content-cut</v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="teal"
              >
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="deep-orange"
              >
                <v-icon dark>
                  mdi-lock-open-outline
                </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row class="card__item" justify="space-between">
          <v-col cols="5" v-if="detail.time_credits">
            <div class="card__item-detail">
              <label>Duración s/ créditos:</label>
              <span>2h 10min</span>
            </div>
          </v-col>

           <v-col cols="5" v-if="detail.time">
            <div class="card__item-detail">
              <label>Duración s/ programación:</label>
              <span>{{ detail.time.hours+"H" + detail.time.minutes+"mins"}}</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="card__item" justify="space-between">
          <v-col cols="5" v-if="detail.type_material">
            <div class="card__item-detail">
              <label>Tipo de Material:</label>
              <span>{{ detail.type_material }}</span>
            </div>
          </v-col>

           <v-col cols="5" v-if="detail.type_commerce">
            <div class="card__item-detail">
              <label>Tipo de Contenido:</label>
              <span>{{ detail.type_commerce }}</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="card__item" justify="space-between">
          <v-col cols="5" v-if="detail.center_cost">
            <div class="card__item-detail">
              <label>Centro de Costo:</label>
              <span>{{ detail.center_cost }}</span>
            </div>
          </v-col>

           <v-col cols="5">
            <div class="card__item-detail" v-if="detail.gender">
              <label>Genero:</label>
              <span>{{ detail.gender }} </span>
            </div>
          </v-col>
        </v-row>
        <v-row class="card__item" justify="space-between" :class="{'card__item--last' : !detail.price_pasada && !detail.saldo_pasada}">
          <v-col cols="5">
            <div class="card__item-detail" v-if="detail.clasification">
              <label>Clasificación:</label>
              <span class="clasification">
                <span class="clasification--subrayar">{{ detail.clasification }}</span>
                Mayores de 14
              </span>
            </div>
          </v-col>

           <v-col cols="5">
            <div class="card__item-detail" v-if="detail.channel">
              <label>Canal de Transmision:</label>
              <span>{{ detail.channel }}</span>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="detail.price_pasada && detail.saldo_pasada" 
          class="card__item " 
          :class="{'card__item--last' : !detail.actores}" 
          justify="space-between">
          <v-col cols="5">
            <div class="card__item-detail">
              <label>Precio por pasada:</label>
              <span>2h 10min</span>
            </div>
          </v-col>

           <v-col cols="5">
            <div class="card__item-detail">
              <label>Saldo de Pasadas:</label>
              <span>2h 10min</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="card__item card__item--last" justify="space-between" >
          <v-col cols="5" v-if="detail.actores">
            <div class="card__item-detail">
              <label>Actores:</label>
              <div class="">
                <ul>
                  <li>Vin Diesel</li>
                  <li>Paul Walkel</li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ValidityTableVue from './ValidityTable.vue'

export default {
  name: "Card",
  props: ["material"],
  components: {
    HValidit: ValidityTableVue,
  },
  computed: {
    detail() {
      return this.material.details;
    },
    title() {
      return this.material.title;
    },
    id() {
      return this.material._id.substr(1, 8);
    }
  },
  mounted() {
    console.log(this.material)
  },      
}
</script>
<style lang="scss" scoped>
  .card {
    margin-bottom: 25px;
    
    &__title {
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;

      &-main {
        margin: 20px 0;
        margin-top: 0;
        text-align: left;
      }

      &-new {
        margin: 20px 4px;
        margin-top: 40px;
        display: block;
        font-weight: bold;
        justify-self: start;
        align-self: flex-start;
        > span {
          text-align: left;
          color: #E64B16;
        }
      }

      &-cod {
        width: 100%;
        justify-self: start;
        align-self: flex-start;
        font-size: 14px;
        color: #ffffff;
        border-radius: 2px;
        padding: 5px;
        text-align: left;
        margin-top: 20px;
        background-color: #E64B16;
      }

      &-validit {
        margin-top: 10px;
        width: 100%;
        padding: 20px;
      }
    }

    &__details {
      background-color: rgba(212, 210, 210, 0.933);
    }

    &__item {
      margin: 0 10px;
      border-bottom:1px solid #E64B16;

      &-detail {
        font-size: 14px;
        text-align: left;
        > label {
          width: 100%;
          display: block;
          font-weight: 700;
        }

        > span {
          width: 100%;
          display: block;
        }
      }

      .clasification--subrayar {
        color: #E64B16;
      }
    }

    &__item--last {
      border-bottom: 0px solid #E64B16;
    }
  }
</style>