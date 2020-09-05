<template>
  <Layout>
    <v-container>
        <v-row>
          <v-col sm="6" offset-sm="3">
            <v-tabs v-model="tab" grow>
              <v-tab>All Events</v-tab>
              <v-tab>Music Events</v-tab>
              <v-tab>Coding Events</v-tab>
            </v-tabs>
            <v-row class="justify-space-around">
              <v-card
            v-for="edge in events" :key="edge.node.id"
            width="290"
            class="mt-5"
            >

              <v-img
                class="white--text align-end"
                height="200px"
                :src="`http://localhost:1337${edge.node.thumbnail}`"
              />
              <v-card-title>
                {{ edge.node.title }}
              </v-card-title>

              <v-card-subtitle class="pb-0">{{edge.node.date}}</v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Read More
                </v-btn>
              </v-card-actions><!--end of v-card-actions-->
            </v-card><!--end-of-v-card-->
            </v-row>

          </v-col>
        </v-row>
    </v-container>

  </Layout>
</template>

<page-query>
  query {
  events: allEvent {
    edges {
      node {
        id
        title
        description
        price
        duration
        date
        thumbnail
        image
        category
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return {
      tab:0,
      events: []
    }
  },
  mounted(){
    this.events = this.$page.events.edges //setting events to be equal to the events object
  },
  watch: {
    tab(val) {
      if(this.tab === 0){
        this.showAllEvents()
      } else {
        this.showEventsByType(val)
      }
    }
  },
  methods: {
    showAllEvents(){
        this.events = this.$page.events.edges
    },
    showEventsByType(val){
        this.events = this.$page.events.edges.filter((edge) => {
          return edge.node.category === val;
        })
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
