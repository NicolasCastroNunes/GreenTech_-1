import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="topo">
        <h1 className="logo">GreenTech</h1>
        <nav className="menu">
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Localização</a></li>
            <li><a href="#">Catálogo</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção Principal */}
      <main>
        <section className="destaque">
          <article className="noticia">
            <h2>Notícia importante!</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </article>

          <article className="principal">
            <h2>🌿 GREEN TECH</h2>
            <h3>Soluções ecológicas para um futuro sustentável</h3>
            <ul>
              <li>Tecnologia a favor do planeta</li>
              <li>Sustentabilidade para grandes empresas</li>
            </ul>
            <ul className="beneficios">
              <li>✔ Eficiência ecológica</li>
              <li>✔ Inovação com responsabilidade</li>
              <li>✔ Impacto positivo real</li>
            </ul>
            <p><strong>Vamos transformar o mundo juntos.</strong></p>
            <p>Entre em contato e saiba como levar sustentabilidade para sua empresa.</p>
          </article>

          <article className="sobre">
            <h2>Sobre nós</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </article>
        </section>

        {/* Seção de Serviços */}
        <section className="servicos">
          <article className="noticia">
            <h2>Notícia importante!</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </article>

          <div className="cards">
            <div className="card">
              <ul>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Instalações</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
                <li><a href="#">Sistemas Sustentáveis</a></li>
              </ul>
            </div>
            <div className="card">
              <ul>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Instalações</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
                <li><a href="#">Sistemas Sustentáveis</a></li>
              </ul>
            </div>
            <div className="card">
              <ul>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Instalações</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
                <li><a href="#">Sistemas Sustentáveis</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <a href="#" className="btn-cta">Clique aqui e saiba mais!</a>
        <p>Direitos reservados a @GreenTech</p>
      </footer>
    </div>
  );
}

export default App
