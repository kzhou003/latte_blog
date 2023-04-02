import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

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
      <h3> Contact </h3>
      <ul>
        <li> Santa Clara, California </li>
        <li> <a href="https://twitter.com/KuanZhou">@kzhoulatte</a> on Twitter </li>
        <li> <a href="https://www.linkedin.com/in/kuanzhou/">@kzhoulatte</a> on Linkedin </li>
      </ul>

      <h3> Passion </h3>

      <p>Exploring the synergy between science and technology, particularly the exciting field of artificial intelligence. </p>

      <h3> Specialties </h3>
      <ul>
      <li> Programming language: Python, C++, Java, Golang </li>
      <li> AI framework: Pytorch, TensorFlow, JAX </li>
      <li> Distributed system: Torch distributed, DeepSpeed, Kubernetes </li>
      <li> ML compiler: MLIR, TVM </li>
      <li> MLOps: Kubeflow, MLFlow, Weights & Biases </li>
      <li> Science: Mathematica, Julia </li>
      <li> Others: Docker, gRPC, TeX, SQL, Javascript, Spark, Hadoop, ORTools, Numba, CUDA </li>
      </ul>

      <h3> Experience </h3>
      Principal Software Engineer at SambaNova Systems
      <ul>
      <li> Leading a team to containerize foundation models into Kubernetes compatible microservices </li> 
      <li> Contributed in essential design and core features of SambaNova AI framework </li>
      <li> Co-designed and co-developed distributed learning infrastructure for extreme large models </li>
      <li> Implemented various deep learning models based on dataflow architecture and software platform </li>
      </ul>

      Software Engineer Machine Learning at Petuum
      <ul>
      <li> Leveraged OCR engines and deep learning models to process logistic bills automatically with 0.87 accuracy </li> 
      <li> Collaborated in implementation of various anomaly detection models for equipment health prediction </li>
      <li> Contributed in machine learning pipeline refactoring and model improvement based on various use cases </li>
      </ul>

      Artificial Intelligence Fellow at Insight Data Science
      <ul>
      <li> Architected SketchTML that takes in several hand drawn sketches and produces an interactive HTML website </li> 
      <li> Leveraged the framework of pix2code to build a more robust image captioning model with different styles </li>
      <li> Improved BLEU score up to 0.88 through inventive data augmentation methods and weighted loss functions </li>
      </ul>

      <h3> Education </h3>
      <ul>
      <li> PhD in Computational Physics from University of California, Riverside </li>
      <li> BSc in Physics, Zhongyao Zhao Applied Physics Elite Class from University of Science and Technology of China </li>
      </ul>

    </Layout>
  )
}

const FloatingRightImage = {
  marginRight: '2em'
};

export const Head = () => <Seo title="Home Page" />

export default IndexPage