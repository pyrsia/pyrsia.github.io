---
title: Pyrsia Building Blocks 
description: Pyrsia Building Blocks
summary: What makes Pyrsia Builds work?
---

{{< blocks/section color="primary">}}

## Pyrsia builder node

A Pyrsia builder node as shown below provides infrastructure to independently build packages from source. When a user submits a candidate to be built(in the form of a URL with the commit hash from source control) each Pyrsia node providing the build service will create an independent containerized environment to build that package.
Once built multiple Pyrsia nodes will verify the result and commit it to the distributed ledger for later verification by downloaders. Committing a reference of the result to the ledger also helps to provide a tamper proof way to record packages and their provenance.

![Builder Node](/images/builder-node.png)

{{< /blocks/section >}}
