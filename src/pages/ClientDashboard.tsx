import { useState } from "react"
import { Search, MapPin, Star, Clock, Filter, ChevronRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"

const ongoingServices = [
  {
    id: 1,
    provider: "Carlos Mendes",
    role: "Técnico de Frio",
    status: "A caminho",
    time: "14:30",
    price: "8.000 Kz",
    image: "/p3.jpg",
  }
]

const recentProviders = [
  {
    id: 2,
    name: "Maria Costa",
    role: "Limpeza Geral",
    rating: 4.8,
    date: "12 Mai, 2026",
    price: "5.000 Kz",
    image: "/p2.jpg",
  }
]

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex-1 w-full bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-8 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Olá, João Paulo 👋</h1>
            <p className="text-gray-500 mt-1">O que precisas de resolver hoje?</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center p-2 rounded-full bg-white border shadow-sm text-gray-600 hover:bg-gray-50">
              <Filter size={20} />
            </button>
            <Link to="/procurar" className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition shadow-sm">
              Novo Pedido
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Search Bar - Mobile prominent */}
            <div className="relative md:hidden mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Ex: Eletricista, Limpeza..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>

            {/* Atividade Recente / Ongoing */}
            {ongoingServices.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Serviço em Andamento</h2>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} /> Hoje, {ongoingServices[0].time}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <img src={ongoingServices[0].image} alt="Provider" className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{ongoingServices[0].provider}</h3>
                    <p className="text-sm text-gray-500">{ongoingServices[0].role}</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">{ongoingServices[0].price}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold">
                      {ongoingServices[0].status}
                    </div>
                    <Link to="/chat/1" className="text-primary text-sm font-medium hover:underline">
                      Abrir Chat
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Categories */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Categorias Rápidas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Limpeza', 'Eletricidade', 'Técnico', 'Montagem'].map((cat, i) => (
                  <button key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition text-center flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary font-bold">
                      {cat.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Histórico */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Serviços Concluídos</h2>
                <button className="text-sm text-primary font-medium flex items-center">
                  Ver todos <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-3">
                {recentProviders.map((provider) => (
                  <div key={provider.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                    <img src={provider.image} alt={provider.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                      <p className="text-xs text-gray-500">{provider.role} • {provider.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{provider.price}</p>
                      <div className="flex items-center gap-1 text-xs text-green-600 font-medium justify-end mt-1">
                        <CheckCircle2 size={12} /> Pago
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            {/* Wallet / Balance Widget */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Carteira Digital</h3>
              <div className="text-3xl font-bold mb-4">12.500 <span className="text-lg text-gray-400 font-normal">Kz</span></div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-white text-gray-900 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
                  Carregar
                </button>
                <button className="flex-1 bg-gray-800 text-white py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:bg-gray-700 transition">
                  Levantar
                </button>
              </div>
            </div>

            {/* Favorite Providers */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Favoritos</h3>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                       <img src={`/p${i + 3}.jpg`} alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">Prestador #{i}</h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Star size={10} className="text-yellow-500 fill-current mr-1" /> 4.9 • Luanda
                      </div>
                    </div>
                    <button className="text-primary text-xs font-semibold bg-primary/10 px-2 py-1 rounded-md">
                      Chamar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
