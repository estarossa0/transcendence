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
    pt: '0.3em',
    fontSize: { base: '7px', sm: '10px', md: '13px', lg: '17px', xl: '20px' },
    lineHeight: '1.3em',
    overflow: 'hidden',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: { base: '500', md: '400' },
  };
  const animatedTextProps = {
    initial: 'hidden',
    animate: 'visible',
    variants: variants,
  };

  return (
    <Box textAlign="center" {...subTitleBoxProps}>
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
