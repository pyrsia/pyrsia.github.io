import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function VisionTop() {
    return (
        <section className={styles.visionTop}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12')}>
                        <h2 className={clsx('fs40 fw500 padding-bottom--xl margin-bottom--none', styles.headline)}>
                            <span className="colorWhite">Pyrsia sets out to be the torch that lights up the open-source supply chain.</span>
                        </h2>
                    </div>
                </div>
                <div className="row padding-bottom--xl">
                    <div className="col col--12">
                        <h3 className="fs24 margin-bottom--none">THE PROBLEM WITH OPEN SOURCE SECURITY</h3>
                        <p className={styles.paragraph}>Not knowing where all your software comes from means <b>hard-to-spot risks to the integrity
                            of your services</b>. Without constant identity checks and safety protocols for keys and
                            secrets, <b>open source dependencies can open the door to breaches, exploits and supply chain attacks</b>.</p>
                        <h3 className="fs24 margin-bottom--none">WHERE DOES PYRSIA FIT IN...</h3>
                        <p className={styles.paragraph}><b>What does Pyrsia address in SLSA's threat landscape?</b><br />
                            Firmly the "dependencies" section. The only way to obtaining confidence is to have detailed
                            transparent information across the supply chain.</p>
                        <h3 className="fs24 margin-bottom--none">WHAT PYRSIA SETS OUT TO PROVIDE</h3>
                        <ul className={styles.paragraph}>
                            <li>Confident Providence of the package (e.g. Signed commit, Build log attestations,
                                Non-repudiation of publisher)</li>
                            <li>Immutable History (e.g. transparency log of every package in it's original state and
                                it's metadata as it changes over time)</li>
                            <li>Secure and Efficient Distribution (e.g. verifiable integrity of the package
                                and it's source)</li>
                            <li>Fault tolerance - Distrusted network storages means</li>
                        </ul>
                        <h3 className="fs24 margin-bottom--none">GUIDING PRINCIPLES</h3>
                        <ul>
                            <li>Represents data in formats that are both machine- and human-readable.</li>
                            <li>Built on open standards for the open source community.</li>
                            <li>Focuses on collecting and communicating facts; and provides a framework to
                                make assertions about those facts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
