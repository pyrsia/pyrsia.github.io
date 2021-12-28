---
title: Establishing and Verifying Trust in Packages 
description: Establishing and Verifying Trust in Packages
summary: Building trust into the Open Source that we use
---

{{< blocks/section color="primary">}}
{{< blocks/feature_dual >}}

## Trust today

Today, trust in packages is based on the service(s) that built and/or host those packages. Whenever such a service goes down or is attacked it makes the entire network downstream unstable. Either you cannot continue to build and release software or have the risk of systems with the compromised packages. We trust the service provider to fix and provide proof of trust. This proof of trust is not verifiable by a third party and identifying vulnerable packages is a manual process.

Pyrsia solves this problem by applying automation to both building and verifying trust in the packages hosted/produced on the network. Pyrsia also aims to provide resilience which helps in healing a partition and reestablishing trust in the system.

{{< /blocks/feature_dual >}}
{{< blocks/feature_dual >}}

## Pyrsia Consensus

Pyrsia network works on random consensus across the network. Each package submitted to the network gets built by a random selection of nodes which build and produce the output package independently. The result is then verified by consensus among these nodes. If the verification succeeds the package is then committed to the network and available to be downloaded and deployed.

Random selection allows independent verification of builds and also provides a safety net against network attacks.

{{< /blocks/feature_dual >}}

![Build Consensus](/images/consensus.png)

{{< /blocks/section >}}