<template>
<div class="wrapper">
  <div class="car">
    <div class="car" v-for="car in cars" :key="car.id">
      <div class="info">
        <h1>{{car.make}}</h1>
        <p>{{car.model}}</p>
      </div>
      <div class="image">
        <img :src="car.image">
      </div>
      <div class="price">
        <h2>{{car.price}}</h2>
        <button class="auto">Buy this Car!</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CarList',
  props: {
    cars: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: 
}

.car {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
}

.car img {
  border: 2px solid #333;
  height: 250px;
  width: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.car .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  border-radius: 10px;
}

.info {
  background: #FF765E;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  border-radius: 10px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
