<template>
  <div>
    <h3>
      <br />
      <br />Add Shop Page
    </h3>
    <div class="container">
      <div class="form-group row">
        <label for="name" class="form-control col-sm-2">Shop Name</label>
        <input
          type="text"
          class="form-control col-sm-8"
          id="name"
          name="name"
          minlength="2"
          maxlength="255"
          required
        />
      </div>

      <div class="form-group row">
        <label for="manager" class="form-control col-sm-2">Manager</label>
        <select class="form-control col-sm-4" name="manager" id="manager">
          <option
            :value="manager.id"
            v-for="manager in managers"
            :key="manager.id"
          >{{ manager.first_name }} {{manager.last_name}}</option>
        </select>
      </div>

      <div>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { managersService } from "@/services/ManagersService";

export default {
  data() {
    return {
      managers: {}
    };
  },

  created() {
    managersService
      .getAll()
      .then(response => {
        this.managers = response.data.filter(manager => !manager.shop);
      })
      .catch(error => {
        console.log(error); //eslint-disable-line
      });
  }
};
</script>

<style>
</style>