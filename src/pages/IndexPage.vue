<template>
  <q-page class="row items-start justify-center">
      <div class="col-12 row page-wrapper items-center">

        <div class="component-one col-12 items-start row q-pa-md ">

          <div class="left-thumbnail row col-xs-12 col-md-8 q-px-sm" style="max-height:600px;">
            <div class="col-6">
              <q-img src="resources/component-one/Image-01.jpg" style="max-height:570px;" >       
              </q-img>
            </div>
            <div class="col-6 row q-pl-md items-between">
              <div class="col-12 q-pb-md">
                <q-img src="resources/component-one/Image-02.jpg" style="max-height:290px;">       
                </q-img>
              </div>
              <div class="col-12 row items-end">
                <q-img src="resources/component-one/Image-03.jpg" style="max-height:290px;">       
                </q-img>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 row items-start  q-px-md">
            <div class="title-thin-1 text-uppercase text-white">
              {{ componentOneTitle }}
            </div>
            <q-separator style="height:2px" class="col-12 q-mb-md q-mt-sm bg-white"></q-separator>
            <div class="content-thin-1 component-one-desc">
              {{ componentOneDesc }}
            </div>
            <div class="red-text q-pt-xl text-uppercase row justify-start col-12 q-pt-md q-pb-md">
              Be Mindful
            </div>
            <div class="col-12 title-medium-1">
              {{ componentOneBottomDesc }}
            </div>
          </div>
        </div>

        
        <div class="component-two col-12 items-start row q-pa-md ">
          <div class="title-thin-2 text-uppercase">
             All the latest from AEG
          </div>
        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import { Article } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup () {
    const componentOneTitle = ref<String>("Answer Your Body's Needs");
    const componentOneDesc = ref<String>("The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.");
    const componentOneBottomDesc = ref<String>("Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.");
    const latestFromAeg = ref<Article[]>([
      //load api store here
      {
        title:'Summer Lunch Menu By Mark Best',
        shortDesc:`AEG ambassador Mark best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`
      },
      {
        title:'A Traditinal Christmas Eve, Mark best Style',
        shortDesc:`One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Even menu which is sure impress your guests.`
      },
      {
        title:'Taking Taste Further',
        shortDesc:`This exclusive cookbook gives you all the know how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`
      }
    ]);
    return { latestFromAeg, componentOneTitle, componentOneDesc, componentOneBottomDesc };
  }
});
</script>
<style lang="scss">
.page-wrapper{
  max-width: 1200px !important;
}
@media (max-width: 1200px) {
  .page-wrapper{
    max-width:600px !important;
  }
}

.component-one{
  min-height: 800px;
  margin-top: 13%;
  .component-one-desc{
    max-height: 16em; 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10; 
    -webkit-box-orient: vertical;
  }
}
</style>