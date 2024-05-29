<template>
  <div>
    <h1>Add your hive details:</h1>
    <form @submit.prevent="addHive(newHive)">
      <input v-model="newHive.name" placeholder="Hive Name" required />
      <input v-model.number="newHive.weight" placeholder="Hive Weight" type="number" required />
      <button type="submit">Add Hive</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHiveStore } from '../stores/hives'
import { onMounted } from 'vue'

interface Hive {
  id: number
  name: string
  weight: number
}

export default defineComponent({
  name: 'HomeView',
  setup() {
    const hiveStore = useHiveStore()

    onMounted(async () => {
      await hiveStore.fetchHives()
    })

    return {
      hives: hiveStore.hives,
      newHive: {
        name: '',
        weight: 0
      },
      addHive: hiveStore.addHive
    }
  }
})
</script>
