import { defineStore } from 'pinia';

interface Hive {
  id: number;
  name: string;
  weight: number;
}

export const useHiveStore = defineStore('hives', {
  state: () => ({
    hives: [] as Hive[],
  }),
  actions: {
    async fetchHives() {
      try {
        const response = await fetch('http://localhost:3000/hives');
        const data = await response.json();
        this.hives = data;
      } catch (error) {
        console.error("There was an error fetching the hives!", error);
      }
    },
    async addHive(newHive: Hive) {
      try {
        const response = await fetch('http://localhost:3000/hives', {
          method: 'POST',
          body: JSON.stringify({ hive: newHive }),
        });
        const addedHive = await response.json();
        this.hives.push(addedHive);
      } catch (error) {
        console.error("There was an error adding the hive!", error);
      }
    },
  },
});
