import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'PACKAGES',
        imgSrc: '/img/vision/icon-bricks.svg',
        description: (
            <>
                are specific file(s) are consumed by developers to build their software
            </>
        ),
        imgOnly: false,
    },
    {
        title: 'ARTIFACTS',
        imgSrc: '/img/vision/icon-amphore.svg',
        description: (
            <>
                are the abstraction of specific packages types (e.g Docker or Conan) which are loosely binary blobs
            </>
        ),
        imgOnly: false,
    },
    {
        title: '',
        imgSrc: '/img/icon-pyrsia-torch-175.svg',
        description: (
            <>
            </>
        ),
        imgOnly: true,
    },
    {
        title: 'NODES',
        imgSrc: '/img/vision/icon-ship.svg',
        description: (
            <>
                are the software that connects system together.
                They provide local access to package managers.
            </>
        ),
        imgOnly: false,
    },
    {
        title: 'NETWORK',
        imgSrc: '/img/vision/icon-zodiac.svg',
        description: (
            <>
                references to the whole interconnect system of nodes and the
                various mechanism they use to communicate with one another
            </>
        ),
        imgOnly: false,
    },
];

function Feature({imgSrc, title, description, imgOnly}) {
    if ( !imgOnly ) {
        return (
            <div className={clsx('padding-horiz--md')}>
                <div className={clsx('text--center', styles.col5th)}>
                    <div className={styles.iconDiv}>
                        <img src={useBaseUrl(imgSrc)} />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <div className={clsx('padding-horiz--md')}>
                <div className={clsx('text--center', styles.colImg)}>
                    <img src={useBaseUrl(imgSrc)} />
                </div>
            </div>
        );
    }

}

export default function VisionConcepts() {
    return (
        <section className={styles.concepts}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12 text--center padding-bottom--xl')}>
                        <h2 className="fs40 fw700 colorWhite">KEY CONCEPTS</h2>
                    </div>
                </div>
                <div className={clsx('row', styles.featureRow)}>
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                </div>
            </div>
        </section>
    );
}
