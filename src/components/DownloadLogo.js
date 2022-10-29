import React, { useRef } from 'react'
import NavBar from './NavBar'
import * as htmlToImage from 'html-to-image';

const DownloadLogo = (props) => {
    const divRef=useRef()
    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(divRef.current);
        const link = document.createElement('a');
        link.download = "Logo.png";
        link.href = dataUrl;
        link.click();
      }
  return (
    <>
    <NavBar back="/customizeLogo"/>
    <div id="chooseSpace">
    <h1>Congratulations on your new logo</h1>
    <h2>Download your free logo now</h2>
    <div id="logoEditingDiv" style={{transform:"scale(0.7)",margin:"-45px 0 0"}}>
            <div ref={divRef} className='logoEditingDivInner' id={props.logo}>
                <p className='logoName'>{props.name}</p>
                <p className='logoSlogan'>{props.slogan}</p>
            </div>
        </div>
    </div>
    <div id="footer">
        <button id="btnNext" onClick={downloadImage}>DOWNLOAD</button>
    </div>
    </>
  )
}

export default DownloadLogo