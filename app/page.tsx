import React from 'react'
import CompanionCard from './companions/CompanionCard'
import CompanionList from './companions/CompanionList'
import CTA from './companions/CTA'
import { recentSessions } from '@/constants'

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
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page