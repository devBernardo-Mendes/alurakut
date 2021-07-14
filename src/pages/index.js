import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations';
import React from 'react';
function ProfileSidebar(props) {
  return(
    <Box as="aside" >
      <img src={`https://github.com/${props.githubUser}.png`}style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" rhef={`https://github.com/${props.githubUser}`}> 
          {props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'devBernardo-Mendes';
  const [comunidades, setComunidades] = React.useState([{
    id: '1',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades, setComunidades= comunidades[1];
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
  'devMatheus-Gomes',
  'devAndre-Isaac',
  'm-pedreiira',
  'leonardomleitao'
]
  
  return (
    <>
    <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateComunit(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));

              const comunidade = {
                  id: new Date() .toDateString,
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
              }
              const comunidadeAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadeAtualizadas)
              }}>

              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?" 
                  type="text"
                />
              </div>
              <div>
                <input placeholder="Coloque uam URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uam URL para usarmos de capa" 
                />
              </div>
              
              <button>
                Criar uma comunidade
              </button>
            </form>
          
          </Box>
        </div>
        <div className="profileRelationsAreas" style={{ gridArea: 'profileRelationsAreas' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
                Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((intemAtual) => {
                return(
                  <li key={intemAtual.id}>
                    <a href={`/users/${intemAtual.title}`}>
                      <img src={intemAtual.image} />
                      <span>{intemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Comunidades ({pessoasFavoritas.length})
            </h2>
           
            <ul>
              {pessoasFavoritas.map((intemAtual) => {
                return(
                  <li key={intemAtual}>
                    <a href={`/users/${intemAtual}`} key={intemAtual}>
                      <img src={`https://github.com/${intemAtual}.png`} />
                      <span>{intemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box >
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  ) 
}
