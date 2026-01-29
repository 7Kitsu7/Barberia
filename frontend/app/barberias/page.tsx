import { getBarberias } from "@/features/barberias/services/barberiaService";

export default async function BarberiasPage() {
  const barberias = await getBarberias();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Nuestras Barberías</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {barberias.map((b: any) => (
          <div key={b.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{b.nombre}</h2>
            <p className="text-gray-600">{b.direccion}</p>
            <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded mt-2 inline-block">
              ⭐ {b.puntuacion}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}