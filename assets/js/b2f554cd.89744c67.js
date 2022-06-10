"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/06/03/peer-metrics","metadata":{"permalink":"/blog/2022/06/03/peer-metrics","editUrl":"https://github.com/pyrsia/pyrsia/edit/main/blog/blog/2022-06-03-peer-metrics.md","source":"@site/blog/2022-06-03-peer-metrics.md","title":"Peer Metrics in the Pyrsia Network","description":"Since the advent of peer-to-peer networks in the 1970s, we have seen them applied in a variety of use cases on the internet. From the first usages in the Usenet network, to the infamous Napster network, astute developers have created peer networks to enable sharing of information and data without the use of central servers. Over the past few years, we have seen a new increase in the use of peer to peer networks and formalization of algorithms to implement these networks. The Pyrsia network is an example of a new application of peer to peer networks. Pyrsia is an open-source project that is designed to build trust that an open-source distribution is free of malicious code via a consensus algorithm, then share that distribution amongst the peers. An important goal of this project is to create a peer network that is reliable and \\"fast\\". To do this, the team added a unique feature to the peer network protocol that helps one peer in the network choose the best peer to download software distributions.","date":"2022-06-03T00:00:00.000Z","formattedDate":"June 3, 2022","tags":[{"label":"p2p","permalink":"/blog/tags/p-2-p"},{"label":"peer-metrics","permalink":"/blog/tags/peer-metrics"}],"readingTime":4.145,"truncated":false,"authors":[{"name":"Mark Seaborn","title":"Pyrsia Contributor","image_url":"https://github.com/mseabornIBM.png","imageURL":"https://github.com/mseabornIBM.png"}],"frontMatter":{"custom_edit_url":"https://github.com/pyrsia/pyrsia/edit/main/blog/2022-06-03-peer-metrics.md","title":"Peer Metrics in the Pyrsia Network","authors":[{"name":"Mark Seaborn","title":"Pyrsia Contributor","image_url":"https://github.com/mseabornIBM.png","imageURL":"https://github.com/mseabornIBM.png"}],"tags":["p2p","peer-metrics"]},"nextItem":{"title":"Blockchain Consensus","permalink":"/blog/2022/01/28/blockchain-consensus"}},"content":"Since the advent of peer-to-peer networks in the 1970s, we have seen them applied in a variety of use cases on the internet. From the first usages in the Usenet network, to the infamous Napster network, astute developers have created peer networks to enable sharing of information and data without the use of central servers. Over the past few years, we have seen a new increase in the use of peer to peer networks and formalization of algorithms to implement these networks. The Pyrsia network is an example of a new application of peer to peer networks. Pyrsia is an open-source project that is designed to build trust that an open-source distribution is free of malicious code via a consensus algorithm, then share that distribution amongst the peers. An important goal of this project is to create a peer network that is reliable and \\"fast\\". To do this, the team added a unique feature to the peer network protocol that helps one peer in the network choose the best peer to download software distributions.\\n\\nHerein I present the mechanism the Pyrsia team has created to help improve the selection process for downloading software distributions from peers. The idea is to improve upon the Kademila peer selection process and make \\"smarter\\" choices from Pyrsia peers based on a \\"peer metric\\". The mechanism is layered atop the Kademila peer selection process, which in Pyrisa returns a list of peers known to be in possession of an open-source distribution of interest. The peer metric is a real time assessment of the work-load of any given machine in the network, both related and unrelated to any current software transfers within the Pyrsia network. \\n\\nThe following table defines terms used in this blog.\\n\\n|Term|Definition|\\n|---|---|\\n|Requester|In this context a requestor is a Pyrsia client requesting a file to be downloaded or uploaded to/from its peer(s).|\\n|Peer (Pyrsia Peer)|Any Pyrsia client that is participating in the network.|\\n|Neighboring Node|Any node that is returned by the Kademila algorithm as having a software distribution desired by a peer.|\\n\\nAs previously stated, a primary goal of the peer-to-peer software distribution sharing function of Pyrsia is that it efficiently uses peers. The efficient use of peers can be broken down into two aspects, efficiencies related to uploading software distributions to peers and efficiencies related to downloading software distributions from peers. This post limits the discussion to downloading software distributions from peers. \\n\\nThe primary rule defined by our selection process is that requesters must not overwhelm peers by requesting too many software distributions too often from any one neighboring node. Though hard resource usage limits are a configuration function for Pyrsia Peers, Pyrsia\u2019s peer selection mechanism should also attempt to balance requests across the network of peers. Additionally, the peer selection mechanism should operate such that file requesters are not starved for bandwidth in the network by unresponsive peers, preventing fast downloads. While the first efficiency could be guaranteed by Pyrsia policy, the second one is more nebulous because Pyrsia cannot guarantee enough stable network peers exist at request times to achieve \u201cfast downloads\u201d. \\n\\nThe terms \u201cfast downloads\u201d and \u201crequesting too much data\u201d must be further defined to quantify what is meant. The means of describing these terms can be defined as a function of the attributes within the environment. There are measurable attributes of both the network and the Pyrsia peers participating in the networks that can help us define metrics to balance requests. These metrics will ultimately determine the quality of peers in the requesters\' peer list. The term quality in this context is related to the ability of a peer to satisfy a request for download and will be defined by the function Q(x):\\n\\n![$Q(x) = \\\\sum_{n=1} ^{pa\\\\ count} pa_n * weight](https://latex.codecogs.com/svg.image?Q(x)&space;=&space;\\\\sum_{n=1}&space;^{pa\\\\&space;count}&space;pa_n&space;*&space;weight)\\n\\nwhere `pa` is a peer attribute of the environment and `weight` is a number that determines the expense of the attribute. The quality number will be calculated on demand by peers returned in the list of peers generated by the Kadimela algorithm. The quality function can be used for either upload quality or download quality depending on the need. The metric is currently used during the selection process for downloading software distributions. Finally, we need to define what characteristics are important to drive analytics for decisions about transactions on the network. The following table lists the attribute used by to Pyrsia generate the peer metric in Pyrsia. The peer with the lowest number is considered to be the ideal candidate for the software distribution download.\\n\\n|Peer Attribute|Definition|\\n|---|---|\\n|Peer Network Load|A measurement of the current network bandwidth usage in terms packets in and packet out summed over all network interfaces.|\\n|CPU Load|The average CPU load over the last minute|\\n|Disk I/O Load|A measure of the current packets being read and written summed over all current processes on the system|\\n\\nThis system of measuring the quality of peers will evolved over time and as other attributes are defined, they will be integrated into the Pyrsia network."},{"id":"/2022/01/28/blockchain-consensus","metadata":{"permalink":"/blog/2022/01/28/blockchain-consensus","editUrl":"https://github.com/pyrsia/pyrsia/edit/main/blog/blog/2022-01-28-blockchain-consensus.md","source":"@site/blog/2022-01-28-blockchain-consensus.md","title":"Blockchain Consensus","description":"Blockchain technologies are trending. There\u2019s a lot of information about what they do and how they work but often these are abstract high level overviews. Looking beneath the surface, these overviews skip some of the most fascinating parts of the implementations that bring these technologies to life.","date":"2022-01-28T00:00:00.000Z","formattedDate":"January 28, 2022","tags":[{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"consensus","permalink":"/blog/tags/consensus"},{"label":"bitcoin","permalink":"/blog/tags/bitcoin"},{"label":"ethereum","permalink":"/blog/tags/ethereum"},{"label":"proof-of-work","permalink":"/blog/tags/proof-of-work"},{"label":"proof-of-stake","permalink":"/blog/tags/proof-of-stake"}],"readingTime":6.545,"truncated":false,"authors":[{"name":"Christopher McArthur","title":"Pyrsia Contributor","image_url":"https://github.com/prince-chrismc.png","imageURL":"https://github.com/prince-chrismc.png"}],"frontMatter":{"custom_edit_url":"https://github.com/pyrsia/pyrsia/edit/main/blog/2022-01-28-blockchain-consensus.md","title":"Blockchain Consensus","authors":[{"name":"Christopher McArthur","title":"Pyrsia Contributor","image_url":"https://github.com/prince-chrismc.png","imageURL":"https://github.com/prince-chrismc.png"}],"tags":["blockchain","consensus","bitcoin","ethereum","proof-of-work","proof-of-stake"]},"prevItem":{"title":"Peer Metrics in the Pyrsia Network","permalink":"/blog/2022/06/03/peer-metrics"}},"content":"Blockchain technologies are trending. There\u2019s a lot of information about what they do and how they work but often these are abstract high level overviews. Looking beneath the surface, these overviews skip some of the most fascinating parts of the implementations that bring these technologies to life.\xa0\\n\\n## What is a Blockchain?\\n\\nIBM has one of my [favorite definitions](https://www.ibm.com/topics/what-is-blockchain):\\n\\n>\xa0Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets \\\\[... on] a network.\\n> An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually \\n> anything of value can be tracked \\\\[... ] on a blockchain network, reducing risk \\\\[...] for all involved. \\n\\nThere\u2019s a few key items to highlight from this definition are:\\n\\n- A shared, immutable ledger\\n- Recording and tracking assets\\n\\nSimply put, a Blockchain is a list of changes to assets, called transactions, which are grouped in blocks that are recognized by all participants in the network.\xa0\\n\\nUnfortunately, it leaves out one major element. How do blockchain networks reduce risk? How do blockchain networks agree on the shared ledger?\\n\\n## Consensus\\n\\nIn the world of blockchain, consensus is the agreement of which block is next. Collectively all the participants in the blockchain\u2019s network \\nshould come to the same conclusion.\\n\\nYou\u2019ve probably heard of \u201cProof of Work\u201d, usually called mining, and \u201cProof of Stake\u201d, these two are the most popular in terms of market share\\nin the crypto markets.\\n\\nThese consensus algorithms were some of the first to be popularized by projects like Bitcoin and Ethereum. These are far from the only ones, Proof of Authority, Proof of Burn, Proof of Capacity and Proof of History are just from others mentioned on [Investopedia\'s Website](https://www.investopedia.com/terms/c/consensus-mechanism-cryptocurrency.asp).\\n\\nLet\u2019s dive deeper into the two popular algorithms to see how they obtain consensus.\\n\\n### Proof of Work\\n\\nProof of Work is based on a mathematical expression which is very costly to compute a magic number, called a nonce, but easily verified. Each participant, typically referred to as a miner, begins the calculation with the transitions it\u2019s heard on the network since the last published block. Participants race each other to find the right answer and the winner traditionally gets a reward. It\u2019s difficult to cheat and very rewarding to operate in good faith.\\n\\nAt the time of writing, January 28th 2022, the reward is 6.25 BTC which is worth 236,755 USD. It\u2019s easy to draw parallels to the 1849 Gold Rush.\\n\\n![](https://lh4.googleusercontent.com/lbGxZlJRF5GlNLNmbQlnS7Rdk0CHU9w2QjyfghfFLKWOa-bz7ZaEq83AWwVwEd4oJXZgUhyBQxzZ_-_6ytuISeQXU1er77nfwYpdoPgaE_8bvQqKFdsLmUVRbuc9NrePRDTtcZ7YbkqgTq5RMg)\\n\\nWhen miners hear of a new block, they immediately stop their calculation and begin listening for more transactions. This is approximately a 10 minute window for Bitcoin.\\n\\nWith a small number of competitors it\u2019s pretty straightforward but when tens of thousands of nodes are involved, what happens if two miners finish at the same time. Who wins?\\n\\n### Proof of Stake\xa0\\n\\nProof of Stake is an investment strategy where committing more capital means you\u2019re more likely to get the reward. [Peercoin](https://www.peercoin.net/whitepapers/peercoin-paper.pdf), a very early PoS implementation, kept the mining of PoW but required less computational complexity the more _coinage_ was staked. If two participants offer the same investment in the next block, which one is rewarded?\\n\\nIf someone is able to offer more capital for their block to be accepted, are they able to always win? Yes, this is a special type of security exploit called a 51% attack. If the confirmation of the next block is tied to a resource, then an entity which holds a majority stake can take control of the blockchain. Proof of Work is also susceptible to this type of attack.\\n\\n### Stale and Orphan Blocks\\n\\nMost blockchain\u2019s are actually trees, not linked lists which is what probably comes to mind for young data scientists. This probably comes as a shock but it\u2019s the secret ingredient to solving our racing condition when two participants propose the next block in PoW.\\n\\n> If two nodes broadcast different versions of the next block simultaneously, some \\n> nodes may receive one or the other first. In that case, they work on the first one they received,\\n> but save the other branch in case it becomes longer.\\n> The tie will be broken when the next proof-of-work is found and one branch becomes longer.\\n\\n[_Bitcoin: A Peer-to-Peer Electronic Cash System Section 5_](https://bitcoin.org/bitcoin.pdf)\\n\\nChains are made of links that connect to others. This data structure is referred to as a linked list, when a link\\npoints to both it\u2019s parent and child is a doubly linked list. Three sequential blocks being published would make the following chain:\\n\\n```mermaid\\nstateDiagram-v2\\n    [*] --\x3e Block_1\\n    Block_1 --\x3e Block_2 : Parent\\n    Block_2 --\x3e Block_3 : Child\\n    Block_3 --\x3e [*]\\n```\\n\\nIf block 4 was published at the same time as our block 3 a node would have the following tree:\\n\\n```mermaid\\nstateDiagram-v2\\n    [*] --\x3e Block_1\\n    Block_1 --\x3e Block_2 : Parent\\n    Block_2 --\x3e Block_3 : Child\\n    state Block_2 <<fork>>\\n        Block_2 --\x3e Block_4 : Nephew\\n        Block_3 --\x3e Block_5\\n    Block_5 --\x3e [*]\\n```\\n\\nSince it\u2019s extremely unlikely that a second pair of blocks would also be published at the same time, the tie is broken when the next sequential block is published. This is block 5 in the diagram above.\\n\\n#### Which branch should we follow?\\n\\nWell, intuitively the \u201cstrongest\u201d branch of our tree is the one we should stick with. The strength comes from the amount of work that has gone into making the branch. More work means it\u2019s less likely that someone has cheated or lied.\xa0\\n\\n### Dynamic Validator Sets\\n\\n[Ethereum\u2019s new PoS system named _Consensus Layer_](https://ethereum.org/en/upgrades/merge), [formally Ethereum 2.0](https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/), is still in development but it\u2019s leading implementation is [Casper FFG ](https://arxiv.org/pdf/1710.09437.pdf)\xa0[<sup>\\\\[2\\\\]</sup>](https://eips.ethereum.org/EIPS/eip-1011) (there\u2019s also [this](https://vitalik.ca/general/2018/12/05/cbc_casper.html) alternative) which uses a Byzantine Fault Tolerance consensus.\\n\\nIn Proof of Stake, the participants are called validators who\u2019s role is similar to miners in Proof of Work. The validator is staking money on the block that it thinks should be added to the chain. If the block gets appended, then they get a reward that is proportional to the bet that they placed on the block. [<sup>\\\\[1\\\\]</sup>](https://www.chubbydeveloper.com/ethereum-proof-of-stake-casper-ffg-vs-casper-cbc/)<sup> </sup>Validators are responsible for following the forking rules when staking checkpoints. Validators decide which block is the best by following a set of rules.\\n\\n<https://arxiv.org/pdf/1710.09437.pdf>\\n\\nThe proposal set the stake deposit at 32 ETH to be eligible to act as a validator. At the time of writing that has a value of 81,374.81 USD even after a recent drop in value.\\n\\n![](https://lh6.googleusercontent.com/yqYvnvnQNbf46dzgQQcndXR8eFjm_LYe-6ND4GslxLlyxtZamkv5q6deQjMVayYz9cHNvzh8UbOwcl4Q897KJEJp_mtCHi0x3WvMWN8b9cG-1zDiLnuQ-lQiBaC2H6D66O-8x2umwhzTkWLbJA)\\n\\nThere\u2019s a few key concepts employed in Casper FFG, many are outlined in the [EIPS 1011\u2019s Glossary](https://eips.ethereum.org/EIPS/eip-1011#glossary)\\n\\n- Checkpoint is the block in the finalization stage\\n- Epoch is the range of blocks between checkpoints. This grow by one block for each new epoch\\n- Dynasty refers to the number of finalized checkpoints in the chain. (Note: checkpoints do not reach finality unless a super-majority of votes are obtained in favor)\\n\\nThe validators are _randomly_ selected (this is not detailed in the proposals but details are available [here](https://github.com/ethereum/casper/blob/4adeffce5709fcf2d36f4bc6ac27bbd62747d032/VALIDATOR_GUIDE.md)) based on who has deposited the correct funds. Participants must deposit the correct sum 2 dynasties in advance to join a validator set. In order to leave they must send a withdrawal request 2 dynasties in advance, however the funds are not returned for approximately 4 months since the withdrawal was requested.\\n\\nConsensus, or finality, is not reached unless \u2154, a super-majority of votes have been gathered stating the checkpoint meets the forking rules \u201cfollow the chain containing the justified \\\\[block] of the greatest height\u201d.\\n\\nWhen a checkpoint is finalized all the blocks in it\u2019s epoch are implicitly finalized as well. This also marks the start of a new dynasty, casting the previous on to history it can no longer be modified and reaches immutability. This is also when validators can enter or exit the staking on checkpoints.\\n\\n## References\\n\\n<https://developer.bitcoin.org/devguide/p2p_network.html?highlight=stale%20orphan#orphan-blocks>\xa0\\n\\n<https://developer.bitcoin.org/devguide/block_chain.html?highlight=stale#block-height-and-forking>\\n\\n<https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/>\\n\\n<https://eth.wiki/concepts/proof-of-stake-faqs>\\n\\n<https://medium.com/unitychain/intro-to-casper-ffg-9ed944d98b2d>\\n\\n<https://medium.com/@ppio/consensus-byzantine-fault-tolerance-402258ec7a60>\\n\\n<https://ethresear.ch/t/casper-ffg-with-one-message-type-and-simpler-fork-choice-rule/103/31>"}]}')}}]);