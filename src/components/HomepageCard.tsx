import Animation from './Animation';

interface HomepageCardProps {
  animationPath: string;
  title: string;
  btnText: string;
  right: string;
  textPosition: string;
  positionEnd?: string;
}

const HomepageCard = ({ animationPath, title, btnText, textPosition, positionEnd, right }: HomepageCardProps) => {
  return (
    <div style={{ height: 500, position: 'relative' }}>
      <Animation path={animationPath} right={right} />
      <div className={`position-absolute top-0 ${positionEnd} mt-5 ${textPosition} card-text-holder`}>
        <h2 className='d-light'>{title}</h2>
        <button className="button-cs">{btnText}</button>
      </div>
    </div>
  );
};

export default HomepageCard;
