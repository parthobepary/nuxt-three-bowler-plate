export default defineNuxtRouteMiddleware(()=>{
    const token = UseToken()
    return token.value
})