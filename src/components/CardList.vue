<template>
  <div :class="`col-12 q-pb-sm q-px-sm row justify-center ${$q.screen.lt.md?'':'q-col-gutter-lg'}`">
    <CardItem class="col-xs-12 col-md-4 box-hvr" 
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
