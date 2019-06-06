<template>
  <div class="container">
    <h3 class="title is-4">Overview</h3>
    <hr />
    <div class="columns is-multiline is-8">
      <card
        v-for="card in cards"
        v-bind:key="card.id"
        :type="card.type"
        :used="card.used"
      />
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'Dashboard',
  components: {
    card: Card,
  },
  data() {
    return {
      cards: [
        { id: 1, type: 'Movie' },
        { id: 2, type: 'Food', used: true },
        { id: 3, type: 'Activity' },
        { id: 4, type: 'Movie' },
        { id: 5, type: 'Food' },
        { id: 6, type: 'Movie' },
      ],
    };
  },
};
</script>
