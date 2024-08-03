import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faZhihu, faLinkedin, faSquareXTwitter, faKaggle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faBuilding, faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const TechCategory = ({ title, items }) => (
  <div style={{ marginBottom: '1rem' }}>
    <h2 style={{ fontSize: '1.0rem', marginBottom: '0.1rem' }}>{title}</h2>
    <p>{items.join(', ')}</p>
  </div>
)

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '2rem', 
        borderRadius: '8px', 
        maxWidth: '900px', 
        margin: '0 auto',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            float: 'right', 
            width: '220px', 
            marginLeft: '2rem', 
            marginBottom: '1rem',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
            <StaticImage
              src="https://en.gravatar.com/userimage/72975207/d4830a67d9782fa8c34b7493a979add5?size=original"
              alt="Kuan Zhou's profile picture"
              layout="fixed"
              width={220}
              height={220}
              style={{ borderRadius: '50%', marginLeft: '1rem', marginBottom: '1rem' }}
            />
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <p style={{ marginBottom: '0.5rem' }}><FontAwesomeIcon icon={faMapMarkerAlt} /> San Francisco Bay Area</p>
              <div>
                <a href="mailto:zhoukuan1@gmail.com" style={{ marginRight: '10px', color: '#4a90e2' }} aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
                <a href="https://www.zhihu.com/people/zhou-cheng-30" style={{ marginRight: '10px', color: '#4a90e2' }} aria-label="Zhihu">
                  <FontAwesomeIcon icon={faZhihu} size="lg" />
                </a>
                <a href="https://twitter.com/KuanZhou" style={{ marginRight: '10px', color: '#4a90e2' }} aria-label="Twitter">
                  <FontAwesomeIcon icon={faSquareXTwitter} size="lg"/>
                </a>
                <a href="https://www.linkedin.com/in/kuanzhou/" style={{marginRight: '10px', color: '#4a90e2' }} aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://www.kaggle.com/kzhoulatte" style={{marginRight: '10px', color: '#4a90e2' }} aria-label="Kaggle">
                  <FontAwesomeIcon icon={faKaggle} size="lg"/>
                </a>
              </div>
            </div>
          </div>
          <a href="/assets/Kuan_Zhou_1page_CV.pdf" style={{ textDecoration: 'none' }}><h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: "black" }}>Kuan Zhou</h1></a>
          <section style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
            <p>I am currently a machine learning engineer focusing on ML/AI systems including distributed training(with <a href="/assets/patents.pdf">US patents</a>), inference service performance, <a href="https://docs.sambanova.ai/sambastudio/latest/sambastudio-intro.html">AI platform engineering</a> based on Kubernetes, MLOps etc. Additionally, I have a keen interest in building AI applications which leverage the power of generative AI to boost efficiency and enhance creativity.</p>
            <p>Before immersing myself in AI systems, I worked on scientific research in physics - I developed mathematical analysis, research capabilities, and programming skills during undergraduate studies in Physics(thesis: computational simulation for NMR based quantum computing systems, advised by <a href="https://en.lmmr.ustc.edu.cn/2017/0711/c13356a189308/page.htm">Prof. Xinhua Peng</a> and <a href="https://en.lmmr.ustc.edu.cn/2017/0711/c13356a189307/page.htm">Prof. Jiangfeng Du</a>) at <a href="https://en.ustc.edu.cn/">Univeristy of Science and Technology of China</a> and PhD in Computational Physics(<a href="/assets/thesis.pdf">thesis: electronic properties modeling of two-dimensional materials</a>, 
            advised by <a href="https://intra.ece.ucr.edu/~rlake/">Prof. Roger Lake</a>) at <a href="https://sites.google.com/view/latte-lab/home">LATTE lab</a> at <a href="https://www.ucr.edu/">University of California, Riverside</a>.</p>
            
            <p>The journey which navigates me from Physics to ML/AI started with reading news about ML/AI, attending ML/AI seminars in <a href="http://staff.ustc.edu.cn/~linlixu/">Prof. Linli Xu</a>'s group, taking ML cources in CS department, participating <a href="https://www.kaggle.com/kzhoulatte">Kaggle competitions</a> and completing <a href="https://www.insightdatascience.com/">Insight data science bootcamp</a>. My passion for math and physics was ignited in high school by reading inspiring stories about <a href="https://en.wikipedia.org/wiki/Albert_Einstein">Albert Einstein</a> and <a href="https://en.wikipedia.org/wiki/Richard_Feynman">Richard Feynman</a>  and participating in Math and Physics Olympiads. </p>

            <p>In my spare time, I enjoy films, music, and spending time with my family, hiking, traveling, and trying new foods, along with our two cats, <a href="/images/cats/gemma.jpg">Gemma (orange tabby)</a> and <a href="/images/cats/nova.jpg">Nova (ragdoll)</a>.</p>
          </section>
        </div>

        <section style={{ marginBottom: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
          <h2 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Passion</h2>
          <p>Exploring the synergy between science and technology, building AI applications.</p>
        </section>

        <section style={{ marginBottom: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
          <h2 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tech Stack</h2>
          <p style={{ marginBottom: '1rem' }}>Proficient in, familiar with, or able to contribute after a brief learning period</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <TechCategory title="Programming Languages" items={['Python', 'Golang', 'C/C++', 'Java', 'JavaScript/TypeScript', 'Rust']} />
              <TechCategory title="AI Frameworks" items={['PyTorch', 'HF Transformers', 'JAX', 'TensorFlow']} />
              <TechCategory title="Distributed Systems" items={['Torch Distributed', 'Megatron-ML', 'DeepSpeed']} />
              <TechCategory title="ML Platforms" items={['Docker', 'gRPC', 'Kubernetes', 'Istio', 'OpenTelemetry', 'Kubebuilder']} />
              <TechCategory title="MLOps" items={['MLFlow', 'Weights & Biases', 'BentoML', 'Flyte', 'Kubeflow', 'Hydra']} />
            </div>
            <div style={{ width: '48%' }}>
              <TechCategory title="Service Serving" items={['vLLM', 'Triton Inference Server', 'Text Generation Inference']} />
              <TechCategory title="ML Compilers" items={['MLIR', 'LLVM', 'TVM']} />
              <TechCategory title="Frontend" items={['React', 'NextJS', 'Material UI', 'TailwindCSS', 'Streamlit', 'FastAPI']} />
              <TechCategory title="Databases" items={['PostgreSQL', 'BoltDB', 'SQL']} />
              <TechCategory title="Scientific Tools" items={['Mathematica', 'Julia', 'Matlab', 'LaTeX']} />
              <TechCategory title="Others" items={['Mermaid', 'Pybind', 'Pydantic', 'JsonSchema', 'Spark', 'Hadoop', 'ORTools', 'Numba', 'CUDA']} />
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
          <h2 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Experience</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Principal Engineer - Machine Learning</span>
                <span><FontAwesomeIcon icon={faBuilding} style={{ marginRight: '0.5rem' }} /><a href="https://sambanova.ai/">SambaNova Systems</a></span>
              </h3>
              <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                <span><FontAwesomeIcon icon={faClock} style={{ marginRight: '0.5rem' }} />April 2020 - Present</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />PALO ALTO, CA</span>
              </p>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Tech lead in containerizing and deploying generative AI models onto <a href="https://docs.sambanova.ai/sambastudio/latest/sambastudio-intro.html">Kubernetes platform SambaStudio</a></li>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                  <li>Led a 5+ engineers team to deploy foundation model based solutions to business customers</li>
                  <li>Prototyped the generative AI model deployment pipeline and Kubernetes platform</li>
                  <li>Built general and extensive infrastructure for continuous model integration and deployment</li>
                  <li>Standardized the model bringup and integration procedure via refactoring ML applications</li>
                </ul>
                <li style={{ marginBottom: '0.5rem' }}>Co-designed and co-developed distributed learning infrastructure for extreme large models</li>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                  <li><a href="https://patents.justia.com/patent/20230259823">Overlapping gradient synchronization in machine learning</a></li>
                  <li><a href="https://patents.google.com/patent/US11983141B2/en">System for executing an application on heterogeneous reconfigurable processors</a></li>
                  <li><a href="https://patents.justia.com/patent/20230237013">System of heterogeneous reconfigurable processors for the data parallel execution of applications</a></li>
                </ul>
                <li style={{ marginBottom: '0.5rem' }}>Contributed in core features of SambaNova AI framework</li>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                  <li>Designed, implemented and maintained a binary data extractor as bridge between compiler and runtime</li>
                  <li>Refactored and upgraded AI framework codebase to support functional programming style dataflow execution</li>
                  <li>Implemented various deep learning operators from compiler low level kernels to AI framework end to end</li>
                  <li>Optimized performance of deep learning models(HIPNN etc.) based on SambaNova AI framework and dataflow architecture</li>
                  <li>Integrated TensorBoard as visualization and accuracy debugger tool into SambaNova AI framework</li>
                </ul>
              </ul>
            </li>

            <li style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Software Engineer - Machine Learning</span>
                <span><FontAwesomeIcon icon={faBuilding} style={{ marginRight: '0.5rem' }} /><a href="https://www.petuum.com/">Petuum Inc.</a></span>
              </h3>
              <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                <span><FontAwesomeIcon icon={faClock} style={{ marginRight: '0.5rem' }} />February 2019 - March 2020</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />SUNNYVALE, CA</span>
              </p>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Leveraged OCR engines and deep learning models to process logistic bills automatically with 0.87 accuracy</li>
                <li>Collaborated in implementation of various anomaly detection models for equipment health prediction</li>
                <li>Contributed in machine learning pipeline refactoring and model improvement based on various use cases</li>
              </ul>
            </li>
            
            <li style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Artificial Intelligence Fellow</span>
                <span><FontAwesomeIcon icon={faBuilding} style={{ marginRight: '0.5rem' }} /><a href="https://insightfellows.com/">Insight Data Science</a></span>
              </h3>
              <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                <span><FontAwesomeIcon icon={faClock} style={{ marginRight: '0.5rem' }} />June 2018 - September 2018</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />SAN FRANCISCO, CA</span>
              </p>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Architected <a href="https://www.youtube.com/watch?app=desktop&v=q7PJk0LB9qU">SketchTML</a> that takes in several hand drawn sketches and produces an interactive HTML website</li>
                <li>Leveraged the framework of pix2code to build a more robust image captioning model with different styles</li>
                <li>Improved BLEU score up to 0.88 through inventive data augmentation methods and weighted loss functions</li>
              </ul>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
          <h2 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Education</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>PhD in Computational Physics</span>
                <span><FontAwesomeIcon icon={faUniversity} style={{ marginRight: '0.5rem' }} /><a href="https://www.ucr.edu/">University of California, Riverside</a></span>
              </h3>
              <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                <span><FontAwesomeIcon icon={faClock} style={{ marginRight: '0.5rem' }} />September 2013 - December 2018</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />RIVERSIDE, CA</span>
              </p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>BSc in Physics</span>
                <span><FontAwesomeIcon icon={faUniversity} style={{ marginRight: '0.5rem' }} /><a href="https://en.ustc.edu.cn/">University of Science and Technology of China</a></span>
              </h3>
              <p style={{ 
                color: '#666',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '0.5rem', color: '#0056b3' }} />
                Zhongyao Zhao Applied Physics Elite Class
              </p>
              <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                <span><FontAwesomeIcon icon={faClock} style={{ marginRight: '0.5rem' }} />August 2009 - June 2013</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />HEFEI, CHINA</span>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage