import React from 'react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
    {
        Svg: require('@site/static/img/logo-jfrog.svg').default,
        type: "svg",
    },
    {
        Svg: require('@site/static/img/logo-docker.svg').default,
        type: "svg",
    },
    {
        Svg: require('@site/static/img/logo-deployhub.svg').default,
        type: "svg",
    },
    {
        Svg: require('@site/static/img/logo-futurewei.svg').default,
        type: "svg",
    },
    {
        Svg: require('@site/static/img/logo-oracle.svg').default,
        type: "svg",
    },
];

function Feature({Svg, type, url}) {
    if ( type == "svg") {
        return (
                <div className={styles.iconDiv}>
                    <Svg role="img"/>
                </div>
        );
    } else {
        return (
            <div className={styles.iconDiv}>
                <img className={styles.logoPng} src={useBaseUrl(url)}/>
            </div>

        );
    }
}

export default function HomepageTeam() {
    return (
        <section className={styles.team}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12 text--center padding-bottom--lg')}>
                        <h2 className="fs40 padding-bottom--lg margin-bottom--none">
                            <span className="colorWhite">THE TEAM BEHIND PYRSIA</span>
                        </h2>
                        <div className={`text--center padding-top--lg ${styles.description}`}>
                            Pyrsia is driven by leading companies in the software industry. As a prospective project of
                            the OpenSSF we are building on decades of experience developing, deploying and securing code
                            pipelines. With companies like JFrog supporting this project, we are leveraging our
                            knowledge of package management, integration with central repositories, and the requirements
                            of building with open-source communities.
                        </div>
                    </div>
                </div>
                <div className="row justifyContentCenter">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <div className="row padding-top--xl">
                    <div className="col col--12 text--center">
                        <h2 className={'fs40 colorWhite'}>WHY PYRSIA?</h2>
                        <div className={`text--center ${styles.descriptionXl}`}>
                            <p>The open-source supply chain has become a critical element to every technology,
                                from the operating system and browser you are using to the applications and services
                                which we depended on to run our lives. Innovation like NASA Mars Rovers might not have
                                been possible without the open source communities and the powerful technologies
                                they have created.
                            </p>
                            <p>Yet in recent years this has become a vulnerability that has been exploited to inject
                                malicious malware or virus that infected vast numbers of companies and services.
                                In rare cases it has been highly regarded packages that have been compromised by
                                their authors. What halts developers around the world is the downtime and outages of the
                                central repositories that cripples continuous integration and delivery pipelines.
                            </p>
                            <p>Pyrsia helps developers empower their app development. We simplify and accelerate
                                development workflows with an integrated dev pipeline and through the distribution
                                of packages. Pyrsia provides unmatched simplicity, agility and choice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
