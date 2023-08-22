<template>
  <div class="row">
    <div class="col-12 q-pb-lg">
      <q-img :src="item.image" class=""></q-img>
    </div>
    <div class="col-12 title-medium-2 q-pb-xs">
      {{ item.title }}
    </div>
    <div class="col-12 content-thin-0 card-item-content">
      {{ item.shortDesc }}
    </div>
    <div class="col-shrink row relative-position q-mt-md q-mb-xl ">
      <div class="col-shrink q-px-xs title-medium-0 text-link text-uppercase q-py-sm link-animation">
        Read More
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Article } from './models';
export default defineComponent({
  name: 'CardItem',
  props:{
    item: {
      type: Object as () => Article,
      default: () => {}
    }
  }
})
</script>
<style>

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
  border-bottom: 1px red solid;
}

/* fill-up animation for the read more links */
.link-animation:before {
    background-color: red;
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: all .35s ease;
    transition: all .35s ease;
}
.link-animation:hover:before {
    top: 0;
}
.link-animation:hover{
  transition:0.25s;
}
.link-animation:after {
    position: absolute;
    right: 2.34375rem;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(50%);
    -ms-transform: translateY(-50%) translateX(50%);
    transform: translateY(-50%) translateX(50%);
}
</style>