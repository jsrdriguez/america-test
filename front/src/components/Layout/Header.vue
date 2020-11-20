<template>
  <v-app-bar 
  class="appbar"
  fixed
  app 
  flat 
  clipped-right
  color="#FFF">
    <v-container fluid>
      <v-row class="appbar__content">
        <h-avatar :user="user"/>

        <h-menu />    
      </v-row>
    </v-container>
	</v-app-bar>
</template>

<script>
import Avatar from '../Html/Avatar.vue'
import Menu from '../Html/Menu.vue'

export default {
	components: { 
    HAvatar: Avatar,
    HMenu: Menu,
	},
	name: 'Header',
	data: () => ({
		user: "Jesus Rodriguez"
	}),
}
</script>
<style lang="scss" scoped>
.appbar {
  font-size: 14px;
  &__content {
    padding: 0 12%;
    margin-top: 20px;
    justify-content: space-between;
    flex: 0 0 auto;
  }  
}
</style>
