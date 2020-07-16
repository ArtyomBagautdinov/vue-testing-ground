<template>
  <div class="messages-page">
      <div class="chart"  v-bind:refresh-token = "refreshToken">
        <Message  v-for="val in $_toDo" :key="val" v-bind:text="val.text" v-bind:id="val.id" @removeClicked="removeRefresh" @updateClicked="updateRefresh"/>
      </div>
      <div class="input_field">
        <label for="newToDo">Новый таск</label>
        <input type="text" id="newToDo" name="firstname" placeholder="newTaskString" v-model="newTaskString">
        <div class="summary__button" @click="addRefresh">
          <p>Добавить таск</p>
        </div>
      </div>
  </div>
</template>

<script>
import toDo from '../../mixin/toDo'

import Message from './Message'

import {removeData,addData,updateData} from '../../requests/toDo'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  data () {
    return {
      newTaskString : "New Task",
       refreshToken : 1
    }
  },
  mixins : [
    toDo
  ],
  mounted (){
    this.$_fetchToDo("http://localhost:3000/toDo")
  },
  components : {
    Message
  },
  methods : {
    findMaxId(){
      let idArr =this.$_toDo.map((currentVal) => { 
          return currentVal.id;
      });
      return Math.max(idArr);
    },
    async removeRefresh(id) {
      removeData(id);
      await sleep(100);
      this.$_fetchToDo("http://localhost:3000/toDo");   
    },
    async addRefresh(){
      let newId = this.findMaxId();
      addData(newId,this.newTaskString);
      await sleep(100);
      this.$_fetchToDo("http://localhost:3000/toDo");   

    },
    async updateRefresh(id,text){
      updateData(id,text);
      await sleep(100);
      this.$_fetchToDo("http://localhost:3000/toDo");   
    },
  }
}

</script>

<style>
.messages-page{
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.chart{
  display: flex;
  flex-direction: column;
}

.input_field{
  margin: 20px;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.summary__button{
    cursor: pointer;
    transition: .2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 150px;
    background: rgb(0,114,249);
    background: linear-gradient(83deg, rgba(0,114,249,1) 0%, rgba(96,134,255,1) 100%);
    border-radius: 20px;
    color:white;
    font-size: 15px;
    font-size: 17px;
    font-family:"Noto Sans HK";
    font-weight: 500;
}

.summary__button:hover {
    -webkit-box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
    -moz-box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
    box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
}

.summary__button p{
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family:"Open Sans";
    font-weight: 500;
}

</style>