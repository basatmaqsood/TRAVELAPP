import { PEOPLE_URL } from "@/constants/page";
import Image from "next/image";

type CampProps = {
  background: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

function CampSite({ background, title, subtitle, peopleJoined }: CampProps) {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${background} bg-no-repeat bg-cover lg:rounded-2xl lg:rounded-r-5xl `}
    >
      <div className="flex flex-col items-start justify-between h-full p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image
              src="/folded-map.svg"
              width={28}
              height={28}
              alt="folded map"
            />
          </div>
          <div className="flex flex-col gap-1  text-white">
            <h4 className="bold-18">{title}</h4>
            <p className="regular-14">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex overflow-hidden -space-x-4 ">
            {PEOPLE_URL.map((url, index) => (
              <Image
                className="rounded-full inline-block border-1 border-white h-10 w-10"
                key={index}
                src={url}
                width={52}
                height={52}
                alt="people"
              />
            ))}
          </span>
          <p className="bold-16 lg:b-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}

export default CampSite;
