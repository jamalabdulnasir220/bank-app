import React from 'react'
import styles from './style'

import {  
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden" >
      
      {/* for the nav bar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      {/* Other sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
)

export default App
