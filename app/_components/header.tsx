import Image from "next/image";
import logo from '../_assets/logo.svg'
import calendar from '../_assets/calendar.svg'
import FlagIcon from "../_assets/icons/flag-icon";
import MapIcon from "../_assets/icons/map-icon";

export default function Header(){
  return (
    <header className="mb-12 flex flex-col gap-10 lg:flex-row  justify-center items-center">
    <div className="flex items-center">
      <Image src={logo} alt="logo" width={70} height={70}/>
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-1" >Gasto dos Senadores Brasileiros</h1>
        <p>Gasto dos Senadores brasileiros total por estado (UF) - CEAPS</p>
      </div>
    </div>

    <nav className="flex gap-6 ">
      <div className="border-r-2 pr-6 border-black/10">
       <button className="flex flex-col items-center justify-center text-xs gap-2 border-black/10 border-2 px-4 py-3 rounded-lg">
        <Image src={calendar} alt="calendario icon" />
        Calendário
       </button>
      </div>
      <div className="border-r-2 pr-6 ">
       <button className="flex flex-col items-center justify-center text-xs gap-2 border-black/10 border-2 px-4 py-3 rounded-lg hover:border-green-600 transition-colors hover:fill-green-600 fill-slate-500">
       <MapIcon className="fill-slate-500" />
        {/* <Image src={mapa} alt="calendario icon" /> */}
        Gasto por UF
       </button>
      </div>
      <div className="border-r-2 pr-6">
       <button className="flex flex-col items-center justify-center text-xs gap-2 border-black/10 border-2 px-4 py-3 rounded-lg  hover:border-green-500 transition-colors">
       <FlagIcon />
        Gasto por Partido
       </button>
      </div>
    </nav>

  </header>
  )
}