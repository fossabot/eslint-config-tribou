// @flow
import React from 'react'
import css from './Home.style.css'


import type { Props } from './Home.index'


const Home = (props: Props): React$Element<any> => {

  return (
    <div className={`${css.home} pt7 tc`}>
      This is the app...
      <ul>
        <li>This is a test item</li>
      </ul>
    </div>
  )

}


export default Home
