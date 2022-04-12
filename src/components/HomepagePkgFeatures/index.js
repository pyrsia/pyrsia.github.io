import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FRICTIONLESS',
    description: (
      <>
          Pyrsia aims to seamlessly integrate with the package mangers developers are already using. The day to day impact should be minimal with the default configuration. Advance workflows can easily be enabled.
      </>
    ),
      linktitle: 'Read More >',
      linktarget: '/vision/#visionfeatures',
      iswide: false,
  },
  {
    title: 'TRANSPARENT',
    description: (
      <>
          The combination of an open-source, customizable architecture, and a robust, active community makes Pyrsia the most open way to obtain packages.
      </>
    ),
      linktitle: 'Join The Community >',
      linktarget: '/vision/#visionfeatures',
      iswide: false,
  },
  {
    title: 'INTEROPERABLE',
    description: (
      <>
          Interoperability without foregoing compatibility, security, or efficiency; learn how Pyrsia takes a unique, multifaceted approach to address each of these factors.
      </>
    ),
      linktitle: 'Learn How >',
      linktarget: '/vision/#visionfeatures',
      iswide: false,
  },
];
const FeatureWide = [
    {
        title: 'SECURE',
        description: (
            <>
                Developers are often forced to make tradeoffs between compatibility, security, and efficiency to interact with central repositories. This has led to the creation of bridges, proxies, and other proprietary solutions, all with their own limitations.
                <br /><br />
                Pyrsia takes a unique, transparent approach to address these tradeoffs.
            </>
        ),
        linktitle: 'Read More >',
        linktarget: '/vision/#visionfeatures',
        iswide: true,
    }
];

function Feature({ title, description, linktitle, linktarget, iswide}) {
  return (
    <div className={clsx('col padding-top--lg', {'col--4 padding-bottom--lg' : !iswide}, {'col--12' : iswide})}>
      <div className="padding-horizontal--md text--center">
        <h3 className='fw700'>{title}</h3>
        <div className={`padding-bottom--sm ${iswide ? styles.featureDescWide : styles.featureDesc}`}>{description}</div>
          <div className={clsx('padding-top--md')}>
              <Link
                  className="button button--secondary button--pyrsia-cta button--lg"
                  to={linktarget}>
                  {linktitle}
              </Link>
          </div>
      </div>
    </div>
  );
}

export default function HomepagePkgFeatures() {
  return (
      <section className={styles.features}>
          <div className={clsx('container', styles.bgTorch)}>
              <div className="row">
                  <div className={clsx('col col--12 text--center padding-bottom--lg')}>
                      <h2 className="fs40">
                          <span className="colorWhite">Accelerate how you </span>build, share, and <br/>consume <span
                          className="colorWhite">open-source packages.</span>
                      </h2>
                  </div>
              </div>
              <div className="row padding-bottom--lg">
                  {FeatureList.map((props, idx) => (
                      <Feature key={idx} {...props} />
                  ))}
              </div>
              <div className="row padding-bottom--lg">
                  {FeatureWide.map((props, idx) => (
                      <Feature key={idx} {...props} />
                  ))}
              </div>
          </div>
      </section>
  );
}
