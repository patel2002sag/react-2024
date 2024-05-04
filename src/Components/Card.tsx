type childrenComp = {
  children: any;
  bg: string;
};

const Card: React.FC<childrenComp> = ({ children, bg = 'grey' }) => {
  return (
    <>
      <div className={`bg-${bg}-100 p-6 rounded-lg shadow-md`}>{children}</div>
    </>
  );
};

export default Card;
