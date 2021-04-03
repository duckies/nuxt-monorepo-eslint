<template>
  <h1>Example Page</h1>
</template>

<script lang="ts">
import { User } from "../../../server/src/user.example";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      user: null as User | null,
    };
  },
});
</script>
