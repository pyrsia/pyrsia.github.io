import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function VisionInfoBox(props) {
    if (props.content == "box1") {
        return (
            <section className={styles.infoBox}>
                <div className="container">
                    <div className={clsx('margin-vert-lg padding-vert--md bgColorBlue1', styles.theBox)}>
                        <div className="row">
                            <div className={clsx('col col--6')}>
                                <Title title={props.title} />
                            </div>
                            <div className="col col--6 ">
                                <div className="padding-right--lg">
                                    <ContentBox1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className={clsx(styles.infoBox, styles.boxBackground)}>
                <div className="container">
                    <div className={clsx('margin-vert-lg padding-vert--md bgColorBlue1', styles.theBox)}>
                        <div className="row">
                            <div className={clsx('col col--3')}>
                                <Title title={props.title} />
                            </div>
                            <div className="col col--9 padding-left--none">
                                <div className="padding-right--lg">
                                    <ContentBox2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function ContentBox1() {
    return <ul className="margin-bottom--none">
        <li><b>Quality of Code</b> (absence of e.g Human error, bugs, security
            vulnerabilities)
        </li>
        <li><b>Trust Worthiness of the Source</b> (e.g qualification of the actor)</li>
        <li><b>Completeness of Dependencies</b> (e.g missing or incorrect information about
            packages
            within or used to build the artifact)
        </li>
    </ul>;
}

function ContentBox2() {
    return <ul className="margin-bottom--none">
        <li>Single application services provides <b>a universal API for seamless integration</b> options
        </li>
        <li>Accompanying command line interface provides <b>easy access of all the key functions</b> of the services</li>
        <li>Targeting developers system with <b>the flexibility to be deployed anywhere</b>, even the cloud</li>
        <li>Simplified network topology for how node connects. <b>Reducing complexity</b> for a more deterministic outcome.</li>
    </ul>;
}

function Title(props) {
    return <h3 className="fs24 fw700 padding-left--lg margin-bottom--none">{props.title}</h3>;
}