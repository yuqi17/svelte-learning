<script>
  // 花了2个小时左右入门

  // 参考 https://juejin.cn/post/7121759118070644772

  // https://www.npmjs.com/package/svelte-router-spa svelte 的 SPA 路由, 感觉跟vue 差不多

  // https://zhuanlan.zhihu.com/p/369408950   svelte 自带状态管理

  // svelte 更新视图的原理 和 跟 react , vue 不同的地方
  // https://juejin.cn/post/7028760010058367012
  // https://segmentfault.com/a/1190000040065124

  import { onMount } from "svelte";
  import Phone from "./Phone.svelte";

  let name = "雷猴";

  function sayHi() {
    return `${name} 世界！`;
  }

  onMount(() => {
    console.log("mmp app");
  });

  let a = 1;
  let b = 2;
  let msg = "hhh";

  let state = false;

  let h1El = '<h1 style="color: pink;">雷猴, @html 可能会有xss攻击风险</h1>';
  let number = 3333;
  function handleClick() {
    name = "鲨鱼辣椒";
    count = 3;
    list = [];
    alert(count);
    number = 44444;
  }

  let count = 1;

  // 这个语法比较新的firefox 已经是支持了
  $: doubled = count * 2;

  let color = "red";
  let foo = false;
  setTimeout(() => {
    color = "blue";
    foo = true;
    state = true;
    count = 2;
  }, 2000);

  let list = [{ name: "aaa" }, { name: "bbb" }];

  let selected = "2";

  let roles = [];

  const api = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("请求成功，数据是xxxxx");
    }, 1000);
  });
</script>

<style lang="less">
  @color: yellow;
  .haha {
    color: @color;
  }
</style>

<Phone {number} on:hee={(e) => alert(e.detail)}>mmp, 送给你孩子</Phone>

<p>
  {#await api}
    <span>Loading...</span>
  {:then response}
    <span>{response}</span>
  {:catch error}
    <span>{error}</span>
  {/await}
</p>

<div>{sayHi()}</div>

<div>{a} + {b} = {a + b}</div>

<div style="color:{color}">{state ? '雷猴' : '鲨鱼辣椒'}</div>

<div class:haha={foo}>Hello {name}</div>

<button on:click|once={handleClick}>改名</button>

<div title={name}>Hello</div>

<div>
  {@html h1El}
</div>

{#if count === 1}
  <div>雷猴</div>
{:else if count === 2}
  <div>鲨鱼辣椒</div>
{:else}
  <div>蟑螂恶霸</div>
{/if}

<p>{doubled}</p>

<ul>
  {#each list as { name }, index}
    <li>{index} -- {name}</li>
  {:else}
    <div>暂无数据</div>
  {/each}
</ul>

<input type="text" bind:value={msg} />

<div>{msg}</div>

<input type="radio" bind:group={selected} value="1" />
<input type="radio" bind:group={selected} value="2" />
<input type="radio" bind:group={selected} value="3" />
<p>{selected}</p>

<input type="checkbox" bind:group={roles} value="雷猴" />
<input type="checkbox" bind:group={roles} value="鲨鱼辣椒" />
<input type="checkbox" bind:group={roles} value="蟑螂恶霸" />
<input type="checkbox" bind:group={roles} value="蝎子莱莱" />

<p>{roles}</p>
