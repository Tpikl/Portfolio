import RowStyled from "./Row.styled";

const Row = ({children, className, wrap}) => {
  return (
    <RowStyled className={className} wrap={wrap}>
      {children}
    </RowStyled>
  );
};
export default Row;
