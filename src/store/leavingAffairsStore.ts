import { LeavingAffairModel } from "@/model/leavingAffairs";
import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export type LeavingAffair = {
    id: number
    title: string
    done: boolean
    date: number
}


export const useLeavingAffairsStore = defineStore('leavingAffairs', () => {
    const leavingAffairs: LeavingAffair[] = reactive([]);

    function addAffair(newAffair: LeavingAffair) {
        leavingAffairs.unshift(newAffair)
    }

    function setAffairAsDone(affairID: number) {
        leavingAffairs.forEach((leavingAffair) => leavingAffair.id === affairID && (leavingAffair.done = !leavingAffair.done))
    }

    function setAllAffairsUndone() {
        leavingAffairs.forEach(leavingAffair => leavingAffair.done = false);
    }

    function setLeavingAffairsFromLS() {
        const leavingAffairsFromLS = LeavingAffairModel.getLeavingAffairsFromLocalStorage();

        leavingAffairsFromLS.forEach(leavingAffair => leavingAffairs.push(leavingAffair))
    }

    // watch(leavingAffairs, (currentAffairs) => {
    //     LeavingAffairModel.setFreshAffairsInLocalStorage(currentAffairs)
    // })

    return { leavingAffairs, addAffair, setAffairAsDone, setAllAffairsUndone, setLeavingAffairsFromLS }
})