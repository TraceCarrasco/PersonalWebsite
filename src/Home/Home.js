import React from 'react'
import "./Home.css"
class Home extends React.Component {
  render() {
    return (
      <div id="main">
        <img id="portrait" src="./Home/portrait.jpg" alt="Trace Carrasco"/>
        <br/><br/>
        <a href="https://www.linkedin.com/in/trace-carrasco-54b897104/">
          <img src="./Home/icons/linkedin.png" id="icon_image" alt="LinkedIn"/>
        </a>
        <br/>
        <a href="https://github.com/TraceCarrasco">
          <img src="./Home/icons/github.png" id="icon_image" alt="Github"/>
        </a>
        <br/>
        <a href="mailto: messagetrace@gmail.com">
          <img src="./Home/icons/email.png" id="icon_image" alt="Email"/>
        </a>
      </div>
    )
  }
}

export default Home