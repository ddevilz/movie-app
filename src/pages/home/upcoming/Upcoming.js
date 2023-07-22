import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from "../../../hooks/useFetch.js"
import Carousel from '../../../components/carousel/Carousel'

const Upcoming = () => {
  const [endpoint, setEndpoint] = useState("movie")

  const {data, loading} = useFetch(`/${endpoint}/upcoming`) 

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Upcoming</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default Upcoming
