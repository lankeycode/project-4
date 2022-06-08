/* eslint-disable */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { chakra, Flex, Box, Grid, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import * as contentful from "contentful"
import GalleryList from "../components/GalleryList"
import Cursor from "../components/Cursor"


var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCES_TOKEN ,
  
});

export default function Galerie({ galeries}  ) {
  
  console.log( galeries );
    return (
      <motion.div
      initial={{  opacity:0}}
      animate={{ opacity:1}} 
      exit={{ opacity:0}}
      transition={{ duration: 0.5 }}>
      <Cursor />
      <Navbar />
      <Flex 
	    height="150vh" 
      width="100vw" 
	    bgImage="url(./camera_9.jpg)"
      bgRepeat = "no-repeat"
      bgPosition = "center center"
      bgAttachment = "fixed"
      bgSize = "cover"
      color= "#fff"
      cursor="none"
	    overflowX="hidden">

      <GalleryList  />
     <Footer m="5vh"/>
	   </Flex>
     <AnimatePresence exitBeforeEnter/>
     </motion.div>  
	)
   }

  export async function getServerSideProps() {
   
    // Get data from headless cms
    const gallery = await client.getEntries({
      content_type : "gallery",
    })
    
    return {
      props : {
      galeries: gallery.includes
      } 
    }  
  }
  

  