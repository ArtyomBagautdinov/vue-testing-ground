<template>
    <div className="menu">
        <div class="menu__container">
            <div class="menu__app-logo">
                <div class="logo__iner">
                    <img src="../../assets/logo.svg" />   
                </div>       
            </div>
            <div class="menu__navigation">

                <router-link :to="{name :'home'}">
                    <div class="navigation-item__container" id="item__home">
                        <img src="../../assets/home.svg"/>  
                    </div>
                </router-link>

                <router-link :to="{name :'chart'}">
                    <div class="navigation-item__container" id="item__chart">
                        <img src="../../assets/chart.svg"/>  
                    </div>
                </router-link>

                <router-link :to="{name :'messages'}">
                    <div class="navigation-item__container" id="item__messages">
                        <img src="../../assets/messages.svg"/>  
                    </div>
                </router-link>

                <router-link :to="{name :'cloud'}">
                    <div class="navigation-item__container" id="item__cloud">
                        <img src="../../assets/cloud.svg"/>  
                    </div>
                </router-link>

                <router-link :to="{name :'settings'}">
                    <div class="navigation-item__container" id="item__params">
                        <img src="../../assets/settings.svg"/>  
                    </div>
                </router-link>

                

                <!--
                <MenuItem idName="item__home" itemSource="../../assets/home.svg"/>
                <MenuItem idName="item__messages" itemSource="../../assets/messages.svg"/>
                <MenuItem idName="item__chart" itemSource="../../assets/chart.svg"/>
                <MenuItem idName="item__cloud" itemSource="../../assets/cloud.svg"/>
                <MenuItem idName="item__params" itemSource="../../assets/settings.svg"/>
                -->
            </div>
        </div>
    </div>
</template>

<script>

//import MenuItem from './Menu-item.vue'

export default {
    components : {
       // MenuItem
    }
}
</script>

<style>
.menu{
    background-color: white;
}
.menu__container{
    margin: 30px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.navigation-item__container{
    cursor: pointer;
    transition: .2s;
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 30px 0 30px 0;
    -webkit-box-shadow: 1px 5px 53px -9px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 53px -9px rgba(168,168,168,1);
    box-shadow: 1px 5px 53px -9px rgba(168,168,168,1);
}

.navigation-item__container:hover{
    -webkit-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
    box-shadow: 1px 5px 53px 5px rgba(168,168,168,1);
}

.menu__navigation{
    margin-top: 200px;
    margin-bottom: 350px;
}

.navigation-item__container img {
    width: 25px;
    height: 25px;
}

.menu__app-logo{
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    background: rgba(137, 95, 252, 0.61);
    background: linear-gradient(343deg, rgb(171, 141, 255) 0%, rgb(125, 145, 253) 82%);
    -webkit-box-shadow: 1px 5px 45px -2px rgba(168,168,168,1);
    -moz-box-shadow: 1px 5px 45px -2px rgba(168,168,168,1);
    box-shadow: 1px 5px 45px -2px rgba(168,168,168,1);
}

.logo__iner{
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: rgb(252,252,252);
    background: linear-gradient(164deg, rgba(252,252,252,1) 0%, rgba(224,224,224,1) 100%);
}

.menu__app-logo .logo__iner img{
    width: 25px;
    height: 25px;
}

</style>