 import React from 'react'
 import Layout from '../components/layout'
 import '../styles/Merriweather-Regular.ttf';
 import {Content} from '../components/content'
 import { Art } from '../components/Art';
 import { More } from '../components/More'; 
 import { Statistic } from '../components/Statistic';
 


 
 
 const IndexPage = () => {
   return (
     <div >
  <Layout />
  <Content />
   
  <Statistic />
  
   

     </div>
   )
 }
 


 export default IndexPage