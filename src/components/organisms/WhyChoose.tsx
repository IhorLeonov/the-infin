'use client';

import React, { useRef } from 'react';
import styles from '../../styles/components/WhyChoose.module.scss';

import { Section } from '../atoms/Section';
import { motion } from 'framer-motion';

import WhyChooseItem from '../molecules/WhyChooseItem';
import PlusesIcon from '../../../public/icons/plusGroup.svg';
// import useTargetInView from '@/hooks/useTargetInView';
// import AnimatedText from '../molecules/AnimatedText';
import AnimatedLineText from '../molecules/AnimatedLineText';

interface WhyChooseProps {}

export default function WhyChoose({}: WhyChooseProps) {
  // const targetRef = useRef(null);
  // const { isInView } = useTargetInView(targetRef);

  return (
    <Section className={styles.section} type="ghost">
      {/* <h2 className={styles.title}>Why choose the INFIN</h2> */}
      <AnimatedLineText
        className={styles.title}
        el="h2"
        text={['Why choose', 'the INFIN']}
        once
      />

      <ul className={styles.cardList}>
        <WhyChooseItem
          title={['The old way']}
          text="Workers compete with their peers for recognition from bosses who also don’t like this dynamic."
          imageSrc="/images/boys.jpeg"
        />
        <WhyChooseItem
          title={['The INFIN way']}
          text="Colleagues dynamically observe and rank each other’s contributions in a confidential, anonymous manner. The INFIN then calculates ownable, individual value and automatically distributes peer-reviewed recognition and rewards (while giving execs a clear picture of individual ROI)."
          imageSrc="/images/boys-and-girl.jpeg"
        />
      </ul>

      <motion.div
        className={styles.plusesContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <PlusesIcon className={styles.pluses} />
        {/* <div ref={targetRef} /> */}
      </motion.div>
    </Section>
  );
}
