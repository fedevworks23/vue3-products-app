import { defineStore } from 'pinia'
import { get_products_by_limit } from '../services/httpClientApi'
import type { Product } from '../Types/AllProducts.interface'

interface State {
    pLimit: number
    pSkip: number
    productsList: Product[]
}

export const useProductStore = defineStore('productStore', {
    state: (): State => {
        return {
            pLimit: 10,
            pSkip: 0,
            productsList: [] as Product[],
        }
    },
    actions: {
        async getProductsByLimit() {
            try {
                this.productsList = await get_products_by_limit(this.pLimit, this.pSkip)
            } catch (error) { }
        }
    },
})