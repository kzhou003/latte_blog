const path = require('path')
const fs = require('fs')
const bibtexParse = require('@orcid/bibtex-parse-js')

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


exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Read the library.bib file
  const filePath = path.join(__dirname, 'static', 'reader', 'library.bib')
  console.log('Reading file from:', filePath)
  const content = fs.readFileSync(filePath, 'utf-8')

  // Parse the BibTeX content
  let entries
  try {
    entries = bibtexParse.toJSON(content)
    console.log(`Parsed ${entries.length} BibTeX entries`)
  } catch (error) {
    console.error('Error parsing BibTeX:', error)
    return
  }

  // Create nodes for each BibTeX entry
  entries.forEach((entry, index) => {
    const nodeContent = JSON.stringify(entry)
    const nodeMeta = {
      id: createNodeId(`bibtex-entry-${index}`),
      parent: null,
      children: [],
      internal: {
        type: 'BibTeXEntry',
        content: nodeContent,
        contentDigest: createContentDigest(entry),
      },
    }

    const node = Object.assign({}, entry, nodeMeta)
    createNode(node)
    console.log(`Created node for entry: ${entry.entryTags.TITLE || 'Untitled'}`)
  })

  console.log('Finished creating BibTeXEntry nodes')

  // Create a node for the raw BibTeX content
  createNode({
    id: createNodeId(`bibtex-raw`),
    parent: null,
    children: [],
    internal: {
      type: 'BibTeXRaw',
      content: content,
      contentDigest: createContentDigest(content),
    },
    content: content,
  })
}
