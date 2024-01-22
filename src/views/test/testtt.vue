<template>
  <div></div>
</template>

<script setup>
let m = new map(["cj", 20], ["ls", 21], ["tyy", 22]);
for (let [key, value] of m) {
  console(key, " ", value);
}
</script>

<style lang="scss" scoped>
</style>