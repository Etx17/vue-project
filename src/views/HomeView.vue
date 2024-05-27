<!-- src/views/HomeView.vue -->
<template>
  <div>
    <h1>Bee Hives</h1>
    <form @submit.prevent="addHive">
      <input v-model="newHive.name" placeholder="Hive Name" required />
      <input v-model.number="newHive.weight" placeholder="Hive Weight" type="number" required />
      <button type="submit">Add Hive</button>
    </form>
    <ul>
      <li v-for="hive in hives" :key="hive.id">
        <router-link :to="{ name: 'hive-details', params: { id: hive.id } }">{{ hive.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Hive {
  id: number;
  name: string;
  weight: number;
}

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      hives: [] as Hive[],
      newHive: {
        name: '',
        weight: 0
      }
    };
  },
  methods: {
    fetchHives() {
      axios.get('http://localhost:3000/hives')
        .then(response => {
          this.hives = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the hives!", error);
        });
    },
    addHive() {
      axios.post('http://localhost:3000/hives', { hive: this.newHive })
        .then(response => {
          this.hives.push(response.data);
          this.newHive.name = '';
          this.newHive.weight = 0;
        })
        .catch(error => {
          console.error("There was an error adding the hive!", error);
        });
    }
  },
  mounted() {
    this.fetchHives();
  }
});
</script>
