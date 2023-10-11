<script setup lang="ts">
import DownArrow from "../../assets/down-arrow.png"
import { DropdowItemType } from "./types"
import useFlag from '../../mixins/useFlag'

interface Props {
  items: DropdowItemType[]
  activeItem: DropdowItemType
}
const props = defineProps<Props>()

const emit = defineEmits(['changeItem'])

const {flag, toggle} = useFlag()

const onDropItemClick = (item: DropdowItemType) => {
    emit('changeItem', item)
    toggle()
}

</script>

<template>
    <div class="drop-down">
        <div :onclick="toggle" class="drop-down-result">
            <span class="drop-down-result__text">{{activeItem.text}}</span>
            <img class="drop-down-result__icon" :src="DownArrow" alt="">
        </div>
        <ul v-show="flag" class="drop-down-list">
            <li v-for="item in props.items" :key="item.id" 
            @click="() => onDropItemClick(item)" 
            :class="'drop-down-item' + (activeItem.id === item.id ? ' drop-down-item--active' : '')">{{item.text}}</li>
        </ul>
    </div>
</template>
  

<style scoped>
.drop-down{
    position: relative;
}
.drop-down-result{
    cursor: pointer;
    border: 1px solid #000;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.drop-down-list{
    position: absolute;
    list-style-type: none;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 5px 0px;
    top: 100%;
    border: 1px solid #000;
    transform: translateY(10px);
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
}
.drop-down-item{
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
}

.drop-down-item:hover{
    background-color: rgba(0, 0, 0, 0.05);
}

.drop-down-item--active{
    background-color: rgba(0, 0, 0, 0.05);
}
</style>