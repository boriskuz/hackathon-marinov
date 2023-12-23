import Lottie from 'react-lottie-player';

interface AnimationProps {
  path: string;
}

const Animation: React.FC<AnimationProps> = ({ path }: AnimationProps) => {
  return <Lottie loop path={path} play style={{ width: '100%', height: '100%', position: 'absolute' }} />;
};

export default Animation;
