<template>
  <Layout>
    <v-container>
        <v-row>
          <v-col sm="6" offset-sm="3">
            <v-tabs v-model="tab" grow>
              <v-tab>Item One</v-tab>
              <v-tab>Item Two</v-tab>
              <v-tab>Item Three</v-tab>
            </v-tabs>
            <v-card
            v-for="edge in $page.events.edges" :key="edge.node.id"
            max-width="400"
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
                  Share
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions><!--end of v-card-actions-->
            </v-card><!--end-of-v-card-->
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
        duration
        price
        date
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
      tab:0
    }
  },
  watch: {
    tab(val) {
      if(this.tab = 0){
        this.showAllEvents()
      } else {
        this.showEventsByType()
      }
    }
  },
  methods: {
    showAllEvents(){
      console.log('all')
    },
    showEventsByType(){
      console.log('type')
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
