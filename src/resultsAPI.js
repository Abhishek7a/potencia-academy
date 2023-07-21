
const medical = [
    {
        "id": 1,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Ramandeep-Kaur.jpg",
        "name": "Ramandeep Kaur",
        "currently": "MBBS",
        "position": "GGS-Faridkot"
    },
    {
        "id": 2,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/rahul-maheshwari-150x150.jpg",
        "name": "Rahul Maheshwari",
        "currently": "MBBS"
    },
    {
        "id": 3,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Sahil-Verma-150x150.jpg",
        "name": "Sahil Verma",
        "currently": "MBBS"
    },
    {
        "id": 4,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/shruthi-1-133x150.jpg",
        "name": "Shruti",
        "currently": "MBBS"
    },
    {
        "id": 5,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Bharatiyan-1.png",
        "name": "Bharatiyan",
        "currently": "MBBS"
    },
    {
        "id": 6,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Pushpinder.jpg",
        "name": "Pushpinder",
        "currently": "MBBS"
    },
    {
        "id": 7,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Gurveen.jpg",
        "name": "Gurveen",
        "currently": "MBBS"
    },
    {
        "id": 8,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/lovepreet-145x150.jpg",
        "name": "Lovepreet",
        "currently": "BDS"
    },
    {
        "id": 9,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Sashwat1-150x150.jpg",
        "name": "Sashwat ",
        "currently": "MBBS",
        "position": "GS Medical College"
    },
    {
        "id": 10,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/navjot.jpg",
        "name": "Navjot",
        "currently": "BDS"
    },
    {
        "id": 11,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/girl-logo-200x200.png",
        "name": "Vanshika",
        "currently": "BDS"
    },
    {
        "id": 12,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Deepshika-139x150.jpg",
        "name": "Deepshika",
        "currently": "BDS"
    },
    {
        "id": 13,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/nishta-mashwari-134x150.jpg",
        "name": "Nishta Mashwari",
        "currently": "BDS"
    },
    {
        "id": 14,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/ekampreet.jpg",
        "name": "Ekampreet",
        "currently": "MBBS"
    },
    {
        "id": 15,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/WhatsApp-Image-2018-09-20-at-2.11.46-PM.jpeg",
        "name": "Aabhas Katia",
        "currently": "AIR-124 (NEET)",
        "position": "AIR-145 (AIIMS)"
    },
    {
        "id": 16,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Tejeshwar-150x150.jpg",
        "name": "Tejeshwar",
        "currently": "NEET 2019",
        "position": "627 Marks"
    },
    {
        "id": 17,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/arsh-150x150.jpg",
        "name": "Arshdeep Singh",
        "currently": "NEET 2019",
        "position": "State 18th Rank"
    },
    {
        "id": 18,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Chandan-150x150.jpg",
        "name": "Chandan",
        "currently": "NEET 2019",
        "position": "RGMC - Mumbai"
    },
    {
        "id": 19,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Parry-150x150.jpg",
        "name": "Palwinder Singh",
        "currently": "NEET 2019",
        "position": "14th Rank (Pb*)"
    },
    {
        "id": 20,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/WhatsApp-Image-2018-09-19-at-6.17.32-PM-150x150.jpeg",
        "name": "Gargi",
        "currently": "AIR-2372*(NEET)",
        "position": "G.M.C Patiala"
    },
    {
        "id": 21,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/HDBSHSD-150x150.jpg",
        "name": "Shivani",
        "currently": "AIR-9515 (NEET)",
        "position": "G.M.C Amritsar"
    },
    {
        "id": 22,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Deepshika-1-139x150.jpg",
        "name": "Deepshika",
        "currently": "NEET 2019",
        "position": "534 Marks"
    },
    {
        "id": 23,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/jsdnj-150x150.jpg",
        "name": "Nisha",
        "currently": "505 Marks (NEET)"
    },
    {
        "id": 24,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/WhatsApp-Image-2018-09-19-at-6.14.27-PM-150x150.jpeg",
        "name": "Manya Badiyal",
        "currently": "503 Marks (NEET)",
        "position": "PIMS-Jalandar"
    },
    {
        "id": 25,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/5aa20fd7c07c1sandeep-150x150.jpg",
        "name": "Sandeep kaur",
        "currently": "440 Marks (NEET)"
    }
]
const non_medical = [
    {
        "id": 1,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Abhay.jpg",
        "name": "Abhay",
        "currently": "IIT-JAMMU"
    },
    {
        "id": 2,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Harshit-150x150.jpg",
        "name": "Harshit",
        "currently": "IIIT-HYDERABAD"
    },
    {
        "id": 3,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Jashanpreet.jpg",
        "name": "Jashanpreet",
        "currently": "IIIT-GWALIOR"
    },
    {
        "id": 4,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Jasneet.jpg",
        "name": "Jasneet Singh",
        "currently": "NIT-SURAT"
    },
    {
        "id": 5,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Priya.jpg",
        "name": "Priya",
        "currently": "NIT-ROURKELA"
    },
    {
        "id": 6,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Ravinder.jpg",
        "name": "Ravinder",
        "currently": "NIT-ROURKELA"
    },
    {
        "id": 7,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Anshdeep-Singh.jpg",
        "name": "Anshdeep Singh",
        "currently": "NIT-JALANDHAR"
    },
    {
        "id": 8,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Kashrin.jpg",
        "name": "Kashrin",
        "currently": "NIT-JALANDHAR"
    },
    {
        "id": 9,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Gurleen-Sandhu.jpg",
        "name": "Gurleen Sandhu",
        "currently": "NIT-JALANDHAR"
    },
    {
        "id": 10,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Padam-104x150.jpg",
        "name": "Padam",
        "currently": "NIT-JALANDHAR"
    },
    {
        "id": 11,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Kashish.jpg",
        "name": "Kashish",
        "currently": " NIT-JALANDHAR"
    },
    {
        "id": 12,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Vardan.jpg",
        "name": "Vardan",
        "currently": " NIT-JALANDHAR"
    },
    {
        "id": 13,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Arshdeep.jpg",
        "name": "Arshdeep",
        "currently": "PAU-LUDHIANA"
    },
    {
        "id": 14,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Parneet.png",
        "name": "Parneet",
        "currently": "PAU-LUDHIANA"
    },
    {
        "id": 15,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Muskan.jpg",
        "name": "Muskan",
        "currently": "PU-PATIALA"
    },
    {
        "id": 16,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/amrit.jpg",
        "name": "Amrit",
        "currently": "THAPAR-PATIALA"
    },
    {
        "id": 17,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/kulveers.jpg",
        "name": "Kulveer",
        "currently": "PAU-LUDHIANA"
    },
    {
        "id": 18,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Ramneek-123x150.jpg",
        "name": "Ramneek",
        "currently": "98.27%le",
        "position": "JEE-MAINS 2020"
    },
    {
        "id": 19,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Gourav.jpg",
        "name": "Gaurav",
        "currently": "95.43%le",
        "position": "JEE-MAINS 2020"
    },
    {
        "id": 20,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Inesh.jpg",
        "name": "Inesh",
        "currently": "94.72%le",
        "position": "JEE-MAINS 2020"
    },
    {
        "id": 21,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/4.jpg",
        "name": "Navdeep",
        "currently": "94.27%le",
        "position": "JEE-MAINS 2020"
    },
    {
        "id": 22,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Vedant.jpg",
        "name": "Vedant",
        "currently": "JEE-ADVANCED AIR-3933",
        "position": "IIT-BHUBANESHWAR"
    },
    {
        "id": 23,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Dhruv.jpg",
        "name": "Dhruv",
        "currently": "IIIT-VADODARA"
    },
    {
        "id": 24,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Khushi-123x150.jpg",
        "name": "Khushi",
        "currently": "JEE-ADVANCED AIR-3113",
        "position": "IIT-ROORKEE"
    },
    {
        "id": 25,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Lovish-garg.jpg",
        "name": "Lovish Garg",
        "currently": "NIT-JALANDHAR"
    },
    {
        "id": 26,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Harshil-Bansal.jpg",
        "name": "Harshil Bansal",
        "currently": "JEE-MAINS",
        "position": "NIT-JALANDHAR"
    },
    {
        "id": 27,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Sanchit-Bansal.jpg",
        "name": "Sanchit Bansal",
        "currently": "JEE-MAINS",
        "position": "NIT-JALANDHAR"
    },
    {
        "id": 28,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Kashish-thapar-137x150.jpg",
        "name": "Kashish",
        "currently": "JEE-MAINS",
        "position": "144 MARKS"
    },
    {
        "id": 29,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Payal.jpg",
        "name": "Payal",
        "currently": "JEE-MAINS",
        "position": "123 MARKS"
    },
    {
        "id": 30,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Nishant.jpg",
        "name": "Nishant",
        "currently": "JEE-MAINS",
        "position": "139 MARKS"
    },
    {
        "id": 31,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Bhavuk.jpg",
        "name": "Bhavuk",
        "currently": "JEE-MAINS",
        "position": "116 MARKS"
    },
    {
        "id": 32,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Geetika-150x150.jpg",
        "name": "Geetika",
        "currently": "THAPAR-PATIALA"
    },
]

const broad = [
    {
        "id": 1,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/QQQ-150x150.jpg",
        "name": "Aabhas Katia",
        "currently": "P-97 C-96 B-92",
        "position": "+2 Medical"
    },
    {
        "id": 2,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/WhatsApp-Image-2018-09-19-at-6.14.26-PM-150x150.jpeg",
        "name": "Shivam",
        "currently": "84%",
        "position": "+2 Non-Medical"
    },
    {
        "id": 3,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/bsanhbhsdb-127x150.jpg",
        "name": "Neeraj",
        "currently": "80%",
        "position": "+2 Non-Medical"
    },
    {
        "id": 4,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/5aa20fd5c5f80Amrit-150x150.jpg",
        "name": "Amrit",
        "currently": "10 CGPA",
        "position": "10th Class"
    },
    {
        "id": 5,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/DHRUV-1-150x150.jpg",
        "name": "Dhruv",
        "currently": "P-95 C-95 M-95",
        "position": "+2 Non-Medical"
    },
    {
        "id": 6,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Kashrin-1-200x200.jpg",
        "name": "Kashrin",
        "currently": "P-90 C-96 M-96",
        "position": "+2 Non-Medical"
    },
    {
        "id": 7,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Nishant-1.jpg",
        "name": "Nishant",
        "currently": "P-95 C-95 M-97",
        "position": "+2 Non-Medical"
    },
    {
        "id": 8,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Manya.jpg",
        "name": "Manya Badiyal",
        "currently": "P-95 C-95 B-92",
        "position": "+2 Medical"
    },
    {
        "id": 9,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Khushi-1-123x150.jpg",
        "name": "Khushi",
        "currently": "P-97 C-97 M-100",
        "position": "+2 Non-Medical"
    },
    {
        "id": 10,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Payal-1.jpg",
        "name": "Payal",
        "currently": "P-94 C-94 M-97",
        "position": "+2 Non-Medical"
    },
    {
        "id": 11,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Kashish-1.jpg",
        "name": "Kashish",
        "currently": "P-78 C-93 M-86",
        "position": "+2 Non-Medical"
    },
    {
        "id": 12,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Bhavuk-1.jpg",
        "name": "Bhavuk",
        "currently": "83%",
        "position": "+2 Non-Medical"
    },
    {
        "id": 13,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Harman.jpg",
        "name": "Harman",
        "currently": "P-95 C-95 M-95",
        "position": "+2 Non-Medical"
    },
    {
        "id": 14,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/girl-logo-1-200x200.png",
        "name": "Palak",
        "currently": "P-93 C-94 B-96",
        "position": "+2 Non-Medical"
    },
    {
        "id": 15,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/navdeep.jpg",
        "name": "Navdeep",
        "currently": "P-95 C-95 M-95",
        "position": "+2 Non-Medical"
    },
    {
        "id": 16,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Ramneek-1-123x150.jpg",
        "name": "Ramneek",
        "currently": "P-97 C-94 M-95",
        "position": "+2 Non-Medical"
    },
]
const others = [
    {
        "id": 1,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/WhatsApp-Image-2018-09-19-at-6.13.24-PM-1-1-150x150.jpeg",
        "name": "Vansh Kumar",
        "currently": "NTSE 2018",
        "position": "STAGE-1 & 2"
    },
    {
        "id": 2,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/5abb176a4945fAabhas-Katia-_1_-150x150.jpeg",
        "name": "Aabhas Katia",
        "currently": "NTSE",
        "position": "MAT-50/50"
    },
    {
        "id": 3,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/5aa20fd952911kushi-_1_-150x150.jpeg",
        "name": "KHUSHI",
        "currently": "NTSE",
        "position": "STAGE -1 & 2"
    },
    {
        "id": 4,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/5abbb3e7ec08fcharu-gupta-1-150x150.jpg",
        "name": "Charu Gupta",
        "currently": "NTSE",
        "position": "MAT- 48/50"
    },
    {
        "id": 5,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/RTFTFTY-150x150.jpg",
        "name": "Abhas Katiya",
        "currently": "KVPY"
    },
    {
        "id": 6,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/AAAAA-150x150.jpg",
        "name": "Baratesh",
        "currently": "KVPY"
    },
    {
        "id": 7,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Arpit-150x150.jpg",
        "name": "Arpit",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 8,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Chetanshi-150x150.jpg",
        "name": "Chetanshi",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 9,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Dhruv-Jain-150x150.jpg",
        "name": "Dhruv Jain",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 10,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/4555-150x150.jpg",
        "name": "Priyanshu",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 11,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Rajveer-Kaur-150x150.jpg",
        "name": "Rajveer Kaur",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 12,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/SIA-150x150.jpg",
        "name": "SIA",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 13,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Gagandeep-150x150.jpg",
        "name": "Gagandeep",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 14,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Aryan-150x150.jpg",
        "name": "Aryan",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 15,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Gursimran-150x150.jpg",
        "name": "Gursimran",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 16,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Gurlin-150x150.jpg",
        "name": "Gurlin",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 17,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Sarmanpreet-1-150x150.jpg",
        "name": "Sarmanpreet",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 18,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Mahip-150x150.jpg",
        "name": "Mahip",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 19,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Arman-150x150.jpg",
        "name": "Arman Charan",
        "currently": "NTSE Stage 1 2020"
    },
    {
        "id": 20,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Avreet.jpg",
        "name": "Avreet",
        "currently": "RMO"
    },
    {
        "id": 21,
        "link": "https://www.potencia.in/wp-content/uploads/2023/01/Deepkanwal.jpg",
        "name": "Deepkanwal",
        "currently": "NTSE"
    }

]
module.exports = { medical, non_medical, broad, others };



