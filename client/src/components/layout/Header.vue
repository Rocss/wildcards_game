<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <b class="has-text-success">SOMETHING HERE</b>
      </a>
    </div>
    <div class="navbar-menu">
        <router-link
          v-for="link in links"
          v-bind:key="link.name"
          :to="link.name"
          tag="a"
          class="navbar-item is-capitalized"
        >
          <div class="icon is-large"><i class="material-icons">{{link.icon}}</i></div>
          <span>{{link.name}}</span>
        </router-link>
      </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'dashboard', icon: 'dashboard' },
        { name: 'stats', icon: 'pie_chart' },
      ],
    };
  },
};
</script>

