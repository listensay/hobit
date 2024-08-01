<script setup>
import dayjs from 'dayjs';
import { useMainStore } from '../store/main';

const mainStore = useMainStore()
const { gift } = mainStore

const state = defineModel()

const hobit = reactive({
  name: '',
  startTime: dayjs().format('YYYY-MM-DD'),
  endTime: '',
  gift: '',
  category: ''
})
</script>

<template>
  <div class="set-hobit">
    <MazDrawer variant="bottom"  v-model="state" style="height: 100%;">
      <template #title>
        添加习惯
      </template>
      <template #default="{ close }">
        <div class="h-full p-4 flex flex-col justify-between">
          <div class="h-full">
            <ul class="list">
              <li class="item">
                <MazInput
                  v-model="hobit.name"
                  label="习惯名称: 运动"
                  autocomplete="off"
                  class="w-full"
                />
              </li>
              <li class="item">
                <MazPicker
                  v-model="hobit.startTime"
                  label="开始时间"
                  class="w-full"
                />
              </li>
              <li class="item">
                <MazPicker
                  v-model="hobit.endTime"
                  label="结束时间"
                  class="w-full"
                />
              </li>
              <li class="item">
                <MazSelect
                  v-model="hobit.gift"
                  :options="gift"
                  label="Choose options"
                  multiple
                />
              </li>
            </ul>
          </div>
          <div class="flex gap-05">
            <MazBtn class="mr-4" color="danger" @click="close">
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

<style lang="less" scoped>
.list {
  .item {
    margin-bottom: 20px;
  }
}
</style>
