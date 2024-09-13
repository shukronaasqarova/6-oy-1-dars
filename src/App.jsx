import './App.css'
import logo from './logo.svg'
import chat from './chat.svg'
import experiences from './experiences.png'
import tg from './tg.svg'
import icon from './icon.svg'

function App() {


  return (
    <>
      <main className='container'>
        <div className="header">
          <div className="logos">
            <a href="#"><img src={logo} alt="logo" width={40} height={33} /></a>
            <a href="#">RouteX</a>
          </div>
          <div className="nav">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SERVICES</a>
            <a href="#">PROJECTS</a>
            <a href="#">BLOG</a>
          </div>
          <div className="address">
            <div className="first-address">  <a href="#"><img src={chat} alt="chat" width={55} height={55}/></a></div>
            <div className="second-address">
              <a href="#" className='help'>Need help?</a>
              <a href="#" className='number'>(307) 555-0133</a>
            </div>
          </div>
        </div>
        <div className="container main-section">
          <div className="title">
            <h1>Journey with Confidence <span className='m'>Migrate</span> with Us</h1>
            <p className='main-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
            <button className='main-button'>Learn More</button>
          </div>
        </div>
        <div className='journey'>
            <div className="first-journey">
              <img src={experiences} alt="experiences" width={600} height={618} />
            </div>
            <div className="second-journey">
              <div className="us">
              <h4>About Us</h4>
              <img src={tg} alt="tg" />
              </div>
              <h2 className='journey-title'>Unknown Wanderlust <br /><span className='into'>Your Journey into</span></h2>
              <p className="journey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
              <div className='guides'>
                  <div className="guid">
                    <div className="safety">
                      <img src={icon} alt="icon" width={14} height={16}/>
                      <h5>Safety Guides</h5>
                    </div>
                    <p className="guid-text">Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                  </div> 
                  <div className="guid">
                    <div className="safety">
                      <img src={icon} alt="icon" width={14} height={16}/>
                      <h5>Safety Guides</h5>
                    </div>
                    <p className="guid-text">Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                  </div> 
                  
              </div>
              <button className="guid-button">Read More</button>

            </div>
        </div>
      </main>
    </>
  )
}

export default App
