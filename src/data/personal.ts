import { PersonalInfo, Education, Certificate } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Jeremy Ansellino Gunawan",
  title: "Tech Engineer",
  location: "Tangerang, Banten, Indonesia",
  phone: "+62 812 2957 4140",
  email: "ansellino@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremy-ansellino-gunawan/",
  description:
    "Motivated and detail-oriented IT graduate with a Master's degree, dedicated to continuous learning and professional growth. Skilled in technical problem-solving, teamwork, and thriving in fast-paced environments.",
  avatar: "/images/profile.png",
  resumeUrl: "resume/Jeremy_CV.pdf",
  personalLogo: "/images/logo.png",
};

export const education: Education[] = [
  {
    id: "masters",
    institution: "Bina Nusantara University",
    degree: "Master Degree in Computer Science",
    duration: "January 2023 – January 2025",
    gpa: "3.67/4.00",
  },
  {
    id: "bachelor",
    institution: "Bina Nusantara University",
    degree: "Bachelor Degree in Computer Science",
    duration: "September 2018 – January 2023",
    gpa: "3.30/4.00",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Bangkit Certificate – Cloud Computing",
    issuer: "Google Bangkit Academy",
    year: "2021",
  },
  {
    name: "Alibaba Cloud Certified Associate",
    issuer: "Alibaba Cloud",
    year: "2021",
  },
  {
    name: "Future Leaders",
    issuer: "AIESEC in BINUS",
    year: "2022",
  },
];
