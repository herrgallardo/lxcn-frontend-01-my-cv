# Personal CV Website

## Course Context

- **Program**: Arbetsmarknadsutbildning - IT Påbyggnad/Programmerare
- **Course**: Front-End Development
- **Project Type**: Individual Project (Project-1: CV - Mandatory)

## Overview

A responsive personal CV website built with Next.js and Tailwind CSS. This project showcases my professional background, skills, and experience in a clean, modern design that highlights my capabilities as a developer while demonstrating fundamental front-end development skills.

## Learning Objectives

This project demonstrates key frontend development skills:

- HTML semantic structure for improved accessibility and SEO
- Modern CSS styling techniques using Tailwind CSS
- Responsive design that works on mobile, tablet, and desktop
- React component architecture with Next.js framework
- TypeScript for type-safe code
- UI/UX principles for a clean and professional design
- Optimized image loading with Next.js Image component
- Deployment to GitHub Pages

## Project Structure

The CV website is built using Next.js with a component-based architecture:

```typescript
├── app/                 # Next.js app directory
│   ├── globals.css      # Global CSS styles with Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/          # React components
│   └── CV.tsx           # Main CV component
├── data/                # Data layer
│   └── cv-data.ts       # CV information (education, experience, skills, etc.)
├── public/              # Static assets
│   ├── icons/           # CV section icons
│   └── images/          # Profile and other images
├── .gitignore           # Git ignore file
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration for Tailwind
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```

## Features

### Layout & Design

- Clean, professional CV layout with responsive design
- Two-column structure for optimal content organization
- Carefully selected color scheme with primary colors and accents
- Interactive elements with hover effects and smooth transitions
- Accessibility considerations for all users
- Mobile-first approach with responsive breakpoints

### Personal Information Section

- Professional headshot with styling and hover effects
- Contact information with appropriate icons
- Brief personal statement/summary
- Social media links with icon support

### Skills Visualization

- Interactive skills showcase using grid layout
- Technical skills organized in a visual grid with icons
- Language proficiency display with progress bars
- Clean categorization of different skill types

### Experience Timeline

- Chronological display of work history
- Visual timeline with connecting elements
- Interactive timeline nodes
- Consistent formatting of dates and descriptions
- Highlight for important positions

### Education Timeline

- Visual representation of educational background
- Timeline approach matching work experience
- Degree information with institution details
- Grades and achievements where applicable

### Additional Features

- TypeScript type definitions for CV data structure
- Optimized asset loading with Next.js Image component
- Custom CSS variables for theme consistency
- Configurable data structure for easy updates

## Technical Implementation

The website is built using:

- **Next.js**: Modern React framework for efficient page rendering
- **TypeScript**: For type-safe code and better developer experience
- **Tailwind CSS**: For utility-first styling with responsive design
- **React Hooks**: For component state and effects
- **Next/Image**: For optimized image loading and rendering
- **CSS Custom Properties**: For theme consistency across components

## CV Data Structure

The CV data is structured as TypeScript interfaces:

```typescript
interface PersonalInfo {
  name: string
  professionalTitle: string
  description: string
  contact: {
    personalNumber: string
    phone: string
    email: string
    address: string
    city: string
    postalCode: string
    icons?: {
      personalNumber?: string
      phone?: string
      email?: string
      address?: string
    }
  }
  socialMedia: {
    platform: string
    url?: string
    username?: string
    icon?: string
  }[]
}

interface Education {
  period: string
  degree: string
  institution: string
  location: string
  grade?: string
  details?: string
}

interface WorkExperience {
  period: string
  position: string
  company: string
  location: string
  details?: string
}

interface Skill {
  name: string
  level?: number // 1-5 scale
  icon?: string // Path to the icon file
}

interface Language {
  name: string
  level: number // 1-5 scale
  icon?: string // Path to the icon file
  details?: string
}
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-cv.git

# Navigate to the project directory
cd my-cv

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making Changes

### Updating CV Data

To update your personal information, edit the `data/cv-data.ts` file:

```typescript
// Example: Update personal information
export const cvData: CV = {
  personalInfo: {
    name: "Your Name",
    professionalTitle: "YOUR PROFESSIONAL TITLE",
    description: "A brief description about yourself...",
    // ...other fields
  },
  // ...other sections
}
```

### Adding New Sections

To add a new section to your CV, update both the data file and the CV component:

1. Add the new data to `cv-data.ts`
2. Update the CV component in `components/CV.tsx` to render the new section

### Styling Changes

The project uses Tailwind CSS for styling. To customize the appearance:

1. Edit the theme colors in `app/globals.css`
2. Modify Tailwind classes directly in the component files
3. Add custom CSS where needed for specific components

## Live Demo

The CV website is deployed and live on Vercel:

[https://lxcn-frontend-01-my-cv.vercel.app/](https://lxcn-frontend-01-my-cv.vercel.app/)

## Deployment

This project is deployed using Vercel, the platform from the creators of Next.js:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Alternatively, you can set up continuous deployment by connecting your GitHub repository to Vercel for automatic deployments on each push.

## Project Requirements Met

This project fulfills the requirements specified in the project description:

- Simple and clean design
- No sensitive personal information included
- Published on GitHub
- Demonstrates HTML, CSS, and UI design skills

## Future Enhancements

- Add a printable CV version
- Create a PDF download option
- Add project portfolio section with screenshots
- Implement light/dark mode toggle
- Add animations for section transitions
- Create a blog section for professional articles
- Implement internationalization for multiple languages

## Acknowledgments

- Course instructors and fellow students for feedback and support
- Next.js and Tailwind CSS documentation and community
- Design inspiration from professional CV templates
- Icon providers for the skill and contact icons
