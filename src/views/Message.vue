<template>
    <div class="container">

      <h3> Chat Room </h3>
            <div class="row justify-content-md-center" id="app">
            <div class="col-8">
                                <li class="list-group-item active" aria-current="true">Chat room</li>
                                                <div class="badge badge-pill badge-primary">@{{ typing }}</div>
                    <ul class="list-group" v-chat-scroll>
<chat
                    v-for="value,index in chat.message"
                    :key=value.index
                    :color=chat.color[index]
                    :user=chat.user[index]
                    :time=chat.time[index]
                    >
                    @{{ value }}
                    </chat>
                    </ul>
                    <input type="text" class="form-control" placeholder="type text" v-model="message" @keyup.enter='send'>

            </div>
            </div>
            
    </div>

</template>
<style>
          .list-group{
              overflow-y: scroll;
              height: 200px;
          }
</style>

<script>
import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/';

export default {
  name: 'Chat',
  data() {
    return {
      message: '',
        chat:{
            message: [],
            user: [],
            color:[],
            time:[]
        },
        typing: ''
    };
  },
  watch:{
        // message(){
        //     Echo.private('chat')
        //     .whisper('typing', {
        //         name: this.message
        //     });
        // }
    },
    methods:{
        send(){
            if(this.message.length != 0){
                this.chat.message.push(this.message);
                this.chat.user.push('you');
                this.chat.color.push('success');
                this.chat.time.push(this.getTime());

                let user = JSON.parse(localStorage.getItem('user'));

                axios.post(url+'send', {
                    message: this.message,
                    id: user.id
                  })
                  .then( response => {
                    this.message ='';

                    console.log('response')
                    console.log(response);
                  })
                  .catch( error => {
                    console.log(error);
                  });
            }
        },
        getTime(){
            let time =  new Date();
            return time.getHours()+";"+time.getMinutes();
        }
    },
    mounted(){
        // window.Echo.private('chat')
        // .listen('ChatEvent', (e) => {
        //     this.chat.message.push(e.message);
        //     this.chat.user.push(e.user);
        //     this.chat.color.push('warning');
        //     this.chat.time.push(this.getTime())
        // })
        // .listenForWhisper('typing', (e) => {
        //     if(e.name != ''){
        //         this.typing = 'typing ...'
        //     }else {
        //         this.typing = ''
        //     }
        //     console.log(e.name)
        // });
    },
};
</script>