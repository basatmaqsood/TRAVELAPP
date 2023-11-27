import Image from "next/image";
import CampSite from "./CampSite";

function Camp() {
  return (
    <section className="max-container relative flex flex-col py-10 lg:py-10 lg:mb-10 xl:mb-20">
      <div className="hide-scrollbar flex items-start w-full h-[340px] lg:h-[400px] xl:h-[640px] justify-start gap-8 lg:p-5">
        <CampSite
          background="bg-bg-img-1"
          title="Putuk truno camp"
          subtitle="Prigen, Pasurun"
          peopleJoined="50+ Joined"
        />
        <CampSite
          background="bg-bg-img-2"
          title="Mountain View camp"
          subtitle="Somewhere in the Wild"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="reular-24 md:regular-32 xl:regular-40 capitalize text-white"><strong>Feeling Lost</strong> and not Knowing the way?</h2>
          <p className="regular-14 lg:regular-16  text-white mt-5">
          Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image src='/quote.svg' alt='camp-2' width={186} height={219} className="camp-quote"/>
        </div>
      </div>
    </section>
  );
}

export default Camp;
