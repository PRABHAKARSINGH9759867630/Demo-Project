
// Define navigation items structure
export const getNavItems = () => [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About Us',
    link: '/about',
    submenu: [
      { label: 'Vision & Mission', link: '/about/vision-mission' },
      { label: 'Principal\'s Message', link: '/about/principals-message' },
      { label: 'Chairman\'s Message', link: '/about/chairmans-message' },
      { label: 'School History', link: '/about/history' },
      { label: 'Affiliations', link: '/about/affiliations' },
    ],
  },
  {
    label: 'Messages',
    link: '/messages',
  },
  {
    label: 'Our Mentors',
    link: '/mentors',
  },
  {
    label: 'Academics',
    link: '/academics',
    submenu: [
      { label: 'Curriculum', link: '/academics/curriculum' },
      { label: 'Faculty', link: '/academics/faculty' },
      { label: 'Academic Calendar', link: '/academics/calendar' },
      { label: 'Examinations', link: '/academics/examinations' },
    ],
  },
  {
    label: 'Admission',
    link: '/admissions',
    submenu: [
      { label: 'Admission Process', link: '/admissions/process' },
      { label: 'Enquiry Form', link: '/admissions/enquiry' },
      { label: 'Fee Structure', link: '/admissions/fees' },
      { label: 'Registration', link: '/admissions/registration' },
    ],
  },
  {
    label: 'Achievements',
    link: '/achievements',
  },
  {
    label: 'Board Results',
    link: '/board-results',
  },
  {
    label: 'Gallery',
    link: '/gallery',
  },
  {
    label: 'Parents Corner',
    link: '/parents-corner',
  },
  {
    label: 'Transfer Certificate',
    link: '/transfer-certificate',
  },
  {
    label: 'Contact Us',
    link: '/contact',
  },
  {
    label: 'Career',
    link: '/career',
  },
  {
    label: 'Alumni',
    link: '/alumni',
  },
];
