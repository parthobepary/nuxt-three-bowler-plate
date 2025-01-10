<script setup>

definePageMeta({
    middleware:['test']
})

const {sayHello} = useFun()
const {$sayHello} = useNuxtApp()

$sayHello('hello world from plugins')


sayHello('hello world')

</script>

<template>
    <div class="container mx-auto text-center my-4">
        <Welcome />
    </div>
</template>
