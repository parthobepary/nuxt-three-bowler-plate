export const fetchData = async (url) => {
    const {data, pending, error, refresh} = await useFetch(url)
    return {data, pending, error, refresh}
}