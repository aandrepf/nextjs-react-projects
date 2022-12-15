# React and NextJS course

## NextJS Static Generation

É a forma mais recomendada de geração de paginas com NextJS
A ideia é pré-gerar uma pagina em tempo de build, ou seja, antes de fazer o deploy. E podemos dizes que se trata de gerar o HTML e toda informação com antecedencia.

Com isso as paginas podem ficar em cache pelo servidor ou pela CDN que pode estar servindo seu app.

As paginas não estam vazias e sim populadas com conteudo.

Temos a função assincrona **getStaticProps(context){...}** que é definida mas **paginas** da aplicação. Nela podemos rodar qualquer função que normalmente rodaria somente no lado do server. Todo codigo dentro não será compilado no bundler, ou seja, clients não terão acesso a esse codigo.

## Incremental Static Generation (ISR)

Significa que não precisa gerar estaticamente sua pagina uma unica vez em tempo de build, mas sim continuamente atualizada mesmo depois do deploy sem precisar fazer o deploy novamente.

Informamos para o NextJS que ele regenera a pagina pre-gerada em cada request a cada X segundos.

## Pre-Generated Paths

Paginas dinamicas (`[id].js`) não precisam somente de dados: Vai precisar também saber qual o **id** que será disponibilizado

Para isso usamos a função assincrona **getStaticPaths(){...}**

## getServerSideProps for server-side rendering (SSR)

Algumas vezes é necessário pre-renderizar uma pagina para cada request ou necessário acessar um objeto de uma request (ex.: cookies)

NextJS permite rodar um codigo real server-side toda vez que uma request para uma pagina bater no server

Todo esse codigo roda dentro da função assincrona **getServerSideProps(){...}**. Essa função assim como as outras só usamos em componentes de paginas. Essa função retorna o mesmo objeto que getStaticProps. A unica diferença é a propriedade _revalidate_ que não se faz necessário nesse caso, pois a chamada vai ocorrer sempre a cada request para a pagina.

## getServerSideProps and Context

O context nesse caso tem acesso ao objeto completo da request. Podemos por exemplo, adicionar headers extras

## Dynamic Pages with getServerSideProps

Nesse caso não precisamos de um getStaticPaths, pois não estamos falando para o NextJS que pagina ele precisa pre-renderizar. No caso de SSR ela é renderizada na request e já tem acesso direto aos parametros que definem a pagina.

## Cliend-side Data Fetching

Alguns dados não precisam ser pre-renderizados ou nem podem, por exemplo, dados que mudam com muita frequencia como dados de ações, ou dados das ultimas compras on-line de um usuário, ou algum dashboard com vários pedaços de informações que mudam constantemente. Nesses casos pode ser interessante termos alguma forma visual de aguardar os dados carregarem ao invés de serem renderizados desde o início.

Para se fazer sentido podemos usar **useEffect()** combinado com um **fetch** para acessar alguma API externa e obter os dados dentro do componente.

## SWR NextJS Hook

[SWR NextJS](https://swr.vercel.app/pt-BR), **Stale While Revalidate**, é um hook que foi desenvolvido pelo time do NextJS, mas que pode ser usado em apps que não usem NextJS também. É a estratégia de primeiro retornar os dados do cache (stale), depois enviar a solicitação de fetch (revalidate), e finalmente retornar com os dados atualizados.

```javascript
/*
  Nesse exemplo, o hook useSWR aceita uma string key e uma função fetcher. key é um identificador único do dado (normalmente a URL da API) e será passado para fetcher. fetcher pode ser qualquer   função assíncrona que retorna o dado, você pode usar o fetch nativo ou ferramentas como Axios.

  O hook retorna 2 valores: data e error, baseado no status da solicitação.
*/
import useSWR from "swr";

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>falhou em carregar</div>;
  if (isLoading) return <div>carregando...</div>;
  return <div>Olá {data.name}!</div>;
}
```
