<template>
  <div class="container">
    <div class="columns" v-bind:style="{ padding: '2.5rem 0' }">
      <div class="column is-three-fifths">
        <span class="title is-3 has-text-grey">Overview</span>
      </div>
      <div class="column">
        <button class="button is-primary is-fullwidth" v-bind:style="{ padding: '0.5rem 0.75rem' }">
          ADD WILDCARD
        </button>
      </div>
      <div class="column">
        <toggle
          v-bind:buttons="toggleControls"
          :onChange="groupCardsByProperty"
        />
      </div>
    </div>
    <div v-for="group in cardGroups" v-bind:key="group[0]">
      <span class="subtitle is-5" v-bind:style="{ padding: '0 0.5rem' }">
        {{group[0]}} - {{group[1].length}}
        <div class="is-pulled-right">
          <i class="material-icons">expand_more</i>
        </div>
      </span>
      <hr />
      <div class="columns is-8" v-bind:style="{ 'overflow-y': 'auto', 'margin-bottom': '2rem' }">
        <card
          v-for="card in group[1]"
          v-bind:key="card.id"
          :type="card.type"
          :used="card.used"
          :description="card.description"
          :wonBy="card.wonBy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonsToggle from '@/components/layout/ButtonsToggle';
import Card from './Card';
import { groupBy, values } from 'ramda';

export default {
  name: 'Dashboard',
  components: {
    card: Card,
    toggle: ButtonsToggle,
  },
  data() {
    return {
      cards: [
        { id: 1, wonBy: 'Sam Smith', type: 'Movie', used: false, description: 'Betting on who will win the Roland Garros final' },
        { id: 2, wonBy: 'Emma Watson', type: 'Food', used: true, description: 'Betting on snails race' },
        { id: 3, wonBy: 'Emma Watson', type: 'Activity', used: true },
        { id: 4, wonBy: 'Emma Watson', type: 'Movie', used: false },
        { id: 5, wonBy: 'Sam Smith', type: 'Food', used: false },
        { id: 6, wonBy: 'Sam Smith', type: 'Movie', used: false },
        { id: 7, wonBy: 'Sam Smith', type: 'Movie', used: false },
        { id: 8, wonBy: 'Sam Smith', type: 'Movie', used: false },
        { id: 9, wonBy: 'Sam Smith', type: 'Movie', used: false },
      ],
      cardGroups: [],
      toggleControls: [
        { name: 'Users', value: 'wonBy', icon: 'person' },
        { name: 'Categories', value: 'type', icon: 'category' },
      ],
    };
  },
  methods: {
    groupCardsByProperty(property) {
      const groups = groupBy(card => card[property], this.cards);
      this.cardGroups = Object.entries(groups);
    },
  },
  created() {
    this.groupCardsByProperty('type');
  },
};
</script>
