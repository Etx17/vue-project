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
import { useHiveStore } from '../stores/hives';

interface Hive {
  id: number;
  name: string;
  weight: number;
}

export default defineComponent({
  name: 'HomeView',
  setup() {
    const hiveStore = useHiveStore();

    return {
      hives: hiveStore.hives,
      newHive: {
        name: '',
        weight: 0,
      },
      fetchHives: hiveStore.fetchHives,
      addHive: hiveStore.addHive,
    };
  },
  mounted() {
    this.fetchHives();
  },
});
</script>
