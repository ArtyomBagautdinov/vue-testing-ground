<template>
  <div class="income">
                <div class="income__container">
                    <div class="income__header">
                        <div class="header__title">Income</div>
                        <div class="header__image"><img src="../../../assets/settings.svg"/></div>
                    </div>
                    <div class="income__income-stocks-container">   
                        <IncomeStock v-for="val in INCOMES" :key="val" v-bind:value="val" /> 
                    </div>
                    <div class="income__summary">
                        <div class="summary__title">
                            <p>Summary</p>
                        </div>
                        <div class="summary__button">
                            <p>{{INCOMES_SUMMARY}} $</p>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
   
import IncomeStock from './IncomeStock'
import {mapActions,mapGetters} from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    methods : {
        ...mapActions([
            'GET_INCOMES_FROM_API'
        ])
    },
    computed : {
        
         ...mapGetters([
            'INCOMES',
            'INCOMES_SUMMARY'
        ])
        
    },
    components : { 
       IncomeStock
    },
    mounted() {
        this.GET_INCOMES_FROM_API()
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+HK:wght@300;700&family=Open+Sans:wght@600&family=Roboto+Condensed&display=swap');

.income{
    margin: 15px 15px 15px 15px;
    width: 400px;
    height: 470px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 30px;
    -webkit-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
}

.income__container{
    display: flex;
    flex-direction: column;
    margin: 50px 50px 50px 50px;
}

.income__header{
    display: flex;
    justify-content: space-between;
}
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

.income__income-stocks-container{
    margin-top: 40px;
}

.income__summary{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.summary__title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.summary__title p{
    text-transform: uppercase;
    font-size: 17px;
    font-family:"Noto Sans HK";
    font-weight: 600;
    color: rgb(107, 107, 107);
}

.summary__button{
    cursor: pointer;
    transition: .2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 80px;
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