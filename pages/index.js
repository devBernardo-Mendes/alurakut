import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return(
    <Box >
      <img src={`https://github.com/${props.githubUser}.png`}style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
const githubUser = 'devBernardo-Mendes';
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
        </div>
        <div className="profileRelationsAreas" style={{ gridArea: 'profileRelationsAreas' }}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
           
            <ul>
              {pessoasFavoritas.map((intemAtual) => {
                return(
                  <li>
                    <a href={`/users/${intemAtual}`} key={intemAtual}>
                      <img src={`https://github.com/${intemAtual}.png`}></img>
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
