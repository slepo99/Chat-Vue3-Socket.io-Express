<template>
  <div class="wrapper">
    <div class="container">
      <form action="" @submit.prevent="joinChat()" >
        <div class="name">
          <input type="text" v-model="store.username" placeholder="Enter name" name="name" id="" />
        </div>
        <div class="room">
          <input type="text" v-model="store.roomNumber" placeholder="enter room №" name="room" id="" />
        </div>
        <div class="btn">
          <button>Enter chat</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">

import { useSockets } from '@/stores/Sockets';
const store = useSockets()

function joinChat() {

}
</script>
<style lang="scss" scoped>
</style>
