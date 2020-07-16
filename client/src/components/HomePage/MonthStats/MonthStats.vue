<template>
    <div class="month-stats">
        <div class="month-stats__container">
            <div class="month-stats__header">
                <div class="header__num"> {{MONTHSTATS.length}} months stats</div>
                <div class="header__icon">
                    <img src="../../../assets/pie-chart.svg"/>
                </div>
            </div>
            <div class="month-stats__value">
                <div class="value__dollar">$</div>
                <div class="value__num">{{MONTHSTATS_TOTAL}}</div>
            </div>
            <div class="month-stats__chart">
                    <Stat v-for="val in MONTHSTATS" :key="val" v-bind:value="val" />       
            </div>
            <div class="month-stats__info-block">
                <div class="info-block__text">
                    <div class="text__title">Investment Insingts</div>
                    <div class="text__description">Advices by our Prediction A.I.</div>
                </div>
                <div class="info-block__button">Learn More</div>
            </div>  
        </div>           
    </div>
</template>

<script>
import Stat from './Stat'
import {mapActions,mapGetters} from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    methods : {
        ...mapActions([
            'GET_MONTHSTATS_FROM_API'
        ])
    },
    computed : {
         ...mapGetters([
            'MONTHSTATS',
            'MONTHSTATS_TOTAL'
        ])
    },
    components : {
        Stat
    },
    mounted() {
        this.GET_MONTHSTATS_FROM_API()
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+HK:wght@300;700&family=Open+Sans:wght@600&family=Roboto+Condensed&display=swap');

.month-stats{
    margin: 15px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    width: 500px;
    height: 470px;
    border-radius: 30px;
}

.month-stats__container{
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 40px 40px 40px 40px;
}

.month-stats__header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.header__num{
    text-transform: uppercase;
    font-size: 20px;
    font-family:"Noto Sans HK";
    font-weight: 300;
    color: rgb(107, 107, 107);
}
.header__icon img {
    transition: .4s;
    margin-top: 12px;
    width: 25px;
    height: 25px;
}

.header__icon:hover img {
    transform: rotate(360deg);
}

.month-stats__value{
    display: flex;
}

.value__dollar{
    margin-top: 15px;
    margin-right: 10px;
    font-size: 25px;
    font-family:"Open Sans";
    font-weight: 600;
}

.value__num{
    font-size: 60px;
    font-family:"Open Sans";
    font-weight: 600;
}

.month-stats__chart{
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

.month-stats__info-block{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text__title{
    color: black;
    font-size: 20px;
    font-family: "Open Sans";
    font-weight: 600;
}

.text__description{
    font-size: 15px;
    font-family:"Noto Sans HK";
    font-weight: 700;
    color: rgb(107, 107, 107);
}

.info-block__button{
    transition: .3s;
    background-color: rgb(63, 58, 158);
    border-radius: 25px;
    color: white;
    padding: 10px 22px;
    text-align: center;
    font-size: 15px;
    font-family:"Noto Sans HK";
    font-weight: 600;
    cursor: pointer;
}


.info-block__button:hover{
    -webkit-box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
    -moz-box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
    box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
}
</style>

