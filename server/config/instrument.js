// Importe com `import * as Sentry from "@sentry/node"` se estiver usando ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration }from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://ff180303af74fccbc0b04a0215cf2b77@o4508642266841088.ingest.us.sentry.io/4508676396810240",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration() 
  ],
  // Transações
  // tracesSampleRate: 1.0, //  Capture 100% das transações
});
// Chamar manualmente startProfiler e stopProfiler
// para criar o perfil do código entre
Sentry.profiler.startProfiler();

// Inicia uma transação que também será perfilada
Sentry.startSpan({
  name: "My First Transaction",
}, () => {
  // o código em execução dentro da transação será encapsulado em um intervalo e perfilado
});

// Chamadas para stopProfiling são opcionais - se você não parar o profiler, ele continuará criando o perfil
// seu aplicativo até que o processo saia ou stopProfiling seja chamado.
Sentry.profiler.stopProfiler();
