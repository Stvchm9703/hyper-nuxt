<template>
  <div>
    Works!
    <HyperSSRText :is-in-CSR="false" value="test1" />
    <HyperSSRText :is-in-CSR="true" value="test1" />

    <HyperSSRText class="btn" type="input" placeholder="test1" />
    
  </div>
</template>

<script>
export default {};
</script>


<i18n lang="yaml">
test1:
  jp: "test  11"
  cn : "test 12"
  en : "test 13"
</i18n>
