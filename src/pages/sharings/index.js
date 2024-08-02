import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const SharingPage = () => {
  const sections = [
    {
      title: "Books",
      items: [
        { image: "/sharings/books/1.jpg", title: "Software Architecture", description: "A great read about software architecture especially the hard parts. It is a good book to further deepen your understanding and also help on real use cases.", link: "/sharings/book1" },
        { image: "/sharings/books/2.jpg", title: "Rust Concurrency", description: "An insightful book on Rust concurrency by tech lead who is currently leading the Rust community. A book by the true expert. ", link: "/sharings/book2" },
      ]
    },
    {
      title: "Life style",
      items: [
        { image: "/sharings/books/1.jpg", title: "Software Architecture", description: "A great read about...", link: "/sharings/book1" },
        { image: "/sharings/books/2.jpg", title: "Rust Concurrency", description: "An insightful book on...", link: "/sharings/book2" },
      ]
    },
    {
      title: "Foodie",
      items: [
        { image: "/sharings/books/1.jpg", title: "Software Architecture", description: "A great read about...", link: "/sharings/book1" },
        { image: "/sharings/books/2.jpg", title: "Rust Concurrency", description: "An insightful book on...", link: "/sharings/book2" },
      ]
    },
    {
      title: "Efficiency",
      items: [
        { image: "/sharings/books/1.jpg", title: "Software Architecture", description: "A great read about...", link: "/sharings/book1" },
        { image: "/sharings/books/2.jpg", title: "Rust Concurrency", description: "An insightful book on...", link: "/sharings/book2" },
      ]
    },
    {
      title: "Creativity",
      items: [
        { image: "/sharings/books/1.jpg", title: "Software Architecture", description: "A great read about...", link: "/sharings/book1" },
        { image: "/sharings/books/2.jpg", title: "Rust Concurrency", description: "An insightful book on...", link: "/sharings/book2" },
      ]
    },
    {
      title: "Others",
      items: [
        { image: "/sharings/books/1.jpg", title: "Software Architecture", description: "A great read about...", link: "/sharings/book1" },
        { image: "/sharings/books/2.jpg", title: "Rust Concurrency", description: "An insightful book on...", link: "/sharings/book2" },
      ]
    }
  ]

  return (
    <Layout pageTitle="">
      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '10px', marginBottom: '20px' }}>{section.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <h3 style={{ padding: '10px', margin: 0, textAlign: 'center', fontSize: '0.9rem', backgroundColor: '#f8f9fa' }}>{item.title}</h3>
                <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', padding: '10px' }}>
                  <img src={item.image} alt={item.title} style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }} />
                </div>
                <p style={{ padding: '10px', margin: 0, fontSize: '0.8rem', color: '#666' }}>{item.description}</p>
                <Link to={item.link} style={{ 
                  display: 'block',
                  padding: '8px',
                  backgroundColor: '#4d94ff',
                  color: 'white',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  transition: 'background-color 0.3s ease',
                  ':hover': {
                    backgroundColor: '#003d82'
                  }
                }}>
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="My Sharings" />

export default SharingPage