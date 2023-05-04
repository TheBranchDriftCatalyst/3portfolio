//  constructed from https://jsonresume.org/schema/
export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  network?: string;
  username?: string;
  url?: string;
}

export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface ExtendedTimelineAttributes {
  icon?: string;
}

export interface Work extends ExtendedTimelineAttributes {
  // name?: string;
  name: string;
  position: string;
  url?: string;
  // startDate?: string;
  startDate: string;
  // endDate?: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

// organization, position, url, startDate, endDate, summary, highlights
export interface Volunteer extends ExtendedTimelineAttributes {
  organization?: string;
  position?: string;
  url?: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights?: string[];
}

// institution, area, studyType, startDate, endDate, gpa, courses
export interface Education extends ExtendedTimelineAttributes {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate: string;
  endDate: string;
  score?: string;
  courses?: string[];
}

// title, date, awarder, summary
export interface Award {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

// name, date, issuer, url
export interface Certificate {
  name?: string;
  date?: string;
  issuer?: string;
  url?: string;
}

// name, publisher, releaseDate, url, summary
export interface Publication {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

// name, level, keywords
export interface Skill {
  name?: string;
  level?: number;
  keywords?: string[];
}

// language, fluency
export interface Language {
  language?: string;
  fluency?: string;
}

// name, keywords
export interface Interest {
  name?: string;
  keywords?: string[];
}

// name, reference
export interface Reference {
  name?: string;
  reference?: string;
}

// name, description, highlights, keywords, startDate, endDate, url, roles, entity, type
export interface Project {
  name?: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate: string;
  endDate: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

// basics, work, volunteer, education, awards, publications, skills, languages, interests, references
export default interface JsonResume {
  basics: Basics;
  work: Work[];
  volunteer?: Volunteer[];
  education: Education[];
  awards?: Award[];
  certificates?: Certificate[];
  publications?: Publication[];
  skills: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
}

//  TODO: when i interrogate this type, also update it's schema here
export type ValidationReport = {
  [key: string]: ValidationReport | string | number;
}[];
