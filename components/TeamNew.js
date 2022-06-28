import Image from 'next/image'


const players = [
  {
    imageSrc: '/team/Chuol.JPG',
    imageAlt:'Others',
    name:'Chuol Nyout',
    number:'15'
  },
  {
    imageSrc: '/team/Camelo.JPG',
    imageAlt:'Melo',
    name:'Amisi Saidi Danny',
    number:'12'
  },
  {
    imageSrc: '/team/Dikong.JPG',
    imageAlt:'item2',
    name:'David Kongor Dikong',
    number:'24'
  },
  {
    imageSrc: '/team/Ken.jpg',
    imageAlt:'item2',
    name:'Kenneth Mesho',
    number:'12'
  },
  {
    imageSrc: '/team/Macgyver.JPG',
    imageAlt:'Others',
    name:'Paul Odong',
    number:'8'
  },
  {
    imageSrc: '/team/Najja.JPG',
    imageAlt:'Melo',
    name:'Juuko Daniel',
    number:'25'
  },
  {
    imageSrc: '/team/Blair.JPG',
    imageAlt:'item2',
    name:'Blair Valentine',
    number:'3'
  },
  {
    imageSrc: '/team/Ikong.JPG',
    imageAlt:'item2',
    name:'Ikong Joseph',
    number:'11'
  },
  {
    imageSrc: '/team/Syrus.JPG',
    imageAlt:'Others',
    name:'Syrus Kiviiri',
    number:'27'
  },
  {
    imageSrc: '/team/Collins.JPG',
    imageAlt:'Melo',
    name:'Collins Suubi Kasujja',
    number:'10'
  },
  {
    imageSrc: '/team/Ongom.JPG',
    imageAlt:'item2',
    name:'Ongom Richard',
    number:'9'
  },
  {
    imageSrc: '/team/Dudus.jpg',
    imageAlt:'item2',
    name:'Monoja Daniel',
    number:'14'
  },
]

export default function TeamNew() {
    return (
      <>
      <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Team
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-10">
            {/* {players.map((player) => (
                <>
              <div key={player.name} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{player.name}</p>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{player.number}</p>
                </dt>
                <Image src={player.imageSrc} width={250} height={300} alt={player.imageAlt} className="mt-2 ml-16 text-base text-gray-500 rounded transform transition duration-500 hover:scale-110"></Image>
              </div>
               </>
            ))} */}
            {players.map((player) => (
            <div key={player.id} className="flex items-center justify-center transform transition duration-500 hover:scale-110">
          <figure className="relative max-w-xs cursor-pointer">
            <Image className="rounded-lg shadow-xl hover:shadow-2xl" src={player.imageSrc} width={250} height={300} alt={player.imageAlt}></Image>
              <figcaption className="absolute text-lg -mt-16 bg-opacity-50 text-gray-700 w-full px-4 bg-slate-100 pt-1">
            <div>
             <h1>{player.number}</h1>
            </div>
              <div>
               <h1>{player.name}</h1>
            </div>
            </figcaption>
           </figure>
          </div>
          ))}
          </dl>
        </div>
       </div>
    </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center lg:text-center">
  {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    Coaching Staff
  </p>
  <p className="mt-2 text-xl leading-5 tracking-tight text-gray-900 sm:text-3xl text-left">
   Head Coach : <span>Escodata</span>
  </p>
  <p className="mt-2 text-xl leading-5 tracking-tight text-gray-900 sm:text-3xl text-left">
   Assistant Head Coach :<span>Eric Malinga</span> 
  </p>
  <p className="mt-2 text-xl leading-5 tracking-tight text-gray-900 sm:text-3xl text-left">
   Statistician : <span>Balinnya John</span>
  </p>
  <p className="mt-2 text-xl leading-5 tracking-tight text-gray-900 sm:text-3xl text-left">
   Team Manager : <span>Nsubuga Ali</span> 
  </p>
  <p className="mt-2 text-xl leading-5 tracking-tight text-gray-900 sm:text-3xl text-left">
   Physio : <span>Dr. Noah Kayongo</span>
  </p>     
</div>
</div>
</>
    )
  }
  