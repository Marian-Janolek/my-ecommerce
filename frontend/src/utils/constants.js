import { FaFacebook, FaTwitter, FaTumblrSquare } from 'react-icons/fa';
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
  {
    id: 4,
    icon: <FaTumblrSquare />,
    url: 'https://www.tumblr.com',
  },
];

export const aboutUs = [
  {
    id: 1,
    text: 'sortiment',
    url: '/men',
  },
  {
    id: 2,
    text: 'our stores',
    url: '/stores',
  },
  {
    id: 3,
    text: 'FAQ',
    url: '/faq',
  },
];

export const supportLinks = [
  {
    id: 1,
    text: 'product help',
    url: '/help',
  },
  {
    id: 2,
    text: 'customer care',
    url: '/care',
  },
  {
    id: 3,
    text: 'authorized service',
    url: '/service',
  },
];

export const sublinks = [
  {
    page: 'men',
    links: [
      {
        id: 1,
        text: 'sneakers',
        url: '/sneakers',
      },
      {
        id: 2,
        text: 'boots',
        url: '/boots',
      },
      {
        id: 3,
        text: 'outdoor',
        url: '/outdoor',
      },
      {
        id: 4,
        text: 'sandals',
        url: '/sandals',
      },
      {
        id: 5,
        text: 'socks',
        url: '/socks',
      },
    ],
  },
  {
    page: 'women',
    links: [
      {
        id: 1,
        text: 'sneakers',
        url: '/sneakers',
      },
      {
        id: 2,
        text: 'boots',
        url: '/boots',
      },
      {
        id: 3,
        text: 'outdoor',
        url: '/outdoor',
      },
      {
        id: 4,
        text: 'winter boots',
        url: '/winterBoots',
      },
      {
        id: 5,
        text: 'sandals',
        url: '/sandals',
      },
      {
        id: 6,
        text: 'leggins',
        url: '/leggins',
      },
      {
        id: 7,
        text: 'socks',
        url: '/socks',
      },
    ],
  },
  {
    page: 'children',
    links: [
      {
        id: 1,
        text: 'sneakers',
        url: '/sneakers',
      },
      {
        id: 2,
        text: 'boots',
        url: '/boots',
      },
      {
        id: 3,
        text: 'footbal boots',
        url: '/footballBoots',
      },
      {
        id: 4,
        text: 'winter boots',
        url: '/winterBoots',
      },
    ],
  },
  {
    page: 'home',
    links: [],
  },
  {
    page: 'new',
    links: [],
  },
  {
    page: 'sale',
    links: [],
  },
];

export const featured = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630181/my-ecommerce/featured1_c78blm.png',
    name: 'Nike Jordan',
    price: 149.99,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630181/my-ecommerce/featured2_fowjzh.png',
    name: 'Nike Free RN',
    price: 129.99,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/featured3_xorptb.png',
    name: 'Yeezy boost ',
    price: 179.99,
  },
];
export const newCollection = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/women1_hyh6az.png',
    name: 'Nike Performance',
    price: 89.9,
    size: ['A', 37, 38, 38.5, 39.5, 40, 41, 41.5, 43],
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630181/my-ecommerce/women2_gtiblg.png',
    name: 'Nike Air Huarache',
    price: 59.9,
    size: ['B', 36, 38, 38.5, 39.5, 40, 43],
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/women3_xl4gal.png',
    name: 'Nike Air Max LTD 3',
    price: 49.9,
    size: ['C', 37, 38, 38.5, 39.5, 40, 41, 41.5, 43],
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630181/my-ecommerce/women4_rc5vix.png',
    name: 'Nike Air Max 270',
    price: 109.9,
    size: ['D', 37, 38, 38.5, 39.5, 40, 41, 41.5, 43],
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634648111/my-ecommerce/new5_h7jlhd.png',
    name: 'Nike Revolution 5',
    price: 109.9,
    size: ['E', 37, 38, 38.5, 39.5, 40, 41, 41.5, 43],
  },
];

export const ourSortiment = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634655483/my-ecommerce/ourSortiment1_iwoh0z.jpg',
    title: 'sandals',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634654510/my-ecommerce/ourSortiment2_fcyvts.jpg',
    title: 'outdoor',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment3_tm3emk.jpg',
    title: 'boots',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment4_yjyi7y.jpg',
    title: 'socks',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment5_fxw3gh.jpg',
    title: 'leggins',
  },
];

export const men = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634739156/my-ecommerce/men_sneakers_mnb8lz.jpg',
    title: 'sneakers',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634739156/my-ecommerce/men_boots_hszhwt.jpg',
    title: 'boots',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634654510/my-ecommerce/ourSortiment2_fcyvts.jpg',
    title: 'outdoor',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634739156/my-ecommerce/men_sandals_vljetn.jpg',
    title: 'sandals',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634739156/my-ecommerce/men_socks_ng3kcb.jpg',
    title: 'socks',
  },
];
export const women = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634740555/my-ecommerce/women_sneakers_dqm87k.jpg',
    title: 'sneakers',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634740555/my-ecommerce/women_boots_qd2znw.jpg',
    title: 'boots',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634654510/my-ecommerce/ourSortiment2_fcyvts.jpg',
    title: 'outdoor',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634740555/my-ecommerce/women_winter_boots_kcs7ul.jpg',
    title: 'winter',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634655483/my-ecommerce/ourSortiment1_iwoh0z.jpg',
    title: 'sandals',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment5_fxw3gh.jpg',
    title: 'leggins',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment4_yjyi7y.jpg',
    title: 'socks',
  },
];
export const children = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634742462/my-ecommerce/children_sneakers_eaeavu.jpg',
    title: 'sneakers',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634742662/my-ecommerce/children_football_anx3jt.jpg',
    title: 'football',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634742462/my-ecommerce/children_outdoor_pb5w41.jpg',
    title: 'outdoor',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634742662/my-ecommerce/children_winter2_rt37dv.jpg',
    title: 'winter',
  },
];

export const stores = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634887937/my-ecommerce/store1_aoazfz.jpg',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634887937/my-ecommerce/store2_cgzyxp.jpg',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634887937/my-ecommerce/store3_ilnsni.jpg',
  },
];

export const storesInfo = [
  {
    id: 1,
    city: 'bratislava',
    name: 'sport, avion shopping',
    postCode: '811 09',
    address: 'pribinova 8',
  },
  {
    id: 2,
    city: 'nitra',
    name: 'sport, galeria mlyny',
    postCode: '949 01',
    address: 'stefanikova 61',
  },
  {
    id: 3,
    city: 'zvolen',
    name: 'sport, zvolenska europa',
    postCode: '960 01',
    address: 'nam SNP 63',
  },
  {
    id: 4,
    city: 'poprad',
    name: 'sport, oc forum poprad',
    postCode: '058 01',
    address: 'pitniky 2',
  },
];
