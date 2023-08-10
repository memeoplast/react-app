import itConsultingImage from "../../../public/images/IT-Consulting.jpg"
import customSoftwareImage from "../../../public/images/Custom-Software.jpg"
import analyticsImage from "../../../public/images/Analytics.jpg"
import trainingImage from "../../../public/images/Training.jpg"
import sustainabilityImage from "../../../public/images/Sustainability.jpg"


export const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:itConsultingImage,
      name: "IT Consultation and Support",
      description: "Get expert advice and reliable IT support for your business needs, from network setup and cybersecurity to software implementation and troubleshooting.",
    },
    {
      id: 2,
      imageurl:customSoftwareImage,
      name: "Custom Software Development",
      description: "Enhance your operations with tailor-made software solutions designed to streamline processes, improve efficiency, and meet your specific business requirements.",
    },
    {
      id: 3,
      imageurl:trainingImage,
      name: "Corporate Training Programs",
      description: "Empower your workforce with our specialized corporate training programs, covering leadership development, team-building, communication skills, and more.",
    },
    {
      id: 4,
      imageurl:analyticsImage,
      name: "Business Analytics and Insights",
      description: "Make informed decisions and stay ahead of the competition by leveraging our data analysis and insights services, providing valuable information for strategic planning.",
    },
    {
      id: 5,
      imageurl:sustainabilityImage,
      name: "Sustainability Consulting",
      description: "Embrace eco-friendly practices and enhance your corporate social responsibility with our sustainability consulting, helping you create a positive impact on the environment and society.",
    },
  ];