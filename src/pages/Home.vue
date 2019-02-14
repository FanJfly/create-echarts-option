<template>
 <div class="container">
   home
  <el-button @click="handleError">test</el-button>
 </div>
</template>

<script>
//import * as Sentry from '@sentry/node';
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    handleError() {
      try {
        add()
      } catch (error) {
        //Sentry.captureException(new Error(error))
        console.log(error)
      }
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
