import { FC, JSX } from "react"

type Tprops = {
    children : JSX.Element;
}

const AppProvider:FC<Tprops> = ({children}) => {
  return (
    <>
    {children}
    </>
  )
}

export default AppProvider