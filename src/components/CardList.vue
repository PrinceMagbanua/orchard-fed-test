<template>
  <div class="col-12 q-col-gutter-lg q-pl-sm q-pb-sm row justify-center">
    <CardItem class="col-xs-12 col-sm-6 col-md-4" 
      v-for="card,idx in cards" 
      :key="idx+'_cardListKey'"
      :item="card"
    >
    </CardItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardItem from './CardItem.vue';
import { Article } from './models';
export default defineComponent({
  name: 'CardList',
  components:{
    CardItem
  },
  props:{
    cards: {
      type: Array as () => Article[],
      default: () => []
    }
  }
})
</script>
