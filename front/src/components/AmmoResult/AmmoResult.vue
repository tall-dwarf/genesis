<script setup lang="ts">
import { AmmoItem } from '../../store/useAmmo';

interface Props {
  items: AmmoItem[]
}
const props = defineProps<Props>()
console.log(props);

</script>


<template>
    <div class="ammo-result">
        <ul class="ammo-result-list">
            <li v-for="ammoItem in props.items" :key="ammoItem.id"  class="ammo-result-item">
                <span>id: {{ammoItem.id}}</span>
                <strong>Тип {{ammoItem.name}}</strong>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.ammo-result{
    padding: 30px 0px;

}

.ammo-result-list{
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
}

</style>