# Important topics

1. **_Indentificar a area de aplicacao_**
   - _Servicos que precisam de agendamento._
2. **_Identificar o objeto do aplicativo_**
   - _Facilitar o processo de marcação de serviços._
     - _Agendamento de Serviços: Os clientes podem selecionar o serviço desejado, escolher o horário disponível e o funcionário preferido para realizar o serviço._
3. **_Definir o publico alvo(analisar a audiencia)_**
   - Homens e mulheres adultos que buscam serviços de beleza e bem-estar em salões de beleza.
     - **Faixa etária:** 25 a 45 anos.
     - **Gênero:** Predominantemente feminino, mas também incluindo homens que procuram serviços de beleza.
     - **Localização:** Definido com base na área de atuação do seu negócio, seja em uma cidade específica, região ou até mesmo em escala nacional.
4. **_Analise dos competidores_**
   - Identifique os principais competidores:
     - Pesquise e identifique os principais aplicativos ou empresas que oferecem serviços de agendamento de salões de beleza e cuidados pessoais na sua região ou área de atuação. Verifique tanto os aplicativos móveis quanto as plataformas online.
   - Avalie a proposta de valor:
     - Analise as características e funcionalidades oferecidas pelos competidores. Verifique se eles permitem agendamento de serviços, seleção de horários e profissionais, notificações e outras funcionalidades relevantes. Observe também se eles oferecem recursos adicionais, como programas de fidelidade ou avaliações dos usuários.
   - Experiência do usuário:
     - Experimente os aplicativos dos competidores para entender a experiência do usuário. Avalie a facilidade de uso, a navegabilidade, o design e a interação geral do aplicativo. Observe também a qualidade do atendimento ao cliente, a resposta a perguntas e solicitações de suporte.
   - Preços e modelos de negócio:
     - Analise os modelos de precificação utilizados pelos competidores, incluindo se eles cobram uma taxa fixa, uma comissão por serviço ou têm algum modelo de assinatura. Compare esses preços com os benefícios oferecidos aos usuários.
   - Reputação e avaliações dos usuários:
     - Pesquise avaliações e comentários de usuários sobre os competidores. Verifique a reputação geral e a satisfação do cliente. Observe os pontos fortes e fracos mencionados pelos usuários em relação aos concorrentes.
   - Vantagens competitivas:
     - Identifique as vantagens competitivas do seu aplicativo em comparação com os concorrentes. Pode ser um diferencial exclusivo, um recurso inovador, uma abordagem de marketing diferenciada ou qualquer outra característica que o destaque no mercado.
5. **_Desenvolver o Design de Interface_**

## \***\*Documentação do Aplicativo “TimeWise”\*\***

### \***\*Visão Geral\*\***

O TimeWise é um aplicativo de agendamento desenvolvido para facilitar o processo de marcação de serviços em um salão de beleza. Ele permite que os clientes acessem facilmente os serviços oferecidos, disponibilidade de horários e funcionários disponíveis, além de realizar o agendamento de forma conveniente.

### \***\*Funcionalidades Principais\*\***

- Cadastro de Negócio: Permite que proprietários de salões de beleza cadastrem seus serviços, horários de funcionamento e funcionários disponíveis.
- Agendamento de Serviços: Os clientes podem selecionar o serviço desejado, escolher o horário disponível e o funcionário preferido para realizar o serviço.
- Notificações: O aplicativo envia notificações para os clientes para lembrá-los de seus agendamentos e mantê-los informados sobre qualquer alteração.
- Gerenciamento de Agendamentos: Os proprietários de negócios têm acesso a uma interface administrativa para visualizar, editar e gerenciar os agendamentos feitos pelos clientes.

### Requisitos:

1. **Requisitos de Usabilidade:**
   - Facilidade de Navegação: O aplicativo deve ter uma interface intuitiva e de fácil compreensão, permitindo que os usuários naveguem pelo aplicativo sem dificuldades.
   - Eficiência de Tarefas: As principais funcionalidades do aplicativo devem ser realizadas de forma rápida e eficiente, garantindo uma experiência sem atrasos ou interações desnecessárias.
   - Consistência Visual: O aplicativo deve adotar um design coerente, com elementos visuais consistentes em todas as telas e funcionalidades.
   - Feedback Visual e Interativo: O aplicativo deve fornecer feedback visual e interativo aos usuários, por exemplo, através de animações, confirmações visuais de ações realizadas e indicadores de progresso.
   - Tamanho de Toque Adequado: Os elementos interativos do aplicativo devem ser dimensionados de forma a permitir o toque fácil e preciso, evitando toques acidentais.
2. **Requisitos de Comunicabilidade:**
   - Clareza de Informações: O aplicativo deve fornecer informações claras e compreensíveis aos usuários, evitando o uso de jargões técnicos ou termos ambíguos.
   - Feedback de Ações: O aplicativo deve comunicar ao usuário quando uma ação é realizada com sucesso ou se ocorreu algum erro, por meio de mensagens claras e significativas.
   - Comunicação Contextual: O aplicativo deve fornecer informações relevantes e contextuais aos usuários, por exemplo, orientações adicionais sobre os serviços, funcionários ou horários disponíveis.
   - Suporte a Idiomas: Se necessário, o aplicativo deve oferecer suporte a diferentes idiomas, permitindo que os usuários escolham a opção de idioma mais adequada para eles.
3. **Requisitos de Acessibilidade:**
   - Contraste e Legibilidade: O aplicativo deve ter um contraste adequado entre o texto e o fundo, garantindo uma leitura fácil e acessível para usuários com deficiências visuais.
   - Tamanho de Fonte Ajustável: Os usuários devem ter a opção de ajustar o tamanho da fonte para facilitar a leitura, especialmente para pessoas com baixa visão.
   - Compatibilidade com Leitores de Tela: O aplicativo deve ser compatível com leitores de tela utilizados por usuários com deficiência visual, garantindo que as informações sejam transmitidas corretamente.
   - Navegação por Teclado: O aplicativo deve permitir a navegação e interação usando apenas o teclado, para usuários com deficiências motoras que não podem usar a tela sensível ao toque.

### **Tecnologias Utilizadas**

- Linguagem de Programação: TypeScript
- Framework: React Native
- Armazenamento de Dados: Firebase - AsyncStorage `// Falta implementar Firebase`
- Autenticação de Usuário: Firebase Authentication `// Falta implementar`
- Envio de Notificações: Firebase Cloud Messaging `// Falta implementar`

### \***\*Fluxo de Uso\*\***

1. O usuário acessa o aplicativo TimeWise.
2. O usuário cria uma conta ou faz login com suas credenciais.
3. O usuário navega pelos serviços oferecidos, visualiza a disponibilidade de horários e escolhe um serviço, horário e funcionário.
4. O usuário confirma o agendamento e recebe uma notificação de confirmação.
5. O proprietário do salão de beleza recebe uma notificação sobre o novo agendamento e pode visualizá-lo na interface administrativa.
6. O proprietário pode gerenciar os agendamentos, editar detalhes, confirmar ou rejeitar solicitações de agendamento.

### \***\*Instalação e Configuração\*\***

Estará disponível tanto nas plataformas de IOS quanto Android em suas respectivas lojas de aplicativo. Sem a necessidade de baixar pacotes terceiros, a configuracao se dará por meio do proprio aplicativo, de modo intuitivo.

### \***\*Considerações de Segurança\*\***

- A segurança dos dados dos clientes é uma prioridade. Ultilizamos práticas seguras de armazenamento e transmissão de dados.
- Autenticação de usuário robusta para garantir que apenas usuários autorizados possam acessar as funcionalidades do aplicativo. `// in process of auth with JWT`
- Privacidade dos clientes tratada da melhor forma possivel. `// Termos e Privacidade in process`

### \***\*Conclusão\*\***

Esta documentação fornece uma visão geral das funcionalidades e tecnologias utilizadas no aplicativo “TimeWise”
