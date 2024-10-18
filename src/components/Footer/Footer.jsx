import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import {socialLinks,quickLinks01,quickLinks02,quickLinks03} from '../../constants/constants';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>

          <div>
            <img
              src={logo}
              alt="logo" 
            />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright @ {year} developed by Bhargava Teja All Rigts Are Reserved</p>

            <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link,index) => (
              <Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' key={index} to={link.path}>
                {link.icon}
              </Link>
            ))}
          </div>

          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>

            <ul>
              {quickLinks01.map((item,index) => (
                <li key={index} className='mb-4'>
                  <Link 
                    to={item.path}
                    className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I Want to: </h2>

            <ul>
              {quickLinks02.map((item,index) => (
                <li key={index} className='mb-4'>
                  <Link 
                    to={item.path}
                    className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>

            <ul>
              {quickLinks03.map((item,index) => (
                <li key={index} className='mb-4'>
                  <Link 
                    to={item.path}
                    className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </footer>
  )
};

export default Footer;