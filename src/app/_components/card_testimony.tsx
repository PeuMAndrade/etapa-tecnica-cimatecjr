// components/TestimonyCard.tsx
import Image from "next/image";
import { StaticImageData } from "next/image";
import { TestimonyType } from "../../types";

interface TestimonyCardProps extends TestimonyType {}


const TestimonyCard: React.FC<TestimonyCardProps> = ({
  title,
  product,
  experience,
  date,
  image,
}) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md transition-transform hover:scale-105 select-none border-3 border-r-cyan-950 border-b-cyan-950">
      <div className="w-full h-42 relative rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-base uppercase font-semibold text-blue-500">
          {product}
        </p>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {experience}
        </p>
        <p className="text-md text-gray-500 mt-3 font-semibold">
          Data: <span className="font-semibold">{date}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
