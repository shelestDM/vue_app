import { defineStore } from "pinia";
import { reactive } from "vue";

export type LeavingAffair = {
    id: number
    title: string
    done: boolean
    date: number
}

export const useLeavingAffairsStore = defineStore('leavingAffairs', () => {
    const leavingAffairs: LeavingAffair[] = reactive([
        {
            title: 'Выключить двойную розетку',
            id: 101,
            done: false,
            date: Date.now(),
        },
        {
            title: 'Закрыть окно в комнате',
            id: 201,
            done: false,
            date: Date.now() + 1,
        },
        {
            title: 'Выключить розетку у компьютера',
            id: 301,
            done: true,
            date: Date.now() + 2,
        },
    ]);

    function addAffair(newAffair: LeavingAffair) {
        leavingAffairs.unshift(newAffair)
    }

    function setAffairAsDone(affairID: number) {
        leavingAffairs.forEach((leavingAffair) => leavingAffair.id === affairID && (leavingAffair.done = !leavingAffair.done))
    }

    return { leavingAffairs, addAffair, setAffairAsDone }
})