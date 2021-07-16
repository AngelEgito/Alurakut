import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      < hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
        </a>
      </p>
      < hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.itens.length})
      </h2>
      <ul>
        {/*{seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} /> 
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>    
  )
}

export default function Home() {
  const usuarioAleatorio = 'AngelEgito';
  const [comunidades, setComunidades] = React.useState([{
    id: '123465446548764654978946421234548946514',
    title: 'odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  //const comunidades = comunidades[0];
  //const alteradorDeComunidades = comunidades[1];
  console.log('Nosso teste', );
  //const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros', 
    'mdsscml',
    'stenioagripino',
    'omariosouto',
    'jeffhsta',
    'ThiagoBarradas',
  ]
  const [seguiddores, setSeguidores] = React.useState([]);
  // 0 - Pear o array de dados do github
  React.useEffect(function() {
    fetch(`https://api.github.com/users/juunegreiros/followers`)
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSegdores(respostaCompleta);
    })
  }, [])

  console.log(`seguidores antes do return`, seguidores);

  // 1 - Criar um box que vai ter um map, baseado no array 
  // que pegamos no Github
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/*<Box style=" grir-area: profileArea;">*/}
        <div className ="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>  
        <div className="welcomeArea" style={{ grirdArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              console.log(e);
              const dadosDoForm = new FormData(e.target);

              comunidades.push('Alura Stars');
              console.log(comunidades);
            }}>            
            <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Seguidores" itens={seguidores} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>

            <ul>
                {comunidades.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                        <img src={itemAtual.image} /> 
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
             Minha Comunidade ({pessoasFavoritas.length})
            </h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
