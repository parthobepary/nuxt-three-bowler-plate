import { defineStore } from "pinia";

export const useTestStore = defineStore('test', {
    state: () => ({
        massage: "Hello pinia"
    }),
    actions: {
        setMassage(nm) {
            this.massage = nm
        }
    }
})