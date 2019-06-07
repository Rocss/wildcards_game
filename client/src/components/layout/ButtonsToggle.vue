<template>
  <div class="buttons-toggle">
    <button
      v-for="btn in buttons"
      v-bind:key="btn.name"
      v-on:click="setSelection(btn)"
      class="button"
      v-bind:class="{
        'is-white': selected === btn.name,
        'is-transparent': selected !== btn.name
        }"
    >
      <i class="material-icons">{{btn.icon}}</i>
      {{ btn.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['buttons', 'onChange'],
  data() {
    return {
      selected: 'Users',
    };
  },
  methods: {
    setSelection(btn) {
      this.selected = btn.name;
      this.$props.onChange(btn.value);
    },
  },
};
</script>

