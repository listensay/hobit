<script setup>
const inputValue = ref('')
const isOpen = ref(false)
</script>

<template>
  <div class="home">
    <MazBtn color="secondary" right-icon="plus-circle" @click="isOpen = true">添加习惯</MazBtn>
    <div>习惯列表</div>

    <HobitSet v-model="isOpen" />
  </div>
</template>

<style scoped></style>
