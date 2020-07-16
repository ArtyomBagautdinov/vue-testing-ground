<template>
    <div class="message">
        <div class="message__container">
            <p>{{text}}</p>
            <div class="message__close-button" @click="buttonClicked">
                <span class="left">
                    <span class="circle-left"></span>
                    <span class="circle-right"></span>
                </span>
                <span class="right">
                    <span class="circle-left"></span>
                    <span class="circle-right"></span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        id : {
            type : Number,
            required : true
        },
        text : {
            type : String,
            required : true
        }
    },
    methods : {
        buttonClicked () {
            this.$emit('buttonClicked',this.id)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');

.message__container{
    transition: .2s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    width: 650px;
    background: rgb(0,114,249);
    background: linear-gradient(83deg, rgba(0,114,249,1) 0%, rgba(96,134,255,1) 100%);
    border-radius: 50px;
    color: white;
    font-size: 25px;
    font-family: "Roboto Condensed";
    font-weight: 500;
    margin: 20px;
}

.message__container p {
    margin-left: 30px;
}

.message__container:hover{
    -webkit-box-shadow: 1px 5px 18px 5px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 18px 5px rgba(168,168,168,1);
    box-shadow: 1px 5px 18px 5px rgba(168,168,168,1);
}

.message__close-button {
  width: 100px;
  height: 100px;
  margin-right: 30px;
  background-color: #ffffff;
  border-radius: 50px;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  -webkit-box-shadow: 0px 0px 30px 0px rgba(247, 149, 29, 0.5);
  -moz-box-shadow: 0px 0px 30px 0px rgba(247, 149, 29, 0.5);
  box-shadow: 0px 0px 30px 0px rgba(247, 149, 29, 0.5);
}

.message__close-button > span {
  background-color: #f5a700;
  display: block;
  height: 12px;
  border-radius: 6px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  top: 52%;
  margin-top: -10px;
  left: 18px;
  width: 64px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
}

.message__close-button > span span {
  display: block;
  background-color: #ed7f00;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
  left: 0;
  top: 0;
}

.message__close-button > span.left {
  transform: rotate(45deg);
  transform-origin: center;
}

.message__close-button > span.left .circle-left {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 0;
}

.message__close-button > span.left .circle-right {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 52px;
}

.message__close-button > span.right {
  transform: rotate(-45deg);
  transform-origin: center;
}

.message__close-button > span.right .circle-left {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 0;
}

.message__close-button > span.right .circle-right {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 52px;
}

.message__close-button:hover > span {
  background-color: #2faee0;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.message__close-button:hover > span span {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  background-color: #008ac9;
}

.message__close-button:hover > span.left .circle-left {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 52px;
}

.message__close-button:hover > span.left .circle-right {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 0;
}

.message__close-button:hover > span.right .circle-left {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 52px;
}

.message__close-button:hover > span.right .circle-right {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-left: 0;
}


</style>