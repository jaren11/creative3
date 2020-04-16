<template>
<div class ="page">
  <div class="wrapper">
  <div class="pagecomment">
    <p>Hey! feel free to support any of out affiliates by searching below for <br/>*drumroll.......* <br/> a brand new car for a low price!</p>
  </div>
    <div class="search">
      <form class="pure-form" placeholder="lowercase pls :)">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <CarList :cars="cars" />
</div>
</template>

<script>
import CarList from "../components/CarList.vue"
export default {
  name: 'Donate',
  components: {
    CarList,
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  cars() {
    return this.$root.$data.cars.filter(car => car.make.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
  }
}
</script>
