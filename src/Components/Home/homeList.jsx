import { FaChartPie, FaHeart, FaTrophy, FaStar, FaShieldAlt } from 'react-icons/fa';
import { HiUserGroup, HiOutlineWifi } from 'react-icons/hi';
import { MdOutlineDesignServices, MdOutlineDeveloperBoard, MdOutlineDiscount, MdRocketLaunch } from 'react-icons/md';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import man from '../../Images/team/man.jpg';
import woman1 from '../../Images/team/woman1.jpg';
import woman2 from '../../Images/team/woman2.jpg';

export const rewardsList = [
  {
    icon: <FaChartPie />,
    total: 90,
    label: 'Completed Projects',
  },
  {
    icon: <FaHeart />,
    total: 120,
    label: 'Happy Clients',
  },
  {
    icon: <FaTrophy />,
    total: 90,
    label: 'Awards',
  },
  {
    icon: <HiUserGroup />,
    total: 100,
    label: 'Team',
  },
];

export const servicesList = [
  {
    icon: <MdOutlineDesignServices />,
    label: 'UI/UX Design',
  },
  {
    icon: <MdOutlineDeveloperBoard />,
    label: 'Development',
  },
  {
    icon: <MdOutlineDiscount />,
    label: 'Marketing',
  },
  {
    icon: <HiOutlineWifi />,
    label: 'Provider',
  },
];

export const benefitList = [
  {
    icon: <FaStar />,
    label: 'Quality products',
  },
  {
    icon: <GiEarthAsiaOceania />,
    label: 'Discover & sharing',
  },
  {
    icon: <FaShieldAlt />,
    label: 'Secure & valueable',
  },
  {
    icon: <MdRocketLaunch />,
    label: 'Build faster',
  },
];

export const teamList = [
  {
    image: man,
    name: 'Mark',
    job: 'Lead Developer',
  },
  {
    image: woman1,
    name: 'Sophia',
    job: 'Lead Marketing',
  },
  {
    image: woman2,
    name: 'Denera',
    job: 'Lead Designer',
  },
];

export const feedBacks = [
  {
    id: 1,
    name: 'Stevens',
    office: 'companyA.inc',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima quos. Porro ad ab repellendus obcaecati error id quod numquam.',
  },
  {
    id: 2,
    name: 'Claudia',
    office: 'companyB.inc',
    text: 'dolor sit amet consectetur, adipisicing elit. Repellendus, minima quos. Porro ad ab repellendus obcaecati error id quod numquam Lorem ipsum.',
  },
  {
    id: 3,
    name: 'Olivia',
    office: 'companyC.inc',
    text: 'Repellendus, minima quos. Porro ad ab repellendus obcaecati error id quod numquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];

export const priceDetail = [
  {
    amount: 35,
    plan: 'personal plan',
  },
  {
    amount: 55,
    plan: 'agency plan',
  },
  {
    amount: 75,
    plan: 'developer plan',
  },
];
