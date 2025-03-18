import { defineStore } from "pinia";

export const useStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    // getters: { //computed
    //     increment() {
    //         this.count++
    //     }
    // },
    actions: {
        // doubleCount: (state: { count: number; }) => state.count * 2,
        increment() {
            this.count++
        }
    },
})