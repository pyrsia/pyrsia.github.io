import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function VisionWorkflow() {
    return (
        <section className={styles.visionWorkflow}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12')}>
                        <h2 className={clsx('fs40 fw700 txtColorBlue1 text--center padding-bottom--xl margin-bottom--none')}>
                            DEVELOPER WORKFLOW
                        </h2>
                    </div>
                </div>
                <div className={clsx("row padding-bottom--xl", styles.row1)}>
                    <div className={clsx('text--center', styles.paragraph1)}>
                        <h3 className="fs24 margin-bottom--none">SIMPLE INSTALLATIONS</h3>
                        <p>Get started withe a one step installer. Followed up by generating signing keys.</p>
                    </div>
                    <div className={clsx(styles.imageInstallDiv)}>
                        <img src={useBaseUrl("/img/vision/vision-pyrsia-installation.png")} />
                    </div>
                </div>
                <div className={clsx("row padding-bottom--xl", styles.row1)}>
                    <div className={clsx(styles.imageInstallDiv)}>
                        <img src={useBaseUrl("/img/vision/vision-pyrsia-dependencies.png")} />
                    </div>
                    <div className={clsx('text--center', styles.paragraph2)}>
                        <div>
                            <h3 className="fs24 margin-bottom--none">OBTAIN YOUR DEPENDENCIES</h3>
                            <p>Build your project as you always would. In this example we are downloading a container image with Docker. We are then able to inspect the artifact and check the source.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
