export default function SectionPrincipal() {
  return (
    <section className="destaque">
      {/* Notícia */}
      <article className="noticia">
        <h2>Notícia importante!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
      </article>

      {/* Conteúdo principal */}
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

      {/* Sobre nós */}
      <article className="sobre">
        <h2>Sobre nós</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
      </article>
    </section>
  );
}
