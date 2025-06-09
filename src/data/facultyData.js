export const facultyData = [
  {
    id: 1,
    name: "REDDI MOHANRAO",
    department: "Administration",
    designation: "PRINCIPAL",
    qualification: "M.A.B.Ed"
  },
  {
    id: 2,
    name: "V. VENKATARAMANA",
    department: "Zoology",
    designation: "Lect.in Zoology",
    qualification: "MSc.B.Ed"
  },
  {
    id: 3,
    name: "D SIVA",
    department: "English",
    designation: "Lect.in English",
    qualification: "M.A"
  },
  {
    id: 4,
    name: "S VASANTHA RAO",
    department: "Telugu",
    designation: "Lect.in telugu",
    qualification: "M.A"
  },
  {
    id: 5,
    name: "K CHANTI",
    department: "Mathematics",
    designation: "Lect.in Mathametics",
    qualification: "M.Sc"
  },
  {
    id: 6,
    name: "K KEERTHI",
    department: "Physics",
    designation: "Lect.in Physics",
    qualification: "M.Sc"
  },
  {
    id: 7,
    name: "P ANIL KUMAR",
    department: "Computer Science",
    designation: "Lect.in.Computers",
    qualification: "MCA"
  },
  {
    id: 8,
    name: "A NAGARAJU",
    department: "Computer Science",
    designation: "Lect.in.Computers",
    qualification: "M.Sc"
  },
  {
    id: 9,
    name: "CH SATYAVATHI",
    department: "Chemistry",
    designation: "Lect.in Chemistry",
    qualification: "M.Sc"
  },
  {
    id: 10,
    name: "M.GOWTHIMI",
    department: "Chemistry",
    designation: "Lect.in Chemistry",
    qualification: "M.Sc"
  },
  {
    id: 11,
    name: "R. JAGANMOHAN",
    department: "Botany",
    designation: "Lect.in.Botony",
    qualification: "MSc.B.Ed"
  },
  {
    id: 12,
    name: "Y SURYNARAYANA",
    department: "Commerce",
    designation: "Lect.in Commerce",
    qualification: "M.Com,B.Ed"
  },
  {
    id: 13,
    name: "K PEDARAJU",
    department: "Commerce",
    designation: "Lect.in Commerce",
    qualification: "M.Com"
  },
  {
    id: 14,
    name: "S RAMANAMURTHY",
    department: "History",
    designation: "Lect.in History",
    qualification: "M.A,B.Ed"
  },
  {
    id: 15,
    name: "G.SARESWARARAO",
    department: "Economics",
    designation: "Lect.in Econmics",
    qualification: "M.A,M.Ed ,SET"
  },
  {
    id: 16,
    name: "P.ADINARAYANA",
    department: "Politics",
    designation: "Lect.in politics",
    qualification: "M.A"
  },
  {
    id: 17,
    name: "A.SRINIVASARAO",
    department: "Administration",
    designation: "A.O",
    qualification: "M.A"
  },
  {
    id: 18,
    name: "S SATYAMANI",
    department: "Administration",
    designation: "jr.Asst",
    qualification: "B.Com"
  },
  {
    id: 19,
    name: "V.SRAVANTHI",
    department: "Administration",
    designation: "Accountent",
    qualification: "B.Sc"
  }
];

// Get unique departments from faculty data
export const departments = ["All", ...new Set(facultyData.map(f => f.department))];

// Get unique designations from faculty data
export const designations = ["All", ...new Set(facultyData.map(f => f.designation))];
