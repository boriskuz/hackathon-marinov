import Animation from './Animation';

interface HomepageCardProps {
  animationPath: string;
  title: string;
  btnText: string;

  textPosition: string;
  positionEnd?: string;
}

const HomepageCard = ({ animationPath, title, btnText, textPosition, positionEnd }: HomepageCardProps) => {
  return (
    <div style={{ height: 500, position: 'relative' }}>
      <Animation path={animationPath} />
      <div className={`position-absolute top-0 ${positionEnd} mt-5 ${textPosition} card-text-holder`}>
        <h2>{title}</h2>
        <button className="btn btn-outline-secondary">{btnText}</button>
      </div>
    </div>
  );
};

export default HomepageCard;
