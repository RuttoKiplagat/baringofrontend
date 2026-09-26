export default [
  {
    id: 1,
    name: 'Mathematics',
    slug: 'mathematics',
    description: 'The Mathematics department focuses on building strong analytical and problem-solving skills. We aim to demystify mathematics and make it accessible and enjoyable for all students.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop',
    icon: 'CalculatorIcon',
    head: {
      name: 'Mr. Kurui',
      position: 'Head of Mathematics',
      qualifications: 'B.Ed Science (Mathematics), M.Sc Applied Mathematics',
      image: '/images/staff/dos.jpg',
      email: '',
      message: 'Mathematics is not just about numbers; it is the language of logic and the foundation of modern innovation. We strive to create an environment where every student can excel.'
    },
    subjects: [
      { name: 'Mathematics', description: 'Core mathematics covering algebra, geometry, trigonometry, and calculus.' },
      { name: 'Further Mathematics', description: 'Advanced mathematical concepts for students pursuing STEM careers.' }
    ],
    teachers: [
      { name: 'Mr. Julius Komen', position: 'Senior Teacher', subject: 'Mathematics', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
      { name: 'Ms. Alice Cheptoo', position: 'Teacher', subject: 'Mathematics', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop' }
    ],
    facilities: [
      { name: 'Math Resource Center', description: 'A dedicated space with reference materials and models.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop' }
    ],
    activities: [
      { name: 'Mathematics Olympiad', description: 'Annual competition challenging students with complex problems.', icon: 'TrophyIcon' },
      { name: 'Pi Day Celebrations', description: 'Engaging mathematical games and activities every March 14th.', icon: 'SparklesIcon' }
    ],
    achievements: [
      { title: 'National Math Contest Winners', year: '2025', description: 'First place in the Rift Valley Regional Math Contest.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop', alt: 'Students solving equations on the board' }
    ]
  },
  {
    id: 2,
    name: 'Sciences',
    slug: 'sciences',
    description: 'Our Sciences department equips students with a practical understanding of the physical and biological world. We emphasize hands-on laboratory work and scientific inquiry.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    icon: 'BeakerIcon',
    head: {
      name: 'Madam Kemboi',
      position: 'Head of Sciences',
      qualifications: 'B.Ed Science, M.Ed Science Education',
      image: '/madam.jpg',
      email: '',
      message: 'Through observation and experimentation, we empower our students to understand the universe. Science at Baringo High is a journey of discovery.'
    },
    subjects: [
      { name: 'Biology', description: 'Study of living organisms, ecology, and human anatomy.' },
      { name: 'Chemistry', description: 'Exploration of matter, its properties, and chemical reactions.' },
      { name: 'Physics', description: 'Understanding forces, energy, mechanics, and the fundamental laws of nature.' }
    ],
    teachers: [
      { name: 'Mr. Kurui', position: 'Physics Teacher', subject: 'Physics', image: '/images/staff/dos.jpg' },
      
    ],
    facilities: [
      { name: 'Modern Physics Lab', description: 'Fully equipped for mechanics and electronics experiments.', image: '/images/department/physicslab.jpg' },
      { name: 'Chemistry Lab', description: 'State-of-the-art laboratory for safe chemical synthesis.', image: '/images/department/chemlab.jpg' }
    ],
    activities: [
      { name: 'Science Congress', description: 'Annual exhibition of student-led scientific innovations.', icon: 'BeakerIcon' },
      { name: 'Environmental Club', description: 'Practical biology through tree planting and conservation.', icon: 'GlobeAltIcon' }
    ],
    achievements: [
      { title: 'Best Science Project', year: '2024', description: 'National gold medal for the renewable energy project.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop', alt: 'Chemistry practical session' },
      { src: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop', alt: 'Physics lab equipment' }
    ]
  },
  {
    id: 3,
    name: 'Languages',
    slug: 'languages',
    description: 'The Languages department is dedicated to fostering excellent communication skills. We celebrate linguistic diversity and encourage mastery of both local and international languages.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
    icon: 'LanguageIcon',
    head: {
      name: 'Ms. Sarah Mutiso',
      position: 'Head of Languages',
      qualifications: 'B.Ed Arts (English/Literature), M.A Literature',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      email: 'smutiso@baringohigh.ac.ke',
      message: 'Language is the key to global citizenship. We teach our students not just to communicate, but to articulate their thoughts with clarity and confidence.'
    },
    subjects: [
      { name: 'English', description: 'Language and literature, focusing on comprehension, grammar, and literary analysis.' },
      { name: 'Kiswahili', description: 'Lugha na Fasihi, promoting our national heritage and effective communication.' },
      { name: 'French', description: 'International language studies for global opportunities.' }
    ],
    teachers: [
      { name: 'Mr. Madeshe', position: 'Kiswahili Teacher', subject: 'Kiswahili', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' }
    ],
    facilities: [
      { name: 'Language Lab', description: 'Audio-visual center for language practice and pronunciation.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop' }
    ],
    activities: [
      { name: 'Debate Tournaments', description: 'Inter-school debates fostering critical thinking.', icon: 'ChatBubbleLeftRightIcon' },
      { name: 'Drama Festival', description: 'Performing plays and recitals in English and Kiswahili.', icon: 'MusicalNoteIcon' }
    ],
    achievements: [
      { title: 'National Drama Champions', year: '2025', description: 'Best English Play in the National Drama Festivals.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop', alt: 'Library reading session' }
    ]
  },
  {
    id: 4,
    name: 'Humanities',
    slug: 'humanities',
    description: 'We explore human behavior, history, and the environment. Our goal is to develop informed citizens who understand their heritage and the complexities of the modern world.',
    image: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=800&h=600&fit=crop',
    icon: 'GlobeAltIcon',
    head: {
      name: 'Mr. Peter Omondi',
      position: 'Head of Humanities',
      qualifications: 'B.Ed Arts (History/CRE)',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      email: 'pomondi@baringohigh.ac.ke',
      message: 'By understanding our past and our environment, we are better equipped to navigate the future and build a cohesive society.'
    },
    subjects: [
      { name: 'History', description: 'Studying local and global historical events and their impacts.' },
      { name: 'Geography', description: 'Physical and human geography, environmental studies.' },
      { name: 'Religious Education', description: 'Moral values, ethics, and spiritual development.' }
    ],
    teachers: [
      { name: 'Ms. Lydia Kemboi', position: 'Geography Teacher', subject: 'Geography', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' }
    ],
    facilities: [
      { name: 'Geography Room', description: 'Equipped with topographical maps, models, and weather instruments.', image: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=400&h=300&fit=crop' }
    ],
    activities: [
      { name: 'Geographical Field Trips', description: 'Visiting key physical features in the Rift Valley.', icon: 'MapIcon' }
    ],
    achievements: [
      { title: 'Excellent KCSE Performance', year: '2024', description: 'Top performing department in the county.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=800&h=600&fit=crop', alt: 'Map reading session' }
    ]
  },
  {
    id: 5,
    name: 'Technical & Applied Sciences',
    slug: 'technical',
    description: 'This department offers practical skills that prepare students for technical careers and self-reliance. We focus on innovation and the application of theoretical knowledge.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
    icon: 'WrenchScrewdriverIcon',
    head: {
      name: 'Mr. John Kamau',
      position: 'Head of Technical Dept',
      qualifications: 'B.Sc Agricultural Education',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      email: 'jkamau@baringohigh.ac.ke',
      message: 'Hands-on skills are the backbone of a developing economy. We impart practical knowledge that students can use immediately.'
    },
    subjects: [
      { name: 'Agriculture', description: 'Crop production, livestock rearing, and agricultural economics.' },
      { name: 'Woodwork', description: 'Carpentry, design, and practical woodworking skills.' }
    ],
    teachers: [
      { name: 'Mr. Eliud Kiptum', position: 'Woodwork Teacher', subject: 'Woodwork', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop' }
    ],
    facilities: [
      { name: 'School Farm', description: 'Practical agricultural plots and livestock keeping.', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop' },
      { name: 'Workshops', description: 'Fully equipped carpentry and metalwork shops.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop' }
    ],
    activities: [
      { name: 'Young Farmers Club', description: 'Engaging in modern farming techniques and agribusiness.', icon: 'GlobeAltIcon' }
    ],
    achievements: [
      { title: 'Best Agricultural Project', year: '2025', description: 'Award-winning smart irrigation project.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop', alt: 'Woodwork session' }
    ]
  },
  {
    id: 6,
    name: 'Business Studies',
    slug: 'business',
    description: 'The Business Studies department nurtures entrepreneurial thinking and financial literacy. We prepare students for the dynamic world of commerce and economics.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    icon: 'BriefcaseIcon',
    head: {
      name: 'Mrs. Mary Odhiambo',
      position: 'Head of Business Studies',
      qualifications: 'B.Ed (Business/Math), MBA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      email: 'modhiambo@baringohigh.ac.ke',
      message: 'Financial literacy and entrepreneurial thinking are essential life skills. We are building the next generation of business leaders.'
    },
    subjects: [
      { name: 'Business Studies', description: 'Commerce, accounting principles, and entrepreneurship.' }
    ],
    teachers: [],
    facilities: [
      { name: 'Business Resource Center', description: 'Equipped with financial journals and business case studies.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' }
    ],
    activities: [
      { name: 'Entrepreneurship Fair', description: 'Students create and pitch business plans.', icon: 'BriefcaseIcon' }
    ],
    achievements: [
      { title: 'Regional Business Symposium Winners', year: '2024', description: 'First place in the high school business pitch competition.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop', alt: 'Business studies class' }
    ]
  },
  {
    id: 7,
    name: 'Computer Studies',
    slug: 'computer-studies',
    description: 'We are committed to bridging the digital divide by offering comprehensive computer studies. Our students are trained to be proficient in modern technologies and programming.',
    image: 'https://images.unsplash.com/photo-1581093458791-9dc47525e737?w=800&h=600&fit=crop',
    icon: 'ComputerDesktopIcon',
    head: {
      name: 'Mr. Bor Naphtali',
      position: 'Head of ICT',
      qualifications: 'B.Sc Computer Science, PGDE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'kmutua@baringohigh.ac.ke',
      message: 'In the digital age, computer literacy is as fundamental as reading and writing. We prepare students for the tech-driven future.'
    },
    subjects: [
      { name: 'Computer Studies', description: 'Computer hardware, software applications, and introductory programming.' }
    ],
    teachers: [],
    facilities: [
      { name: 'Main Computer Lab', description: 'Equipped with 50 modern desktop computers and high-speed internet.', image: '/images/gallery/computerlab.jpg' }
    ],
    activities: [
      { name: 'Coding Bootcamp', description: 'Termly coding challenges in Python and HTML/CSS.', icon: 'ComputerDesktopIcon' }
    ],
    achievements: [
      { title: 'County ICT Champions', year: '2025', description: 'Award for the most innovative software project.' }
    ],
    gallery: [
      { src: '/images/gallery/computerlab.jpg', alt: 'Students using computers' }
    ]
  },
  {
    id: 8,
    name: 'Creative Arts',
    slug: 'creative-arts',
    description: 'The Creative Arts department encourages self-expression and cultural appreciation. We nurture talents in music, fine art, and performing arts.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
    icon: 'MusicalNoteIcon',
    head: {
      name: 'Ms. Grace Naliaka',
      position: 'Head of Creative Arts',
      qualifications: 'B.A Fine Arts and Music',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=400&h=400&fit=crop',
      email: 'gnaliaka@baringohigh.ac.ke',
      message: 'Art and music are the soul of our society. We provide a canvas for students to express their creativity and identity.'
    },
    subjects: [
      { name: 'Music', description: 'Music theory, vocal training, and instrumental performance.' },
      { name: 'Art and Design', description: 'Drawing, painting, sculpture, and graphic design.' }
    ],
    teachers: [],
    facilities: [
      { name: 'Music Room', description: 'Soundproofed room with pianos, guitars, and traditional instruments.', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop' },
      { name: 'Art Studio', description: 'Spacious studio for painting and crafting.', image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=300&fit=crop' }
    ],
    activities: [
      { name: 'Annual Art Exhibition', description: 'Showcasing student artwork to parents and the community.', icon: 'SparklesIcon' },
      { name: 'School Choir', description: 'Performing at school events and national festivals.', icon: 'MusicalNoteIcon' }
    ],
    achievements: [
      { title: 'National Music Festival Finalists', year: '2024', description: 'Reached the finals in the African Folk Song category.' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop', alt: 'School choir performing' },
      { src: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop', alt: 'Art class in progress' }
    ]
  }
]
