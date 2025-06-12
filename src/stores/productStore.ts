import { defineStore } from 'pinia'
import { get_products_by_limit, get_product_category_list, get_products_by_category } from '../services/httpClientApi'
import type { Product } from '../Types/AllProducts.interface'

interface State {
    pLimit: number
    pSkip: number
    productsList: Product[]
    categoryList?: Product[]
    selectedCategory: string
}

export const useProductStore = defineStore('productStore', {
    state: (): State => {
        return {
            pLimit: 10,
            pSkip: 0,
            productsList: [] as Product[],
            categoryList: [] as Product[],
            selectedCategory: 'All Categories',
        }
    },
    actions: {
        updateState(selectedCategory: string) {
            this.selectedCategory = selectedCategory;
        },
        async getProductsByLimit() {
            try {
                this.productsList = await get_products_by_limit(this.pLimit, this.pSkip)
                console.log(this.productsList);

            } catch (error) { }
        },
        async getProductCategoryList() {
            try {
                this.categoryList = await get_product_category_list()
            } catch (error) { }
        },
        async getProductsByCategory(categoryName: string) {
            try {
                console.log(categoryName);

                this.productsList = await get_products_by_category(categoryName)
                console.log(this.productsList);
            } catch (error) { }
        }
    },
})