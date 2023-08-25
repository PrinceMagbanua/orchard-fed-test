<template>
  <div class="row">
    <div class="col-12 q-pb-lg">
      <DialogImg :src="item.image" :alt="item.imageAlt" class="latest-bottom-line"></DialogImg>
    </div>
    <a @click="console.log('redirecting to: '+item.title)" class="col-shrink title-medium-2 q-pb-xs line-animation cursor-pointer">
      {{ item.title }}
    </a>
    <div class="col-12 content-thin-0 card-item-content">
      {{ item.shortDesc }}
    </div>
    <div class="col-shrink row relative-position q-mt-md q-mb-xl cursor-pointer" @click="console.log('redirecting to: '+item.title)">
      <a class="col-shrink q-px-xs title-medium-0 text-link text-uppercase q-py-sm link-animation">
        Read More
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Article } from './models';
import DialogImg from './DialogImg.vue';
export default defineComponent({
  name: 'CardItem',
  components:{DialogImg},
  props:{
    item: {
      type: Object as () => Article,
      default: () => {}
    }
  }
})
</script>
<style lang="scss">

/* for adding ellipsis if content of card item is too long,  */
.card-item-content{
    max-height: 8em; 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
}
.text-link{
  border-bottom: 1px $primary solid;
}

/* added bottom line to img in latest from AEG */
.latest-bottom-line{
  border-bottom: 3px solid $primary;
}

</style>