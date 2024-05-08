// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
      studies: ["PROSEEK", "AGNOS", "EFC17919"]
    },
  ];
  const contacts = [
    {
        id: "410555b2-4001-4271-9855-fec4b6a6442a",
        name: "Harry Potter",
        email: "harry@nextmail.com",
        phone: "7751111111"
    },
    {
        id: "410666b2-4001-4271-9855-fec4b6a6442a",
        name: "Hermione Granger",
        email: "hermione@nextmail.com",
        phone: "7752222222"
    },
    {
        id: "410777b2-4001-4271-9855-fec4b6a6442a",
        name: "Ron Weasly",
        email: "ron@nextmail.com",
        phone: "7753333333"
    },
];

  const studies = [
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'PROSEEK',
      sponsor: 'Sun Pharma',
      CRA: [],
      websites: ['google.com', 'hogwarts.com', 'lab.com'],
      visits: [1, 2, 3, 4, 5],
      lab_kits: [],
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'AGNOS',
      sponsor: 'Novartis',
      CRA: [],
      websites: [],
      visits: [1, 2, 3, 4],
      lab_kits: []
    },
    {
      id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
      name: 'EFC17919',
      sponsor: 'Sanofi',
      CRA: [],
      websites: [],
      visits: [1,2,3,4,5,6],
      lab_kits: []
    },
    {
      id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
      name: 'ACHIEVE',
      sponsor: 'Eli Lilly',
      CRA: [],
      websites: [],
      visits: [1,2,3,4,5,6,7],
      lab_kits: []
    },
  ];
  
  const websites = [
    {
        study_id: studies[0].id,
        edc: 'edc@proseek.com',
        irt: 'irt@proseek.com',
        central_labs: 'labs@proseek.com',
        safety_portal: 'safety@proseek.com',
        irb: "CIRBI",
    },
    {
        study_id: studies[1].id,
        edc: 'edc@agnos.com',
        irt: 'irt@agnos.com',
        central_labs: 'labs@agnos.com',
        safety_portal: 'safety@agnos.com',
        irb: "WCG",
    },
    {
        study_id: studies[2].id,
        edc: 'edc@efc71919.com',
        irt: 'irt@efc71919.com',
        central_labs: 'labs@efc71919.com',
        safety_portal: 'safety@efc71919.com',
        irb: "WCG",
    },
    {
        study_id: studies[3].id,
        edc: 'edc@achieve.com',
        irt: 'irt@achieve.com',
        central_labs: 'labs@achieve.com',
        safety_portal: 'safety@achieve.com',
        irb: "WCG",
    },
  ];

  const lab_kits = [
    {
        study_id: studies[0],
        visit_number: 1,
        exp_date: new Date(2024, 10, 1)
    },
    {
        study_id: studies[0],
        visit_number: 1,
        exp_date: new Date(2023, 10, 1)
    },
    {
        study_id: studies[0],
        visit_number: 2,
        exp_date: new Date(2024, 10, 1)
    },
    {
        study_id: studies[1],
        visit_number: 1,
        exp_date: new Date(2025, 10, 1)
    },
    {
        study_id: studies[1],
        visit_number: 1,
        exp_date: new Date(2025, 10, 1)
    }
  ];
  const irbs =[
    {
        name: "CIRBI",
        website: "irb@cirbi.com",
    },
    {
        name: "WCG",
        website: "irb@wcg.com"
    }
  ]  
  
  module.exports = {
    users,
    contacts,
    studies,
    websites,
    lab_kits,
    irbs
  };
  