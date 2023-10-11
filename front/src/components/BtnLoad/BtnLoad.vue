<script setup lang="ts">

interface Props {
  isLoad: boolean,
  isActive: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['onClick'])

</script>

<template>
    <div role="button" @click="props.isActive && emit('onClick')" :class="'btn-load ' + (props.isActive && ' btn-load--active' )">
        <div v-if="!props.isLoad" class="btn-load-text">Создать</div>
        <div v-else class="btn-load-loader"></div>
    </div>
  </template>

<style scoped>
.btn-load{
    border: 1px solid #e2e2e2;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    padding: 5px;
    font-size: 20px;
    transition: all 0.2s;
}

.btn-load--active{
    background-color: #15c;
}

.btn-load-loader{
    border: 3px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top-color: transparent;
    /* transform: rotateZ(45deg); */
    animation: loading 1.3s linear infinite;
}

@keyframes loading {
    0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>