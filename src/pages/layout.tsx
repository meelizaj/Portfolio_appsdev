import { NavBar } from "@/components/common/header"
import { NavFooter } from "@/components/common/footer"
import { Outlet } from "react-router"

export default function Layout(){
  return(
    <div className="flex flex-col w-full min-h-screen">
      <NavBar/>
      <main className="grow">
        <Outlet/>
      </main>
      <NavFooter/>
    </div>
  )
}