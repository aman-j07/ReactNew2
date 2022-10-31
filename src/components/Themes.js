import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Themes = () => {
  return (
    <div id="themes">
        <NavBar/>
        <ul id="themesNav">
        <li>Shopify Online store</li>
        <li id="divider">|</li>
        <li>Overview</li>
        <li>Examples</li>
        <li>Themes</li>
        </ul>
        <section className="sectionOne">
        <div className="sectionOneHead"><h3>SHOPIFY ECOMMERCE THEMES</h3>
        <h1>Showcase your brand online with free ecommerce themes</h1>        
        <h2>Find the right theme and customize it to fit your brand.</h2>
        </div>
        <img id="imgThemeDawn" src="dawnTheme.png"/>
        <div id="dawnThemeText">
        <a>Dawn</a>
        <p id="dawnThemeUnderText">1 style</p>
        <p id="dawnThemePara">Tell your story—however you want—with the theme that flexes to meet your brand's needs. Dawn's adaptable layout, site-wide cross-selling, and media-optimized product pages make it uniquely designed to boost sales. Easier to customize than ever, sections and blocks let you add, rearrange, and edit every page without any coding.</p>
        <a id="dawnThemeLink">Learn more about Dawn and the latest online store features-{'>'}</a> 
        </div>
        <div id="sectionOneHead">
        <h2>Explore more free themes</h2>
        <p>Get the look and feel you want for your store with other free themes. Find the right expression of your brand’s unique style.</p>
        </div>
        </section>
        <section className='sectionOne sectionTwo'>
          <div className='sectionOneHead sectionTwoHead'>
            <h2>Discover free and paid themes created by world-class designers in the Shopify Theme Store</h2>
            <Link to='/themesHome'><button id="btnExploreThemes">Explore Themes</button></Link>
          </div>
          <img id="imgAtlanticTheme" src="atlanticTheme.webp"/>
        </section>
        <section className='sectionThree'>
          <h2>Start your business journey with Shopify</h2>
          <p>Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
          <button id="btnStartTrial">Start Free Trial</button>
        </section>
    </div>
  )
}

export default Themes