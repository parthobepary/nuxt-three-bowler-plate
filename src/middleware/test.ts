export default defineNuxtRouteMiddleware((to:any, from:any) => {
    const checked = true;

    if(!checked){
       return navigateTo('/hello')
    }
    else{
        navigateTo(to.fullPath)
    }
})