<script setup lang="ts">
const x = 1;
const y = 2

const sum = ref(0);

watchEffect(() => {
  sum.value = x + y;
});
</script>

<template>
  <div>

    {{ sum }}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto at culpa distinctio dolorum eaque
      et, illum in laboriosam magnam molestias
      necessitatibus nemo nihil nisi provident quidem quos, ut veniam!
    </p>
  </div>
</template>

<style scoped>

</style>