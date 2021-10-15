import Sphere from './sphere';

function SpheresBackground() {
  return (
    <>
      <Sphere
        pos="absolute"
        top="5%"
        right="10%"
        w={['0px', '280px']}
        h={['0px', '280px']}
      />
      <Sphere
        pos="absolute"
        bottom="-5%"
        left="-80px"
        w={['0px', '280px', '380px']}
        h={['0px', '280px', '380px']}
      />
      <Sphere
        pos="absolute"
        bottom={['25%', '5%']}
        right={['-60px', '3%']}
        w="180px"
        h="180px"
      />
    </>
  );
}

export default SpheresBackground;
