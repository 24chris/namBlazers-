import Image from "next/image";

const games = [
  {
    id: 1,
    date: "11/3/2022",
    href: "#",
    teamA: "/logos/blaze.png",
    teamB: "/logos/City_Oilers.png",
    imageAlt: "Blazers vs Oilers",
    venue: "Lugogo",
    nameA: "Nam Blazers",
    nameB: "City Oilers",
    time: "",
  },
  ,
  {
    id: 2,
    date: "19/3/2022",
    href: "#",
    teamA: "/logos/blaze.png",
    teamB: "/logos/ourSavior.png",
    imageAlt: "Blazers vs Oilers",
    venue: "Lugogo",
    nameA: "Nam Blazers",
    nameB: "Our Savior",
    time: "18:00",
  },
  {
    id: 3,
    date: "26/3/2022",
    href: "#",
    teamA: "/logos/blaze.png",
    teamB: "/logos/ndejje.png",
    imageAlt: "Blazers vs Oilers",
    venue: "Lugogo",
    nameA: "Nam Blazers",
    nameB: "Ndejje Angels",
    time: "18:00",
  },
  {
    id: 4,
    date: "01/4/2022",
    href: "#",
    teamA: "/logos/POWER.JPG",
    teamB: "/logos/blaze.png",
    imageAlt: "Blazers vs Oilers",
    venue: "Lugogo",
    nameA: "Betway Power",
    nameB: "Nam Blazers",
    time: "20:30",
  },
  // More products...
];

export default function Schedule({ posts }) {
  return (
    <>
      <main className="bg-red-800">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {games.map((game) => (
              <div
                key={game.id}
                className="border-4 border-dashed border-gray-200 rounded-lg h-auto mt-4"
              >
                <h1 className="text-center text-xl">Date:{game.date}</h1>
                <h2 className="text-center">Time:{game.time}</h2>
                <div className="grid grid-cols-5 place-content-center">
                  {/* <div className="">
                    {game.nameA}
                    <Image
                      className="px-2"
                      src={game.teamA}
                      alt={game.imageAlt}
                      width={80}
                      height={100}
                    ></Image>
                  </div>
                  VS
                  <div>
                    <Image
                      className=""
                      src={game.teamB}
                      alt={game.imageAlt}
                      width={80}
                      height={100}
                    ></Image>
                    {game.nameB}
                  </div> */}
                  <h1 className="text-2xl text-center">{game.nameA}</h1>
                  <Image
                    className="rounded"
                    src={game.teamA}
                    alt={game.imageAlt}
                    width={500}
                    height={500}
                  ></Image>
                    <h1 className="text-center text-xl pt-20" >VS</h1>
                  <Image
                    className=""
                    src={game.teamB}
                    alt={game.imageAlt}
                    width={500}
                    height={500}
                  ></Image>
                  <h1 className="text-2xl text-center">{game.nameB}</h1>
                </div>
                <h2 className="text-xl text-center">Location:{game.venue}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
