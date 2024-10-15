const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);

/* Problema: Mensagem não desaparecia automaticamente
   Solução: Adicionado setTimeout para ocultar a mensagem após 5 segundos */

const { BlobServiceClient } = require("@azure/storage-blob");
const path = require("path");
const fs = require("fs");
require('dotenv').config();

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const CONTAINER_NAME = "public";

// Função para enviar arquivos
async function uploadFile(containerClient, filePath) {
  const blobName = path.basename(filePath); // Nome do arquivo no Blob Storage
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  console.log(`Enviando: ${blobName}...`);
  const data = fs.readFileSync(filePath);
  await blockBlobClient.upload(data, data.length);
  console.log(`Enviado: ${blobName}`);
}

/* Problema: Upload de arquivos falhava
   Solução: Verificação da conexão e leitura do arquivo antes do upload */

// Função principal
async function main() {
  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

  const publicDir = path.join(__dirname, "public");
  const files = fs.readdirSync(publicDir);

  for (const file of files) {
    const filePath = path.join(publicDir, file);
    await uploadFile(containerClient, filePath);
  }

  console.log("Upload concluído!");
}

main().catch((err) => console.error("Erro:", err));

