# blockchain-clients

Docker light-node wrappers (geth ETH, BSC) plus nginx reverse proxy and GitHub → ECR CDK pipelines. Archived snapshot, as-is.

This tree is a **new public commit** with no git history. The original private archive is `eulertools/blockchain-clients-archive`.

## What was built (EN)

`services/eth-light-node`, `services/bsc-light-node`, `services/nginx`, and a chainstack nginx template that proxies `/ws` and `/rpc` to `${WSS_ADDRESS}` / `${HTTP_ADDRESS}`. CDK branch selector uses `CDK_DEV_ACCOUNT` instead of a hardcoded AWS account id. No contract deployments.

## Qué se construyó (ES)

Nodos light Docker + pipelines CDK. Sin deployments de contratos.

---

## Notice / Aviso

**Euler Tools ha cerrado. Euler Tools is closed.**

La empresa quebró. Este repositorio está archivado y no se mantiene. El software se ofrece tal cual (as is), sin garantía ni soporte. Parte del material puede ser reclamado por acreedores.

The company went bankrupt. This repository is archived and unmaintained. Software is provided as is, with no warranty and no support. Some material may be claimed by creditors.

Site: https://euler.tools  
Org: https://github.com/eulertools  
Enquiries: https://sinequix.com · https://github.com/tebayoso
