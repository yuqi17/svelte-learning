<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { each } from "svelte/internal";
    export let number; // 属性
    let list = [{ name: "lisi" }, { name: "haha" }, { name: "waha" }];

    const dispatch = createEventDispatcher();

    onMount(() => {
        console.log("mmp phone");
    });
</script>

<div>电话：{number}</div>
<p>
    <button
        on:click={() => {
            dispatch('hee', 66666);
        }}>
        dispatch value to parent component
    </button>
</p>

<p>
    svelte 是基于赋值变化来更新的, 因此splice push 不行
    https://www.sveltejs.cn/tutorial/updating-arrays-and-objects
    <button
        on:click={() => {
            list[1] = { name: '6666' };
        }}>修改数组第二个值</button>
    <button
        on:click={() => {
            // delete list[1]; 这个不行
            // 下面这个写法是可以的, 但需要写两行
            // list.splice(1, 1);
            // list = list;
            //  这种写法更通用,vue, react 也是推荐这个写法
            list = list.filter((_, i) => i !== 1);
        }}>删除第二个值</button>
</p>
<ul>
    {#each list as item}
        <li>{item.name}</li>
    {/each}
</ul>

<slot>默认值</slot>
