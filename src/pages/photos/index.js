import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const albums = [
  { id: 'usa', title: 'USA', folder: '/images/usa' },
  { id: 'singapore', title: 'Singapore', folder: '/images/singapore' },
  { id: 'australia', title: 'Australia', folder: '/images/australia' },
  { id: 'family', title: 'Family', folder: '/images/family' },
  { id: 'alyssa', title: 'Alyssa', folder: '/images/alyssa' },
  { id: 'cats', title: 'Cats', folder: '/images/cats' },
]

const PhotosPage = ({ data }) => {
  console.log('GraphQL query result:', JSON.stringify(data, null, 2))
  const [hoveredAlbum, setHoveredAlbum] = React.useState(null)
  const [randomIndices, setRandomIndices] = React.useState({})

  console.log('GraphQL query result:', data)

  React.useEffect(() => {
    const newRandomIndices = {}
    albums.forEach(album => {
      const albumPhotos = data.allFile.nodes.filter(node => node.relativePath.startsWith(`${album.folder.split('/').pop()}`))
      if (albumPhotos.length > 0) {
        newRandomIndices[album.id] = Array.from({length: albumPhotos.length}, (_, i) => i)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
      }
    })
    setRandomIndices(newRandomIndices)
  }, [data])

  const getAlbumData = (folder) => {
    const albumPhotos = data.allFile.nodes.filter(node => node.relativePath.startsWith(`${folder.split('/').pop()}`))
    console.log(`Album photos for ${folder}:`, albumPhotos)
    if (albumPhotos.length > 0) {
      const albumId = albums.find(album => album.folder === folder).id
      const coverImages = randomIndices[albumId]?.map(index => 
        albumPhotos[index].childImageSharp ? getImage(albumPhotos[index]) : null
      ).filter(Boolean) || [];

      return {
        coverImages: coverImages,
        photoCount: albumPhotos.length
      }
    }
    return {
      coverImages: [],
      photoCount: 0
    }
  }

  return (
    <Layout pageTitle="">
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem', 
        fontStyle: 'italic', 
        color: '#555',
        maxWidth: '800px',
        margin: '0 auto 2rem'
      }}>
        <p>"Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… it remembers little things, long after you have forgotten everything." – Aaron Siskind</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {albums.map((album) => {
          const { coverImages, photoCount } = getAlbumData(album.folder)
          console.log(`Album ${album.title} data:`, { coverImages, photoCount })
          return (
            <div 
              key={album.id} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                position: 'relative',
                transition: 'all 0.3s ease',
                transform: hoveredAlbum === album.id ? 'scale(1.05)' : 'scale(1)',
                backgroundColor: hoveredAlbum === album.id ? '#7cb9e8' : 'white',
                boxShadow: hoveredAlbum === album.id ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'
              }}
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
            >
              <div style={{ position: 'relative' }}>
                {coverImages.length > 0 ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
                    {coverImages.map((image, index) => (
                      <GatsbyImage key={index} image={image} alt="" style={{ width: '100%', height: '100px' }} />
                    ))}
                  </div>
                ) : (
                  <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    No cover images
                  </div>
                )}
                <h3 style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: 0,
                  padding: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  {album.title}
                </h3>
              </div>
              <div style={{ padding: '10px' }}>
                <h3 style={{ color: hoveredAlbum === album.id ? 'white' : 'black' }}></h3>
                <p style={{ color: hoveredAlbum === album.id ? 'white' : 'black' }}>{photoCount} photos</p>
                <Link 
                  to={`/photos/${album.id}`}
                  style={{ 
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    padding: '5px 10px', 
                    backgroundColor: hoveredAlbum === album.id ? 'white' : '#4d94ff', 
                    color: hoveredAlbum === album.id ? '#7cb9e8' : 'white', 
                    textDecoration: 'none', 
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg|jpeg|png)/" }
        relativePath: { regex: "/^(family|singapore|usa|australia|alyssa|cats)/" }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            width: 300
            height: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export const Head = () => <Seo title="Photo Albums" />

export default PhotosPage