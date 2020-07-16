<template>
  <div class="widgets__container">
      <MonthStats/>
      <Income/>
      <TopFive/>
      <PortfolioVolume/>
  </div>
</template>

<script>

import MonthStats from './MonthStats/MonthStats'
import Income from './Income/Income'
import TopFive from './TopFive/TopFive'
import PortfolioVolume from './PortfolioVolume/PortfolioVolume'

export default {
  components : {
    MonthStats,
    Income,
    TopFive,
    PortfolioVolume
  }
}
</script>

<style>
  .widgets__container{
      margin: 30px 100px 30px 200px;
      display: flex;
      flex-direction: row;
      justify-content: start;
      flex-wrap: wrap;
  }
</style>