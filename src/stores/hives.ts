import { defineStore } from 'pinia'

interface Hive {
  id: number
  name: string
  weight: number
}

export const useHiveStore = defineStore('hives', {
  state: () => ({
    hives: [] as Hive[]
  }),
  actions: {
    async fetchHives() {
      try {
        const response = await fetch('http://localhost:3000/hives')
        const data = await response.json()
        this.hives = data
      } catch (error) {
        console.error('There was an error fetching the hives!', error)
      }
    },
    async addHive(newHive: Hive) {
      try {
        const response = await fetch('http://localhost:3000/hives', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newHive),
        })
        if (!response.ok) {
          throw new Error('There was an error adding the hive')
        }
        // Refetch the hives after the new hive is added
        await this.fetchHives()
      } catch (error) {
        console.error('There was an error adding the hive:', error)
      }
    },
  }
})
