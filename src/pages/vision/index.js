import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import VisionTop from '@site/src/components/VisionTop';
import VisionInfoBox from '@site/src/components/VisionInfoBox';
import VisionFeatures from '@site/src/components/VisionFeatures';
import VisionConcepts from '@site/src/components/VisionConcepts';
import VisionWorkflow from '@site/src/components/VisionWorkflow';

const infoBox1Title = "Examples the assertion the Pyrsia Network does not demonstrate:";
const infoBox2Title = "COMPOSABLE ELEMENTS";

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Vision ${siteConfig.title}`}
            description="Description will go into a meta tag">
            <main>
                <VisionTop/>
                <VisionInfoBox title={infoBox1Title} content="box1"/>
                <VisionFeatures/>
                <VisionConcepts />
                <VisionInfoBox title={infoBox2Title} content="box2"/>
                <VisionWorkflow />
            </main>
        </Layout>
    );
}
