---
title: Pyrsia Anniversary Recap
authors: sudhindra
tags: [supplychain, security, recap, stable, releases]
---


It is hard to believe but it has happened nevertheless. We have successfully completed a year around the sun, Pyrsia and the team that works on it. And what a year it has been.
From lots of uncertainty, answering difficult questions, working with the Linux foundation, getting ready for CD Foundation, becoming part of CD Foundation and being able consistently deliver new functionality. I want to take this opportunity to make note of some of the beautiful moments in the last year and wishing for more of those in the new year future.

## All about the Supply chain

It all began with some initial ideas from Stephen Chin where the goal was to do something about the state of supply chain security. This came with a background in Devops where we witnessed many organizations either facing similar problems as those in the case of the SolarWinds attack or worrying about them. In both cases the confidence in software build processes was taking a hit. With the mission of improving the transparency in the supply chain we put together a proposal to kickoff Pyrsia. In the initial days we were juggling multiple conflicting requirements - where are we going to store those artifacts, how do we verify them, will the network be resilient to attacks, how we will deploy, and many many more.

We saw many organizations big and small jump on the Supplychain Security hashtag and start making some noise about its seriousness. What we witnessed was that these efforts started with big hearts and focused mostly on some kind of cryptography to secure the output of the supply chain. As we looked more closely at the problem we started noticing that the core issue was not about the output but how the output came about. What about the process that went into identifying what is being built, how about the build process itself, how do we verify the integrity and so on.

Pyrsia started with taking all those into consideration and building a process to generate the desired artifacts. Pyrsia contained the promise of building from source, providing transparency and resilience from network failures or attacks. As we started understanding our mission in the early days we were starting to answer some of the above questions and also the ones that were raised during the implementation. Largely as I remember the first few weeks were spent questioning the fundamentals over building something. As we started getting more insight and as we tinkered with Rust some of the ideas were maturing and getting ready to be built into real software.

## Security taken for granted

Before the SolarWinds attack and widespread news attention it received security was taken for granted. Open source software continues to be built by individuals using trust metrics that work in real life. These trust mechanisms like `sharing commit access/publish rights, with other contributors was a widespread community practice` listed in [Rise of few-maintainer projects](https://increment.com/open-source/the-rise-of-few-maintainer-projects/) create a weak infrastructure that all software projects rely on. This worked as long as the awareness as well as impact was limited. With growing reliance on software from keeping the lights on to keeping us healthy and everything in between, this model of `trust` does not scale.

Pyrsia started to challenge this status quo and provide a better, available, transparent supply chain for your software.

## Navigating the technology space

In the initial days the mission was getting clearer while we were researching and prototyping Everything!. Everything included - networking technologies, blockchain ledgers and technologies, programming in Rust and putting it all together. As we did this we were able to identify goals that we could incremental build towards. We started with the aim of building a working version of the decentralized network that would let users download packages from peers. With this as our minimal requirement we experimented with different tools that could help us deliver.

### Learning Rust

As we talked about our choice of language for this effort Rust was something we started to learn and gain some experience with. As with any new language we found similar struggles while starting out with Rust. Initial days were mostly frustrations around the syntax and the toolchain. Although as we reflected on our struggles we realized that some of the typical decisions that triggered debates were already in place - for eg. how we organize Rust code, how the toolchain can be used, code linting and code organization. [The Rust Programming Language Book](https://doc.rust-lang.org/book/) was quite useful in guiding us along and answering some of our questions about building idiomatic Rust application.

As I reflect on how we have learnt Rust I would say we complained, we got tired of complaining, we made peace with Rust and now are starting to ride more or less smoothly on the language. I would say there are still situations which stump us from time to time but they provide to be more educational instead of frustrating as they were before.

I was able to talk more about Rust language and our journey so far at the recent [Rust London Meetup](https://www.meetup.com/rust-london-user-group/events/289909563?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link).

### Decentralized Network - libp2p

Finding the right open source project for building a decentralized network was a new challenge for us. At least one of our team members had some interest and background in networking(although it turns out experience building networking hardware helps but there is still a lot of learning when it comes to networking software stack). So we started our research and landed on the [ipfs project](https://ipfs.io). This team had been doing some great working in building a scalable decentralized network using peer-to-peer networking. Incidentally a lot of their examples and experiments happen in Javascript and Golang. But to our pleasant surprise we were able to find the [libp2p](https://libp2p.io/) library was already being built in rust and very close in feature set vis-a-vis the Golang implementation. This was great news for us - in that it would save us valuable energy and time in porting or rewriting existing software.

Although libp2p integration was not simple. We went through some cycles trying to understand selecting the feature set that was minimal and required for Pyrsia. As we continue using libp2p we are getting a better understanding of how it is being built as well as understand how it could be improved. libp2p has made it easy to interact and has given us warm welcome to their architecture meetings and general discussion.

Most recently Elliott was able to attend the libp2p day at the ipfs.camp and [talk about Pyrsia and its use of libp2p to conquer the world](../blog/2022-12-20-using-libp2p-to-take-over-the-world-2022-ipfs-camp.md).

### Immutable ledger

Pyrsia design had the concept of the transparency log(aka provenance log) from the early iterations. In our view trust can only be based on transparency and this transparency needs to be protected.
Our research for the blockchain as the immutable ledger yielded some key metrics that separated us from the popular use of blockchain - cryptocurrency. With our specific needs and limited scale(significantly limited if you think about the number of nodes involved in decision making) we decided to limit how the blockchain gets committed to. Every transaction needed to be lightweight to enable limited network traffic and quick transport.

Most of our research took us to opensource blockchain implementations that were based on/being used for some cryptocurrency purposes. Popular implementation like [Substrate](https://substrate.io/) were easy to get started and very user friendly. Although this specific one tied us tightly to their implementation and the use of some concept of Gas(currency). This forced us to have an incentive mechanism based on currency thus hence rely on some cryptocurrency. None of these constraints make this a usable solution for open source. Pyrsia is intended to be community owned and governed. This does not bode well for a solution that forces a currency and thus an option for anyone to boost their stake by pumping more currency into the system.

As we continued to look for solutions that allow us to remain currency free and are built in Rust we found AlephBFT - an implementation of the Byzantine Fault Tolerance algorithm for consensus. This seemed to be something we could use and work without being burdened by aspects of CryptoCurrency. This was a good sign again since we did not have to build a solution from the ground up.

## Building the Prototype

Building a prototype was still a challenge because it involved integrating these three things together - Rust, libp2p and AlephBFT. We started with the most basic version of the blockchain that determines consensus based on round robin of the participating nodes. For libp2p we started with the most generic implementation and learnt our way through tuning it. The interesting part was making it work in Rust using the async mechanisms available. It took us a while to get to a working solution that did not crash on start. We still had memory leak issues that cause different behaviour after we ran the node for a while.

We were able to resolve some of those errors slowly by moving to a more stable and supported tokio.rs library for all our async processing. Tieing it together libp2p made the memory leak go away and provide lot more stability that we had in the previous version.

When we had it all working we released a [Demo Pyrsia network](https://github.com/pyrsia/pyrsia/releases/tag/v0.1.0).

Releasing this working version where documentation matched behaviour and consistenly worked on all our machines and the cloud was our first big win! This came after tireless efforts at learning the language, the ecosystem, and the underlying technology while iteratively writing code.

libp2p also provides a way to allow peers to communicate even if they are behind private networks(or NAT routers). This makes it easy to deploy these nodes in different scenarios without the need to engineer the network or create exceptions. Implementing this behaviour proved to be a challenge as well when we started. With some help from the libp2p team and also removing some of the conflicting code helped us get better stability on this feature and release it as part of the prototype release.

From our first release we gained enough confidence to make this improvement and release another patch version right after - [NAT support on Pyrsia](https://github.com/pyrsia/pyrsia/releases/tag/v0.1.1).

## A real decentralized network appears

With a consistently working application we now had a `last known good solution` for making further improvements. Our next goal was to commission nodes in the cloud that have the authority(hence called Authority nodes) to be part of the blockchain consensus network.

We released a [decentralized network powered by a cloud node](https://github.com/pyrsia/pyrsia/releases/tag/v0.2.0) at the CDSummit at Kubecon + CloudNativeCon 2022. This was our first version where the cloud service was always on. An always on service provided a really easy way to onboard and connect to the network. Since the get started experience greatly improved in this version, we were able to download docker images and also request docker images that previously did not exist on the network. Now the network was ready to be used by participants at the CDSummit and anyone else who liked to engage.

We were ready for the CD Foundation 2 nights before we went to CDSummit in Detroit.

## Becoming part of the CD Foundation

Alongside writing the code and developing software we were working with the CD Foundation. Numerous presentations and discussions helped us make the case for Pyrsia. Multiple interactions we had with the TOC and other smaller forums gave us confidence about our preparedness. By this time I had enough practice to be able to answer many of the questions or doubts people had about Pyrsia's goals and mission. We worked through the process of project submission and after a voting exercise we joined CD Foundation as an incubation project.

After the vote there were still a number of steps to complete to make sure we legally and materially have the right permission structure to become a project that is easy to contribute and take forward.
Overall, I received great support from the Pyrsia team in making code/process changes as we went through transferring shared resources over to CD Foundation. Everytime I was stuck or needed support I was able to get quick help from the team at CD Foundation and Linux Foundation. After the transition to CD Foundation properties we were able to continue with our usual team rituals like standups, retrospective meetings and community meetings without disruption and function without interruption.

## Delivering frequently and regularly

Since CD Summit in October now that we have a stable network, we have been able to up the cadence of our delivery cycles and deliver a new release every month. In case you missed it the following versions have been released since October

[v0.2.1 - MacOS service, request new artifacts, simpler configuration](https://github.com/pyrsia/pyrsia/releases/tag/v0.2.1)

[v0.2.2 - libp2p upgrade, rust toolchain, clap update for CLI](https://github.com/pyrsia/pyrsia/releases/tag/v0.2.2)

We are getting into a process where every release we are able to pick and prioritize our goals and measure our progress towards them during the 2 sprints that follow. We hope to continue this to be able to make small, incremental improvements to what Pyrsia offers.

## Looking into the next year

On the back of the December release we are getting ready to release v0.2.3 in January 2023. Following that we will continue making a dent in our technical debt and continue progressing towards our next major milestone of releasing Java support by version v0.3.0. Along the way we have a few other significant improvements lined up eg. a scalable build service, wider Authority node network that runs on multiple clouds, an API that will encourage integration with language and package ecosystems and so on.

I can't wait to get started on 2023 and showing off new features to our community.

I am thankful to the community, the Linux Foundation, the CD Foundation and the many different communities we have now become part of. Without your support and criticism 2022 would not have been what it was for Pyrsia. Pyrsia started as an idea in 2022 but has grown into its own system over this year. Looking forward to growing it further with you together.
