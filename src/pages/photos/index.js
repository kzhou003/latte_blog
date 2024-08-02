import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PhotosPage = () => {
  // Sample data for albums
  const albums = [
    { id: 1, title: 'Family', coverImage: '/images/family/IMG_2811.JPG', photoCount: 15 },
    { id: 2, title: 'Alyssa', coverImage: '/images/alyssa/IMG_2810.JPG', photoCount: 20 },
    { id: 3, title: 'USA', coverImage: '/images/usa/IMG_7103.JPG', photoCount: 30 },
    { id: 4, title: 'Singapore', coverImage: '/images/singapore/SY704093.JPG', photoCount: 20 },
    { id: 5, title: 'Australia', coverImage: '/images/australia/IMG_4068.JPG', photoCount: 30 },
  ]

  return (
    <Layout pageTitle="">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {albums.map((album) => (
          <div key={album.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src={album.coverImage} alt={album.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h3>{album.title}</h3>
              <p>{album.photoCount} photos</p>
              <Link to={`/photos/${album.id}`} style={{ 
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                padding: '5px 10px', 
                backgroundColor: '#4d94ff', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Photo Albums" />

export default PhotosPage