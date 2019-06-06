<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import './style/app.scss';

export default {
  name: 'App',
  components: {
    'app-header': Header,
  },
};
</script>

