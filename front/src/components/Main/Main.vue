<script setup lang="ts">
import Dropdown from '../../components/Dropdown/Dropdown.vue';
import { ref } from 'vue'
import BtnLoad from "../../components/BtnLoad/BtnLoad.vue"
import { useAmmo } from "../../store/useAmmo"
import { dropDownData } from './data';
import AmmoResult from '../AmmoResult/AmmoResult.vue';

const activeDropItem = ref(dropDownData[0])
const ammoStore = useAmmo()

const onBtnClick = () => {
    if(activeDropItem.value.value){
        ammoStore.createItem(activeDropItem.value.value)

    }
}

</script>

<template>
    <div class="wrapper">
        <Dropdown @changeItem="itm => activeDropItem = itm" :active-item="activeDropItem" :items="dropDownData" />
        <BtnLoad @on-click="onBtnClick" :is-active="activeDropItem.id !== 1" :isLoad="ammoStore.isLoad" />
        <AmmoResult :items="ammoStore.items"  />
    </div>
</template>


<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.wrapper {
    max-width: 300px;
    margin: 0 auto;
    padding-top: 100px;
}
</style>