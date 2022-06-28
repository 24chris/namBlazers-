/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import prisma from "../lib/prisma";

// const features = [
//   {
//     name: "Our Camps",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing .",
//     imageSrc: "/blaze.png",
//   },
//   {
//     name: "League Story",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
//     imageSrc: "/item2.JPG",
//   },
//   {
//     name: "Transfers ",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
//     imageSrc: "/blaze.png",
//   },
//   {
//     name: "Training",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     imageSrc: "/item2.JPG",
//   },
  
// ];

export default function FeatureSection({name,description,imageSrc}) {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
              Latest Stories
            </p>
            {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
          </div>

          {/* <div className="mt-10"> 
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-800 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div> */}
          <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
        {articles.map((article) =>(
           <div key={article.id} >
           <div className="flex w-full h-full flex-wrap bg-gray-500 overflow-hidden rounded">
             <div className="w-full">
               <Image
                 className="object-cover h-full w-full"
                 alt="blog image"
                 width={378}
                 height={248}
                 src={article.imageSrc}
               />
             </div>
             <div className="w-full p-5">
               <h2 className="text-white leading-normal text-lg">
                {feature.name}
               </h2>
               <div className="flex flex-wrap justify-between items-center mt-6">
                 <div className="inline-flex items-center">
                   <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                     <Image
                       className="object-cover h-full w-full"
                       width={50}
                       height={50}
                       alt="author image"
                       src={article.imageSrc}
                     />
                   </div>
                   <div className="flex-1 pl-2">
                     <h2 className="text-white mb-1">{article.name}</h2>
                     <p className="text-white opacity-50 text-xs">May 18</p>
                   </div>
                 </div>
                 <span className="text-white opacity-50">
                   <svg
                     className="fill-current w-5 h-5"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 459 459"
                   >
                     <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                   </svg>
                 </span>
               </div>
             </div>
           </div>
         </div>
        ))}  
        </dl>
      </div>


        </div>
      </div>
      {/* Layout */}
                {/* <div className="lg:w-1/4 md:w-1/2 px-3 mb-6">
                  <div className="flex w-full h-full flex-wrap bg-gray-500 overflow-hidden rounded">
                    <div className="w-full">
                      <Image
                        className="object-cover h-full w-full"
                        alt="blog image"
                        src={blaze}
                      />
                    </div>
                    <div className="w-full p-5">
                      <h2 className="text-white leading-normal text-lg">
                        How To Boost Your Traffic Of Your Blog And Destroy The Competition
                      </h2>
                      <div className="flex flex-wrap justify-between items-center mt-6">
                        <div className="inline-flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              className="object-cover h-full w-full"
                              width={50}
                              height={50}
                              alt="author image"
                              src="/blaze.png"
                            />
                          </div>
                          <div className="flex-1 pl-2">
                            <h2 className="text-white mb-1">Chris Sonne</h2>
                            <p className="text-white opacity-50 text-xs">May 18</p>
                          </div>
                        </div>
                        <span className="text-white opacity-50">
                          <svg
                            className="fill-current w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 459 459"
                          >
                            <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
    </>
  );
}

