import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const urlTorch = '/img/icon-pyrsia-torch.svg';

export default function HomepageSeparator() {
    return (
        <section className={styles.separator}>
            <div className="row row--no-gutters">
                <div className="col col--12 text--center">
                    <img className={clsx('pos-relative', styles.imgTorch)} src={useBaseUrl(urlTorch)} alt="torch" />
                    <div className={clsx('pos-relative', styles.redLine)}></div>
                </div>
            </div>
        </section>
    );
}
