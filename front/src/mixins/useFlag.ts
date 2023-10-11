import { ref } from 'vue';

export default function useFlag(){
    const flag = ref(false)

    const toggle = () => {
        flag.value = !flag.value
    }

    return{
        flag,
        toggle
    }
}