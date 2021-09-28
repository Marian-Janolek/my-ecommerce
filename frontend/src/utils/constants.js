import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

export const links = [
  { id: 1, text: 'home', url: '/' },
  {
    id: 2,
    text: 'new',
    url: '/new',
  },
  {
    id: 3,
    text: 'men',
    url: '/men',
  },
  {
    id: 4,
    text: 'women',
    url: '/women',
  },
  {
    id: 5,
    text: 'children',
    url: '/children',
  },
  {
    id: 6,
    text: 'sale',
    url: '/sale',
  },
];

export const footerLinks = [
  {
    id: 1,
    text: 'delivery',
    url: '/delivery',
  },
  {
    id: 2,
    text: 'payments',
    url: '/payments',
  },
  {
    id: 3,
    text: 'products reclaim',
    url: '/reclaim',
  },
  {
    id: 4,
    text: 'products exchange',
    url: '/exchange',
  },
];

export const socials = [
  {
    id: 1,
    icon: <FaFacebook />,
    url: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: <FiInstagram />,
    url: 'https://www.instagram.com',
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: 'https://www.twitter.com',
  },
];
