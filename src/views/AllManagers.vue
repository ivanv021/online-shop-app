<template>
  <div>
    <h3>
      <br />
      <br />All Managers Page
    </h3>
    <div class="filter">
      <label class="input" for="term">Filter:</label>
      <br />
      <input type="text" v-model="term" />
    </div>
    <table class="table table-striped table-bordered" style="width:100%">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Picture</th>
          <th>Shop</th>
        </tr>
      </thead>
      <tbody v-for="managerArray in filteredArray" :key="managerArray.id">
        <tr>
          <td>{{managerArray.first_name}}</td>
          <td>{{managerArray.last_name}}</td>
          <td>
            <img :src="managerArray.image_url" />
          </td>
          <template>
            <td v-if="managerArray.shop">{{managerArray.shop.name}}</td>
            <td v-else>Manager is available</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { managersService } from "@/services/ManagersService";

export default {
  data() {
    return {
      managersArrays: [],
      term: ""
    };
  },
  computed: {
    filteredArray() {
      return this.managersArrays.filter(manager => {
        return manager.first_name
          .toLowerCase()
          .includes(this.term.toLowerCase());
      });
    }
  },

  beforeRouteEnter(to, from, next) {
    managersService.getAll().then(response => {
      next(vm => {
        vm.managersArrays = response.data;
      });
    });
  }
};
</script>

<style>
.filter {
  padding: 2rem;
}
</style>
