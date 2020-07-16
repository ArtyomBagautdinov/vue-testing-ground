<template>
  <div class="top-five">
        <div class="top-five__container">
            <div class="top-five__header">
                <div class="header__title">Top 5 Assets</div>
                <div class="header__image"><img src="../../../assets/settings.svg"/></div>
            </div>
            <div class="top-five__top-active">
                <div class="top-active__name">{{TOPACTIVE.name}}</div>
                <div class="top-active__changePercent ta-green" v-if="TOPACTIVE.topPercent>=0">+{{TOPACTIVE.topPercent}}%</div>
                <div class="top-active__changePercent ta-red" v-else-if="TOPACTIVE.topPercent<0">{{TOPACTIVE.topPercent}}%</div>
            </div>
            <div class="top-five__circles-container">
                 <TopCircle v-for="val in TOPFIVE" :key="val" v-bind:params="val" /> 
            </div>
             <div class="top-five__time-params">
                <div class="time-params__day"  @click="get_day();">1d</div>
                <div class="time-params__week" @click="get_week();">1w</div>
                <div class="time-params__month" @click="get_month();">1m</div>
                <div class="time-params__year" @click="get_year();">1y</div>
            </div>
        </div>
    </div>
</template>

<script>
import TopCircle from './TopCircle'
import {mapActions,mapGetters} from 'vuex'
export default {
    data () {
        return {
          
        }
    },
    methods : {
        ...mapActions([
            'GET_TOPFIVE_FROM_API'
        ]),
        get_day(){
            this.GET_TOPFIVE_FROM_API("http://localhost:3000/topFiveDay")
        },
        get_week(){
            this.GET_TOPFIVE_FROM_API("http://localhost:3000/topFiveWeek")
        },
        get_month(){
            this.GET_TOPFIVE_FROM_API("http://localhost:3000/topFiveMonth")   
        },
        get_year(){
            this.GET_TOPFIVE_FROM_API("http://localhost:3000/topFiveYear")
        }
    },
    computed : {
         ...mapGetters([
            'TOPFIVE',
            'TOPACTIVE'
        ])
    },
    components : {
        TopCircle
    },
    mounted() {
        this.get_day()
    },
    
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+HK:wght@300;700&family=Open+Sans:wght@600&family=Roboto+Condensed&display=swap');

.header__title{
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-family:"Noto Sans HK";
    font-weight: 700;
}
.header__image img{
    transition: .2s;
    width: 20px;
    height: 20px;
}

.header__image:hover img{
    transform: rotate(90deg);
}


.top-five{
    margin: 15px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    width: 400px;
    height: 470px;
    border-radius: 30px;
}

.top-five__container{
    margin: 50px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.top-five__header{
    display: flex;
    justify-content: space-between;
}

.top-five__top-active{
    height:40px;
    margin-top: 25px;
    align-items: baseline;
    display: flex;
    justify-content: space-between; 
}

.top-active__name{
    font-size: 16px;
    font-family:"Noto Sans HK";
    font-weight: 700;
    color: rgb(107, 107, 107);
}

.top-active__changePercent{
    font-size: 16px;
    font-family:"Open Sans";
}


.ta-green{
    color: rgb(0, 170, 0);
}

.ta-red{
    color: red;
}

.top-five__circles-container{
    background-image: url(../../../assets/linesBackground.png);
    height: 200px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.top-five__time-params{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.time-params__day{
    color:gray;
    text-transform: uppercase;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer; 
    font-size: 20px;
}

.time-params__week{
    color:gray;
    text-transform: uppercase;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer; 
    font-size: 20px;
}

.time-params__month{
    color:gray;
    text-transform: uppercase;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer; 
    font-size: 20px;
}

.time-params__year{
    color:gray;
    text-transform: uppercase;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer; 
    font-size: 20px;  
}


.time-params__day:hover{
    color:black;
}

.time-params__week:hover{
    color:black;
}   

.time-params__month:hover{
    color:black;
}

.time-params__year:hover{
    color:black;    
}

</style>