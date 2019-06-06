<template>
  <div class="column is-one-quarter">
    <div class="card zoom-in" v-bind:class="{ disabled: used}">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p><span class="tag">{{type}}</span></p>
          <p class="subtitle is-6">Won by Johm Smith</p>
          <p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </small>
          </p>
          <button v-if="!used" class="button is-primary is-fullwidth"><b>USE</b></button>
          <p v-if="used"><small>Used on 1 Aug 2009</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'used'],
};
</script>
