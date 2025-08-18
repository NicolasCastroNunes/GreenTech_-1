function Card() {
  return (
    <div className="card">
      <ul>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Instalações</a></li>
        <li><a href="#">Trabalhe Conosco</a></li>
        <li><a href="#">Sistemas Sustentáveis</a></li>
      </ul>
    </div>
  );
}

export default function CardsSection() {
  return (
    <section className="servicos">
      {/* Notícia */}
      <article className="noticia">
        <h2>Notícia importante!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
      </article>

      {/* Cards */}
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
