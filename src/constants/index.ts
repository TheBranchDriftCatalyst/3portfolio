//  NOTE: THis is the interface between the old pattern (fork base) and the new json-resume patterns.  Eventually this
//  should all be removed such that everything can be loaded from the resume assets folder/module instead.

import _JsonResume from 'resume-assets/data/resume.yml'
import _Projects from 'resume-assets/data/projects.yml'
import JsonResume from './resume.d'
import {DateTime} from "luxon";

export const jsonResume = _JsonResume as JsonResume

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const jsonResumeSkillsToServicesMapper = (skills: JsonResume['skills']) => {
  return skills.map(({name, level, keywords}) => ({
    title: name,
    // TODO: add the icons later
    icon: null,
    level,
    keywords
  }))
}

const services = jsonResumeSkillsToServicesMapper(jsonResume.skills)

const jsonResumeSkillsMapper = (skills: JsonResume['skills']) => {

  return skills.map(({name, level, keywords}) => ({
    name,
    // TODO: add the icons later
    icon: null,
    level,
    keywords
  }))
}

const technologies = jsonResumeSkillsMapper(jsonResume.skills)

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const formatDate = (date: string) => {
  DateTime.fromFormat(date, 'mm/yyyy')
}

const jsonResumeWorkExperienceMapper = (a: JsonResume['work']) => {
  return a.map((b) => ({
    title: b.position,
    company_name: b.name,
    icon: b.icon,
    iconBg: "#383E56",
    startDate: DateTime.fromFormat(b.startDate, 'MM/YYYY'),
    endDate: DateTime.fromFormat(b.endDate, 'MM/YYYY'),
    date: `${b.startDate} - ${b.endDate}`,
    points: b.highlights,
  }))
}

const jsonResumeEducationExperienceMapper = (a: JsonResume['education']) => {
  return a.map((b) => ({
    title: b.studyType + ' | ' + b.area,
    company_name: b.institution,
    icon: b.icon,
    iconBg: "#383E56",
    startDate: DateTime.fromFormat(b.startDate, 'MM/YYYY'),
    endDate: DateTime.fromFormat(b.endDate, 'MM/YYYY'),
    date: `${b.startDate} - ${b.endDate}`,
    points: b.courses,
  }))
}

const experiences = [
    ...jsonResumeWorkExperienceMapper(jsonResume.work),
    ...jsonResumeEducationExperienceMapper(jsonResume.education),
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];


const projects = _Projects

export {services, technologies, experiences, testimonials, projects};
