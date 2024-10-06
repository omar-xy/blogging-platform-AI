import createCampaign from '../assets/create-campaign.svg';
import dashboard from '../assets/dashboard.svg';
import logo from '../assets/logo.svg';
import Vector from '../assets/Vector.svg';
import payment from '../assets/payment.svg';
import profile from '../assets/profile.svg';
import logout from '../assets/logout.svg';
import withdraw from '../assets/withdraw.svg';
import tagType from '../assets/type.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import money from '../assets/money.svg';
import loader from '../assets/loader.svg';
import thirdweb from '../assets/thirdweb.png';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/make-payment',
    disabled: false,
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/withdraw',
    disabled: false,
  },
    {
      name: 'settings',
      imgUrl: Vector,
      link: '/settings',
      disabled: false,
    },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
  },
];
