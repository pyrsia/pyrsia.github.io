# Why does Pyrsia use a Blockchain (but not Cryptocurrency)?

Blockchain became popular by being widely adopted in the cryptocurrency implementations as the default mechanism to facilitate and verify transactions. The connection is so strong that when the term blockchain is used - it is automatically associated with cryptocurrency and mining. But if you look closely, blockchain is simply an immutable ledger - immutable being the killer feature - which can be used in any situation where you need data to be tamper proof.

Blockchain technology is deployed to leverage the following features:

* Distributed ledger: Blockchain implementations use a distributed ledger and perform transactions based on consensus.
* Consensus based commits: Typically blockchain implementations come with an implementation of a Byzantine Fault Tolerance (BFT) * algorithm[1].
* Transparency and Immutability: Blockchain transactions are transparent and immutable, meaning they cannot be tampered with, thus * increasing trust and confidence in the system.
* Faster transactions: Third party verification is eliminated thus causing faster transactions.
* Improved security: Blockchain transactions embed security within them which can be verified by third parties. Any attempts at adding malicious data make the blockchain invalid thus exposing breaches.

A software supply chain backed by a consistent verifiable ledger using blockchain brings trust into the open source software world. Also as blockchain commits are typically implemented based on BFT they provide security against failures in a distributed network. This provides protection against malicious network nodes committing data to the blockchain.

In this blog we discuss how Pyrsia is a tool for securing your software supply chain. We discuss the application of blockchain technology to provide an immutable record of each open source software being built into a binary. We further discuss how other aspects of blockchain technology help us build a distributed system that can scale across the globe.

## Software Supply Chain Security

Software supply chain has received much attention since a few well known events have affected the software industry and these have also percolated into real lives of people (eg. Equifax data breach[2], Solarwinds breach[3], Log4Shell vulnerability[4], Spring4Shell vulnerability[5] and many more).
Software supply chain has become a core topic of discussion within the software industry and also caused policy decisions[6] to solidify the security posture across the board.

The vulnerabilities discussed above and many more that go without receiving so much attention are discovered in the open source libraries that become part of the end user software. Much of this open source software development relies on few people’s effort and on tools that do not give insight into how the said software is being built. Establishing any level of trust becomes a challenge. Furthermore, once this open source software becomes part of the supply chain, we rely on a lot of manual effort to determine the components that are part of the software supply chain.

>
> Our proposal for Pyrsia [7], a decentralized package network, aims to provide a solution for a key part of the supply chain.
> Pyrsia aims to
>
> * Build trust for the open-source packages being used as dependencies in software development through certified and peer-verified builds
> * Provide a decentralized package network that understands package coordinates, semantics, and discoverability, and which continues to work even though there are local outages
>

Pyrsia aims to provide a tool to establish and verify trust in the software delivery world. With Pyrsia we hope to provide a source of information that can be used to automate much of this effort. 75% software comes from open source components[8] and with Pyrsia as the mechanism to manage these components we look towards a future where software is liquid[9].

Pyrsia aims to provide trustworthy provenance data which can be used to automate releases, patches and audit activities for the supply chain. Gathering all this information and sharing it with decentralized nodes requires a lightweight and tamperproof database.

In order to make Pyrsia’s goals successful we need to use a database that can serve the following requirements:

* Performant in a distributed setting
* Tamperproof
* Lightweight enough to be able to stream updates efficiently

A blockchain implementation is a perfect fit since it provides all the above features and provides the ability to add verification mechanisms on top of it. Let’s talk a little bit more about the current state of the software supply chain.

## State of Software Supply chain

### Lack of trustworthy provenance data

As it stands today we implicitly rely and trust the central repositories to provide updates to open source libraries. But evidence has shown that such implicit trust is not sufficient to secure the supply chain. There have been instances that show how this trust can be breached either by a rogue agent taking over control from the rightful owner (email squatting, typosquatting 1, typosquatting 2) or even the rightful owner turning rogue for some reason or getting burnt out.

Overall building a definitive SBOM for your software continues to be a challenge. Querying to determine versions, related vulnerabilities, dependency chains and potential remediation still remains a manual process. Such manual processes are error prone and require investment of effort similar to that of building original software and thus do not get enough attention until disaster has struck.

Pyrsia started with a goal of building such a provenance log which is easy to use with automation, and scales across a distributed network.

Pyrsia aims to keep the nodes on the network up to date using a peer to peer update mechanism. This is critical so that many of the Pyrsia functions can be performed on the peer node without having to traverse. the network. The critical part here that needs to be upto date is the provenance log which is powered by the blockchain.

This provenance log will further support an automation infrastructure to aid software delivery decisions which currently requires manual intervention.

### Dependence on centralized repositories

Realizing that centralized repositories have run their course in terms of being a source of trust and reliability, we started the Pyrsia design with emphasis on being distributed by design.
We need a distributed network since centralized repositories lack the reliability and scale that decentralized systems can provide.

Pyrsia relies on the peer-to-peer (P2P) communication mechanisms (think bittorrent) to exchange artifacts, metadata about those artifacts and also the provenance log. Pyrsia leverages two different channels to make these network transfers efficient. One channel delivers artifacts and another channel is used to synchronize the blockchain over the network. Artifacts are delivered on demand but the provenance log is updated frequently and this information needs to be lightweight - which is facilitated by the append-only blockchain. Leveraging the P2P technology makes Pyrsia resilient to internet failure modes (data center failures or network failures) and allows the network to scale organically - even across geographical boundaries where data center availability may be a challenge.

But using this technology also meant that Pyrsia could not rely on traditional data distribution mechanisms (like distributed databases, network caches, CDNs etc). Pyrsia needed a distributed database that was easy to update and transmit (read: serialize) over the network. Since P2P networks are also fault tolerant we needed to ensure that such a database can be usable from the local Pyrsia node (think git).

Given these constraints/requirements we started thinking about using a blockchain as a possible solution.

### Trustworthy means tamperproof

The main feature that Pyrsia provides is a reliable and verifiable log for asserting your dependencies. This means that we need a log that is append only, written once and read many times and its entries to be immutable. We need a database that is tamper proof with guarantees of discovering and resolving any malicious additions. Blockchain technology has proved to be one of those immutable databases.

Hence we chose a Blockchain technology that acts as an immutable ledger for the purpose of storing all data related to artifacts. Furthermore as we mentioned before  Blockchain implementation requires a consensus mechanism based on BFT to ensure that there is security against taking over the network. An implementation of Blockchain implements BFT to ensure there is consensus for each block of data committed. BFT algorithms are resilient against network attacks that span the network and can tolerate upto ⅓ of the network failures. For a reasonable sized network getting control of ⅓ of the network nodes is a costly operation for hackers.

## Pyrsia Design

### Provenance Log

Pyrsia is built to provide a Provenance log to provide enough information about open source software. This information can be used to build decision making automation to enable releases and control what can be released. This provenance log is built to be lightweight so that a large number of software binaries can be tracked efficiently. In order to store such a provenance log we need a storage solution that has auditable and verifiable links that connect to history. Blockchain or immutable ledgers provide an efficient mechanism to store such chains of information and allow for quick retrieval.

Another feature Pyrsia is building is a search engine that can provide provenance log for each version, each binary type and each binary name. Pyrsia needs to parse this information quickly so that search indexes remain current at all times..Compared to the heavy footprint of the artifacts themselves the blockchain is much more lightweight and intends to keep itself that way. As the ecosystem grows this database will grow in size but still remain magnitudes smaller than the artifact storage.

### Network Structure

Pyrsia’s design contains a network structure that provides direct connectivity between peers thus allowing for immense scale. Having said that, given the emphasis on security we have a differentiation between nodes that run in the cloud and the ones that are run on individual/volunteer nodes. The nodes that run on the cloud have the ability to act as a large cache, have better network throughput thus providing a bigger conduit to reach the repositories. The volunteer nodes provide a P2P network, a sort of proxy cache to content and an effective distribution mechanism. The authority nodes are the only ones that can commit to the ledger and thus provide a trustworthy provenance log.

![Pyrsia Network Design](../images/provenance_log_architecture.png "Pyrsia Network")

Along with this the nodes on the cloud are deployed and maintained by Pyrsia governing organizations (Governing organizations are listed on <https://pyrsia.io/>). Having these owned by organizations instead of individuals enhances the availability of these nodes as well as vastly improves the security posture. We are now able to verify these nodes, provide identity mechanisms to have a provable chain of authority and provide membership privileges to keep the network secure - while scaling it across regions.

This network structure allows us another luxury, that of ensuring we control the data that is being committed to the blockchain. Early on we decided that Pyrsia will only allow the cloud nodes to commit to the blockchain using a consensus mechanism. This consensus mechanism will only allow authorized cloud nodes to commit and thus reduce the complexity of the consensus mechanism. Another aspect we realized is that, given Pyrsia will have very limited participants being able to commit to the blockchain we can stay away from the expensive, mining heavy, at times quite wasteful algorithms. Thus we steered clear from investing into the Proof of Work, Proof of Stake and similar algorithms. We have been focusing on using the Proof of Authority which has significantly reduced the complexity while providing us with sufficient control to keep the network secure.

In this design the authority is assigned and cannot be obtained through the means that are used on the open networks. Pyrsia governance organizations approve every node that has the authority to commit to the blockchain. This furthers our goal of providing a trustworthy network which has more control over what is available on the network. The Authority nodes are the only ones committing to the blockchain and then transmitting those updates to the peer nodes.

## Leveraging the Blockchain technology

Given the above criteria and constraints and evidence of success of the blockchain technology we found that the right fit for Pyrsia’s provenance log - which is its source of truth - using an implementation of blockchain technology was the right choice for Pyrsia.

We further assessed available implementations of blockchain and narrowed our choice of implementation based on the following criteria:
Availability of multiple language support - especially good documentation for a Rust implementation
Ability to turn of or not have the concept of Currency to make transactions on the network
Ability to choose the consensus algorithms that fit Pyrsia’s need and situation - Proof of Authority

We found that AlephBFT supported all these criteria and was easy to get started. We have been able to also build on top of AlephBFT to constrain the use cases of Pyrsia without giving away security. AlephBFT has also allowed us to configure the network nodes in a way that allows us the control we need to support the security.

## Blockchain does not mean Crypto

One thing we have learnt over the course of this effort is that - whenever we talk about blockchain as the technology we use in Pyrsia, we have received critical feedback about how we are overcomplicating our design. When we reflected on this feedback we realized that the majority of it is due to the prevalent use of blockchain within the cryptocurrency world.

Blockchain became popular by being widely adopted in the cryptocurrency implementations as the default mechanism to facilitate and verify transactions. The connection is so strong that when the term blockchain is used - it automatically gets associated with cryptocurrency and mining. And we have found that it is really hard to break this association. We also found that the most popular implementations connect the mining and crypto aspects to the blockchain in such a way that they become inseparable.

Blockchain will act as the immutable ledger giving us the tamper proof database we need, with the ability to search it efficiently and distribute it across the peers as we need.

Pyrsia is open source and free. The key to ensuring that the open source community continues to engage and use Pyrsia is that there should not be any currency attached with actions on Pyrsia. From the get go this has been our main objective to keep this network free and open to use for the community and we have worked to implement an immutable ledger which does not have the concept of cryptocurrency in it. Our implementation has removed the requirement of requiring gas (a fuel to power your transactions on the blockchain) or currency for participation. Given the security concerns Pyrsia operates on a small number of Pyrsia nodes that participate in consensus. Running the Proof of Authority algorithm from certified nodes and limiting those number of nodes to the participants of the governing board, allows Pyrsia to maintain security without being open to any mining on the network. Pyrsia will also benefit from the lightweight implementation of AlephBFT so that we can scale across regions and keep the network always up to date.

Pyrsia aims to leverage blockchain to power the provenance data while not allowing any usage of cryptocurrency on the network. We believe that open source should be free to use and should not have incentives attached to it to allow for fairness. Pyrsia builds on the success of blockchain while saving resources (energy) by not allowing any competitive currency exchange on the network.

## In Summary

Pyrsia leverages blockchain as an immutable ledger to provide a scalable provenance log. Blockchain technology is best suited for distributed large amounts of chained data across wide networks which is evidenced from the success of blockchain in the cryptocurrencies. Pyrsia is using this same technology to improve the state of the software supply chain by providing transparency into how open source software is being built on this network. This transparency is aimed to give you the confidence to use the open source library in your production environments.

### References

* [Byzantine Fault Tolerance](https://decrypt.co/resources/byzantine-fault-tolerance-what-is-it-explained)
* [Equifax data breach](https://www.synopsys.com/blogs/software-security/equifax-apache-struts-vulnerability-cve-2017-5638/)
* [Solarwinds breach](https://www.businessinsider.in/tech/news/heres-a-simple-explanation-of-how-the-massive-solarwinds-hack-happened-and-why-its-such-a-big-deal/articleshow/79945993.cms)
* [Log4Shell vulnerability](https://jfrog.com/blog/log4shell-0-day-vulnerability-all-you-need-to-know/)
* [Spring4Shell vulnerability](https://jfrog.com/blog/springshell-zero-day-vulnerability-all-you-need-to-know/)
* [Executive order on improving nations cybersecurity](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/)
* [Pyrsia Proposal](https://pyrsia.io)
* [75% software comes from open source components](https://www.synopsys.com/software-integrity/resources/analyst-reports/open-source-security-risk-analysis.html?intcmp=sig-blog-rsa22)
* [Software is Liquid](https://jfrog.com/whitepaper/a-vision-of-liquid-software/)
