<template>
    <!-- added this so that images can be clicked and modal will pop up so that the user can inspect it -->
    <q-img v-bind="$attrs" @click="showPreview=true" class="grow-hvr">
    </q-img>
    <q-dialog v-model="showPreview">
      <q-img :src="($attrs.src as string)" @click="showPreview=true" contain ></q-img>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   name: 'DialogImg',
   data(){
    return { showPreview: false}
   }
})
</script>
