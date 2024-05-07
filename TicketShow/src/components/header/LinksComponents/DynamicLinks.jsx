import React from 'react'
import links from '../../../props/links.json'



 function LinksDin(){
    return(
        <div  className='link-Dynamic'>
        {links.map((link, index) => (
          <a key={index} href={link.Url}>
            {link.text}
          </a>
        ))}
      </div>
    );
}

export default LinksDin;