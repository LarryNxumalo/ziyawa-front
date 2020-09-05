<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Ziyawa</v-toolbar-title>
          <v-text-field
            label="Search"
            placeholder="Search"
            class="ml-8"
            style="max-width: 350px"
            append-icon="mdi-magnify"
            outlined
            rounded
            dense
            hide-details=""
          ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn>Create Event</v-btn>
    </v-app-bar>
      <p>{{$static.metadata.siteDescription}}</p>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>
