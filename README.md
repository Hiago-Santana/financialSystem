# financeControl

## Visão Geral
O **financeControl** é uma aplicação web para gerenciamento financeiro pessoal. Permite registrar e visualizar transações, acompanhar receitas, despesas e gerar relatórios financeiros. O app utiliza **Vue.js** com **TailwindCSS** e **IndexedDB** para armazenamento local.

---

## Tecnologias Utilizadas
- **Frontend:** Vue.js 3 (script setup) + TailwindCSS  
- **Armazenamento Local:** IndexedDB (via vue-idb)  
- **Gerenciamento de Estado:** Pinia  
- **Testes:** Vitest  
- **Build & Dev:** Vite  

---

## Funcionalidades
- Registrar transações (receita e despesa)  
- Visualizar saldo, entradas e saídas  
- Filtrar transações por categoria ou período  
- Relatórios mensais detalhados  
- Suporte a tema escuro/claro de acordo com a configuração do dispositivo  

---

## Instalação
```bash
git clone https://github.com/Hiago-Santana/financialSystem
cd financialSystem
npm install
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Gera build de produção
```
---

## Testes

```bash
npm run test
```

