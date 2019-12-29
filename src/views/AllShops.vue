<template>
  <div>
    <h3>
      <br />
      <br />All Shops Page
    </h3>
    <Search @search-term-changed="onSearchTermChanged" />

    <table class="table table-striped table-bordered" style="width:100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Logo</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shop in shops" :key="shop.id">
          <td>{{ shop.name }}</td>
          <td>
            <img :src="shop.image_url" />
          </td>
          <td v-if="shop.manager_id">
            <router-link
              :to="{ name: 'single-manager', params: { id: shop.manager_id }}"
            >{{shop.manager.first_name + ' ' + shop.manager.last_name}}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Search from "./Search";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "shops",
  components: {
    Search
  },
  computed: {
    ...mapGetters({
      shops: "shops"
    })
  },
  methods: {
    ...mapActions({
      fetchShops: "fetchShops"
    }),
    onSearchTermChanged(term) {
      this.fetchShops(term);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchShops());
  }
};
</script>
<style>
.filter {
  padding: 2rem;
}
</style>
