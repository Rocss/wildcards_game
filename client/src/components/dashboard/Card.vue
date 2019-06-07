<template>
  <div class="column is-one-quarter">
    <div class="card wildcard" v-bind:class="{ disabled: used}">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p><span class="tag"><b>{{type}}</b></span></p>
          <p class="subtitle is-6">Won by {{wonBy}}</p>
          <p class="description">
            <small v-if="description">{{description}}</small>
            <small v-if="!description" class="has-text-grey-light">No description available</small>
          </p>
          <button v-if="!used" class="button is-primary is-fullwidth is-outlined">USE</button>
          <p v-if="used"><small>Used on 1 Aug 2009</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'used', 'description', 'wonBy'],
};
</script>
