import { useState } from "react"
import { Upload, CheckCircle2, ChevronRight, User, Briefcase, FileText } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function ProviderRegistration() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto max-w-3xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight">
            Renda<span className="text-primary">+</span>
          </Link>
          <span className="text-sm font-medium text-gray-500">Tornar-se Prestador</span>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 pt-10">
        
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className={`text-xs font-bold ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>Dados Pessoais</span>
            <span className={`text-xs font-bold ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>Profissão</span>
            <span className={`text-xs font-bold ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>Verificação</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
            ></div>
          </div>
        </div>

        {/* Form Sections */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Dados Pessoais</h2>
                  <p className="text-sm text-gray-500">Informações básicas para o teu perfil.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Nome Próprio</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary outline-none" placeholder="Ex: Carlos" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Apelido</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary outline-none" placeholder="Ex: Mendes" />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Data de Nascimento</label>
                  <input type="date" className="w-full border border-gray-300 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary outline-none text-gray-600" />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Endereço (Município/Bairro)</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary outline-none" placeholder="Ex: Luanda, Talatona" />
                </div>
              </div>

              <Button onClick={() => setStep(2)} className="w-full h-12 mt-4 text-base">
                Continuar <ChevronRight size={18} className="ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Sobre o teu Serviço</h2>
                  <p className="text-sm text-gray-500">O que fazes e como os clientes te vão encontrar.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Categoria Principal</label>
                  <select className="w-full border border-gray-300 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary outline-none bg-white">
                    <option>Selecione uma categoria...</option>
                    <option>Canalização</option>
                    <option>Eletricidade</option>
                    <option>Limpeza</option>
                    <option>Estética</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Descrição do teu trabalho</label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-primary focus:border-primary outline-none min-h-[100px]" 
                    placeholder="Conta aos clientes um pouco sobre a tua experiência..."
                  ></textarea>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Preço Base (Kz/h ou por serviço)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary outline-none" placeholder="Ex: 5000" />
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" onClick={() => setStep(1)} className="w-1/3 h-12">
                  Voltar
                </Button>
                <Button onClick={() => setStep(3)} className="w-2/3 h-12">
                  Continuar <ChevronRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Verificação de Identidade</h2>
                  <p className="text-sm text-gray-500">Para garantir a segurança de todos na plataforma.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Upload do Bilhete de Identidade</h3>
                  <p className="text-sm text-gray-500">Frente e Verso. Max 5MB (JPG, PNG ou PDF)</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <User size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Tirar uma Selfie</h3>
                  <p className="text-sm text-gray-500">A tua cara deve estar bem visível, sem óculos escuros.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 mt-0.5 shrink-0" size={20} />
                  <p className="text-sm text-blue-800">
                    Os teus dados estão protegidos. Apenas usamos isto para confirmar a tua identidade e dar-te o selo de <strong>"Profissional Verificado"</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" onClick={() => setStep(2)} className="w-1/3 h-12">
                  Voltar
                </Button>
                <Link to="/prestador/dashboard" className="w-2/3">
                  <Button className="w-full h-12 shadow-md shadow-primary/20 bg-primary hover:bg-primary/90 text-white">
                    Concluir e Enviar
                  </Button>
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
