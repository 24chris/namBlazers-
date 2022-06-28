import Image from "next/image";

export default function Sponsors() {
  return (
    // <div className="bg-gray-50">
    //   <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    //     <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
    //       <span className="block ">Sponsors</span>
    //     </h2>
    //     <div className="">
    //       <div className="inline-flex rounded-md shadow">
    //       <Image width={100} height={100} src="/team/ndejje.png" alt=""></Image>
    //       <Image width={100} height={100} src="/team/ndejje.png" alt=""></Image>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Sponsors
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        <div><a href="https://www.motorolasolutions.com/en_xu.html"><Image width={162} height={129} src="/sponsors/motorola2.png" alt="Motorola logo"></Image></a></div>
        <div><a href="https://www.radiotrans.com/en"><Image width={386} height={80} src="/sponsors/Radiotrans2.png" alt="Radiotrans logo"></Image></a></div>
        <div><a href="https://www.samangasolutions.com"><Image className="relative" width={250} height={100} src="/sponsors/samanga.png" alt="Samanga logo"></Image></a></div>
        <div><a href="https://kangesafaris.com"><Image width={250} height={250} src="/sponsors/Kange2.png" alt="Kange logo"></Image></a></div>
      </div>
    </div>
  );
}
