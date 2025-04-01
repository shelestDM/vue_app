import { localStorageAffairsKey } from "@/consts";
import type { LeavingAffair } from "@/store/leavingAffairsStore";

export class LeavingAffairModel {
    static getLeavingAffairsFromLocalStorage() {
        const leavingAffairs: LeavingAffair[] | [] = JSON.parse(localStorage.getItem(localStorageAffairsKey) || '[]');

        return leavingAffairs
    }

    static setFreshAffairsInLocalStorage(newAffairs: LeavingAffair[]) {
        localStorage.setItem(localStorageAffairsKey, JSON.stringify(newAffairs))
    }
}