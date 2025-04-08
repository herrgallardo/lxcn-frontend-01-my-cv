// CV data for Antonio Gallardo Girela

// Types
export interface PersonalInfo {
  name: string
  description: string
  contact: {
    personalNumber: string
    phone: string
    email: string
    address: string
    city: string
    postalCode: string
  }
  socialMedia: {
    platform: string
    url?: string
    username?: string
  }[]
}

export interface Education {
  period: string
  degree: string
  institution: string
  location: string
  grade?: string
  details?: string
}

export interface WorkExperience {
  period: string
  position: string
  company: string
  location: string
  details?: string
}

export interface Skill {
  name: string
  level: number // 1-5 scale
}

export interface Language {
  name: string
  level: number // 1-5 scale
  details?: string
}

export interface CV {
  personalInfo: PersonalInfo
  education: Education[]
  workExperience: WorkExperience[]
  skills: {
    technical: Skill[]
    languages: Language[]
  }
}

// CV Data
export const cvData: CV = {
  personalInfo: {
    name: "Antonio Gallardo Girela",
    description:
      "Newly trained Full Stack Developer who is curious, determined and doesn't give up until the problem is solved.",
    contact: {
      personalNumber: "791115-5997",
      phone: "+46 (0) 73 993 08 48",
      email: "gallardogirela@gmail.com",
      address: "Värvädersvägen 6A lgh 1502",
      city: "Lund",
      postalCode: "222 27",
    },
    socialMedia: [
      {
        platform: "LinkedIn",
        username: "Antonio Gallardo Girela",
      },
    ],
  },
  education: [
    {
      period: "2021 - 2023",
      degree: "Full Stack Developer - JavaScript specialization",
      institution: "Teknikhögskolan",
      location: "Lund",
      grade: "VG (grading scale IG - VG, equivalent to Pass with Distinction)",
    },
    {
      period: "2021",
      degree: "Programming 1, C#",
      institution: "Hermods",
      location: "Lund",
      grade: "A (grading scale F - A, equivalent to Excellent)",
    },
    {
      period: "2018",
      degree: "Bachelor's degree in Spanish (linguistic specialization)",
      institution: "Lund University",
      location: "Lund",
      grade: "VG (grading scale IG - VG, equivalent to Pass with Distinction)",
    },
    {
      period: "2015",
      degree: "Linguistics: Basic Course",
      institution: "Lund University",
      location: "Lund",
      grade: "VG (grading scale IG - VG, equivalent to Pass with Distinction)",
    },
    {
      period: "2014",
      degree: "Japanese I: Basic Language Proficiency",
      institution: "Dalarna University",
      location: "Dalarna",
    },
    {
      period: "2014",
      degree: "Beginner's Course I & II: Italian",
      institution: "Lund University",
      location: "Lund",
      grade: "VG (grading scale IG - VG, equivalent to Pass with Distinction)",
    },
    {
      period: "2010",
      degree: "Swedish as a Foreign Language",
      institution: "Lund University",
      location: "Lund",
    },
    {
      period: "2001 - 2004",
      degree: "Translation and Interpretation",
      institution: "Universidad de Granada / University of Westminster",
      location: "Spain / London",
    },
  ],
  workExperience: [
    {
      period: "2023",
      position: "Praktikant, januari-maj / Sommarjobb, juni-augusti",
      company: "Axis Communications",
      location: "Lund",
    },
    {
      period: "2022",
      position: "Praktikant, april-maj / Sommarjobb, juni-augusti",
      company: "24HR, Digitalbyrå",
      location: "Malmö",
    },
    {
      period: "2007- 2021",
      position: "Laundry Worker",
      company: "Cws-boco Sandby",
      location: "Södra Sandby",
    },
    {
      period: "2008",
      position: "Spanish Instructor for Beginners",
      company: "Medborgarskolan",
      location: "Lund",
    },
    {
      period: "2005 - 2007",
      position: "Manager",
      company: "Taberna Salinas",
      location: "Granada, Spain",
    },
    {
      period: "2004 - 2005",
      position: "Volunteer at a Youth Center",
      company: "European Voluntary Service",
      location: "Eksjö",
    },
    {
      period: "2002 - 2004",
      position: "Waiter",
      company: "",
      location: "Granada, Spain",
    },
    {
      period: "2000 - 2001",
      position: "Bartender and Waiter",
      company: "All Bar One",
      location: "London, United Kingdom",
    },
    {
      period: "2000",
      position: "Congress Assistant / Receptionist",
      company: "",
      location: "Granada, Spain",
    },
    {
      period: "1999",
      position: "Telemarketer / Machine Operator",
      company: "",
      location: "Granada, Spain",
    },
    {
      period: "1996 - 1999",
      position: "Kitchen Assistant",
      company: "",
      location: "Granada, Spain",
    },
  ],
  skills: {
    technical: [
      { name: "C#", level: 4 },
      { name: "Java", level: 3 },
      { name: "JavaScript / TypeScript", level: 4 },
      { name: "React", level: 3 },
      { name: "Next", level: 3 },
      { name: "Elementor Pro", level: 4 },
      { name: "Photoshop", level: 3 },
    ],
    languages: [
      {
        name: "Spanish",
        level: 5,
        details: "Native language",
      },
      {
        name: "English",
        level: 4,
        details: "Certificate in Advanced English, Cambridge University",
      },
      { name: "Swedish", level: 4 },
      { name: "Italian", level: 3 },
    ],
  },
}

export default cvData
