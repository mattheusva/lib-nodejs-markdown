# md-url-check

## Sobre

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem 
simples de marcação de texto muito utilizada na web (como no GitHub, Reddit, etc...)
para facilitar a comunicação e discussão entre usuários; também é muito utilizada em arquivos do tipo `README`. 

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Com esta lib é possivel:
- analisar arquivo com extensão .md;
- verificar se há links no arquivo markdown;
- não encontrando, emitir uma mensagem avisando que não há links;
- caso encontre links, analisar se os links funcionam;
- retornar lista com os links identificados;
- retornar com o status http de cada link encontrado;

## Instalação 

### NPM

No terminal, executar o comando:

`npm install md-url-check`

Após a instalação, execute a lib com o comando:

'npx md-url-check /caminho/do/arquivo.md

* Exemplo: `npx md-url-check ./arquivos/texto.md`


* O caminho do arquivo pode ser relativo ao diretório de onde você está executando a lib, ou absoluto.
