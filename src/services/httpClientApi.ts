import httpClient from '../common/interceptor'


const get_products_by_limit = async (limit: number, skip: number) => {
  try {
    const { data } = await httpClient.get('/products' + `?limit=${limit}&skip=${skip}`)
    return data.products
  } catch (err) {
    console.log(err)
  }
}

const get_single_product = async (id: string) => {
  try {
    const { data } = await httpClient.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error);

  }
}

const get_product_category_list = async () => {
  try {
    const { data } = await httpClient.get('/products/categories')
    return data
  } catch (error) {
    console.log(error);

  }
}

const get_products_by_category = async (categoryName: string) => {
  try {
    const { data } = await httpClient.get(`/products/category/${categoryName}`)
    return data.products
  } catch (error) {
    console.log(error);

  }
}

export {  get_single_product, get_product_category_list, get_products_by_category, get_products_by_limit }
