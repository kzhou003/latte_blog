import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import {date} from './index.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Kuan Zhou">
      
      <StaticImage
        src="https://en.gravatar.com/userimage/72975207/d4830a67d9782fa8c34b7493a979add5?size=original"
        alt="My image"
        layout="fixed"
        width={160}
        style={{ float: "right", marginLeft: "20px", marginBottom: "20px" }}
      />

      I am a machine learning engineer with a scientific research background in physics. 
      <h2> Contact </h2>
      <ul>
        <li> Santa Clara, California </li>
        <li> <a href="https://twitter.com/KuanZhou">@kzhoulatte</a> on Twitter </li>
        <li> <a href="https://www.linkedin.com/in/kuanzhou/">@kzhoulatte</a> on Linkedin </li>
      </ul>

      <h2> Passion </h2>

      <p>Exploring the synergy between science and technology, particularly the exciting field of artificial intelligence. </p>

      <h2> Specialties </h2>
      <ul>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>Programming language</span>: Python, C++, Java, Golang, JavaScript </li>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>AI framework</span>: Pytorch, JAX, TensorFlow </li>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>Distributed system</span>: Torch distributed, DeepSpeed </li>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>ML compiler</span>: MLIR, TVM, LLVM </li>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>MLOps</span>: Docker, gRPC, Kubernetes, Kubeflow, MLFlow, Weights & Biases </li>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>Science</span>: Mathematica, Julia, Matlab </li>
      <li> <span style={{ fontWeight: 'bold', color: '#333333'}}>Others</span>: TeX, SQL, Spark, Hadoop, ORTools, Numba, CUDA </li>
      </ul>

      <h2> Experience </h2>
      <ul>
      <li>Principal Engineer at <a href="https://sambanova.ai/">SambaNova Systems</a>, <span className={date}>April 2020 - Present</span> 
      <ul>
      <li>Tech lead in containerizing and deploying generative AI models onto Kubernetes platform SambaStudio </li>

      <ul>
      <li>Led a 5+ engineers team to deploy 10+ foundation model based solutions to business customers</li>
      <li>Prototyped the generative AI model deployment pipeline in collaboration with Kubernetes platform team </li>
      <li>Built general and extensive infrastructure for continuous model integration and deployment</li>
      <li>Standardized the model bringup and integration procedure via refactoring ML applications</li>
      </ul>

      <li>Co-designed and co-developed distributed learning infrastructure for extreme large models</li>
      <ul>
      <li>Overlapping gradient synchronization in machine learning(U.S. patent pending with filing date 2/14/2022)</li>
      <li>System of heterogeneous reconfigurable processors for the data parallel execution of applications(U.S. patent
pending with filing date 9/9/2022)</li>
      </ul>

      <li>Contributed in core features of SambaNova AI framework</li>
      <ul>
      <li>Designed, implemented and maintained a binary data extractor as bridge between compiler and runtime</li>
      <li>Refactored and upgraded AI framework codebase to support functional programming style dataflow execution</li>
      <li>Implemented various deep learning operators from compiler low level kernels to AI framework end to end</li>
      <li>Optimized performance of deep learning models(HIPNN etc.) based on SambaNova AI framework and
dataflow architecture</li>
      <li>Integrated TensorBoard as visualization and accuracy debugger tool into SambaNova AI framework</li>
      </ul> 
      </ul>
      </li>

      <li>Software Engineer - Machine Learning at <a href="https://www.petuum.com/">Petuum</a>, <span className={date}>February 2019 - March 2020</span>
      <ul>
      <li> Leveraged OCR engines and deep learning models to process logistic bills automatically with 0.87 accuracy </li> 
      <li> Collaborated in implementation of various anomaly detection models for equipment health prediction </li>
      <li> Contributed in machine learning pipeline refactoring and model improvement based on various use cases </li>
      </ul>
      </li>
      
      <li>Artificial Intelligence Fellow at <a href="https://insightfellows.com/">Insight Data Science</a>, <span className={date}>June 2018 - September 2018</span>
      <ul>
      <li> Architected <a href="https://www.youtube.com/watch?app=desktop&v=q7PJk0LB9qU">SketchTML</a> that takes in several hand drawn sketches and produces an interactive HTML website </li> 
      <li> Leveraged the framework of pix2code to build a more robust image captioning model with different styles </li>
      <li> Improved BLEU score up to 0.88 through inventive data augmentation methods and weighted loss functions </li>
      </ul>
      </li>
      </ul>
      <h2> Education </h2>
      <ul>
      <li>PhD in Computational Physics at <a href="https://www.ucr.edu/">University of California, Riverside</a>,  <span className={date}>September 2013 - December 2018</span> </li>
      <li> BSc in Physics, Zhongyao Zhao Applied Physics Elite Class at  <a href="https://en.ustc.edu.cn/">University of Science and Technology of China</a>, <span className={date}>August 2009 - June 2013</span>  </li>
      </ul>

    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage