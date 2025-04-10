import httpClient from '../common/interceptor'

const get_all_products = async () => {
  try {
    const { data } = await httpClient.get('/products')
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

export { get_all_products, get_single_product }
