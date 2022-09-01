<template>

  <div v-on:click="$emit('GetDataClick')" class="button-add">
    <va-button>
      <va-icon class="material-icons " color="dark">add_task</va-icon>
    </va-button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>
<style>
.button-add {
  position: fixed;
  right: 5%;
  bottom: 5%;
}
</style>