interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  summary: string;
}

interface Address {
  country: string;
  state: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
}

interface Experience {
  name: string;
  responsibilities: string[];
  startYear: string;
  endYear: string;
  startMonth: string;
  endMonth: string;
}

interface User {
  email: string;
  person: { create: Person };
  address: { create: Address };
  experience: { create: Experience };
}

const EMAILS = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com",
  "user5@example.com",
];

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
    zipCode: "90001",
  },
  {
    country: "USA",
    state: "NY",
    city: "New York",
    addressLine1: "456 Park Ave",
    addressLine2: "Apt 101",
    zipCode: "10001",
  },
  {
    country: "USA",
    state: "IL",
    city: "Chicago",
    addressLine1: "789 Lakeshore Dr",
    addressLine2: "Suite 500",
    zipCode: "60007",
  },
  {
    country: "USA",
    state: "TX",
    city: "Houston",
    addressLine1: "101 Space Center Rd",
    addressLine2: "",
    zipCode: "77001",
  },
  {
    country: "USA",
    state: "WA",
    city: "Seattle",
    addressLine1: "202 Rainy Blvd",
    addressLine2: "Apt 202",
    zipCode: "98101",
  },
];

const EXPERIENCES = [
  {
    name: "Software Development",
    responsibilities: ["Coding", "Testing", "Debugging"],
    startYear: "2015",
    endYear: "2020",
    startMonth: "January",
    endMonth: "December",
  },
  {
    name: "Graphic Design",
    responsibilities: ["Designing", "Branding", "Illustrating"],
    startYear: "2016",
    endYear: "2021",
    startMonth: "February",
    endMonth: "November",
  },
  {
    name: "Marketing",
    responsibilities: ["Advertising", "Social Media", "SEO"],
    startYear: "2017",
    endYear: "2022",
    startMonth: "March",
    endMonth: "October",
  },
  {
    name: "Management",
    responsibilities: ["Planning", "Organizing", "Leading"],
    startYear: "2018",
    endYear: "2023",
    startMonth: "April",
    endMonth: "September",
  },
  {
    name: "Research",
    responsibilities: ["Investigating", "Data Analysis", "Reporting"],
    startYear: "2019",
    endYear: "2024",
    startMonth: "May",
    endMonth: "August",
  },
];

const USERS: User[] = [];

EMAILS.forEach((email, i) => {
  USERS.push({
    email,
    person: { create: PERSONS[i] },
    address: { create: ADDRESSES[i] },
    experience: { create: EXPERIENCES[i] },
  });
});

export default USERS;
