import "./global.css";

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
    <div className="container">
      <h1 className="titulo">Página CSS Global</h1>
      <p className="descricao">Esta página demonstra o uso de CSS Global em um projeto React.</p>
      <p className="info">Você pode adicionar estilos globais no arquivo <code>global.css</code> e eles serão aplicados a toda a aplicação.</p>
      
      <div className="produtos-grid">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <img 
              src={produto.imagem} 
              alt={produto.nome}
              className="produto-imagem"
            />
            <div className="produto-info">
              <h3 className="produto-nome">{produto.nome}</h3>
              <p className="produto-descricao">{produto.descricao}</p>
              <span className="produto-preco">{produto.preco}</span>
              <button className="produto-botao">Adicionar ao Carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}