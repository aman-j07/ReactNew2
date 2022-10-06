import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Templates = () => {
  return (
    <div>
          <div>
      <div className="resources">
        <h1>FREE HR POLICY TEMPLATES</h1>
      </div>
      <div className="resourcesCategory">
        <div className="resourcesCategoryInner">
          <div id="resourcesCards">
            <div>
              <img src="https://www.datocms-assets.com/40521/1624873314-internet-and-email-policy-for-employee-card-image.png?auto=format&w=282" />
              <div>
                <p className="blogHead"> Internet and Email Policy
                </p>
                <p>Set up guidelines on the importance of usage, handling and managing IT</p>
                <div className="resourcesBlogDetails">
                  <LocalOfferIcon style={{color:"#00a1f2",fontSize:"13px"}}/><p>HRMS</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://www.datocms-assets.com/40521/1624878479-maternity-leave-policy-card-image.png?auto=format&w=282" />
              <div>
                <p className="blogHead"> Maternity Leave Policy</p>
                <p>Provides guidelines to manage an employee’s absence from work due to maternity or adoption.</p>
                <div className="resourcesBlogDetails">
                <LocalOfferIcon style={{color:"#00a1f2",fontSize:"13px"}}/><p>HRMS</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://www.datocms-assets.com/40521/1635325885-internal-job-posting-policy-card-image.png?auto=format&w=282" />
              <div>
                <p className="blogHead">Anti-Fraud Policy
                </p>
                <p>Outline expectations from employees in your organization with respect to integrity, honesty and respectful conduct.</p>
                <div className="resourcesBlogDetails"><LocalOfferIcon style={{color:"#00a1f2",fontSize:"13px"}}/><p>HRMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="divResourcesCategories">
            <div id="divSearch">
              <input placeholder="Search"/><SearchIcon style={{color:"rgb(117, 117, 117)",cursor:"grab"}}/>
            </div>
            <ul id="ulResourceTypes">
              <li>Resources Types</li>
              <li>Blog</li>
              <li>Data Capture Template</li>
              <li>Guide</li>
              <li>Letter Template</li>
              <li>Policy Template</li>
            </ul>
            <ul id="ultopics">
            <li>Topics</li>
            <li>Attendance</li>
            <li>Attendance Management</li>
            <li>COVID Vaccination</li>
            <li>COVID-19</li>
            </ul>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Templates