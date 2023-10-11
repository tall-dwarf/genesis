import { defineStore } from "pinia";
import { ItemTypes, apiData } from "./data";
import { useToast } from "vue-toastification";


export type AmmoItem = {
    id: number
    name: string
}

const toast = useToast()

export const useAmmo = defineStore("ammo", {
    state: () => ({
        items: [] as AmmoItem[],
        isLoad: false
    }),

    actions: {
        async createItem(itemType: ItemTypes) {
            try {
                this.isLoad = true
                
                const response = await apiData[itemType]()
                this.items.push(response.data.data)

                toast.success("задача выполнена", { timeout: 2000 });
            } catch {
                toast.error("Произошла ошибка", { timeout: 2000 });
            } finally {
                this.isLoad = false
            }
        }
    }
})