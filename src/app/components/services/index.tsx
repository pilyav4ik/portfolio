'use client'

import { useState } from "react";
import Accordion from "./accordion";
import './style.module.scss'
import Link from "next/link";

export default function Services() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    /*{
      title: "Design",
      text: [
        "Everything starts from design! We visualize web and mobile apps, ensuring an intuitive and visually appealing design that helps to achieve your business goals.",
        "Our design process involves thorough research and understanding of your target audience, enabling us to create user-friendly interfaces that enhance the overall user experience.",
        "By combining creativity with the latest design trends and technologies, we deliver designs that not only look great but also function seamlessly.",
        "Whether it's wireframes, prototypes, or final visual designs, our team is dedicated to bringing your vision to life and setting a strong foundation for your digital products."
      ],
      active: false,
    },*/
    {
      title: "Web development",
      text: [
        "Our expert web development team is here to craft mobile-friendly, performant, responsive, and scalable web applications. We specialize in building robust websites that adapt seamlessly to any device, ensuring a smooth user experience across desktops, tablets, and smartphones.",
        "Our developers are proficient in the latest web technologies and frameworks, enabling us to deliver high-quality solutions tailored to your specific needs. With experience across various industries, we understand the unique challenges and opportunities each sector presents.",
        "Our portfolio includes numerous successful projects, and we take pride in the positive feedback from our satisfied clients."
      ],
      active: false,
    },
    {
      title: "iOS and Android development",
      text: [
        "Use our services to create beautiful and easy-to-use mobile apps which will increase your customers’ loyalty and satisfaction. Our team specializes in designing and developing mobile applications that are both visually appealing and highly functional.",
        "We focus on creating intuitive user interfaces that provide a seamless experience, ensuring that your customers can navigate your app with ease and enjoyment.",
        "By leveraging hybrid mobile app development technologies, we streamline the development process, making it faster and more cost-effective without compromising on quality.",
        "This approach allows us to deliver versatile apps that perform well on both iOS and Android platforms, helping you reach a broader audience and maximize your return on investment."
      ],
      active: false,
    },
    {
      title: "Online marketing",
      text: [
        "Leverage our online marketing expertise to boost your brand's online presence and reach your target audience effectively. Our comprehensive suite of services includes SEO, social media marketing, PPC campaigns, and content marketing, all tailored to drive engagement and conversions.",
        "We start by understanding your unique business needs and target audience, crafting personalized strategies that ensure maximum impact. Our SEO techniques improve your search engine rankings, while our social media marketing strategies enhance your brand visibility and foster community engagement.",
        "With targeted PPC campaigns, we drive immediate traffic to your site, and our compelling content marketing ensures sustained interest and loyalty.",
        "Let us help you navigate the digital landscape, build a strong online presence, and achieve your business goals with measurable results."
      ],
      active: false,
    },
    {
      title: "Print design",
      text: [
        "Make a lasting impression with our professional print design services. From business cards and brochures to posters and packaging, our designs are created to captivate and communicate your brand’s message clearly.",
        "We meticulously craft each piece to ensure it aligns perfectly with your brand identity and marketing goals. Our team of talented designers uses the latest tools and techniques to produce high-quality, visually striking print materials that not only stand out but also convey your message effectively.",
        "Whether you need eye-catching brochures to showcase your products or elegant business cards to leave a lasting impression, we are dedicated to delivering print solutions that make a memorable impact on your audience and help your brand shine in the competitive market."
      ],
      active: true,
    }
  ];

  return (
    <>
      <div className="py-16 md:py-24 lg:py-48">
      <div className="px-18 py-9 text-center">
        <span className='text-5xl'>
          Here's what we can offer you
        </span>
      </div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          id={`faqs-${index}`}
          active={index === activeIndex}
          onToggle={() => setActiveIndex(index === activeIndex ? null : index)}
          isFirst={index === 0}
          isLast={index === faqs.length - 1}
        >
          <span className="pb-8">
            {faq.text.map((paragraph, pIndex) => (
              <p className="pb-5 text-xl md:text-2xl" key={pIndex}>{paragraph}</p>
            ))}
            <div className="py-5">
              <Link href="#" className='border-2 border-zinc-400 text-black px-5 py-3 rounded-full group-hover:bg-white group-hover:text-black group-hover:border-white hidden'>Read more</Link>
            </div>
          </span>
        </Accordion>
      ))}
      </div>
    </>
  )
}
