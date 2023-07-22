import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-one">
            <img style={{width:70, backgroundColor:"white",padding:5 ,borderRadius:10}} src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1683874845/logo.png" alt="sopping-logo"/>
             <p>Specialised in providing high quality stylish product</p>
        </div>
        <div className='footer-two'>
            <ul style={{listStyleType:'none'}}>
                <li>COMPANY:</li>
                <li>About</li>
                <li>Terms of use</li>
                <li>Policies</li>
            </ul>
            <ul>
                <li>CONTACTS:</li>
                <li><a>github</a></li>
                <li><a>Twitter</a></li>
                <li><a>Linkedin</a></li>
            </ul>
        </div>
         
    </div>
  )
}

export default Footer