<script setup>
const inputValue = ref('')
const isOpen = ref(false)
</script>

<template>
  <div class="home">
    <MazBtn color="secondary" right-icon="plus-circle" @click="isOpen = true">添加习惯</MazBtn>
    <div>习惯列表</div>

    <MazDrawer variant="bottom"  v-model="isOpen" style="height: 100%;">
      <template #title>
        添加习惯
      </template>
      <template #default="{ close }">
        <div style="padding: 16px;">
          <p>
            Content
          </p>
          <div class="flex flex-wrap gap-05">
            <MazBtn color="danger" @click="close">
              重置
            </MazBtn>
            <MazBtn color="success" @click="close">
              保存
            </MazBtn>
          </div>
        </div>
      </template>
    </MazDrawer>
  </div>
</template>

<style scoped></style>
