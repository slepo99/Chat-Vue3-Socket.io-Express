import { defineStore } from "pinia";
import io from "socket.io-client";

export const useSockets = defineStore("sockets", {
  state: () => ({
    messages: [] as Array<string>,
    newMessage: "" as string,
    socket: null as any,
    username: '' as string,
    roomNumber: 0 as number
  }),
  
  actions: {
    setupSocket() {
      this.socket = io("http://localhost:3000");
      this.socket.emit("ping"); 
      this.socket.on("message", (data: string) => {
        this.messages.push(data); 
      });
      
      this.socket.on("connect_error", (error: Error) => {
        console.error("Ошибка соединения с сокетом:", error.message);
      });
    },
    joinOrCreateRoom() {
        // Отправка данных на сервер через событие "joinRoom"
        this.socket.emit("joinRoom", {
          username: this.username,
          roomNumber: this.roomNumber
        });
      },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.socket.emit('message', this.newMessage);
        this.newMessage = '';
      }
    },
  },
 
});
