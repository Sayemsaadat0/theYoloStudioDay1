import { BsSearch } from "react-icons/bs";
import category from "../data/category";

const Hero = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-red-500 text-4xl">DISCOVER</h2>
      <p>Your Amazing City</p>

      <div className="py-2 flex justify-center  items-center gap-4">
        <input
          type="text"
          className="bg-white p-3 px-5 rounded-full outline-red-500 border-[1px] w-[36%]"
          placeholder="search anything"
        
        />

        <button className="text-white p-4 hover:scale-105 duration-300 border rounded-full bg-red-500 ">
          <BsSearch size="20"></BsSearch>
        </button>
      </div>

      <div className="pt-5">
        <h2 className="text-xl">or Browse the Category </h2>
        <div className="flex  gap-10 justify-center py-2">
          {category.map((item, index) => (
                <h1 key={index} className="border p-2 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-500 cursor-pointer">{item.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
