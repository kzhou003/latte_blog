import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const SharingPage = () => {
  const sections = [
    {
      title: "Books",
      items: [
        { image: "/sharings/books/fundamentals_software_arch.jpg", title: "Fundamentals of Software Architecture", description: "Master the foundations of software architecture, including patterns and practices.", link: "https://www.oreilly.com/library/view/fundamentals-of-software/9781663728357/" },
        { image: "/sharings/books/software_arch_hard_parts.jpg", title: "Software Architecture: The Hard Parts", description: "Navigate complex decisions and trade-offs in distributed systems architecture.", link: "https://www.oreilly.com/library/view/software-architecture-the/9781492086888/" },
        { image: "/sharings/books/software_arch_diagrams.jpg", title: "Creating Software with Modern Diagramming Techniques", description: "Create clear and effective architecture diagrams to enhance team communication.", link: "https://pragprog.com/titles/apdiag/creating-software-with-modern-diagramming-techniques/" },
        { image: "/sharings/books/structured_concurrency.jpg", title: "Patterns for parallel programming", description: "Explore modern patterns for managing concurrent operations effectively.", link: "https://www.oreilly.com/library/view/patterns-for-parallel/0321228111/" },
        { image: "/sharings/books/rust_atomics_and_locks.jpg", title: "Rust Atomics and Locks", description: "Explore low-level concurrency in Rust with insights from a lead Rust developer.", link: "https://marabos.nl/atomics/" },
       { image: "/sharings/books/concurrent_programming_go.jpg", title: "Learn Concurrent Programming with Go", description: "Learn to write robust and efficient concurrent programs in Go.", link: "https://www.manning.com/books/learn-concurrent-programming-with-go" },
       { image: "/sharings/books/web_programming_go.jpg", title: "Go Web programming", description: "How to build scalable, high-performance web applications in Go using modern design principles.", link: "https://www.manning.com/books/go-web-programming" }, 
       { image: "/sharings/books/platform_engineering_k8s.jpg", title: "Platform Engineering with Kubernetes", description: "Build and manage scalable platforms using Kubernetes in real-world scenarios.", link: "https://www.manning.com/books/platform-engineering-on-kubernetes" },
        { image: "/sharings/books/programming_k8s.jpg", title: "Programming Kubernetes", description: "Extend Kubernetes through custom resources and operators for advanced users.", link: "https://www.oreilly.com/library/view/programming-kubernetes/9781492047094/" },
      ]
    },
    {
      title: "Courses",
      items: [
        { title: "MIT 6.172: Performance Engineering of Software Systems", link: "https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/", description: "Learn advanced techniques for optimizing software performance and scalability." },
        { title: "MIT 18.S096: Matrix Calculus for Machine Learning and Beyond", link: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/", description: "Master matrix calculus fundamentals essential for machine learning applications." },
      ]
    },
    {
      title: "GitHub Repositories",
      items: [
        { title: "STORM: Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking", link: "https://github.com/stanford-oval/storm", description: "An innovative approach to generating comprehensive topic outlines using AI." },
      ]
    },
    {
      title: "Efficiency Tools",
      items: [
        { title: "Cursor IDE", link: "https://www.cursor.com/", description: "An AI-powered code editor designed to boost developer productivity." },
      ]
    },
    {
      title: "Creativity",
      items: [
        { title: "Draw Things", link: "https://drawthings.ai/", description: "An AI-powered tool for generating and editing images creatively." },
      ]
    },
  ]

  const [hoveredItem, setHoveredItem] = React.useState(null)

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
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
        <p>Recent enjoyments. Stay tuned for more updates.
        </p>
        <p style={{ fontStyle: 'italic', marginTop: '5px', fontSize: '0.9em' }}>Updated: {new Date().toLocaleDateString()}</p>
      </div>
      {/* <div style={{ margin: '0 0 20px', padding: '10px', background: '#f0f8ff', borderRadius: '8px', border: '1px solid #0056b3' }}>
        <p>Recent enjoyments. Stay tuned for more updates.</p>
        <p style={{ fontStyle: 'italic', marginTop: '5px', fontSize: '0.9em' }}>Updated: {new Date().toLocaleDateString()}</p>
      </div> */}
      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            borderBottom: '2px solid #0056b3', 
            paddingBottom: '10px', 
            marginBottom: '20px',
            color: '#0056b3'
          }}>
            {section.title}
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: section.title === "Books" ? 'repeat(auto-fill, minmax(200px, 1fr))' : 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            {section.items.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                style={{ 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  transform: hoveredItem === `${index}-${itemIndex}` ? 'scale(1.05)' : 'scale(1)',
                  backgroundColor: hoveredItem === `${index}-${itemIndex}` ? '#f0f8ff' : 'white',
                  height: '100%', // Allow height to adjust based on content
                }}
                onMouseEnter={() => setHoveredItem(`${index}-${itemIndex}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <h3 style={{ 
                  padding: '10px', 
                  margin: 0, 
                  textAlign: 'center', 
                  fontSize: '1rem', 
                  backgroundColor: hoveredItem === `${index}-${itemIndex}` ? '#e6f2ff' : '#f8f9fa',
                  color: '#333',
                  minHeight: '60px', // Minimum height for title
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>{item.title}</h3>
                {item.image && (
                  <div style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', padding: '10px' }}>
                    <img src={item.image} alt={item.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                )}
                <p style={{ 
                  padding: '10px', 
                  margin: 0, 
                  fontSize: '0.9rem', 
                  color: '#666',
                  flexGrow: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}>{truncateDescription(item.description)}</p>
                <Link to={item.link} style={{ 
                  display: 'block',
                  padding: '8px',
                  backgroundColor: '#4d94ff',
                  color: 'white',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'background-color 0.3s ease',
                  marginTop: 'auto', // Push to bottom
                }}>
                  Learn More
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