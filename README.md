# 🌐 OPEO Hub Dashboard

Painel oficial para gerenciar a **rede de blogs OPEO** de forma centralizada.  
Com ele, você pode **adicionar, remover ou editar** os links da rede a partir de um único lugar — e todas as mudanças se aplicam automaticamente em **todos os blogs conectados**.

---

## ✨ Funcionalidades

- Editar lista de blogs (Nome + URL)
- Adicionar novos blogs
- Remover blogs inativos
- Atualização automática do `links.json` no GitHub
- A OPEO Hub Bar atualiza instantaneamente em todos os blogs
- Interface visual estilo **Cyber Roxo OPEO**
- 100% gratuito (GitHub + Netlify + jsDelivr)

---

## 🧩 Estrutura do Repositório

opeo-hub/
├─ links.json # Lista oficial dos blogs da rede
├─ opeo-hub.dynamic.min.js # Script que exibe a HUB Bar nos blogs
└─ dashboard/ # Aplicação do painel web
└─ index.html # Interface de gerenciamento

yaml
Copiar código

---

## 🚀 Instalação do Painel no Netlify

1. Crie conta no Netlify usando **LOGIN COM GITHUB**
2. Vá em **New Site → Import from Git**
3. Selecione este repositório
4. Configure:
   - **Publish directory:** `opeo-hub/dashboard`
   - **Build command:** *(deixe vazio)*

---

## 🔐 Variáveis de Ambiente no Netlify

Vá em:  
`Site Settings → Environment Variables`

| Variável | Valor |
|---------|-------|
| `GITHUB_OWNER` | `pejotta` |
| `GITHUB_REPO` | `blogueiros-united` |
| `GITHUB_FILEPATH` | `opeo-hub/links.json` |
| `GITHUB_BRANCH` | `main` |
| `GITHUB_TOKEN` | *seu token GitHub com permissão read/write em Contents* |

> Criar token:  
GitHub → Settings → Developer Settings → **Fine-grained token** →  
Repo selecionado → Permissão **Read/Write em Contents**

---

## 🌍 Como usar a OPEO Hub Bar nos Blogs

Cole no Blogger (Layout ou antes do `</body>`):

```html
<script src="https://cdn.jsdelivr.net/gh/pejotta/blogueiros-united/opeo-hub/opeo-hub.dynamic.min.js?v=1.0"></script>
Quando atualizar o JSON, só altere o v=1.0 → v=1.1 para atualizar na hora.

🧠 Como editar os links da rede
Acesse o painel:

arduino
Copiar código
https://opeo-hub.netlify.app
Edite nome + URL

Clique Salvar no GitHub

A rede inteira atualiza automaticamente

🟣 Filosofia OPEO
Uma rede não se constrói sozinho.
Criadores unidos criam mais forte.
