import { Box } from '@chakra-ui/react';
import { MotionText } from '../../../motion/motionComponent';

const variantResolver = (extraDelay: number) => {
  return {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.6,
      delay: 0.4 + extraDelay,
    },
  };
};

function SubTitle() {
  const variants = {
    hidden: {
      y: '200%',
    },
    visible: variantResolver,
  };

  const subTitleBoxProps = {
    pt: '1em',
    pl: { base: '1em', md: '3em' },
    fontSize: { base: '9px', md: '20px' },
    lineHeight: '1.3em',
    overflow: 'hidden',
  };
  const animatedTextProps = {
    initial: 'hidden',
    animate: 'visible',
    variants: variants,
  };

  return (
    <Box {...subTitleBoxProps}>
      <MotionText {...animatedTextProps} custom={0}>
        Experience playing the 70s pong game in a modern way.
      </MotionText>
      <MotionText {...animatedTextProps} custom={0.4}>
        3D pong, power ups and realtime live chat.
      </MotionText>
    </Box>
  );
}

export default SubTitle;
