import React from 'react'
import CompanionCard from './companions/CompanionCard'
import CompanionList from './companions/CompanionList'
import CTA from './companions/CTA'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6a"
        />
        <CompanionCard
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={35}
          color="#bde7ff"
        />
      </section>

      <section className='home-section'>
        <CompanionList />
        <CTA/>
      </section>
    </main>
  )
}

export default Page