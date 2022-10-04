import React from "react";

const FeaturedBlogs = () => {
  return (
    <div id="featuredBlogs">
      <div id="featuredBlogsInner">
        <h2>Featured Blogs</h2>
        <div>
          <div>
            <img src="https://www.datocms-assets.com/40521/1660214320-greythr_meets-2_300x175-v1.jpg?auto=format&dpr=0.84&w=300" />
            <div><p className="blogHead">
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
            <div><p className="blogHead">
            How Much Does an HRMS Cost?
            </p>
            <div className="blogsDetails">
              <p className="blogWriter">By greytHR</p>
              <p className="blogDate">August 11, 2022</p>
            </div>
            </div>
          </div>
          <div>
            <img src="https://www.datocms-assets.com/40521/1655811284-featured-image-parichay-20-300x175-v1.jpg?auto=format&dpr=0.84&w=300" />
            <div><p className="blogHead">
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
    </div>
  );
};

export default FeaturedBlogs;
