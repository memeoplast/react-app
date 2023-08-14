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
      siteurl:"/Services#1",
      full_description:"Experience hassle-free IT operations with our top-notch consultation and support services. Our team of seasoned IT professionals offers expert advice on setting up and maintaining a secure and efficient network infrastructure. We prioritize cybersecurity, implementing robust measures to safeguard your data from potential threats. Our software implementation services ensure seamless integration and optimal performance of essential applications. When technical issues arise, our reliable troubleshooting ensures minimal downtime and uninterrupted business operations. Trust us to be your dedicated IT partner, keeping your systems running smoothly.",
    },
    {
      id: 2,
      imageurl:customSoftwareImage,
      name: "Custom Software Development",
      description: "Enhance your operations with tailor-made software solutions designed to streamline processes, improve efficiency, and meet your specific business requirements.",
      siteurl:"/Services#2",
      full_description: "Elevate your business processes with our tailor-made software development solutions. We understand that your business is unique, and we design software that aligns precisely with your specific requirements. Our experienced developers work closely with you to identify inefficiencies and opportunities for improvement. The result is streamlined operations, improved efficiency, and enhanced productivity. Whether it's a customer relationship management (CRM) system, an inventory management solution, or a proprietary tool, our custom software will empower your business to operate at its best.",
    },
    {
      id: 3,
      imageurl:trainingImage,
      name: "Corporate Training Programs",
      description: "Empower your workforce with our specialized corporate training programs, covering leadership development, team-building, communication skills, and more.",
      siteurl:"/Services#3",
      full_description:"Empower your workforce with our specialized corporate training programs that nurture leadership development, foster team-building, and refine essential communication skills. Our training modules are designed to engage participants and cultivate their professional growth. We offer interactive workshops that instill leadership qualities, equipping your team to handle challenges with confidence. Team-building exercises promote collaboration and strengthen relationships within your organization. Effective communication skills are honed through targeted training, ensuring seamless interaction across departments. Invest in your team's potential with our transformative corporate training.",
    },
    {
      id: 4,
      imageurl:analyticsImage,
      name: "Business Analytics and Insights",
      description: "Make informed decisions and stay ahead of the competition by leveraging our data analysis and insights services, providing valuable information for strategic planning.",
      siteurl:"/Services#4",
      full_description:"Stay ahead of the competition by leveraging our comprehensive business analytics and insights services. Our data-driven approach extracts valuable information from your operations, guiding your strategic decisions. We analyze market trends, customer behavior, and industry benchmarks to provide you with actionable insights. With a deep understanding of your business's strengths and opportunities, you can make informed choices that drive growth. Our insights pave the way for effective planning, enabling you to capitalize on emerging trends and make confident decisions.",
    },
    {
      id: 5,
      imageurl:sustainabilityImage,
      name: "Sustainability Consulting",
      description: "Embrace eco-friendly practices and enhance your corporate social responsibility with our sustainability consulting, helping you create a positive impact on the environment and society.",
      siteurl:"/Services#5",
      full_description: "Embrace eco-friendly practices and enhance your corporate social responsibility with our sustainability consulting services. Our experts guide you through sustainable business strategies that reduce your environmental footprint while contributing positively to society. We'll help you integrate responsible practices into your operations, from sourcing sustainable materials to implementing energy-saving initiatives. By adopting sustainability, your business not only makes a positive impact on the environment but also resonates with conscious consumers.",
    },
  ];