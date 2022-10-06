import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Blogs = () => {
  return (
    <div>
      <div className="resources">
        <h1>Blogs</h1>
      </div>
      <div className="resourcesCategory">
        <div className="resourcesCategoryInner">
          <div id="resourcesCards">
            <div>
              <img src="https://www.datocms-assets.com/40521/1660214320-greythr_meets-2_300x175-v1.jpg?auto=format&dpr=0.84&w=300" />
              <div className="resourcesBlog">
                <p className="blogHead">
                  Digitisation. The Path to HR Transformation
                </p>
                <div className="blogsDetails">
                  <p className="blogWriter">By greytHR</p>
                  <p className="blogDate">August 11, 2022</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://www.datocms-assets.com/40521/1660194234-hrms_blog-5-post_300x175-v1.jpg?auto=format&dpr=0.84&w=300" />
              <div className="resourcesBlog">
                <p className="blogHead">How Much Does an HRMS Cost?</p>
                <div className="blogsDetails">
                  <p className="blogWriter">By greytHR</p>
                  <p className="blogDate">August 11, 2022</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://www.datocms-assets.com/40521/1655811284-featured-image-parichay-20-300x175-v1.jpg?auto=format&dpr=0.84&w=300" />
              <div className="resourcesBlog">
                <p className="blogHead">
                  How Does Employee Wellbeing Impact Business Productivity?
                </p>
                <div className="blogsDetails">
                  <p className="blogWriter">By greytHR</p>
                  <p className="blogDate">August 11, 2022</p>
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
  );
};

export default Blogs;
