import { defineStore } from 'pinia'

export const useJSQA = defineStore('jsqa', {
  state: () => {
    return {
      qa: [
        { id: 1, question: 'Palindrome', answer: 'Palindrome A' },
        { id: 2, question: 'Anagram', answer: 'Anagram B' },
      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      // this.count++
    },
  },
})