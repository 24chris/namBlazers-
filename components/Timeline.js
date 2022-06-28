import Image from "next/image";
export default function Timeline() {
  return (
    <>
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Introduction
          </p>
          <p className="mt-2 text-lg text-justify antialiased font-normal font-sans leading-normal tracking-normal text-gray-900">
            Namuwongo Blazers Basketball Team is a non-profit community based entity providing extra-curricular activities to the youth of Namuwongo and Uganda at large.
            Namuwongo is a Kampala neighbourhood that was predominantly low income in the 1960's through 1980's. However, as the population of Kampala has exploded in the early 2000's,
            high-end business has moved into the area and raised it's profile. Namuwongo's proximity to high end Kololo and Muyenga, as well middle class Nakawa and Bugolobi, has ensured that it will not
            be mired into the low end of the neighbourhood spectrum.
          </p>
         
        </div>
      </div>

      <div className="text-center lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
        </p>
      </div>
    
    
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-[]">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-gray-200 rounded-lg h-auto flex justify-center">
            {/* <!-- component --> */}
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-gray-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-gray-700 text-center">2014</h3>
              <p className="leading-tight text-justify antialiased font-normal font-sans text-gray-900">
                The Nam Blazers team at Makerere University main grounds on
                there very 1st day to join the FUBA league.
              </p>
              <Image
                className="w-full rounded"
                src="/throughback/2014.png"
                alt=""
                width={500}
                height={250}
              ></Image>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-red-1000 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-1000 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-red-1000 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-1000 shadow"></div>
            </div>
            <div className="bg-gray-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-gray-700 text-center">2015</h3>
              <p className="leading-tight text-justify text-gray-700">
                Tough losses through the maze.
              </p>
              <Image
                className="w-full rounded"
                src="/throughback/2014.png"
                alt=""
                width={500}
                height={250}
              ></Image>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-gray-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-gray-700 text-center">2016</h3>
              <p className="leading-tight text-justify text-gray-700">
                Team Photo Shoot , at the season opening at YMCA Wandegeya in
                2016
              </p>
              <Image
                className="w-full rounded"
                src="/throughback/2016.png"
                alt=""
                width={500}
                height={250}
              ></Image>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-red-1000 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-1000 shadow"></div>
            </div>
          </div>

          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-red-1000 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-1000 shadow"></div>
            </div>
            <div className="bg-gray-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-gray-700 text-center">2017</h3>
              <p className="leading-tight text-justify text-gray-700">
                A glimpse of the Nam Blazers in action against the Miracle Eagles in  2017 at Mengo Secondary School.
              </p>
              <Image
                className="w-full rounded"
                src="/throughback/2017.png"
                alt=""
                width={500}
                height={250}
              ></Image>
            </div>
          </div>

           {/* <!-- left --> */}
           <div className="flex flex-row-reverse md:contents">
            <div className="bg-gray-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-gray-700 text-center">2018</h3>
              <p className="leading-tight text-justify text-gray-700">
               The Official D-League Championship 2018 poster
              </p>
              {/* <Image
                className="rounded-t-2 rounded-b-2"
                src="/throughback/2018.png"
                alt=""
                width={500}
                height={250}
              ></Image> */}
              <Image
                className="w-full rounded"
                src="/throughback/2018b.png"
                alt=""
                width={500}
                height={250}
              ></Image>
              {/* <Image
                className="rounded-t-2 rounded-b-2"
                src="/throughback/2018art.png"
                alt=""
                width={500}
                height={250}
              ></Image> */}
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-red-1000 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-1000 shadow"></div>
            </div>
          </div>
          
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-red-1000 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-1000 shadow"></div>
            </div>
            <div className="bg-gray-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-gray-700 text-center">2019</h3>
              <p className="leading-tight text-justify text-gray-700">
                DIV 1 Runners Up
              </p>
              <Image
                className="w-full rounded"
                src="/throughback/2017.png"
                alt=""
                width={500}
                height={250}
              ></Image>
            </div>
          </div>

        </div>
      </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
