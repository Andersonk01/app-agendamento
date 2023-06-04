<!-- Todo: Arrumar a page FEED pois o carregamento da image esta atrasada (precisando causar uma nova renderizacao para poder funcionar corretamente ), possiveis solucoes: {
?  [] Usar um useEffect na pagina principal(Settings) para atualizar o SettImage
?  [] Subir para o firebase e requisitar novamente (nada pratico mais possivel)
} -->

<!--! Funcionalidades relevantes para ser implementadas: -->{

- Gestao financeira: 'caixa' 'contas' 'fluxos';
- Relatorio: 'historico' 'maior movimento' 'planejar estrategias';
- Cadastro de clientes: 'client' 'frequencial' 'fidelidade' 'promoções de aniversario';
- Agenda de horario;

* Feed: 'imagens relevantes de trabalhos ja feitos';
* Avaliação de Client: 'max 5 estrelas';

}

<!--! TAREFAS TERAM QUE SER CUMPRIDAS DE MANEIRA S-I-N-C-R-O-N-A -->

Tarefas para cada page:

<!--TODO: LOGIN page: -->

1. Inputs
   {
   username
   password
   phone number
   }

2. Button
   {
   label: 'Login'
   }

---

<!--TODO: HOME Provisoria -->

{

- Vai conter duas 'View' como background:
  {
  A view de cima inicialmente vai ter mais flex que a debaixo;
  }
- Conteudo vai ficar um index superior a div de baixo, ultrapassando um pouco a de cima:
  {
  - Composto de três 'View':
    {
  * Sera a de 'Serviços';
  * Sera a de 'Funcionaria';
  * Sera a de 'Data e Hora';
    }
    }
    }

<!-- TODO: Page of Services -->
  <!--? Vai ser um modal  -->
<!--! Ordem correta a seguir -->

height of modal: 200 > por enquanto

1. Serviços em si;
2. na parte inferior vai conter:{
   - Button voltar para HOME: '<';
   - Button: 'Continue';
     }

# Cores Usadas

- cor menu: #f39
- cor bg primary: #fbbbbb
- cor bd primary: #f39
- cor bg component Box: #faa2a1
