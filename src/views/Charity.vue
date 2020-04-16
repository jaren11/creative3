<template>
<div class="page">
  <div class="comment">
    <h1>Welcome to the Charity Search Function</h1>
    <p>As the days go by, the number of charities gets bigger and bigger. We set out to find a way to lok at whatever charity you want from our long (1.6 million, to be exact) list of affiliates. Thanks for stoppping by!    We use this application to search other charities that are, of course, 100% inferior to us but we enjoy looking at them anyways. Enjoy the service :)</p>
  </div>
  <div class="section2 feature-3 comment">
    <p class="comment">This app uses the <a href="https://www.charitynavigator.org/" target="_blank" rel="noopener">Charity Navigator API</a> to get information about a specific charity.</p>
    <form class="pure-form comment"> <fieldset>
      <legend>Enter any charity name and state in the spaces below:</legend>
      <input placeholder="Name" id="name">
      <input placeholder="State" id="state">
      <p></p>
      <button id="search" class="pure-button pure-button-primary">Search</button>
      </fieldset>
    </form>
  </div>
  <div class="results">
    <p id="result"></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Charity',
  mounted() {
      let recaptchaScript  = document.createElement('script')
      recaptchaScript.setAttribute('src', "../assets/js/charityAPI.js")
      document.head.appendChild(recaptchaScript)
    },

}
</script>