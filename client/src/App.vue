<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import './style/app.scss';
import Header from '@/components/layout/Header';

export default {
  name: 'App',
  components: {
    'app-header': Header,
  }
};
</script>

