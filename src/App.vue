<template lang="pug">
  #app.vh-100.w-100.d-flex.flex-row
    b-nav.menu.h-100.justify-content-center(vertical)
      b-nav-item(to='/list')
        img.img-fluid(:src='require("./assets/icon-list.svg")')
      b-nav-item(to='/analysis')
        img.img-fluid(:src='require("./assets/icon-analysis.svg")')
    keep-alive
      router-view
</template>
<script>
export default {
  name: 'App'
}
</script>
