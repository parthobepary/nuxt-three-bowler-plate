<script setup >
// import {useTestStore} from '~/stores/testStores'
const datas = useTestStore()
</script>
<template>
    <div class="text-center my-3">
        <p>Welcome to te nuxt project {{ datas.massage }}</p>
        <button class="px-3 mt-2 py-2 bg-pink-200" @click="datas.setMassage('This is new massage')">Set new massage</button>
    </div>
</template>