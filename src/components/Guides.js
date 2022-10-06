import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Guides = () => {
  return (
    <div>
          <div>
      <div className="resources">
        <h1>Guides</h1>
      </div>
      <div className="resourcesCategory">
        <div className="resourcesCategoryInner">
          <div id="resourcesCards">
            <div>
              <img src="https://www.datocms-assets.com/40521/1651664267-statutory-compliance-banner.png?auto=format&dpr=0.19&w=1500" />
              <div>
                <p className="blogHead">A Complete Guide to Statutory Compliances in Payroll
                </p>
                <p>Learn all about labour laws and avoid unnecessary risks from non-compliance.</p>
                <div className="resourcesBlogDetails">
                  <LocalOfferIcon style={{color:"#00a1f2",fontSize:"13px"}}/><p>STATUTORY COMPLIANCES</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://www.datocms-assets.com/40521/1621089335-pillar-page-header-images-1500-1000.png?auto=format&dpr=0.19&w=1500" />
              <div>
                <p className="blogHead">A Guide to Attendance Management</p>
                <p>Everything you need to know about managing attendance for your company.</p>
                <div className="resourcesBlogDetails">
                <LocalOfferIcon style={{color:"#00a1f2",fontSize:"13px"}}/><p>ATTENDANCE MANAGEMENT</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://www.datocms-assets.com/40521/1613625661-hrms.png?auto=format&dpr=0.35&w=800" />
              <div>
                <p className="blogHead">A Guide to HRMS
                </p>
                <p>Everything you need to know about managing HR functions with technology.</p>
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

export default Guides