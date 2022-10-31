import React from 'react'
import ThemesNavBar from './ThemesNavBar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BrowseThemes = () => {
  return (
    <div id="browseThemes">
        <ThemesNavBar/>
        <div id="browseThemesHead">
            <h1>Browse all themes</h1>
        </div>
        <div id="browseThemesBody">
            <div id="browseThemesBodyLeft">
                <div className='categoryDiv'><h6>Price <KeyboardArrowDownIcon/></h6>
                    <p className='categoryDivItems'>Free</p><p className='categoryDivItems'>Paid</p>
                </div>
                <div className='categoryDiv'><h6>Industry <KeyboardArrowDownIcon/></h6>
                    <p className='categoryDivItems'>Arts and crafts</p>
                    <p className='categoryDivItems'>Baby and kids</p>
                    <p className='categoryDivItems'>Books, music, and video</p>
                    <p className='categoryDivItems'>Business equipment and supplies</p>
                    <p className='categoryDivItems'>Clothing</p>
                    <p className='categoryDivItems'>Electronics</p>
                    <p className='categoryDivItems'>Food and drink</p>
                    <p className='categoryDivItems'>Hardware and automotive</p>
                    <p className='categoryDivItems'>Health and beauty</p>
                    <p className='categoryDivItems'>Home and decor</p>
                    <p className='categoryDivItems'>Jewelry and accessories</p>
                    <p className='categoryDivItems'>Outdoor and garden</p>
                    <p className='categoryDivItems'>Pet supplies</p>
                    <p className='categoryDivItems'>Restaurants</p>
                    <p className='categoryDivItems'>Services</p>
                    <p className='categoryDivItems'>Sports and recreation</p>
                    <p className='categoryDivItems'>Toys and games</p>
                    <p className='categoryDivItems'>Other</p>
                </div>
                <div className='categoryDiv'>Catalog Size <KeyboardArrowDownIcon/>
                    <p className='categoryDivItems'>1-9 products</p><p className='categoryDivItems'>10-199 products</p><p className='categoryDivItems'>200+ products</p>
                </div>
                <div className='categoryDiv'>Features <KeyboardArrowDownIcon/>
                <p className='categoryDivItems'>Age verifier</p>
                <p className='categoryDivItems'>Back-to-top button</p>
                <p className='categoryDivItems'>Before/after image slider</p>
                <p className='categoryDivItems'>Breadcrumbs</p>
                <p className='categoryDivItems'>Color swatches</p>
                <p className='categoryDivItems'>Countdown timer</p>
                <p className='categoryDivItems'>EU translations (EN, FR, IT, DE, ES)</p>
                <p className='categoryDivItems'>Event calendar</p>
                <p className='categoryDivItems'>In-menu promos</p>
                <p className='categoryDivItems'>Infinite scroll</p>
                <p className='categoryDivItems'>Mega menu</p>
                <p className='categoryDivItems'>Quick view</p>
                <p className='categoryDivItems'>Stock counter</p>
                <p className='categoryDivItems'>Store locator</p>
                <p className='categoryDivItems'>Sticky header</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrowseThemes