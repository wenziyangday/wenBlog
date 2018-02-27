<template>
	<div class="more">
		<div class="innerMore">加载更多</div>
	</div>
</template>

<script>
	export default {
		name: 'more'
	}
</script>

<style>
  .more {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .innerMore {
    flex: 0 0 170px;
    min-height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #555;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
