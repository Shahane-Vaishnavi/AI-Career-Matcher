export const getCareerMatches = (data) => {
  const mockMatches = {
    '10th_completed': [
      {
        career: 'Engineering Diploma → B.Tech',
        match: 92,
        path: 'Diploma in CS/IT → Lateral Entry to Engineering',
        exams: ['Polytechnic Entrance'],
        duration: '6 years total',
        salary: '₹3-8 LPA starting',
        growth: 'High',
        details: [
          '3 years Diploma in Engineering',
          'Direct entry to 2nd year B.Tech',
          'Hands-on technical skills',
          'Earlier job opportunities'
        ]
      },
      {
        career: 'ITI → Skilled Technician',
        match: 85,
        path: 'Industrial Training Institute → Technical Jobs',
        exams: ['ITI Entrance'],
        duration: '1-2 years',
        salary: '₹2-5 LPA starting',
        growth: 'Medium',
        details: [
          'Short duration courses',
          'Hands-on training',
          'Quick employment',
          'Government and private jobs'
        ]
      }
    ],
    '12th_science_pcm': [
      {
        career: 'B.Tech in Computer Science',
        match: 95,
        path: 'JEE Main → B.Tech CSE → Software Engineer',
        exams: ['JEE Main', 'JEE Advanced'],
        duration: '4 years',
        salary: '₹5-15 LPA starting',
        growth: 'Very High',
        details: [
          'Top engineering colleges',
          'High demand field',
          'Excellent career growth',
          'Multiple specialization options'
        ]
      },
      {
        career: 'B.Tech in Mechanical Engineering',
        match: 88,
        path: 'JEE Main → B.Tech Mechanical → Core Engineer',
        exams: ['JEE Main', 'JEE Advanced'],
        duration: '4 years',
        salary: '₹4-10 LPA starting',
        growth: 'High',
        details: [
          'Core engineering field',
          'Diverse opportunities',
          'Manufacturing and design',
          'Government and private sector'
        ]
      }
    ],
    '12th_science_pcb': [
      {
        career: 'MBBS → Doctor',
        match: 96,
        path: 'NEET → MBBS → MD/MS',
        exams: ['NEET'],
        duration: '5.5 years + PG',
        salary: '₹8-20 LPA starting',
        growth: 'Very High',
        details: [
          'Medical college admission',
          'Respected profession',
          'High earning potential',
          'Service to society'
        ]
      },
      {
        career: 'B.Pharm → Pharmacist',
        match: 82,
        path: 'NEET/State Entrance → B.Pharm',
        exams: ['NEET', 'State Pharmacy Entrance'],
        duration: '4 years',
        salary: '₹3-8 LPA starting',
        growth: 'High',
        details: [
          'Pharmacy degree',
          'Healthcare industry',
          'Pharmaceutical companies',
          'Retail and hospital pharmacy'
        ]
      }
    ],
    '12th_commerce': [
      {
        career: 'B.Com → CA',
        match: 94,
        path: 'B.Com → CA Foundation → CA',
        exams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
        duration: '3-5 years',
        salary: '₹6-15 LPA starting',
        growth: 'Very High',
        details: [
          'Chartered Accountancy',
          'High demand profession',
          'Financial expertise',
          'Independent practice option'
        ]
      },
      {
        career: 'BBA → MBA',
        match: 90,
        path: 'BBA → CAT → MBA',
        exams: ['CAT', 'XAT', 'MAT'],
        duration: '3 + 2 years',
        salary: '₹8-20 LPA starting',
        growth: 'Very High',
        details: [
          'Business administration',
          'Management roles',
          'Corporate leadership',
          'Entrepreneurship skills'
        ]
      }
    ],
    '12th_arts': [
      {
        career: 'BA → B.Ed → Teacher',
        match: 87,
        path: 'BA → B.Ed → Teaching',
        exams: ['B.Ed Entrance'],
        duration: '3 + 2 years',
        salary: '₹3-8 LPA starting',
        growth: 'Medium',
        details: [
          'Education sector',
          'Job security',
          'Summer vacations',
          'Respected profession'
        ]
      },
      {
        career: 'BA Journalism → Media',
        match: 85,
        path: 'BA Journalism → Media Industry',
        exams: ['University Entrance'],
        duration: '3 years',
        salary: '₹3-10 LPA starting',
        growth: 'High',
        details: [
          'Media and journalism',
          'Creative field',
          'News and entertainment',
          'Digital media opportunities'
        ]
      }
    ],
    'diploma': [
      {
        career: 'Diploma → Lateral Entry B.Tech',
        match: 91,
        path: 'Diploma → Lateral Entry → B.Tech',
        exams: ['Lateral Entry Test'],
        duration: '3 + 2 years',
        salary: '₹4-10 LPA starting',
        growth: 'High',
        details: [
          'Direct entry to 2nd year',
          'Technical expertise',
          'Engineering degree',
          'Better job prospects'
        ]
      }
    ],
    'graduate': [
      {
        career: 'Postgraduate Studies',
        match: 89,
        path: 'Graduate → PG → Specialized Career',
        exams: ['GATE', 'CAT', 'GRE'],
        duration: '2-3 years',
        salary: '₹8-25 LPA starting',
        growth: 'Very High',
        details: [
          'Advanced specialization',
          'Higher qualifications',
          'Research opportunities',
          'Academic and industry roles'
        ]
      }
    ]
  };

  return mockMatches[data.educationLevel] || [];
};
