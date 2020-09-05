// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//importing axios
const axios = require('axios')


module.exports = function (api) {
  //whitelisting vuetify
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/events/')

    const collection = actions.addCollection({ // Object - array of objects or table - in GraphQL
      typeName: 'Event',
      path: '/events/:id'
    })

    for (const event of data) {
      collection.addNode({ //array.push addNode is similar to array.push in js array manipulation functions
        id: event.id,
        path: '/events/' + event.id,
        title: event.title,
        description: event.description,
        price: event.price,
        date: event.date,
        duration: event.duration,
        thumbnail: event.image.formats.thumbnail.url,
        image: event.image.formats.medium.url,
        category: event.categories[0].id,
      })
    }
  })
}
