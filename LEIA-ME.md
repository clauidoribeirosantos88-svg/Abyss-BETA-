# Gerar o .exe SEM instalar nada no seu PC (GitHub)
1. Crie uma conta gratuita em github.com e um repositório novo (botão "New").
2. Envie TODO o conteúdo desta pasta para ele (Add file > Upload files, arraste tudo, inclusive a pasta .github).
3. Abra a aba "Actions", escolha "Gerar EXE" e clique em "Run workflow".
4. Em uns 3 minutos termina. Abra a execução concluída e baixe "Abismo-de-Cinzas-exe" no fim da página.
   Dentro tem o instalador e uma versão "portable" (um único .exe que abre direto, sem instalar).

---

# Abismo de Cinzas — como instalar

## 1) Celular ou PC pelo navegador (PWA)
1. Coloque estes arquivos em uma hospedagem HTTPS (Netlify, Vercel, GitHub Pages ou Cloudflare Pages — todas gratuitas; basta arrastar a pasta).
2. Abra o link no Chrome/Edge (Android ou PC) ou Safari (iPhone).
3. Toque em "Instalar app" (ou Compartilhar > Adicionar à Tela de Início no iPhone).
O jogo vira um ícone, abre em tela cheia e funciona offline depois da primeira visita.

## 2) Programa de computador (.exe / AppImage)
Precisa do Node.js (nodejs.org). Na pasta do projeto:
    npm install
    npm start              (testar)
    npm run build:win      (gera o instalador .exe em /dist)
    npm run build:linux    (gera o AppImage)
Para gerar o .exe, rode o comando no Windows. F11 alterna tela cheia.

## 3) App Android (.apk) com Capacitor
Precisa do Node.js e do Android Studio.
    mkdir www && cp index.html manifest.webmanifest sw.js www/ && cp -r icons www/
    npm i @capacitor/core @capacitor/cli @capacitor/android
    npx cap init "Abismo de Cinzas" com.abismo.cinzas --web-dir=www
    npx cap add android
    npx cap open android   (no Android Studio: Build > Build APK)

## Observações
- O jogo usa mouse e teclado. Para celular ainda falta criar controles de toque.
- A fonte vem do Google Fonts; offline cai numa fonte padrão do sistema.
