//SPA - Single Page Application. Os dados são carregados apenas no momento que o usuário acessa a página 
//(problema de indexação, no google por exemplo)
//SSG - Server Side Generation. A página já estará carregada no servidor next, assim quando o usuário acessa-la, já estará
//carregada, o problema é que ela consome muitos recursos, pois são várias instâncias sendo carregadas para cada usuário,
//dessa forma, sempre estará atualizada com as novidades (caso a página seja alterada).
//SSG - Static Side Generation. A página já vai estar carregada no browser quando o cliente acessar, mas essa mesma
//instância será carregada para todos os usuários que acessarem a página (performance), dessa forma é uma página estática, como sabe-se
//que este projeto não possui muitas atualizações constantes, este método é vantajoso pois não consome muitos recursos,
//a página apenas será atualizada no tempo que o programador estipular.

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //tempo estipulado de atualização da página
  }
}
