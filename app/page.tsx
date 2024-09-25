
export default function Home() {
  return (
   <main className="bg-slate-100 min-h-screen text-slate-500"> 
      <header>
        <div>
          <img src="#" alt="" />
          <div className="flex">
            <h2>Gasto dos Senadores Brasileiros</h2>
            <p>Gasto dos Senadores brasileiros TOTAL por ESTADO (UF) - CEAPS</p>

          </div>
        </div>
        <nav>
          <button>calendario</button>
          <div>
          <button>Gastos por Partido</button>

          </div>
          <div>
           <button>Gastos por Partido</button>
          </div>
        </nav>

      </header>
      <div>
        <div>
          <h2>Gastos por UF</h2>
          <p>Dados de 2024</p>
        </div>
        <div>
          grafico
        </div>
      </div>
   </main>
  );
}
