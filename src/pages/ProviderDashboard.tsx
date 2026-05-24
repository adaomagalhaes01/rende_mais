import { useState } from "react"
import { Bell, Wallet, Star, TrendingUp, Calendar, CheckCircle2, AlertCircle, BarChart3, Clock, Zap } from "lucide-react"

export default function ProviderDashboard() {
  const [isAvailable, setIsAvailable] = useState(true)

  return (
    <div className="flex-1 w-full bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-8 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="/p3.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
              <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${isAvailable ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Carlos Mendes</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <span className="flex items-center text-yellow-500 font-medium">
                  <Star size={14} className="fill-current mr-1" /> 5.0
                </span>
                <span>• Técnico de Frio</span>
                <span>• Nível Ouro</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Disponível para trabalho</span>
              <button 
                onClick={() => setIsAvailable(!isAvailable)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${isAvailable ? 'bg-primary' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAvailable ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Wallet size={18} className="text-primary" />
              <span className="text-sm font-medium">Ganhos do Mês</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">145.000 <span className="text-sm font-normal text-gray-500">Kz</span></h3>
            <div className="flex items-center text-xs text-green-600 mt-2 font-medium">
              <TrendingUp size={12} className="mr-1" /> +12% vs último mês
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span className="text-sm font-medium">Concluídos</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24 <span className="text-sm font-normal text-gray-500">serviços</span></h3>
            <div className="text-xs text-gray-500 mt-2">Neste mês</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Star size={18} className="text-yellow-500" />
              <span className="text-sm font-medium">Avaliação Média</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">5.0 <span className="text-sm font-normal text-gray-500">/ 5</span></h3>
            <div className="text-xs text-gray-500 mt-2">12 novas avaliações</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <BarChart3 size={18} className="text-blue-500" />
              <span className="text-sm font-medium">Taxa de Resposta</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">98%</h3>
            <div className="text-xs text-gray-500 mt-2">Tempo médio: 5 min</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Incoming Requests / Active Jobs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h2 className="font-bold text-gray-900 flex items-center gap-2">
                  <Bell size={18} className="text-primary" />
                  Novos Pedidos
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-2">2</span>
                </h2>
              </div>
              <div className="p-5 space-y-4">
                {[1, 2].map(i => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5">
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900">Reparação de Ar Condicionado</h3>
                        <span className="font-bold text-primary">12.000 Kz</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1"><Calendar size={14} /> Hoje, 15:00</span>
                        <span className="flex items-center gap-1"><AlertCircle size={14} /> Talatona Sul</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                        O meu AC não está a gelar nada. Preciso de alguém com urgência para vir ver. O modelo é um Samsung Split 12000 BTUs.
                      </p>
                    </div>
                    <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                      <button className="flex-1 sm:flex-none bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition">
                        Aceitar
                      </button>
                      <button className="flex-1 sm:flex-none bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition">
                        Recusar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduled */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={20} className="text-gray-500" /> Agenda de Hoje
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 border-l-4 border-l-green-500 shadow-sm">
                  <div className="w-16 text-center">
                    <div className="text-lg font-bold text-gray-900">10:00</div>
                    <div className="text-xs text-gray-500">Manhã</div>
                  </div>
                  <div className="flex-1 border-l pl-4">
                    <h3 className="font-bold text-gray-900">Manutenção Preventiva</h3>
                    <p className="text-sm text-gray-500">Cliente: Sr. António • Kilamba</p>
                  </div>
                  <div className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                    Concluído
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 border-l-4 border-l-blue-500 shadow-sm">
                  <div className="w-16 text-center">
                    <div className="text-lg font-bold text-gray-900">16:30</div>
                    <div className="text-xs text-gray-500">Tarde</div>
                  </div>
                  <div className="flex-1 border-l pl-4">
                    <h3 className="font-bold text-gray-900">Instalação Completa</h3>
                    <p className="text-sm text-gray-500">Cliente: Dona Maria • Viana</p>
                  </div>
                  <button className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition">
                    Iniciar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Analytics Mini Widget */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-gray-400 text-sm font-medium mb-4">Metas da Semana</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Receita</span>
                    <span className="font-bold">45k / 50k Kz</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Serviços Concluídos</span>
                    <span className="font-bold">8 / 10</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges / Reputação */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Tuas Conquistas</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-primary mb-1"><Zap size={24} /></div>
                  <span className="text-[10px] font-bold text-gray-700">Rápido</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-green-500 mb-1"><CheckCircle2 size={24} /></div>
                  <span className="text-[10px] font-bold text-gray-700">Confiável</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="text-yellow-500 mb-1"><Star size={24} className="fill-current" /></div>
                  <span className="text-[10px] font-bold text-yellow-700">Top Pro</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
