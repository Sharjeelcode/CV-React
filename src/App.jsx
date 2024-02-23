
import './App.css'
import image from './assets/download.png'
function App() {

  return (


    <div className="cv">
      <div className="sider">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="name">
          <h1>Thomas<br></br>Beaslay</h1>
        </div>
        <div className="name">
          <p>Administrative<br></br>Assistant</p>
        </div>
        <div className="content">
          <div className="center-content">
            <h6>Administrative Assistant with 6 years of experience organizing presentations, preparing facility
              reports, and maintaining the utmost confidentiality. Possess a BA in History and expertise in
              Microsoft Excel. Looking to leverage my knowledge and experience into a role as Project Manager
            </h6>
            <div className="detail">
              <p><i className="fa fa-phone" aria-hidden="true"></i> (123) 456-7895</p>
              <p><i className="fa fa-map-marker" aria-hidden="true"></i> Chicago, IL 60522</p>
              <p><i className="fa fa-envelope" aria-hidden="true"></i> thomasbeasley@gmail.com</p>
              <p><i className="fa fa-globe" aria-hidden="true"></i> ddin.com/in/thomasbeachry</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <h1>PROFESSIONAL EXPERIENCE</h1>
        <h3>Administrative Assistant</h3>
        <div className="year">
          <h2>Redford & Sons, Chicago, L</h2>
          <h2>Sep 2019-Present</h2>
        </div>
        <ul>
          <li>Schedule and coordinate meetings, appointments, and travel arrangements for supervisors and managers</li>
          <li>Traned 2 administrative assistants during a period of company expansion to ensure attention to detail and adherence to company</li>
          <li>Developed new filing and organizational practices, saving the company $1,000 per year in contracted labor expenses</li>
          <li>Maintain utmost discretion when dealing with sensitive topics</li>
        </ul>
        <h3>Secretory</h3>
        <div className="year">
          <h2>Bright Spot Ltd-Boston, Ma</h2>
          <h2>Jun 2017-Aug 2019</h2>
        </div>
        <ul>
          <li>Type documents such as corespondence, drafts, memos, and emails, and prepared 3 reports weekly for management</li>
          <li>Opened, sorted, and distributed incoming messages and correspondence</li>
          <li>Purchased and maintained office suppled inventories, and always carefully adhered to budgeting practices</li>
          <li>Greeted visitors and helped them either find the appropriate person or schedule an appointment</li>
        </ul>
        <h3>Secretory</h3>
        <div className="year">
          <h2>Bright Spot Ltd-Boston, Ma</h2>
          <h2>Jun 2017-Aug 2019</h2>
        </div>
        <ul>
          <li>Recorded, transcribed and distributed weekly meetings</li>
          <li>Answered upwards of 20 phone calls daily, taking detailed messages</li>
          <li>Arranged appointments and ensured executives arrived to meetings with clients on time</li>

        </ul>
        <h1>EDUCATION</h1>
        <h3>Rachelor of Arts in English Literature</h3>
        <div className="year">
          <h2>River Brook University, Chicago, IL</h2>
          <h2>May 2015</h2>
        </div>
        <h2 style={{fontWeight:500}} >Graduated Magna Cum Laude</h2>
        <div className="last-head">
          <div className="skills">
            <h1>KEY SKILLS</h1>
            <ul>
              <li>Microsoft Office</li>
              <li> HubSpot</li>
              <li>MailChimp</li>
              <li>Google Workspace</li>
            </ul>

          </div>
          <div className="skills">
            <h1>ADDITIONAL SKILLS</h1>
            <ul>
              <li>Spanish (Intermediate)</li>
              <li>Typing speed of 70 WPM</li>
              <li> Problem solving</li>
              <li>Team leadership</li>
            </ul>
          </div>



        </div>
      </div>

    </div>


  )
}

export default App
