<template>
    <div class="top-circle" :style="circleStyle">
        <div class="tip-circle__complany-name">{{params.shortName}}</div>
    </div>
</template>

<script>
export default {
    props : {
        params : {
            type : Object,
            required: true
        }
    },
    computed : {
        circleStyle : function () {
            return 'background: ' + this.params.color+";" + ' width: ' + this.params.value + 'px;' +' height: ' + this.params.value + 'px;';
        }
    }
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&family=Roboto+Condensed&family=Roboto:wght@500&display=swap');
    .top-circle{
        cursor: pointer;
        transition: .4s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .top-circle:hover{
        -webkit-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
        -moz-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
        box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    }


    .tip-circle__complany-name{
        text-transform: uppercase;
        font-family: "Roboto";
        font-weight: 500;
        color: rgb(255, 255, 255);
    }

</style>