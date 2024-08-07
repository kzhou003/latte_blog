import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ReaderPage = ({ data }) => {
  const entries = data.allBibTeXEntry.nodes
  const [randomPaper, setRandomPaper] = useState(getRandomPaper(entries))
  const [expandedRows, setExpandedRows] = useState({})

  function getRandomPaper(papers) {
    return papers[Math.floor(Math.random() * papers.length)]
  }

  // Calculate statistics
  const totalPapers = entries.length

  // Group by year
  const papersByYear = entries.reduce((acc, entry) => {
    const year = entry.entryTags.year
    if (!acc[year]) acc[year] = []
    acc[year].push(entry)
    return acc
  }, {})

  // Prepare data for chart
  const years = Object.keys(papersByYear).sort()
  const paperCounts = years.map(year => papersByYear[year].length)

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Number of Papers',
        data: paperCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Papers per Year (Total: ${totalPapers})`,
      },
    },
  }

  const toggleRowExpansion = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const truncateAuthors = (authors) => {
    if (!authors) return 'N/A'
    return authors.length > 99 ? authors.slice(0, 96) + '...' : authors
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
        <p>Recent papers library. Parsed and updated from my own Mendeley library.</p>
        <p style={{ fontStyle: 'italic', marginTop: '5px', fontSize: '0.9em' }}>Updated: {new Date().toLocaleDateString()}</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <Tabs style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TabList style={{ borderBottom: '2px solid #ddd' }}>
          <Tab style={{ 
            padding: '10px 20px', 
            borderBottom: 'none', 
            backgroundColor: '#e6f2ff', 
            marginRight: '5px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            cursor: 'pointer'
          }}>Random Paper</Tab>
          <Tab style={{ 
            padding: '10px 20px', 
            borderBottom: 'none', 
            backgroundColor: '#e6f2ff', 
            marginRight: '5px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            cursor: 'pointer'
          }}>Paper List</Tab>
        </TabList>

        <TabPanel>
          <h2 style={{ marginTop: '2rem', textAlign: 'center' }}>Random Paper for the day</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={() => setRandomPaper(getRandomPaper(entries))} style={{ 
              padding: '10px 20px', 
              backgroundColor: '#4d94ff',
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}>
              Regenerate Random Paper
            </button>
          </div>
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <h3 style={{ textAlign: 'center' }}>{randomPaper.entryTags.title}</h3>
            {randomPaper.entryTags.url && (
              <p style={{ textAlign: 'center' }}><a href={randomPaper.entryTags.url} target="_blank" rel="noopener noreferrer">Link to paper</a></p>
            )}
            <p style={{ textAlign: 'left' }}><strong>Authors:</strong> {truncateAuthors(randomPaper.entryTags.author)}</p>
            <p style={{ textAlign: 'left' }}><strong>Year:</strong> {randomPaper.entryTags.year}</p>
            <p style={{ textAlign: 'left' }}><strong>Abstract:</strong> {randomPaper.entryTags.abstract}</p>
            
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ textAlign: 'center' }}>Critical Reading Questions</h3>
            <div style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>1. What is the main research question or hypothesis, and what are the key findings?</p>
              <p style={{ fontStyle: 'italic', color: '#666' }}>This helps you understand the core purpose of the study and its primary results.</p>
            </div>
            <div style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>2. How sound is the methodology, and do the conclusions logically follow from the data?</p>
              <p style={{ fontStyle: 'italic', color: '#666' }}>This assesses the reliability of the research and the validity of its conclusions.</p>
            </div>
            <div style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>3. What are the implications and limitations of the study, and how does it contribute to the broader field?</p>
              <p style={{ fontStyle: 'italic', color: '#666' }}>This helps you contextualize the research and understand its significance and potential applications.</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={() => setRandomPaper(getRandomPaper(entries))} style={{ 
              padding: '10px 20px', 
              backgroundColor: '#4d94ff',
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}>
              Get Another Random Paper
            </button>
          </div>
        </TabPanel>

        <TabPanel>
          <h2 style={{ marginTop: '2rem' }}>Paper List</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left', backgroundColor: '#f8f8f8', width: '30%' }}>Title</th>
                  <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left', backgroundColor: '#f8f8f8', width: '25%' }}>Authors</th>
                  <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left', backgroundColor: '#f8f8f8', width: '10%' }}>Year</th>
                  <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left', backgroundColor: '#f8f8f8', width: '5%' }}>URL</th>
                  <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left', backgroundColor: '#f8f8f8', width: '30%' }}>Abstract</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <React.Fragment key={entry.id}>
                    <tr>
                      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{entry.entryTags.title}</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{truncateAuthors(entry.entryTags.author)}</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{entry.entryTags.year}</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                        {entry.entryTags.url && (
                          <a href={entry.entryTags.url} target="_blank" rel="noopener noreferrer">Link</a>
                        )}
                      </td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                        <button onClick={() => toggleRowExpansion(entry.id)} style={{
                          padding: '5px 10px',
                          backgroundColor: '#4d94ff',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer'
                        }}>
                          {expandedRows[entry.id] ? 'Hide Details' : 'Show Details'}
                        </button>
                      </td>
                    </tr>
                    {expandedRows[entry.id] && (
                      <tr>
                        <td colSpan="5" style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                          <strong>Abstract:</strong> {entry.entryTags.abstract}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </Layout>
  )
}

export const query = graphql`
  query {
    allBibTeXEntry {
      nodes {
        id
        entryTags {
          title
          author
          year
          abstract
          url
        }
        entryType
        citationKey
      }
    }
  }
`

export const Head = () => <Seo title="Reader" />

export default ReaderPage