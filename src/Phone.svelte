<script>
    import { createEventDispatcher, onMount } from "svelte";
    export let number; // 属性

    const dispatch = createEventDispatcher();

    onMount(() => {
        console.log("mmp phone");
    });
</script>

<div>电话：{number}</div>
<button
    on:click={() => {
        dispatch('hee', 66666);
    }}>dispatch value to parent component</button>

<slot>默认值</slot>
