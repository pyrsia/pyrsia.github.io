import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepagePkgFeatures from '@site/src/components/HomepagePkgFeatures';
import HomepageTeam from '@site/src/components/HomepageTeam';
import HomepageSeparator from '@site/src/components/HomepageSeparator';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>

      <div className="container">
        <div className="hero__logo">
            <img src={useBaseUrl('/img/hero/hero-pyrsia-logo.svg')} />
        </div>
        <p className="hero__subtitle padding-top--md pos-relative fs40"><b><i>ZERO-TRUST DECENTRALIZED</i></b><br/>PACKAGE NETWORK</p>
        <div className={clsx('padding-top--md', styles.buttons)}>
          <Link
            className="button button--secondary button--pyrsia-cta button--lg pos-relative"
            to="/docs/technology/quick-installation/">
              Try the Pyrsia Demo >
          </Link>
        </div>
          <div className="pos-absolute hero__worldmap">
              <img src={useBaseUrl('/img/hero/hero-pyrsia-world.svg')} />
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepagePkgFeatures />
        <HomepageSeparator />
        <HomepageTeam />
      </main>
    </Layout>
  );
}
