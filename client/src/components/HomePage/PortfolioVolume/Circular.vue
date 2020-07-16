<template>
   <div class="portfolio-volume__circular-container">
        <div class="circular-container__little-circle" :style="left()"></div>
            <svg>
                <circle cx="135" cy="130" r="100"></circle>
                <circle :style="circleParams()" cx="135" cy="130" r="100"></circle>
            </svg>
        <div class="circular-container__little-circle" :style="right()"></div>
    </div>
</template>

<script>
export default {
    props: {
        value: { 
            type: Number,
            required: true
        },
        marginTop : {
            type: String,
            required: true
        },
        marginBottom : {
            type: String,
            required: true
        }   
    },
    computed : {
        circleParams () {
            return "stroke-dashoffset: " + this.value;
        },  
        left () {
            return "margin-top: " + this.marginTop;
        },
        right () {
            return "margin-bottom: " + this.marginBottom;
        } 
    }
}
</script>

<style scoped>
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