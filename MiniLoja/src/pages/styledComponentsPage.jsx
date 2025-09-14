import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`;

const Titulo = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;
`;

const Descricao = styled.p`
  color: #e0e7ff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Info = styled.p`
  color: #c7d2fe;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);

  code {
    background: rgba(0, 0, 0, 0.2);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #a5b4fc;
  }
`;

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProdutoCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProdutoImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProdutoCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProdutoInfo = styled.div`
  padding: 1.5rem;
`;

const ProdutoNome = styled.h3`
  color: #1f2937;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProdutoDescricao = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ProdutoPreco = styled.span`
  display: block;
  color: #059669;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProdutoBotao = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

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
    <Container>
      <Titulo>Styled-components.</Titulo>
      <Descricao>Esta página demonstra o uso de CSS Global em um projeto React.</Descricao>
      <Info>
        Você pode adicionar estilos globais no arquivo <code>global.css</code> e eles serão aplicados a toda a aplicação.
      </Info>
      
      <ProdutosGrid>
        {produtos.map(produto => (
          <ProdutoCard key={produto.id}>
            <ProdutoImagem 
              src={produto.imagem} 
              alt={produto.nome}
            />
            <ProdutoInfo>
              <ProdutoNome>{produto.nome}</ProdutoNome>
              <ProdutoDescricao>{produto.descricao}</ProdutoDescricao>
              <ProdutoPreco>{produto.preco}</ProdutoPreco>
              <ProdutoBotao>Adicionar ao Carrinho</ProdutoBotao>
            </ProdutoInfo>
          </ProdutoCard>
        ))}
      </ProdutosGrid>
    </Container>
  );
}