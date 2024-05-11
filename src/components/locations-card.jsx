import pin from "../assets/locationPin.svg";

function Card(prop) {
  return (
    <div className="flex flex-col px-10 border-b-2 pb-3 border-[#F5F5F5] md:flex-row md:px-0 max-w-4xl">
      <img src={prop.item.img} className="rounded-md md:max-w-[20rem]" />
      <div className=" md:m-5">
        <h2>
          <img src={pin} className="inline" />
          <span className="ml-2 text-xs font-normal tracking-widest uppercase">
            {prop.item.country}
          </span>
          <span className="ml-2 text-xs font-normal text-[#918E9B] underline md:ml-3 ">
            <a href={prop.item.mapsLink}>View on Google Maps</a>
          </span>
        </h2>
        <h1 className="text-2xl font-bold capitalize text-[#2B283A] h-10">
          {prop.item.place}
        </h1>
        <h3 className="text-xs font-bold">{prop.item.date}</h3>
        <p className=" mt-2 leading-[150%] font-light">{prop.item.description}</p>
      </div>
    </div>
  );
}
export default Card;




