import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
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
            <img src={useBaseUrl('/img/hero/hero-pyrsia-logo.svg')} alt="Pyrsia logo" />
        </div>
        <h1 className="hero__subtitle padding-top--md pos-relative colorWhite fw500 fs40"><b><i>DECENTRALIZED PACKAGE</i></b><br/>NETWORK</h1>
        <div className={clsx('padding-top--md', styles.buttons)}>
          <Link
            className="button button--secondary button--pyrsia-cta button--lg pos-relative"
            to="/docs/tutorials/quick-installation/">
              Try Pyrsia >
          </Link>
        </div>
          <div className="pos-absolute hero__worldmap">
              <img src={useBaseUrl('/img/hero/hero-pyrsia-world.svg')} alt="world map" />
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`The Decentralized Package Network`}
      description="The Pyrsia project allows developers leverage any package with confidence and transparency.">
        <Head>
            <meta name="google-site-verification" content="9IhW0v7-04TrLe9HOtIjF9C4nn_I7zZ5qiuvGcV4DhQ" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
            <link rel="manifest" href="/img/site.webmanifest" />
        </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepagePkgFeatures />
        <HomepageSeparator />
      </main>
    </Layout>
  );
}
