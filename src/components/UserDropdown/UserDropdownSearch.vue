<template>
  <input
    id="UserDropdownSearch"
    class="UserDropdownSearch"
    @input="handleChange"
    type="text"
    placeholder="Rechercher un utilisateur"
  />
</template>

<script>
export default {
  name: 'UserDropdownSearch',

  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>

<style>
.UserDropdownSearch {
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid grey;
}
</style>
