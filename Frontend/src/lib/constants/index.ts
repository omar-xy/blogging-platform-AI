import {createCampaign, dashboard, Vector, payment, profile, logout, withdraw} from '../../assets';


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
