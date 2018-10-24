<template>
    <div>
    <h3>This is a test component! {{ message }}</h3>
        <button @click="onButtonClick">Click Me</button>
    </div>
</template>

<script>
  export default {
    name: "TestComponent",
    props: {
      message: String
    },
    methods: {
      onButtonClick() {
        this.$emit('buttonClick', 2)
      }
    }
  }
</script>

<style scoped>

</style>