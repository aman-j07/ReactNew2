import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Capital = () => {
  return (
    <div id="capital">
      <NavBar />
      <section id="capitalSectionOne">
        <div className="content">
          <h2>SHOPIFY CAPITAL</h2>
          <h1>
            Business funding.
            <br />
            Your way.
          </h1>
          <p>
            Get the freedom to grow your business the way you want with fast
            funding and flexible payments through Shopify Capital.
          </p>
          <Link to="/signUp">
            <button id="btnStartTrial" className="btnTryTheme">
              Login to check Eligibility
            </button>
          </Link>
          <div>
            Don’t have a Shopify store? <a>Start a free trial.</a>
          </div>
        </div>
        <img src="capitalWoman.png" />
      </section>
      <section id="capitalSectionTwo">
        <div>
          <img src="hassleFree.png" />
          <h2>Fast, hassle-free application</h2>
          <p>
            Apply for funding with minimal paperwork and no personal credit
            checks.
          </p>
        </div>
        <div>
          <img src="fundsDays.png" />
          <h2>Funds in days, not weeks</h2>
          <p>
            Receive funds within days if approved and use them as you see fit.
          </p>
        </div>
        <div>
          <img src="autoPayment.png" />
          <h2>Automated payments</h2>
          <p>
            Repay funding as a percent of your store's daily sales, so payments
            flex with your business.
          </p>
        </div>
        <div>
          <img src="peaceMind.png" />
          <h2>Peace of mind</h2>
          <p>
            Secure your offer at a fixed cost—no compounding interest, no
            surprises.
          </p>
        </div>
      </section>
      <section id="capitalSectionThree">
        <h1>Your money, your moves</h1>
        <p>
          From buying inventory to ramping up your marketing efforts and
          <br /> hiring more staff, you decide how to use your business funds.
        </p>
        <div id="capitalSectionThreeFlexDiv">
          <div className="capitalSectionThreeFlexDivs">
            <img src="shakingHands.png" />
            <h4>Hire who you need</h4>
            <p>
              Bring on experts or freelancers, compete for top talent, and
              increase your team’s productivity with the right people on board.
            </p>
            <button id="btnStartTrial" className="btnTryTheme">
              Build your dream team
            </button>
          </div>
          <div className="capitalSectionThreeFlexDivs">
            <img src="capitalBoxes.png" />
            <h4>Beat backorders</h4>
            <p>
              Stock up on bestsellers, take advantage of bulk discounts, and get
              ready for seasonal sales without compromising your cash flow.
            </p>
            <button id="btnStartTrial" className="btnTryTheme">
              Stock up on inventory
            </button>
          </div>
          <div className="capitalSectionThreeFlexDivs">
            <img src="dartBoard.png" />
            <h4>Stay competitive</h4>
            <p>
              Keep your ads running during peak seasons, optimize your online
              store for SEO, and promote your brand on social to reach more
              buyers and boost conversions.
            </p>
            <button id="btnStartTrial" className="btnTryTheme">
              Ramp up your marketing
            </button>
          </div>
        </div>
        <img src="hearthyFoods.png" />
        <img src="allThingsRealEstate.png" />
        <img src="ettitude.png" />
      </section>
      <section id="capitalSectionFour">
        <h1>
          Learn more about funding
          <br /> your business
        </h1>
        <div id="capitalSectionFourFlexDiv">
          <div className="capitalSectionFourFlexDivs capitalSectionThreeFlexDivs">
            <img src="blog.svg" />{" "}
            <div>
              <h2>BLOGS</h2>{" "}
              <a>
                Learn how to recognize when your business is ready for funding.
              </a>
            </div>
          </div>
          <div className="capitalSectionFourFlexDivs capitalSectionThreeFlexDivs">
            <img src="helpDocs.svg" />
            <div>
              <h2>HELP DOCS</h2>
              <a>
                Learn how funding through Shopify Capital can work for your
                business.
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="capitalSectionFive">
        <div className="content">
          <h2>
            Try Shopify for free, and explore all the <br/>tools and services you
            need to start,<br/> run, and grow your business.
          </h2>
          <form>
            <input placeholder="Enter your email address" />
            <Link to="/signUp"><button id="btnStartTrial">Start Free Trial</button></Link>
          </form>
          <p id="paraSmall">
            Try Shopify free for 3 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Shopify.
          </p>
        </div>
        <img src="greenSteps.svg" />
      </section>
    </div>
  );
};

export default Capital;
