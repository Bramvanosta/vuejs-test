<template>
  <li class="UserDropdownItem">
    <img
      class="UserDropdownItem__avatar"
      :src="user.avatar"
      width="20px"
      height="20px"
      :alt="`Avatar of user ${user.first_name} ${user.last_name}`"
    />
    <span class="UserDropdownItem__name">{{ user.first_name }} {{ user.last_name }}</span>
  </li>
</template>

<script>
export default {
  name: 'UserDropdownItem',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.UserDropdownItem {
  display: flex;
  align-items: center;
}

.UserDropdownItem:not(:last-child) {
  margin-bottom: 6px;
}

.UserDropdownItem__avatar {
  margin-right: 6px;
}
</style>
