<template>
  <div class="income-stock__container">
                <div class="income-stock__logo-name-block">
                <div class="income-stock-logo">
                    <img :src="value.image"/>
                </div>
                <div class="income-stock-name">{{value.name}}</div>
                </div>
                <div class="income-stock-info">
                <div class="income-stock-info__profit" v-if="value.profit>0">
                    +${{value.profit}}
                </div>
                <div class="income-stock-info__profit" v-else-if="value.profit<0">
                    -${{value.profit}}
                </div>
                <div class="income-stock-info__profit" v-else>
                    $0
                </div>
                    <div class="income-stock-info__percent-change green" v-if="value.percentChange>=0">+{{value.percentChange}}%</div>
                    <div class="income-stock-info__percent-change red" v-else-if="value.percentChange<0">{{value.percentChange}}%</div>
                </div>
            </div>
</template>

<script>
export default {
        props : {        
            value : {
                type : Object,
                required: true
            }  
        }
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+HK:wght@300;700&family=Open+Sans:wght@600&family=Roboto+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');


.income-stock__container{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
    width: 300px;
    height: 70px;
    transition: .2s;
}

.income-stock__container:hover{
    -webkit-box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
    -moz-box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
    box-shadow: 0px 3px 10px 1px rgb(124, 124, 124);
}

.income-stock-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 0px 3px 10px 1px rgb(168, 168, 168);
    -moz-box-shadow: 0px 3px 10px 1px rgb(168, 168, 168);
    box-shadow: 0px 3px 10px 1px rgb(168, 168, 168);
    width:50px;
    height: 50px;
    border-radius: 40%;
    margin-right: 20px;
    margin-left: 10px;
}
.income-stock-logo img{
    width: 25px;
    height: 25px;
}

.income-stock__logo-name-block{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.income-stock-name{
    display: flex;
    color: rgb(70, 70, 70);
    font-size: 18px;
    font-family:"Noto Sans HK";
    font-weight: 700;
    margin-right: 30px;
}

.income-stock-info{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    justify-self: flex-end;
    margin-right: 20px;
}


.income-stock-info__profit{
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-family:"Open Sans";
    font-weight: 700;
}


.income-stock-info__percent-change{
    margin-top: 2px;
    font-size: 13px;
    font-family:"Open Sans";
}

.green{
    color: green;
}

.red{
    color: red;
}
</style>