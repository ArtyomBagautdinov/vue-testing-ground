<template>
    <div class="portfolio-volume">
        <div class="portfolio-volume__container">
            <div class="portfolio-volume__header">
                <div class="header__title">Portfolio Volume</div>
                <div class="header__month">Jun 2019</div>
            </div>

            <div class="portfolio-volume__circular-container">
                <div class="circular-container__little-circle" :style="VOLUME[1].marginTop"></div>
                    <svg>
                        <circle cx="135" cy="130" r="100"></circle>
                        <circle :style="VOLUME[1].value" cx="135" cy="130" r="100"></circle>
                    </svg>
                <div class="circular-container__little-circle" :style="VOLUME[1].marginBottom"></div>
            </div>

            <div class="portfolio-volume__circular-value">
                <div class="circular-value__cash">{{VOLUME[1].cash}}k</div>
                <div class="circular-value__usd">usd</div>
            </div>

            <div class="portfolio-volume__tab-bar">
                <div class="tab-bar__avg"  @click="curId=0">Avg 8%</div>
                <div class="tab-bar__you" @click="curId=1">You 15%</div>
                <div class="tab-bar__ai" @click="curId=2">A.I 19%</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
     data () {
         return {
             volume : []
         }
     },
     methods : {
        ...mapActions([
            'GET_VOLUME_FROM_API'
        ])
    },
    computed : {
         ...mapGetters([
            'VOLUME',
            'CIRCLE_PARAMS',
            'RIGHT',
            'LEFT'
        ])
    },
    mounted() {
        this.GET_VOLUME_FROM_API();
      
    }

}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+HK:wght@300;700&family=Open+Sans:wght@600&family=Roboto+Condensed&display=swap');

    .portfolio-volume{
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

    .portfolio-volume__container{
        margin: 50px 50px 50px 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    
    }

    .portfolio-volume__header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
    }


    .header__month{
        font-size: 17px;
        font-family:"Noto Sans HK";
        font-weight: 400;
        color: rgb(107, 107, 107);
    }


    .portfolio-volume__tab-bar{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .tab-bar__avg , .tab-bar__you , .tab-bar__ai {
        cursor: pointer;
        font-size: 18px;
        font-family: "Roboto";
        font-weight: 500;
    }

    .violet {
        color: rgb(33, 87, 235);
    }

    
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+HK:wght@400;500;700&family=Roboto+Condensed&display=swap');

.portfolio-volume__circular-container {
    transition: .4s;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}


.portfolio-volume__circular-container svg {
   width: 270px;
   height: 270px;
   z-index: 320;
}



.portfolio-volume__circular-container svg circle{
    transition: .8s;
    width: 100%;
    height: 100%;
    fill: none;
    stroke: rgb(76, 104, 254);
    stroke-width: 20;
    stroke-linecap: round;
}

.portfolio-volume__circular-container svg circle:nth-child(1){
    stroke: rgb(226, 226, 226);
    stroke-width: 10
}

.portfolio-volume__circular-container svg circle:nth-child(2){
    stroke-dasharray: 320;
}

.portfolio-volume__circular-value {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    z-index: 200;
    position: absolute;
    margin-left: 115px;
}


.circular-value__cash{
    text-transform: uppercase;
    font-size: 30px;
    font-family:"Noto Sans HK";
    font-weight: 500;
    color: rgb(68, 133, 211);
}


.circular-value__usd{
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    font-family:"Noto Sans HK";
    font-weight: 700;
    color: rgb(107, 107, 107);
}


.circular-container__little-circle{
    transition: .4s;
    width:15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgb(76, 104, 254);
}

</style>