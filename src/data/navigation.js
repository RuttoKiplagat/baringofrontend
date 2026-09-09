export default [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Our History', path: '/history' },
      { label: "Principal's Message", path: '/principal' },
      { label: 'Administration', path: '/administration' }
    ]
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Academic Programs', path: '/academics' },
      { label: 'Departments', path: '/departments' },
      { label: 'Our Teachers', path: '/teachers' }
    ]
  },
  {
    label: 'Student Life',
    path: '/student-life',
    children: [
      { label: 'Student Life', path: '/student-life' },
      { label: 'Sports', path: '/sports' },
      { label: 'Clubs & Societies', path: '/clubs' }
    ]
  },
  { label: 'Admissions', path: '/admissions' },
  { label: 'News', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' }
]
