import React from 'react'
import Clients from './Clients'
import Section1 from './Section1'
import Features from './Features'
import Support from './Support'
import RateReview from './RateReview'
import FeaturedBlogs from './FeaturedBlogs'

const Home = () => {
  return (<>
   <Section1 />
      <Clients />
      <Features />
      <Support />
      <RateReview />
      <FeaturedBlogs/>
  </>
  )
}

export default Home