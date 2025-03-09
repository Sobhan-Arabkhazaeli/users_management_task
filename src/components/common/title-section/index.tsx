import { FC } from "react";

interface IProps {
  title: string;
  number: number;
}

const TitleSection: FC<IProps> = ({ title, number }) => {
  return (
    <h1 className="text-3xl font-extrabold text-Navy">
      {title} <span className="text-gray-400"> {number}</span>{" "}
    </h1>
  );
};

export default TitleSection;
