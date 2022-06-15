import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://www.linkedin.com/in/mykeduong/" target="_blank">
              <BsLinkedin />
        </a>
        <a href="https://github.com/MykeDuong" target="_blank">
            <BsGithub />
        </a>
        <a href="https://www.facebook.com/hongminh4402" target="_blank">
            <FaFacebookF />
        </a>
    </div>
  )
}

export default SocialMedia