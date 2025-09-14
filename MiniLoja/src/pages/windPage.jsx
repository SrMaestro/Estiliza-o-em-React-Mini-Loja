export default function CssGlobalPage() {
  const produtos = [
    {
      id: 1,
      nome: "Produto Premium",
      preco: "R$ 299,90",
      descricao: "Um produto de alta qualidade com design elegante e funcionalidades avançadas.",
      imagem: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Produto+Premium"
    },
    {
      id: 2,
      nome: "Produto Standard",
      preco: "R$ 149,90",
      descricao: "Versão acessível com ótimo custo-benefício e desempenho confiável.",
      imagem: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Produto+Standard"
    },
    {
      id: 3,
      nome: "Produto Pro",
      preco: "R$ 499,90",
      descricao: "Para usuários exigentes que precisam do máximo em performance e recursos.",
      imagem: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Produto+Pro"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
          Página CSS Global
        </h1>
        <p className="text-xl text-blue-100 text-center mb-2 max-w-3xl mx-auto">
          Esta página demonstra o uso de CSS Global em um projeto React.
        </p>
        <p className="text-blue-200 text-center mb-10 bg-white/10 p-4 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
          Você pode adicionar estilos globais no arquivo <code className="bg-black/20 px-2 py-1 rounded font-mono text-blue-300">global.css</code> e eles serão aplicados a toda a aplicação.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {produtos.map(produto => (
            <div key={produto.id} className="bg-white/95 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img 
                src={produto.imagem} 
                alt={produto.nome}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{produto.nome}</h3>
                <p className="text-gray-600 text-sm mb-4">{produto.descricao}</p>
                <span className="block text-green-700 font-bold text-lg mb-4">{produto.preco}</span>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-1">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}