import { Experience, Address, School } from "../../../server/types";

interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  summary: string;
}

interface User {
  email: string;
  password: string;
  person: { create: Person };
  address: { create: Address };
  experience: { create: Experience };
  education: { create: Education };
}

interface Education {
  educationLevel: string;
  schools: { create: School[] };
}

const EMAILS = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com",
  "user5@example.com",
];

const PASSWORDS = ["pasword123", "password321", "pastword231", "patsword984", "patotie382"];

const PERSONS = [
  {
    firstName: "John",
    lastName: "Doe",
    middleName: "A",
    phone: "1234567890",
    summary: "Enthusiastic developer",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    middleName: "B",
    phone: "2345678901",
    summary: "Creative designer",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    middleName: "C",
    phone: "3456789012",
    summary: "Expert marketer",
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    middleName: "D",
    phone: "4567890123",
    summary: "Seasoned manager",
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    middleName: "E",
    phone: "5678901234",
    summary: "Dedicated researcher",
  },
];

const ADDRESSES = [
  {
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    addressLine1: "123 Sunset Blvd",
    addressLine2: "",
    zipCode: 90001,
  },
  {
    country: "USA",
    state: "NY",
    city: "New York",
    addressLine1: "456 Park Ave",
    addressLine2: "Apt 101",
    zipCode: 10001,
  },
  {
    country: "USA",
    state: "IL",
    city: "Chicago",
    addressLine1: "789 Lakeshore Dr",
    addressLine2: "Suite 500",
    zipCode: 60007,
  },
  {
    country: "USA",
    state: "TX",
    city: "Houston",
    addressLine1: "101 Space Center Rd",
    addressLine2: "",
    zipCode: 77001,
  },
  {
    country: "USA",
    state: "WA",
    city: "Seattle",
    addressLine1: "202 Rainy Blvd",
    addressLine2: "Apt 202",
    zipCode: 98101,
  },
];

const EDUCATION: Education[] = [
  {
    educationLevel: "Bachelor's",
    schools: {
      create: [
        {
          name: "University of ABC",
          diploma: "Computer Science",
          startYear: 2018,
          endYear: 2022,
          startMonth: "September",
          endMonth: "May",
          address: {
            create: {
              addressLine1: "123 University St",
              city: "ABC City",
              state: "XYZ State",
              country: "Country",
              zipCode: 12345,
            },
          },
        },
      ],
    },
  },
  {
    educationLevel: "Master's",
    schools: {
      create: [
        {
          name: "XYZ Institute of Technology",
          diploma: "Electrical Engineering",
          startYear: 2016,
          endYear: 2018,
          startMonth: "August",
          endMonth: "June",
          address: {
            create: {
              addressLine1: "456 Tech Blvd",
              city: "Tech City",
              state: "PQR State",
              country: "Country",
              zipCode: 54321,
            },
          },
        },
        {
          name: "LMN College",
          diploma: "Applied Mathematics",
          startYear: 2012,
          endYear: 2016,
          startMonth: "September",
          endMonth: "May",
          address: {
            create: {
              addressLine1: "789 College Ave",
              city: "College Town",
              state: "RST State",
              country: "Country",
              zipCode: 67890,
            },
          },
        },
      ],
    },
  },
  {
    educationLevel: "PhD",
    schools: {
      create: [
        {
          name: "Academy of Sciences",
          diploma: "Physics",
          startYear: 2015,
          endYear: 2020,
          startMonth: "September",
          endMonth: "May",
          address: {
            create: {
              addressLine1: "10 Science Avenue",
              city: "Science City",
              state: "Science State",
              country: "Country",
              zipCode: 11111,
            },
          },
        },
      ],
    },
  },
  {
    educationLevel: "High School",
    schools: {
      create: [
        {
          name: "High School of Excellence",
          diploma: "High School Diploma",
          startYear: 2010,
          endYear: 2014,
          startMonth: "September",
          endMonth: "June",
          address: {
            create: {
              addressLine1: "555 Excellence Blvd",
              city: "Excellence City",
              state: "Excellence State",
              country: "Country",
              zipCode: 98765,
            },
          },
        },
      ],
    },
  },
  {
    educationLevel: "Associate's",
    schools: {
      create: [
        {
          name: "Community College",
          diploma: "Associate of Arts",
          startYear: 2014,
          endYear: 2016,
          startMonth: "September",
          endMonth: "May",
          address: {
            create: {
              addressLine1: "321 Community Dr",
              city: "Community Town",
              state: "Community State",
              country: "Country",
              zipCode: 54321,
            },
          },
        },
      ],
    },
  },
];

const EXPERIENCES = [
  {
    experience: "Software Development",
    responsibilities: ["Coding", "Testing", "Debugging"],
    startYear: 2015,
    endYear: 2020,
    startMonth: "January",
    endMonth: "December",
    title: "Developer",
  },
  {
    experience: "Graphic Design",
    responsibilities: ["Designing", "Branding", "Illustrating"],
    startYear: 2016,
    endYear: 2021,
    startMonth: "February",
    endMonth: "November",
    title: "designer",
  },
  {
    experience: "Marketing",
    responsibilities: ["Advertising", "Social Media", "SEO"],
    startYear: 2017,
    endYear: 2022,
    startMonth: "March",
    endMonth: "October",
    title: "Marketer",
  },
  {
    experience: "Management",
    responsibilities: ["Planning", "Organizing", "Leading"],
    startYear: 2018,
    endYear: 2023,
    startMonth: "April",
    endMonth: "September",
    title: "manager",
  },
  {
    experience: "Research",
    responsibilities: ["Investigating", "Data Analysis", "Reporting"],
    startYear: 2019,
    endYear: 2024,
    startMonth: "May",
    endMonth: "August",
    title: "Researcher",
  },
];

const USERS: User[] = [];

EMAILS.forEach((email, i) => {
  USERS.push({
    email,
    password: PASSWORDS[i],
    person: { create: PERSONS[i] },
    address: { create: ADDRESSES[i] },
    experience: { create: EXPERIENCES[i] },
    education: { create: EDUCATION[i] },
  });
});

export default USERS;
