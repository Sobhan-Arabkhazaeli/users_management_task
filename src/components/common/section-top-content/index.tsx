import { FC } from "react";
import SearchInput from "./SearchInput"

export  interface IPropsSearch {
  setSearch : React.Dispatch<React.SetStateAction<string>>;
}

const SectionTop_Content:FC<IPropsSearch> = ({setSearch}) => {
  return (
    <div className="p-3 bg-menu flex justify-between items-center">
        <SearchInput setSearch={setSearch}/>
    </div>
  )
}

export default SectionTop_Content