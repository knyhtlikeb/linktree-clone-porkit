import logo from './logo.svg';
import './App.css';
import profilePic from './porkit.jpg';
import { FaGithub,
         FaInstagram, 
         FaTelegram, 
         FaTwitter, 
         FaYoutube } from 'react-icons/fa';
         // eslint-disable-next-line 
         import { createClient } from "@supabase/supabase-js";

function App() {
  
  const links = [
    {
      url: 'https://www.youtube.com/',
      title: 'YouTube',
      icon: <FaYoutube />
    },
  {
    url: 'https://www.twitter.com/',
    title: 'Twitter',
    icon: <FaTwitter />
  },
  {
    url: 'https://www.telegram.com/',
    title: 'Telegram',
    icon: <FaTelegram />
  },
  {
    url: 'https://www.instagram.com/',
    title: 'Instagram',
    icon: <FaInstagram />
  },
  {
    url: 'https://www.github.com/',
    title: 'GitHub',
    icon: <FaGithub />
  },
  ];

  return (
    <div className="App">
      <div className="App-header container mx-auto">
        <img src={profilePic} className="profile-pic w-20 h-20 mb-4 rounded-full" alt="logo" />
        <ul className='flex flex-col w-full'>
          {
            links.map((link, index) => (
              <li key={index} className='cursor-pointer m-2 py-3 px-10 border-black border-2 text-sm md:text-md text-slate-900'>
                <a href={link.url} className='flex items-center' title={link.title} target="_blank" rel='nonreferrer '>
                 {link.icon} <p className='ml-3'>{link.title}</p>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;