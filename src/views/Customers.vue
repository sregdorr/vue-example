<template>
    <div class="wrapper">
        <h2>Appraiser Regions</h2>
        <kendo-grid
                ref="grid"
                :data-source="customers"
                :height="600"
                :filterable="true"
                :editable="'inline'"
                :sortable-mode="'multiple'"
                :sortable-allow-unsort="true"
                :sortable-show-indexes="true"
                @save="onSave"
                @remove="onRemove"
        >
            <kendo-grid-column field="ContactName" title="Contact Name"></kendo-grid-column>
            <kendo-grid-column field="ContactTitle" title="Contact Title"></kendo-grid-column>
            <kendo-grid-column field="CompanyName" title="Company Name"></kendo-grid-column>
            <kendo-grid-column field="Country"></kendo-grid-column>
            <kendo-grid-column :command="['edit', 'destroy']"></kendo-grid-column>
        </kendo-grid>
        <test-component @buttonClick="clicked += $event" message="Hi I'm Russ" />
        <div>button was click {{ clicked }} times</div>
        <div>
            <form class="col-sm-6">
                <h3>Add Region</h3>
                <div class="form-group">
                    <input class="form-control" placeholder="Contact Name" type="text" v-model="contactName" />
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Contact Title" type="text" v-model="contactTitle" />
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Company Name" type="text" v-model="companyName" />
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Country" type="text" v-model="country" />
                </div>
                <button class="btn btn-sm btn-info" @click="add" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
  import TestComponent from "../components/TestComponent";

  export default {
    name: "Customers",
    data() {
      return {
        contactName: '',
        contactTitle: '',
        companyName: '',
        country: '',
        clicked: 0
      }
    },
    computed: {
      customers () {
        // eslint-disable-next-line
        return new kendo.data.DataSource({
          data: this.$store.state.customers
        })
      }
    },
    methods: {
      onSave (e) {
        this.$store.commit('edit', e.model.toJSON());
        e.sender.refresh();
      },
      onRemove (e) {
        this.$store.commit('remove', e.row);
      },
      add (e) {
        e.preventDefault();
        const entry = {
          ContactName: this.contactName,
          ContactTitle: this.contactTitle,
          CompanyName: this.companyName,
          Country: this.country,
        };
        this.$store.commit('add', entry)
      },
    },
    components: {
      TestComponent
    }
  }
</script>

<style scoped>
    .wrapper {
        padding: 2em 5em;
    }
    form {
        margin-top: 2em;
    }
</style>