import React from 'react';
import './index.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">BookStore</div>
          <nav className="nav">
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#highlights">Destaques</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#blog">Blog Literário</a></li>
              <li><a href="#club">Clube de Leitura</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
              <li><a href="#footer">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Encontre o Livro Perfeito para Você</h1>
          <p>Explore nossa vasta coleção de livros de diferentes gêneros.</p>
          <a href="#highlights" className="cta-button">Ver Destaques</a>
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="about">
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>Somos uma livraria dedicada a proporcionar a melhor experiência de leitura. Nossa missão é oferecer os livros mais fascinantes e relevantes do mercado.</p>
        </div>
      </section>

      {/* Destaques */}
      <section id="highlights" className="highlights">
        <div className="container">
          <h2>Livros em Destaque</h2>
          <div className="books">
            <div className="book">
              <img src="path/to/book1.jpg" alt="Livro 1" />
              <h3>Título do Livro 1</h3>
              <p>Autor do Livro 1</p>
            </div>
            <div className="book">
              <img src="path/to/book2.jpg" alt="Livro 2" />
              <h3>Título do Livro 2</h3>
              <p>Autor do Livro 2</p>
            </div>
            <div className="book">
              <img src="path/to/book3.jpg" alt="Livro 3" />
              <h3>Título do Livro 3</h3>
              <p>Autor do Livro 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>O que nossos clientes dizem</h2>
          <div className="testimonial">
            <p>"A melhor livraria que já conheci! Os livros são incríveis e o atendimento é excepcional."</p>
            <span>- Cliente Satisfeito</span>
          </div>
          <div className="testimonial">
            <p>"Comprei meu livro favorito aqui e o processo foi super rápido e fácil. Recomendo!"</p>
            <span>- Outro Cliente</span>
          </div>
        </div>
      </section>

      {/* Blog Literário */}
      <section id="blog" className="blog">
        <div className="container">
          <h2>Blog Literário</h2>
          <p>Explore nossos artigos sobre o mundo dos livros, descubra novas resenhas e fique por dentro das últimas novidades literárias.</p>
          <div className="blog-posts">
            <div className="post">
              <img src="path/to/blog1.jpg" alt="Post 1" />
              <h3>Resenha: Livro Imperdível</h3>
              <p>Confira nossa resenha sobre este livro emocionante que está fazendo sucesso.</p>
            </div>
            <div className="post">
              <img src="path/to/blog2.jpg" alt="Post 2" />
              <h3>Lançamentos de Outubro</h3>
              <p>Veja os lançamentos mais aguardados deste mês e prepare sua lista de leitura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clube de Leitura */}
      <section id="club" className="club">
        <div className="container">
          <h2>Clube de Leitura</h2>
          <p>Junte-se ao nosso Clube de Leitura e participe de discussões literárias envolventes. Cadastre-se para receber informações sobre os próximos encontros!</p>
          <a href="#newsletter" className="cta-button">Cadastre-se</a>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="newsletter">
        <div className="container">
          <h2>Inscreva-se na nossa Newsletter</h2>
          <p>Receba novidades e lançamentos diretamente no seu e-mail.</p>
          <form>
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">Inscrever</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="logo">BookStore</div>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#highlights">Destaques</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#blog">Blog Literário</a></li>
            <li><a href="#club">Clube de Leitura</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
          <p>&copy; 2024 BookStore. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
