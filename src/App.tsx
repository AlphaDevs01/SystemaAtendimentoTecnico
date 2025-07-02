import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  ClipboardList, 
  Clock, 
  FolderOpen, 
  BarChart3, 
  Search, 
  Shield, 
  LogIn, 
  LayoutDashboard, 
  FileText, 
  Edit, 
  Eye, 
  Paperclip, 
  TrendingUp,
  Mail,
  Phone,
  MessageCircle,
  Github,
  Instagram,
  ChevronDown,
  Star,
  Users,
  Zap
} from 'lucide-react';
import emailjs from '@emailjs/browser'; // Adicione esta linha
import Logo from './assets/android-chrome-512x512.png';

// Importe as imagens dos prints
import printDashboard from './assets/dashboards.png';
import printAtendimentos from './assets/atendimentos.png';
import printRelatorios from './assets/relatorios.png';
import printNovoAtendimento from './assets/novoAtendimento.png';
import printDetalheAtendimento from './assets/detalhesAtendiemntos.png';
import printLogin from './assets/login.png';
import printAnexos from './assets/anexos.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Referência para o formulário
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Envio automático via EmailJS
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_ymsx9tb', // Substitua pelo seu service_id do EmailJS
          'template_jzfzvww', // Substitua pelo seu template_id do EmailJS
          formRef.current,
          'Q4Ri7TESdrrlc45_d' // Substitua pelo seu public_key do EmailJS
        )
        .then(
          () => {
            alert('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            alert('Erro ao enviar mensagem. Tente novamente.');
            console.error(error);
          }
        );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Estado para modal de imagem expandida
  const [expandedImg, setExpandedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Logo Atendimento Técnico" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alpha Devss
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('funcionalidades')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Funcionalidades
              </button>
              <button onClick={() => scrollToSection('telas')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Telas
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Testar Versão Demo
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('funcionalidades')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Funcionalidades
                </button>
                <button onClick={() => scrollToSection('telas')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Telas
                </button>
                <button onClick={() => scrollToSection('demo')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Demo
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Contato
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 w-full">
                  Testar Versão Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sistema de{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Atendimento Técnico
                  </span>{' '}
                  da Alpha Devss
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Organize seus atendimentos, melhore sua produtividade e tenha controle total do suporte técnico.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Baixar Versão de Testes</span>
                </button>
                <button onClick={() => scrollToSection('funcionalidades')} className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Ver Funcionalidades</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>100% Funcional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>Suporte Completo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>Seguro</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                    <div className="h-4 bg-purple-200 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para gerenciar seus atendimentos técnicos de forma eficiente e profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                title: 'Gestão Completa de Atendimentos',
                description: 'Organize todos os seus atendimentos em um só lugar com controle total do processo.'
              },
              {
                icon: Clock,
                title: 'Estatísticas em Tempo Real',
                description: 'Acompanhe o desempenho da sua equipe e métricas importantes em tempo real.'
              },
              {
                icon: FolderOpen,
                title: 'Upload de Anexos',
                description: 'Anexe documentos, imagens e vídeos aos atendimentos de forma simples e segura.'
              },
              {
                icon: BarChart3,
                title: 'Relatórios Avançados',
                description: 'Gere relatórios detalhados e exporte em Excel ou PDF para análises completas.'
              },
              {
                icon: Search,
                title: 'Busca e Filtros Inteligentes',
                description: 'Encontre qualquer atendimento rapidamente com nossa busca avançada e filtros.'
              },
              {
                icon: Shield,
                title: 'Autenticação Segura de Usuários',
                description: 'Sistema de login seguro com controle de acesso e permissões por usuário.'
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prints do Sistema */}
      <section id="prints" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prints do Sistema
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como é a interface do sistema na prática.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[printDashboard, printAtendimentos, printRelatorios, printNovoAtendimento, printDetalheAtendimento, printLogin, printAnexos].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Print ${idx + 1}`}
                className="rounded-xl shadow-lg border cursor-pointer transition-transform hover:scale-105"
                onClick={() => setExpandedImg(img)}
              />
            ))}
          </div>
        </div>
        {/* Modal de imagem expandida */}
        {expandedImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setExpandedImg(null)}
          >
            <img
              src={expandedImg}
              alt="Print expandido"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/80"
              onClick={() => setExpandedImg(null)}
              aria-label="Fechar"
            >
              ×
            </button>
          </div>
        )}
      </section>

      {/* Telas do Sistema */}
      <section id="telas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Screens Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the main screens of the system and their features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LogIn,
                title: 'LoginPage',
                description: 'Modern authentication screen with support for login and registration.',
                highlight: 'Secure and responsive design.'
              },
              {
                icon: LayoutDashboard,
                title: 'DashboardPage',
                description: 'Panel with a summary of service calls and monthly statistics.',
                highlight: 'Button for new service call and list of the most recent ones.'
              },
              {
                icon: FileText,
                title: 'ServiceRecordsPage',
                description: 'Complete listing of service calls with filters by status, client, and technician.',
                highlight: 'Smart search and quick actions.'
              },
              {
                icon: Edit,
                title: 'ServiceRecordFormPage',
                description: 'Registration/edit form with complete fields and attachment upload.',
                highlight: 'Supports PDF, images, and videos.'
              },
              {
                icon: Eye,
                title: 'ServiceRecordDetailPage',
                description: 'Detailed view of each service call.',
                highlight: 'Secure editing and deletion.'
              },
              {
                icon: Paperclip,
                title: 'AttachmentsPage',
                description: 'Attachment center with search by name, client, or work order.',
                highlight: 'Direct file download.'
              },
              {
                icon: TrendingUp,
                title: 'ReportsPage',
                description: 'Filterable reports and export to Excel/PDF.',
                highlight: 'Team costs, status, and productivity.'
              }
            ].map((screen, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <screen.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{screen.title}</h3>
                </div>
                
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <screen.icon className="w-12 h-12 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-3">{screen.description}</p>
                <p className="text-sm text-blue-600 font-medium">{screen.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Baixe a Versão de Testes Gratuitamente
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experimente agora mesmo o sistema completo. Sem compromissos, 100% funcional por tempo limitado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://link-externo.com/Sistema%20Posvenda%20Cimasp.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-semibold"
              >
                <Download className="w-5 h-5" />
                <span>Baixar Versão Demo</span>
              </a>
              <p className="text-blue-100 text-sm">
                Arquivo .exe • Windows 10/11 • 45MB
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Download Rápido</h3>
                <p className="text-blue-100">Baixe e instale em segundos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Totalmente Funcional</h3>
                <p className="text-blue-100">Todas as funcionalidades disponíveis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">100% Seguro</h3>
                <p className="text-blue-100">Sem vírus ou malware</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Tem dúvidas? Precisa de suporte? Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">alphadevss@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">(62) 99681-4937</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5562996814937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:alphadevss@gmail.com"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Alpha Devss</span>
              </div>
              <p className="text-gray-400">
                Desenvolvendo soluções tecnológicas inovadoras para otimizar seu negócio.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('inicio')} className="block text-gray-400 hover:text-white transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('funcionalidades')} className="block text-gray-400 hover:text-white transition-colors">
                  Funcionalidades
                </button>
                <button onClick={() => scrollToSection('telas')} className="block text-gray-400 hover:text-white transition-colors">
                  Telas
                </button>
                <button onClick={() => scrollToSection('demo')} className="block text-gray-400 hover:text-white transition-colors">
                  Demo
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Documentação
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
                <button onClick={() => scrollToSection('contato')} className="block text-gray-400 hover:text-white transition-colors">
                  Contato
                </button>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Suporte Técnico
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Alpha Devss. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;