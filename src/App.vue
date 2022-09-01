<script >
import navbar from './components/Thenavbar.vue'
import PopupButton from './components/PopupButton.vue'
import Popup from './components/Popup.vue'

export default {

  data() {
    return {
      Popup:false
    }
  },
  components: {
    navbar,PopupButton,Popup
  }
}
</script>

<template>
  <div class="app">
      <navbar></navbar>
      <RouterView />
      <PopupButton  @GetDataClick="Popup = true" />
      <Popup v-model="Popup"/>
      

  </div>
</template>
<style>
  :root{
    --navbar-width:4rem;
    --popup-width:50%;
    --popup-height:50%;
    --form-text-size:1.3rem;
    --form-input-height:2rem;
  }
  #app{
    z-index: -1;
    width: 100%;
    height: 100vh;

  }
   body{
      background-color: rgb(54 54 54);
    }
    .app{
      position: inherit;
      width: 100%;
      height: 100%;
      position:unset;

    }
    

</style>
