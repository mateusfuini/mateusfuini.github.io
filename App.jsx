import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { FileText, Search, CheckCircle, AlertCircle, Home, Plus, Settings, User } from 'lucide-react'
import logotipo from './assets/logotipo.png'
import './App.css'

// Componente da Página Inicial
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={logotipo} alt="Logotipo CIJUN" className="h-8 w-auto" />
              <h1 className="text-2xl font-bold text-gray-900">Sistema TR</h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md">
                <Home className="h-5 w-5 inline mr-1" />
                Início
              </Link>
              <Link to="/novo-tr" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md">
                <Plus className="h-5 w-5 inline mr-1" />
                Novo TR
              </Link>
              <Link to="/admin" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md">
                <Settings className="h-5 w-5 inline mr-1" />
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema de Elaboração de Termos de Referência
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramenta inteligente para auxiliar na criação de Termos de Referência em conformidade 
            com a Lei das Estatais (13.303/2016), com pesquisa automática no ComprasNet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-6 w-6 text-blue-600 mr-2" />
                Novo Termo de Referência
              </CardTitle>
              <CardDescription>
                Inicie a elaboração de um novo TR com auxílio da IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/novo-tr">
                <Button className="w-full">Começar Agora</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-6 w-6 text-green-600 mr-2" />
                Pesquisar Referências
              </CardTitle>
              <CardDescription>
                Busque TRs similares no ComprasNet para referência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Pesquisar</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-purple-600 mr-2" />
                Meus TRs
              </CardTitle>
              <CardDescription>
                Visualize e gerencie seus termos de referência salvos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Ver Todos</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recursos Principais</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Conformidade Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Validação automática com Lei 13.303/2016
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Templates padronizados e atualizados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Alertas sobre requisitos obrigatórios
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Inteligência Artificial</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Geração automática de especificações
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Pesquisa inteligente no ComprasNet
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Sugestões contextuais personalizadas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Componente para Novo TR
function NovoTR() {
  const [etapaAtual, setEtapaAtual] = useState(1)
  const [objetoTR, setObjetoTR] = useState('')
  const [tipoContratacao, setTipoContratacao] = useState('')
  const [justificativa, setJustificativa] = useState('')
  const [especificacoes, setEspecificacoes] = useState('')

  const etapas = [
    { numero: 1, titulo: 'Objeto', descricao: 'Defina o objeto da contratação' },
    { numero: 2, titulo: 'Justificativa', descricao: 'Justifique a necessidade' },
    { numero: 3, titulo: 'Especificações', descricao: 'Detalhe as especificações técnicas' },
    { numero: 4, titulo: 'Revisão', descricao: 'Revise e finalize o TR' }
  ]

  const progresso = (etapaAtual / etapas.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={logotipo} alt="Logotipo CIJUN" className="h-8 w-auto" />
              <h1 className="text-2xl font-bold text-gray-900">Novo Termo de Referência</h1>
            </div>
            <Link to="/">
              <Button variant="outline">Voltar ao Início</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Indicador de Progresso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Etapa {etapaAtual} de {etapas.length}: {etapas[etapaAtual - 1].titulo}
            </h2>
            <Badge variant="outline">{Math.round(progresso)}% concluído</Badge>
          </div>
          <Progress value={progresso} className="mb-4" />
          <div className="flex justify-between">
            {etapas.map((etapa) => (
              <div key={etapa.numero} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  etapa.numero <= etapaAtual 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {etapa.numero}
                </div>
                <span className="text-xs text-gray-600 mt-1">{etapa.titulo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo da Etapa */}
        <Card>
          <CardHeader>
            <CardTitle>{etapas[etapaAtual - 1].titulo}</CardTitle>
            <CardDescription>{etapas[etapaAtual - 1].descricao}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {etapaAtual === 1 && (
              <>
                <div>
                  <Label htmlFor="objeto">Objeto da Contratação</Label>
                  <Input
                    id="objeto"
                    placeholder="Ex: Computadores, Serviços de Limpeza, Equipamentos de Ar Condicionado"
                    value={objetoTR}
                    onChange={(e) => setObjetoTR(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="tipo">Tipo de Contratação</Label>
                  <Select value={tipoContratacao} onValueChange={setTipoContratacao}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tipo de contratação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fornecimento">Fornecimento de Bens</SelectItem>
                      <SelectItem value="servicos">Prestação de Serviços</SelectItem>
                      <SelectItem value="obras">Execução de Obras</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {objetoTR && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">Sugestão da IA</h4>
                        <p className="text-blue-800 text-sm mt-1">
                          Baseado no objeto "{objetoTR}", encontramos 15 TRs similares no ComprasNet. 
                          Deseja que busquemos especificações técnicas comuns para este tipo de contratação?
                        </p>
                        <Button size="sm" className="mt-2">Buscar Referências</Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {etapaAtual === 2 && (
              <>
                <div>
                  <Label htmlFor="justificativa">Justificativa para a Contratação</Label>
                  <Textarea
                    id="justificativa"
                    placeholder="Descreva a necessidade da contratação, benefícios esperados e conexão com o objeto social da empresa..."
                    value={justificativa}
                    onChange={(e) => setJustificativa(e.target.value)}
                    className="mt-1 min-h-32"
                  />
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Requisitos da Lei 13.303/2016</h4>
                      <p className="text-yellow-800 text-sm mt-1">
                        A justificativa deve conter: motivação da contratação, benefícios diretos e indiretos, 
                        conexão com o objeto social da empresa e, quando aplicável, análise de viabilidade econômica.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {etapaAtual === 3 && (
              <>
                <div>
                  <Label htmlFor="especificacoes">Especificações Técnicas</Label>
                  <Textarea
                    id="especificacoes"
                    placeholder="Detalhe as especificações técnicas do objeto..."
                    value={especificacoes}
                    onChange={(e) => setEspecificacoes(e.target.value)}
                    className="mt-1 min-h-40"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-green-800">Referências Encontradas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-green-700">
                        3 TRs similares encontrados no ComprasNet com especificações detalhadas.
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">Ver Detalhes</Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-blue-800">Sugestão da IA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-blue-700">
                        Baseado nas referências, sugerimos incluir especificações de garantia e suporte técnico.
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">Aplicar Sugestão</Button>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {etapaAtual === 4 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-4">Resumo do Termo de Referência</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Objeto:</span>
                      <p className="text-gray-600">{objetoTR || 'Não informado'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Tipo:</span>
                      <p className="text-gray-600">{tipoContratacao || 'Não informado'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Justificativa:</span>
                      <p className="text-gray-600">{justificativa || 'Não informada'}</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="flex-1">Gerar PDF</Button>
                  <Button variant="outline" className="flex-1">Salvar Rascunho</Button>
                </div>
              </div>
            )}

            {/* Botões de Navegação */}
            <div className="flex justify-between pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={() => setEtapaAtual(Math.max(1, etapaAtual - 1))}
                disabled={etapaAtual === 1}
              >
                Anterior
              </Button>
              <Button 
                onClick={() => setEtapaAtual(Math.min(etapas.length, etapaAtual + 1))}
                disabled={etapaAtual === etapas.length}
              >
                Próxima
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

// Componente de Administração
function AdminPage() {
  const [activeTab, setActiveTab] = useState('templates')
  const [templates, setTemplates] = useState([
    { id: 1, nome: 'TR Padrão - Dispensa de Licitação', tipo: 'Dispensa', status: 'Ativo', ultimaAtualizacao: '2025-06-15' },
    { id: 2, nome: 'TR Padrão - Pregão Eletrônico', tipo: 'Pregão', status: 'Ativo', ultimaAtualizacao: '2025-06-10' },
    { id: 3, nome: 'TR Serviços Continuados', tipo: 'Serviços', status: 'Inativo', ultimaAtualizacao: '2025-05-20' }
  ])
  const [ias, setIas] = useState([
    { id: 1, nome: 'GPT-4 Turbo', provider: 'OpenAI', status: 'Ativo', ultimoUso: '2025-06-20' },
    { id: 2, nome: 'Claude 3.5 Sonnet', provider: 'Anthropic', status: 'Ativo', ultimoUso: '2025-06-19' },
    { id: 3, nome: 'Gemini Pro', provider: 'Google', status: 'Inativo', ultimoUso: '2025-06-15' }
  ])
  const [apiConfig, setApiConfig] = useState({
    comprasnetUrl: 'https://contratos.comprasnet.gov.br/api',
    apiKey: '****-****-****-****',
    timeout: 30,
    maxRetries: 3
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={logotipo} alt="Logotipo CIJUN" className="h-8 w-auto" />
              <h1 className="text-2xl font-bold text-gray-900">Administração</h1>
            </div>
            <Link to="/">
              <Button variant="outline">Voltar ao Início</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs de Navegação */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('templates')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'templates'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="h-5 w-5 inline mr-2" />
                Templates de TR
              </button>
              <button
                onClick={() => setActiveTab('ias')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ias'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <User className="h-5 w-5 inline mr-2" />
                Modelos de IA
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'api'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Settings className="h-5 w-5 inline mr-2" />
                API ComprasNet
              </button>
            </nav>
          </div>
        </div>

        {/* Conteúdo das Tabs */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Gerenciar Templates</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Template
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Templates Disponíveis</CardTitle>
                <CardDescription>
                  Gerencie os templates de Termo de Referência utilizados pelo sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templates.map((template) => (
                    <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{template.nome}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant={template.status === 'Ativo' ? 'default' : 'secondary'}>
                            {template.status}
                          </Badge>
                          <span className="text-sm text-gray-500">Tipo: {template.tipo}</span>
                          <span className="text-sm text-gray-500">
                            Atualizado em: {template.ultimaAtualizacao}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="outline" size="sm">Duplicar</Button>
                        <Button variant="destructive" size="sm">Excluir</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'ias' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Modelos de IA</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Modelo
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Modelos Configurados</CardTitle>
                <CardDescription>
                  Configure e gerencie os modelos de IA utilizados para geração de conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ias.map((ia) => (
                    <div key={ia.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{ia.nome}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant={ia.status === 'Ativo' ? 'default' : 'secondary'}>
                            {ia.status}
                          </Badge>
                          <span className="text-sm text-gray-500">Provider: {ia.provider}</span>
                          <span className="text-sm text-gray-500">
                            Último uso: {ia.ultimoUso}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Configurar</Button>
                        <Button variant="outline" size="sm">Testar</Button>
                        <Button variant="destructive" size="sm">Remover</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais de IA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="modelo-padrao">Modelo Padrão</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o modelo padrão" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt4">GPT-4 Turbo</SelectItem>
                        <SelectItem value="claude">Claude 3.5 Sonnet</SelectItem>
                        <SelectItem value="gemini">Gemini Pro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="temperatura">Temperatura (Criatividade)</Label>
                    <Input
                      id="temperatura"
                      type="number"
                      min="0"
                      max="1"
                      step="0.1"
                      defaultValue="0.7"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="max-tokens">Máximo de Tokens por Resposta</Label>
                  <Input
                    id="max-tokens"
                    type="number"
                    defaultValue="2000"
                    className="mt-1"
                  />
                </div>
                <Button>Salvar Configurações</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Configurações da API ComprasNet</h2>

            <Card>
              <CardHeader>
                <CardTitle>Configuração da API</CardTitle>
                <CardDescription>
                  Configure a integração com a API do ComprasNet para busca de referências
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="api-url">URL da API</Label>
                  <Input
                    id="api-url"
                    value={apiConfig.comprasnetUrl}
                    onChange={(e) => setApiConfig({...apiConfig, comprasnetUrl: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="api-key">Chave da API</Label>
                  <Input
                    id="api-key"
                    type="password"
                    value={apiConfig.apiKey}
                    onChange={(e) => setApiConfig({...apiConfig, apiKey: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="timeout">Timeout (segundos)</Label>
                    <Input
                      id="timeout"
                      type="number"
                      value={apiConfig.timeout}
                      onChange={(e) => setApiConfig({...apiConfig, timeout: parseInt(e.target.value)})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-retries">Máximo de Tentativas</Label>
                    <Input
                      id="max-retries"
                      type="number"
                      value={apiConfig.maxRetries}
                      onChange={(e) => setApiConfig({...apiConfig, maxRetries: parseInt(e.target.value)})}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button>Salvar Configurações</Button>
                  <Button variant="outline">Testar Conexão</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status da API</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status da Conexão</span>
                    <Badge className="bg-green-100 text-green-800">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Última Verificação</span>
                    <span className="text-sm text-gray-600">20/06/2025 13:05</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Requisições Hoje</span>
                    <span className="text-sm text-gray-600">47 / 1000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tempo de Resposta Médio</span>
                    <span className="text-sm text-gray-600">1.2s</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logs de Requisições</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  <div className="text-xs font-mono bg-gray-50 p-2 rounded">
                    <span className="text-green-600">[13:05:23]</span> GET /api/contratos/search?q=computadores - 200 OK (1.1s)
                  </div>
                  <div className="text-xs font-mono bg-gray-50 p-2 rounded">
                    <span className="text-green-600">[13:04:15]</span> GET /api/contratos/search?q=ar-condicionado - 200 OK (0.9s)
                  </div>
                  <div className="text-xs font-mono bg-gray-50 p-2 rounded">
                    <span className="text-red-600">[13:03:42]</span> GET /api/contratos/search?q=veículos - 429 Too Many Requests (0.2s)
                  </div>
                  <div className="text-xs font-mono bg-gray-50 p-2 rounded">
                    <span className="text-green-600">[13:02:18]</span> GET /api/contratos/search?q=limpeza - 200 OK (1.5s)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/novo-tr" element={<NovoTR />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default App

