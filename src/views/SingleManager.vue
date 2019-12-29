<template>
  <div>
    <h3>
      <br />
      <br />Single Manager Page
    </h3>
    <table class="table table-striped table-bordered" style="width:100%">
      <thead>
        <tr>
          <th>Manager</th>
          <th>Shop</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <td>{{ manager.first_name }} {{ manager.last_name }}</td>
        </template>

        <td v-if="manager.shop_id">
          <router-link
            :to="{ name: 'single-shop', params: {id:Number(manager.shop_id)}}"
          >{{manager.shop_id}}</router-link>
        </td>
        <td v-else>This manager does not have shop</td>

        <td>
          <img :src="manager.image_url" />
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import { managersService } from "@/services/ManagersService";

export default {
  data() {
    return {
      manager: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      managersService
        .get(vm.$route.params.id)
        .then(response => {
          vm.manager = response.data;
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
        });
    });
  }
};
</script>

<style>
h3 {
  font-weight: bold;
  padding: 2rem;
  font-family: serif;
}
</style>