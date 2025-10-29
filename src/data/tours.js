
import image1 from "../assets/destinations/velebit.jpg";
import image2 from "../assets/destinations/hvar.jpg";
import image3 from "../assets/destinations/paklenica.jpg";
import image4 from "../assets/destinations/bali.jpg";
import image5 from "../assets/destinations/rim.jpg";
import image6 from "../assets/destinations/paris.jpg";
import image7 from "../assets/destinations/madagaskar.jpg"

export const tours = [
  {
    id: 1,
    title: "Planinarenje Velebit",
    category: "Hiking",
    destination: "Velebit",
    duration: "5 dana",
    description: "Istražite ljepote Velebita u malim grupama.",
    longDescription: "Nezaboravna avantura po najljepšim stazama Velebita, uz iskusne vodiče i opremu.",
    price: 250,
    image: image1,
    imageLarge: image1,
    dates: ["01.06.2026. – 05.06.2026.", "15.07.2026. – 20.07.2026."]
  },
  {
    id: 2,
    title: "Jedrenje Hvar",
    category: "Sailing",
    destination: "Hvar",
    duration: "3 dana",
    description: "Plovidba uz najljepše otoke Jadrana.",
    longDescription: "Otkrijte skrivene uvale i uživajte u kristalno čistom moru uz profesionalnu posadu.",
    price: 400,
    image: image2,
    imageLarge: image2,
    dates: ["10.06.2026. – 12.06.2026.", "02.08.2026. – 04.08.2026."]
  },
  {
    id: 3,
    title: "Ferrata Paklenica",
    category: "Ferrata",
    destination: "Paklenica",
    duration: "2 dana",
    description: "Adrenalinski usponi za iskusne planinare.",
    longDescription: "Isprobajte zahtjevne rute uz osiguranje i stručno vodstvo. Oprema uključena.",
    price: 180,
    image: image3,
    imageLarge: image3,
    dates: ["05.09.2026. – 06.09.2026.", "19.09.2026. – 20.09.2026."]
  },
  {
    id: 4,
    title: "Exotic Bali",
    category: "Exotic",
    destination: "Bali",
    duration: "7 dana",
    description: "Egzotični odmor na Baliju uz lokalne vodiče.",
    longDescription: "Kultura, hrana i prirodne ljepote otoka bogova. Uključeni izleti i radionice.",
    price: 1200,
    image: image4,
    imageLarge: image4,
    dates: ["01.11.2026. – 07.11.2026."]
  },
  {
    id: 5,
    title: "City Tour Rim",
    category: "City tours",
    destination: "Rim",
    duration: "4 dana",
    description: "Povijesne znamenitosti i gastronomski doživljaji.",
    longDescription: "Obilazak Koloseuma, Vatikana i skrivenih dragulja, uz lokalne vodiče.",
    price: 550,
    image: image5,
    imageLarge: image5,
    dates: ["10.10.2026. – 13.10.2026.", "05.12.2026. – 08.12.2026."]
  },
  {
    id: 6,
    title: "City Tour Paris",
    category: "City tours",
    destination: "Paris",
    duration: "5 dana",
    description: "Povijesne znamenitosti i gastronomski doživljaji.",
    longDescription: "Penjanje na toranj Eiffel, šetnja uz Arc de Triomphe te uživanje u Crème brûlée.",
    price: 660,
    image: image6,
    imageLarge: image6,
    dates: ["15.11.2025. – 19.11.2025."]
  },
  {
    id: 7,
    title: "Exotic Madagaskar",
    category: "Exotic",
    destination: "Madagaskar",
    duration: "10 dana",
    description: "Egzotična avantura uzbudljivog Madagaskara uz lokalne vodiče.",
    longDescription: "Divne plaže i nacionalni parkova krase otok prepun egzotične flore i faune što ga čini odličnim za obiteljsko putovanje.",
    price: 2200,
    image: image7,
    imageLarge: image7,
    dates: ["02.02.2026. – 10.02.2026.", "12.04.2026. – 21.04.2026."]
  }
];
