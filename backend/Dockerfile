#alpine: imagem Linux "pequena"
FROM node:alpine

 # um diretório no sistema de arquivos do contêiner para os comandos a seguir
 WORKDIR /app

#copia o arquivo package.json para poder executar npm install
COPY package.json .

 #instala as dependências
RUN npm install --legacy-peer-deps

 #copia todo o conteúdo .local para a imagem
COPY . .

EXPOSE 4000

#executa quando o contêiner entrar em execução
CMD ["npm", "start"]
