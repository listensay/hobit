import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    gift: [
      {
        id: 1,
        name: 'Gift 1',
        price: 100,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 2,
        name: 'Gift 2',
        price: 200,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 3,
        name: 'Gift 3',
        price: 300,
        image: 'https://picsum.photos/200/300'
      }
    ]
  }),

  getters: {
  
  },

  actions: {

  }
})