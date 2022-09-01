<template >
 

    <va-navbar  color="dark" shape   class="mb-2">
      <template #left>
        <va-navbar-item>
          <h2 class="display-2" style="color: var(--va-white);">TODO</h2>
        </va-navbar-item>
  
        <va-navbar-item v-for="item in nav_item">
          <router-link :to="item.link">
            <va-popover :message="item.name">
              <va-icon class="material-icons " color="primary">{{ item.logo }}</va-icon>
            </va-popover>
          </router-link>
        </va-navbar-item>
      </template>
      <template #center>
  
      </template>
      <template #right>
        <va-navbar-item>
          <va-popover placement="left" message="settings">
            
            <va-icon class="material-icons" color="primary">settings</va-icon>
          </va-popover>
        </va-navbar-item>
      </template>
  
    </va-navbar>
 
</template>
<script>
export default {
  data() {
    return {
      // ['home','checklist','category','insights']
      nav_item: [
        { name: 'home', logo: 'home', link: 'home' },
        { name: 'todo', logo: 'checklist', link: 'todo' },
        { name: 'categories', logo: 'category', link: 'categories' },
        { name: 'insights', logo: 'insights', link: 'insights' },
      ]
    }
  },

}
</script>
<style >
 
  .va-navbar{
    /* opacity: 0; */
    position: fixed;
    top: 0;

    width: 100%;
    height: var(--navbar-width);
    top: 0;
    z-index: 1;
  }

</style>
