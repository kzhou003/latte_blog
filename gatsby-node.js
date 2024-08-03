const path = require('path')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const albums = [
    { id: 'usa', title: 'USA' },
    { id: 'singapore', title: 'Singapore' },
    { id: 'australia', title: 'Australia' },
    { id: 'family', title: 'Family' },
    { id: 'alyssa', title: 'Alyssa' },
    { id: 'cats', title: 'Cats' },
  ]

  albums.forEach(album => {
    createPage({
      path: `/photos/${album.id}`,
      component: path.resolve(`./src/templates/album.js`),
      context: {
        albumId: album.id,
        albumTitle: album.title,
      },
    })
  })
}
