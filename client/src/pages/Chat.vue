<template>
  <div class="chat">
    <div class="message-list">
      <div
        v-for="(message, index) in connect.messages"
        :key="index"
        class="message"
      >
        {{ message }}
      </div>
    </div>
    <div class="input-area">
      <input v-model="connect.newMessage" @keyup.enter="connect.sendMessage()" placeholder="Введите сообщение" />
      <button @click="connect.sendMessage()">Отправить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useSockets } from "../stores/Sockets";
const connect = useSockets();

onMounted(() => {
  connect.setupSocket();
});
</script>

<style scoped>
.message-list {
  max-height: 800px;
  overflow-y: auto;
}
.message {
  margin-bottom: 5px;
}
.input-area {
  margin-top: 10px;
}
</style>
