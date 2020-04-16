<template>
<div>
<div class='page'>
  <div class='section header'>
    <img src="images/menu-image.jpg" class="header_img" alt="A group of young people jumping">
  </div>
  <div class='section sign-up'>
    <h3 class="frontquote">“No one has ever become poor by giving.” <br>-Anne Frank</h3>
  </div>
  <div class='section feature-1'>
    <p class="intro">Come meet our <br> <a href="pages/about.html"> volunteers!</a></p>
  </div>
  <div class='section feature-2'>
    <p class="intro">Want to see <br><a href="pages/history.html"> how we got started?</a></p>
  </div>
  <div class='section feature-3'>
    <p class="intro">Check out our <br><router-link :to="'Donate'">donation page</router-link><br> to give back!</p>
  </div>

</div>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
