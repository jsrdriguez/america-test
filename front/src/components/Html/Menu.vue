<template>
  <div class="menu">
    <ul class="menu__content">
      <li class="menu__item menu__item--active"><a href="#">Materiales</a></li>
      <li class="menu__item">
        <a href="#">Programas</a>
      </li>
      <li class="menu__item"><a href="#">Segmentos</a></li>
      <li class="menu__item"><a href="#">Soporte</a></li>
      <li class="menu__item"><a href="#">Parrilla</a></li>
      <li class="menu__item"><a href="#">Vistas</a></li>
      <li class="menu__item"><a href="#">Salir</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name : "Menu"    
}
</script>

<style lang="scss" scoped>
.menu {
  background-color: #262626;
  
  &__content {
    display: flex;
    margin: 0;
    padding: 0;
    box-shadow: 0px 4px 5px rgba(71, 71, 71, 0.55);
  }

  &__item {
    list-style: none;
    padding: 10px 25px;
    a {
      color: #FFF;
      font-weight: 600;
      text-decoration: none;
    }

    &--active {
      background-color: #E64B16;
    }

    &:hover {
      background-color: #E64B16;
      cursor: pointer;
    }
  }
}
</style>