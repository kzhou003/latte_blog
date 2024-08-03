import React, { useState, useEffect, useCallback } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AlbumTemplate = ({ data, pageContext }) => {
  const { albumId, albumTitle } = pageContext
  const photos = data.allFile.nodes
  const [fullScreenImage, setFullScreenImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const showFullScreenImage = useCallback((index) => {
    setCurrentIndex(index)
    setFullScreenImage(getImage(photos[index]))
  }, [photos])

  const showNextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % photos.length
    showFullScreenImage(nextIndex)
  }, [currentIndex, photos.length, showFullScreenImage])

  const showPreviousImage = useCallback(() => {
    const previousIndex = (currentIndex - 1 + photos.length) % photos.length
    showFullScreenImage(previousIndex)
  }, [currentIndex, photos.length, showFullScreenImage])

  const handleKeyDown = useCallback((event) => {
    if (fullScreenImage) {
      if (event.key === 'ArrowRight') {
        showNextImage()
      } else if (event.key === 'ArrowLeft') {
        showPreviousImage()
      } else if (event.key === 'Escape') {
        setFullScreenImage(null)
      }
    }
  }, [fullScreenImage, showNextImage, showPreviousImage])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <Layout pageTitle={""}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 'bold',
        borderBottom: '2px solid #4a90e2',
        paddingBottom: '0.5rem'
      }}>{albumTitle} Album</h1>
      <div style={{ 
        backgroundColor: '#f0f4f8', 
        border: '1px solid #d1e3f6', 
        borderRadius: '8px', 
        padding: '15px', 
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <p style={{ 
          fontSize: '0.9rem', 
          lineHeight: '1.6', 
          color: '#2c3e50',
          margin: 0
        }}>
          <strong>Copyright notice:</strong> all images in this album are © {new Date().getFullYear()} Kuan Zhou. 
          Any unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {photos.map((photo, index) => {
          const image = getImage(photo)
          return (
            <div 
              key={photo.id} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease-in-out',
                cursor: 'pointer',
                height: '250px' // Set a fixed height for the container
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => showFullScreenImage(index)}
            >
              <GatsbyImage 
                image={image} 
                alt={`${albumTitle} photo ${index + 1}`} 
                style={{
                  width: '100%',
                  height: '100%'
                }}
                imgStyle={{
                  objectFit: 'contain' // This ensures the image is not cropped
                }}
              />
            </div>
          )
        })}
      </div>
      {fullScreenImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <GatsbyImage 
            image={fullScreenImage} 
            alt="Full screen image" 
            style={{maxWidth: '90%', maxHeight: '90%'}}
            imgStyle={{
              objectFit: 'contain' // This ensures the full-screen image is not cropped
            }}
          />
          <button
            onClick={showPreviousImage}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            &#8249;
          </button>
          <button
            onClick={showNextImage}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            &#8250;
          </button>
          <button
            onClick={() => setFullScreenImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            &#10005;
          </button>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($albumId: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: $albumId }
        extension: { regex: "/(jpg|jpeg|png|gif)/" }
      }
    ) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

export const Head = ({ pageContext }) => <Seo title={`${pageContext.albumTitle} Album`} />

export default AlbumTemplate