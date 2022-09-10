import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com/adama-bagayoko/devops/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Adamsbag' target='_blank'><BsGithub/></a>
        <a href='https://twitter.com/AdamsBag' target='_blank'><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocial