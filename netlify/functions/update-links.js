import fetch from "node-fetch";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  const token = process.env.GITHUB_TOKEN;
  const body = JSON.parse(event.body);

  // Caminho do JSON no seu repositório
  const url = `https://api.github.com/repos/pejotta/opeo-hub/contents/links.json`;

  // Busca conteúdo atual
  const get = await fetch(url, {
    headers: { Authorization: `token ${token}` }
  }).then(r => r.json());

  const originalContent = Buffer.from(get.content, "base64").toString();
  const json = JSON.parse(originalContent);

  // Atualiza JSON
  json.push({ nome: body.nome, url: body.url });

  const updatedContent = Buffer.from(JSON.stringify(json, null, 2)).toString("base64");

  // Faz commit
  await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "OPEO Hub > Atualização automática",
      content: updatedContent,
      sha: get.sha
    })
  });

  return { statusCode: 200, body: "OK" };
}
