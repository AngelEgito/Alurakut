import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
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

export default function Home() {
  const usuarioAleatorio = 'AngelEgito';
  const comunidades = React.useStete(['Alurakut']);
  console.log(comunidades);
  //const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros', 
    'mdsscml',
    'stenioagripino',
    'omariosouto',
    'jeffhsta',
    'ThiagoBarradas',
  ]
  
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
          <ProfileRelationsBoxWrapper>

            <ul>
                {comunidades.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://placehold.it/300x300`} /> 
                        <span>{itemAtual}</span>
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
                  <li>
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
