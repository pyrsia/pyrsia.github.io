import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'ACTORS & ENTITIES',
        description: (
            <>
                Attestations proved non-repudiation so developers know exactly who wrote the code,
                how it was built and how the artifact was published. Built on standard like Sigstore's
                Cosign to NPM Packages Signing allows developers to rapidly add their containers to pyrsia
                network along side their favorite container registries. Other notable efforts include Notary V2.
            </>
        ),
    },
    {
        title: 'SOURCE REVISION',
        description: (
            <>
                Open interoperable standards such as Git Commit Signatures help to pin down the exact commit where
                the source code originates from. Know the author and commit who wrote the code. Know who built
                and published the code from their secured environment.
            </>
        ),
    },
    {
        title: 'ARTIFACT DESCRIPTIONS',
        description: (
            <>
                Open interoperable standards such as the Linux Foundation's SPDX, OWASP CycloneDX, or Build Info as
                used to collect facts and communicate facts about packages. Leverage and integrate with the
                technologies you are already relying on to secure your supply chain.
            </>
        ),
    },
    {
        title: 'IMMUTABLE LEDGER',
        description: (
            <>
                Every package ever published forever record in an unchanging ledger persists the consistent
                reproducible data pointing to a uniquely identifiable artifact that can always be available
                in the network.
            </>
        ),
    },
    {
        title: 'DISTRIBUTED NETWORK',
        description: (
            <>
                Each node connects through relays to discover each other. When a node download a package
                that's requested by it's peer it's cached and seeding the network when another node looks
                for the same package. This provides a robust and highly available package ecosystem not
                limited by a central repository.
            </>
        ),
    },
    {
        title: 'REPUTABLE PARTNERS',
        description: (
            <>
                In order to bootstrap trust, only a select few reputable entities will build and publishing
                images. These image will be available to everyone. Members of the <a href="https://cd.foundation">CD Foundation</a> will all the have
                chance to volunteer their resources to help establish the first distributed network, but we are
                most excited for the future!
            </>
        ),
    },
];


function Feature({title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="padding-horiz--md padding-bottom--lg padding-top--md">
                <h3 className='fs24 fw700'>{title}</h3>
                <div className={clsx('padding-bottom--sm', styles.featureDesc)}>{description}</div>
            </div>
        </div>
    );
}

export default function VisionFeatures() {
    return (
        <section className={styles.features} id="visionfeatures">
            <div className={clsx('container', styles.bgTorch)}>
                <div className="row">
                    <div className={clsx('col col--12 text--center padding-bottom--lg')}>
                        <h2 className={clsx('fs40 fw700', styles.headline)}>
                            <span className="colorWhite">Gain confidence by having</span> transparency on the source of
                            the packages <span className="colorWhite">you need</span>
                        </h2>
                    </div>
                </div>
                <div className="row padding-bottom--xl">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
