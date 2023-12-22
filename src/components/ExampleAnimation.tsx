import Lottie from "react-lottie-player";

interface AnimationProps {
  path: string;
}

const ExampleAnimation: React.FC<AnimationProps> = ({
  path,
}: AnimationProps) => {
  return (
    <Lottie loop path={path} play style={{ width: "100%", height: "100%" }} />
  );
};

export default ExampleAnimation;
