# TrackFit Portal

Portal React/TypeScript para administração e operação dos treinadores.

Treinadores aprovados podem convidar alunos, editar/publicar fichas com exercícios
ordenados e consultar o histórico detalhado de cada aluno. A mesma ficha e os
mesmos registros ficam disponíveis no aplicativo. Atualizar a ficha cria uma nova
versão, preservando treinos antigos e sessões já iniciadas.

## Desenvolvimento

1. Copiar `.env.example` para `.env` e conferir `VITE_API_URL`.
2. `npm install` e `npm run dev`.
3. `npm run build` e `npm run lint` para validar.

A API deve ter as migrations 006 e 007 aplicadas antes de usar o fluxo de treino.

## Ambientes

- Teste: `VITE_API_URL=https://api-test-setta.varten.com.br/api`
- Produção: `VITE_API_URL=https://api-setta.varten.com.br/api`
- Build: `npm run build`, saída `dist`.
- Domínios: `admin-test-setta.varten.com.br` e `admin-setta.varten.com.br`.

Tokens permanecem na aba atual em `sessionStorage`. ADMIN e TREINADOR têm acessos
separados; os alunos usam o app. Pedidos de ajuste ainda não estão disponíveis.

## Publicação por script

Fluxo `dev → prod`, plano, validação e publicação em `docs/release.md`.

```sh
./scripts/deploy-prod.sh --plan
./scripts/deploy-prod.sh --check
./scripts/deploy-prod.sh --publish
```

## Diário pessoal TrackFit

O portal admite o perfil ALUNO, incluindo cadastro independente por e-mail/senha. O diário registra manualmente corrida, pedalada, caminhada e musculação, sem GPS. Exige a API TrackFit e a migração 008_personal_activities.sql antes da publicação do portal.

Os fluxos existentes de treinador, fichas, histórico e convites foram preservados a partir da dev. A URL da API e o link setta:// continuam compatíveis com o aplicativo atual. Não há plano pago ou checkout implementado. A implantação e os testes contra o MySQL real continuam pendentes.
