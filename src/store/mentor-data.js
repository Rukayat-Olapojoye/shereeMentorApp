//importing the images from images folder
import imageOne from '../images/img-1.jpeg';
import imageTwo from '../images/img-2.jpg';
import imageThree from '../images/img-3.jpg';
import imageFour from '../images/img-4.jpg'
import imageFive from '../images/img-5.jpg';
import imageSix from '../images/img-6.jpg';
import imageSeven from '../images/img-7.jpg';
import imageEight from '../images/img-8.jpg';
import imageNine from '../images/img-9.jpg';
import imageTen from '../images/img-10.jpg';
import imageEleven from '../images/img-11.jpg';
import imageTwelve from '../images/img-12.jpg';
import imageThirteen from '../images/img-13.jpg';
import imageFourteen from '../images/img-14.jpg';
import imageFifteen from '../images/img-15.jpg';
import imageSixteen from '../images/img-16.jpg';
import imageSeventeen from '../images/img-17.jpg';
import imageEighteen from '../images/img-18.jpg';
import imageNineteen from '../images/img-19.jpg';
import imageTwenty from '../images/img-20.jpg';
import imageTwentyOne from '../images/img-21.jpg';
import imageTwentyTwo from '../images/img-22.jpg';
import imageTwentyThree from '../images/img-23.jpg';
import imageTwentyFour from '../images/img-24.jpg';
import imageTwentyFive from '../images/img-25.jpg';
import imageTwentySix from '../images/img-26.jpg';
import imageTwentySeven from '../images/img-27.jpg';
import imageTwentyEight from '../images/img-28.jpeg';


const mentorData = [
    {
        id: 1,
        name: "Choongsaeng Nwoka",
        country: "Nigeria",
        company: "Microsoft",
        role: "Software Developer",
        expertise: "Software Development",
        advice: "Career growth, Interview techniques, Team-building",
        hobbies: "Fishing",
        contact: "315-456-800",
        image: imageOne,
        languages: "Igbo, English"
    },

    {
        id: 2,
        name: "Tobi Lawson",
        country: "Nigeria",
        company: "Lakes Company Ltd",
        role: "UI/UX Design",
        expertise: "UI/UX Design",
        advice: "Career growth, Design, Leadership",
        hobbies: "Playing the guitar",
        contact: "315-456-800",
        image: imageTwentyFive,
        languages: "Yoruba, English"
    },

    {
        id: 3,
        name: "Tamara James",
        country: "Ghana",
        company: "Talom",
        role: "Product Designer",
        expertise: "Product Design",
        advice: "Interview Techniques, Design, Career growth",
        hobbies: "Shopping",
        contact: "233-345-675",
        image: imageFive,
        languages: "English"
    },

    {
        id: 4,
        name: "Sarah Rice",
        country: "Canada",
        company: "Peaks",
        role: "Software Developer",
        expertise: "Software Development",
        advice: "Career growth, Interview techniques, Agile Development",
        hobbies: "Planting",
        contact: "123-456-789",
        image: imageThree,
        languages: "English, French"
    },

    {
        id: 5,
        name: "Tess Gold",
        country: "Kenya",
        company: "Microsoft",
        role: "Data Scientist",
        expertise: "Data Science and Management",
        advice: "Career growth, Interview techniques, Leadership",
        hobbies: "Dancing",
        contact: "345-789-234",
        image: imageSeven,
        languages: "English",
    },

    {
        id: 6,
        name: "Bilal Mishra",
        country: "India",
        company: "Chaudray Inc",
        role: "Data Administrator",
        expertise: "Data Management",
        advice: "Data Managaement, Career growth",
        hobbies: "Hockey",
        contact: "989-766-222",
        image: imageTwelve,
        languages: "Hindi, English"
    },

    {
        id: 7,
        name: "James Carter",
        country: "Netherlands",
        company: "Facebook",
        role: "DevOps",
        expertise: "DevOps",
        advice: "Training, Career growth, Interview Techniques",
        hobbies: "Ice-Skating",
        contact: "100-233-675",
        image: imageTwentyOne,
        languages: "English, Italian"
    },

    {
        id: 8,
        name: "Mia Ahmad",
        country: "Egypt",
        company: "Amazon",
        role: "Systems Analyst",
        expertise: "Systems Management and Analysis",
        advice: "Career growth, Agile",
        hobbies: "Reading",
        contact: "767-432-267",
        image: imageFour,
        languages: "Arabic, English"
    },

    {
        id: 9,
        name: "Gesty France",
        country: "France",
        company: "Twitter",
        role: "Project Manager",
        expertise: "Project Management",
        advice: "Project Development, Career growth, Leadership",
        hobbies: "Painting",
        contact: "555-212-377",
        image: imageTwo,
        languages: "French, English"
    },

    {
        id: 10,
        name: "Larry Mistra",
        country: "UAE",
        company: "Linkedin",
        role: "Network Engineer",
        expertise: "Network Engineering",
        advice: "Network Management, Career growth, training",
        hobbies: "Painting",
        contact: "545-567-121",
        image: imageFifteen,
        languages: "Arabic"
    },

    {
        id: 11,
        name: "Rajesh Sandeep",
        country: "India",
        company: "Microsoft",
        role: "Web developer",
        expertise: "Web development",
        advice: "Career growth, interview techniques",
        hobbies: "Snorkelling",
        contact: "221-212-454",
        image: imageThirteen,
        languages: "Hindi, English and Arabic"
    },

    {
        id: 12,
        name: "Ikechukwu Nwankwo",
        country: "Nigeria",
        company: "Google",
        role: "UI/UX Design",
        expertise: "UI/UX Design",
        advice: "Design, Career growth",
        hobbies: "Basketball",
        contact: "234-801-3422",
        image: imageTwentyThree,
        languages: "Igbo, Hausa, English"
    },

    {
        id: 13,
        name: "Rachael Thandile",
        country: "South Africa",
        company: "PZ cussons",
        role: "Product Manager",
        expertise: "Product Management",
        advice: "Leadership, Carer growth",
        hobbies: "Traveling",
        contact: "367-777-211",
        image: imageSix,
        languages: "Zulu, English"
    },

    {
        id: 14,
        name: "Clay Thompson",
        country: "United Kingdom",
        company: "Tesla",
        role: "System Analyst",
        expertise: "System Analysis",
        advice: "Career growth, team-building",
        hobbies: "Ice Skating",
        contact: "446-222-899",
        image: imageTwenty,
        languages: "English"
    },

    {
        id: 15,
        name: "Troy James",
        country: "Germany",
        company: "Developer's World",
        role: "DevOps",
        expertise: "DevOps",
        advice: "Systems management, Career growth, Agile",
        hobbies: "Ice Skating",
        contact: "211-322-211",
        image: imageSeventeen,
        languages: "German, English"
    },

    {
        id: 16,
        name: "Matthew Jones",
        country: "Scotland",
        company: "Microsoft",
        role: "Web developer",
        expertise: "Web development",
        advice: "Career growth, Leadership, Team building",
        hobbies: "Photography",
        contact: "989-676-897",
        image: imageNineteen,
        languages: "English"
    },

    {
        id: 17,
        name: "Thomas Foyer",
        country: "Italy",
        company: "Apple",
        role: "Mobile App Developer",
        expertise: "Mobile App Development",
        advice: "Design, Career growth, Interview techniques",
        hobbies: "Designing",
        contact: "212-787-211",
        image: imageFourteen,
        languages: "Italian, English"
    },

    {
        id: 18,
        name: "Mark Fisher",
        country: "United States",
        company: "Microsoft",
        role: "Software Developer",
        expertise: "Software Development",
        advice: "Career growth, Team building",
        hobbies: "Painting",
        contact: "122-452-121",
        image: imageSixteen,
        languages: "English"
    },

    {
        id: 19,
        name: "Ray Brown",
        country: "United States",
        company: "Twitter",
        role: "Network Engineer",
        expertise: "Network Engineering",
        advice: "Career growth, Agile",
        hobbies: "Sky-diving",
        contact: "232-121-423",
        image: imageTen,
        languages: "English, French"
    },

    {
        id: 20,
        name: "Frank Sawyer",
        country: "Canada",
        company: "Freelis",
        role: "Software Developer",
        expertise: "Software Development",
        advice: "Career growth, Interview techniques, Team building",
        hobbies: "Skating",
        contact: "366-212-121",
        image: imageTwentyFour,
        languages: "English"
    },

    {
        id: 21,
        name: "Justin Mangwa",
        country: "South Africa",
        company: "Google",
        role: "Systems Analyst",
        expertise: "Systems Analysis",
        advice: "Leadership, Career growth",
        hobbies: "Planting",
        contact: "323-121-422",
        image: imageNine,
        languages: "English"
    },

    {
        id: 22,
        name: "Henry King",
        country: "Austria",
        company: "Facebook",
        role: "Software Developer",
        expertise: "Software Development",
        advice: "Career growth, Agile Development",
        hobbies: "Surfing",
        contact: "212-288-787",
        image: imageTwentyTwo,
        languages: "English"
    },

    {
        id: 23,
        name: "Timothy Raymond",
        country: "United Kingdom",
        company: "Amazon",
        role: "Systems Manager",
        expertise: "Systems Management",
        advice: "Career growth, Leadership",
        hobbies: "Cooking",
        contact: "212-323-121",
        image: imageEighteen,
        languages: "English"
    },

    {
        id: 24,
        name: "Ahmad Fehy",
        country: "Canada",
        company: "Microsoft",
        role: "Product Designer",
        expertise: "Product Design",
        advice: "Design, Agile, Career advice",
        hobbies: "Hiking",
        contact: "219-321-908",
        image: imageEight,
        languages: "English, French"
    },

    {
        id: 25,
        name: "Michael Smith",
        country: "Switzerland",
        company: "Apple Inc",
        role: "Product designer",
        expertise: "Product design",
        advice: "Design, Team building, Career growth",
        hobbies: "Ice-Skating",
        contact: "567-212-799",
        image: imageEleven,
        languages: "English"
    },

    {
        id: 26,
        name: "Justina Mangwale",
        country: "Kenya",
        company: "Apple Inc",
        role: "Product Manager",
        expertise: "Product Management",
        advice: "Leadership, Team building, Career growth",
        hobbies: "Gardening",
        contact: "567-212-799",
        image: imageTwentySeven,
        languages: "English"
    },

    {
        id: 27,
        name: "Timi Adepoju",
        country: "Nigeria",
        company: "MicroSoft",
        role: "UI/UX designer",
        expertise: "UI/UX design",
        advice: "Design, Team building, Career growth",
        hobbies: "Singing",
        contact: "567-212-799",
        image: imageTwentyEight,
        languages: "Yoruba, Hausa, Igbo, English"
    },

    {
        id: 28,
        name: "Grace Hashour",
        country: "Ghana",
        company: "Linkedin",
        role: "Software developer",
        expertise: "Software development",
        advice: "Team building, Career growth",
        hobbies: "Swimming",
        contact: "567-212-799",
        image: imageTwentySix,
        languages: "English"
    }
]

export default mentorData;