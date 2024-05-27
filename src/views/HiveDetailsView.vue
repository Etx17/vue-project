<!-- src/views/HiveDetails.vue -->
<template>
  <div>
    <h1>{{ hive.name }}</h1>
    <p>Weight: {{ hive.weight }} kg</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

interface Hive {
  id: number;
  name: string;
  weight: number;
}

export default defineComponent({
  name: 'HiveDetails',
  data() {
    return {
      hive: {} as Hive
    };
  },
  methods: {
    fetchHive() {
      const route = useRoute();
      const hiveId = route.params.id;
      axios.get(`http://localhost:3000/hives/${hiveId}`)
        .then(response => {
          this.hive = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the hive details!", error);
        });
    }
  },
  mounted() {
    this.fetchHive();
  }
});
</script>
