import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ColorPicker from '../ColorPicker/ColorPicker';
import profileImg from '../../assets/client-3.png';
import badge from '../../assets/252d9cb3260ba21a035b997d4cb515a4.png';
import { Icon } from 'react-icons-kit';
import { phone } from 'react-icons-kit/icomoon/phone';
import { globe } from 'react-icons-kit/entypo/globe';
import { whatsapp } from 'react-icons-kit/icomoon/whatsapp';
import { envelope } from 'react-icons-kit/fa/envelope';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { youtube } from 'react-icons-kit/icomoon/youtube';
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2';
import { instagram } from 'react-icons-kit/feather/instagram';
import {settings} from 'react-icons-kit/ionicons/settings'
export default function Profile() {
  const [language, setLanguage] = useState('ar'); 

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="slectLanguage">
        <div class="dropdown">
          <span class="btn btn-light btn-sm dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Icon icon={settings} className='me-1' size={22} ></Icon> Languages
          </span>
          <ul class="dropdown-menu">
            <li><span class="dropdown-item" onClick={toggleLanguage}>ARABIC</span></li>
            <li><span class="dropdown-item" onClick={toggleLanguage}>ENGLISH</span></li>
          </ul>
        </div>
      </div>
      <ColorPicker />
      <div className="container py-5 text-center">
        <div className="imgContainer position-relative mx-auto mb-3">
          <div className="progileImg rounded-circle d-flex align-items-center justify-content-center">
            <img src={profileImg} alt="profileImg" className='img-fluid' />
          </div>
          <div className="badgeImg d-flex align-items-center justify-content-center">
            <img src={badge} alt="badge" className='img-fluid' />
          </div>
        </div>
        <div className="userName">
          <div className="name">
            <h2 className='text-burple fw-bold'>
              {language === 'en' ? 'Mohamed Hashem' : 'محمد الهاشم'}
            </h2>
          </div>
          <div className="title">
            <h5 className='text-burple'>
              {language === 'en' ? 'Development Manager' : 'مدير قسم التطوير'}
            </h5>
          </div>
          <div className="discription mt-3">
            <h6 className='text-muted'>
              {language === 'en'
                ? 'Turn your work into a comprehensive and secure digital system at the lowest possible cost and be one of Meta Egypt\'s distinguished clients.'
                : '.حول عملك إلي نظام رقمي متكامل وأمن وبأقل تكلفه ممكنة وكن أحد عملاء ميتا مصر المميزين'}
            </h6>
          </div>
        </div>
        <div className="contact mb-3">
          <Icon className='bg-light p-2 rounded-circle mx-1 text-primary cursor-pointer' size={25} icon={phone}></Icon>
          <Icon className='bg-light p-2 rounded-circle mx-1 text-primary cursor-pointer' size={25} icon={whatsapp}></Icon>
          <Icon className='bg-light p-2 rounded-circle mx-1 text-primary cursor-pointer' size={25} icon={envelope}></Icon>
          <Icon className='bg-light p-2 rounded-circle mx-1 text-primary cursor-pointer' size={25} icon={globe}></Icon>
        </div>
        <div className="socialMedia">
          <h5 className='text-light address-header mx-auto px-4 pb-1 mb-1'>
          {language === 'en' ? 'SOCIAL MEDIA' : 'وسائل التواصل الأجتماعي'}
            </h5>
          <div className="social-icons">
            <Icon icon={instagram} className='social-icon-instagram p-2 d-flex align-items-center justify-content-center rounded-circle mx-1 cursor-pointer' size={23}></Icon>
            <Icon icon={facebook} className='social-icon-facebook p-2 d-flex align-items-center justify-content-center rounded-circle mx-1 cursor-pointer' size={23}></Icon>
            <Icon icon={twitter} className='social-icon-twitter p-2 d-flex align-items-center justify-content-center rounded-circle mx-1 cursor-pointer' size={23}></Icon>
            <Icon icon={linkedin2} className='social-icon-linkedin p-2 d-flex align-items-center justify-content-center rounded-circle mx-1 cursor-pointer' size={23}></Icon>
            <Icon icon={youtube} className='social-icon-youtube p-2 d-flex align-items-center justify-content-center rounded-circle mx-1 cursor-pointer' size={23}></Icon>
          </div>
        </div>
      </div>
    </>
  );
}
