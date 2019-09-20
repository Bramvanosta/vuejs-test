<template>
  <div class="UserDropdown">
    <button class="UserDropdown__button" @click="handleClick">Select user</button>
    <div class="UserDropdown__list" v-if="listIsVisible">
      <div class="UserDropdown__search">
        <UserDropdownSearch @change="handleSearch" />
      </div>
      <ul class="UserDropdown__users">
        <UserDropdownItem v-for="user in filteredUsers" :key="user.id" :user="user" />
      </ul>
    </div>
  </div>
</template>

<script>
import * as ReqResApi from '../../api/ReqRes';

import UserDropdownItem from './UserDropdownItem';
import UserDropdownSearch from './UserDropdownSearch';

export default {
  name: 'UserDropdown',

  data() {
    return {
      users: [],
      listIsVisible: false,
      searchValue: '',
    };
  },

  computed: {
    filteredUsers() {
      return this.users.filter(
        user =>
          user.first_name.includes(this.searchValue) ||
          user.last_name.includes(this.searchValue) ||
          user.email.includes(this.searchValue),
      );
    },
  },

  async mounted() {
    const data = await ReqResApi.getUsers();

    this.users = data;
  },

  methods: {
    handleClick() {
      if (this.listIsVisible) {
        this.handleHideList();
      } else {
        this.handleShowList();
      }
    },

    handleSearch(value) {
      this.searchValue = value;
    },

    handleShowList() {
      this.listIsVisible = true;
    },

    handleHideList() {
      this.listIsVisible = false;
    },
  },

  components: {
    UserDropdownItem,
    UserDropdownSearch,
  },
};
</script>

<style>
.UserDropdown {
  position: relative;
  display: flex;
}

.UserDropdown__button {
  padding: 12px 24px;
  background-color: #223b5d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
}

.UserDropdown__list {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 250px;
  padding: 10px;
}

.UserDropdown__search {
  margin-bottom: 8px;
}

.UserDropdown__users {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
