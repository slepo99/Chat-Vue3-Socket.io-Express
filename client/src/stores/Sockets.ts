import { defineStore } from "pinia";
import io from "socket.io-client";

export const useSockets = defineStore("sockets", {
  state: () => ({
    messages: [] as Array<string>,
    newMessage: "" as string,
    socket: null as any,
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
    
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.socket.emit('message', this.newMessage);
        this.newMessage = '';
      }
    },
  },
 
});
