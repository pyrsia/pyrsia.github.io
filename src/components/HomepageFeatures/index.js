import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CONFIDENCE IN PACKAGES',
    Svg: require('@site/static/img/homefeatures/icon-lighthouse.svg').default,
    description: (
      <>
          Signatures provide non-repudiation allowing developers to know the exact source of the packages they need and rely on.
      </>
    ),
  },
  {
    title: 'BUILDING BLOCKS',
    Svg: require('@site/static/img/homefeatures/icon-column.svg').default,
    description: (
      <>
          Planned support for all the repositories developers need (e.g Docker, Conan, Go).
      </>
    ),
  },
  {
    title: 'GOALS OF PYRSIA',
    Svg: require('@site/static/img/homefeatures/icon-goals.svg').default,
    description: (
      <>
          We care about improving the security posture of open source projects and their supply
          chains that are critical to the global development of software.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('row')}>
        <div className={clsx('col col--12')}>
            <div className="displayFlex">
                  <div className={styles.iconDiv}>
                    <Svg className={styles.featureSvg} role="img" />
                  </div>
                  <div className="padding-left--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
            </div>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <div className={clsx('col col--6 displayFlex fs30 alignItemsCenter text--center')}>
                <p>Pyrsia enables developers to quickly<br/> and easily leverage any package<br/> with confidence and transparency.</p>
            </div>
            <div className={clsx('col col--6')}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
            </div>
        </div>
      </div>
    </section>
  );
}
