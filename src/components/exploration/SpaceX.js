import React, { useState } from 'react'
import Iframe from 'react-iframe'
import { v4 } from 'uuid'

const SpaceX = props => {

  const [article, setArticle] = useState(null)


  return (
    <div style={
      {
        color: 'white',
        textAlign: 'center',
      }
    }>
      <h1>Founded by Elon Musk, SpaceX is leading the world in space exploration. Click on a link from the left to read more about past exploits! </h1>
      <div className='article-selection'
        style={{
          height: '55vh',
          overflowY: 'auto',
          float:'left',
          padding: '4px',
          background: 'rgba(0,0,0, .8)'
        }}
      >
        {props.launches.map((launch) =>
          <li
            style={{ 
              listStyle: 'none', 
              marginLeft: '1vw',
              textDecoration: 'underline'
             }}
            key={v4()}
            onClick={() => setArticle(launch.links.article_link)}
          >
            {launch.mission_name}
          </li>

        )}
      </div>

      <Iframe url={article}
        width="900vw"
        height="600vh"
        id="myId"
        className="myClassname"
        display="initial"
        float="left"
        />
    </div>
  )
}

export default SpaceX
