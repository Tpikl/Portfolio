import RowStyled from "./Row.styled";

const Row = ({children, className}) => {
  return (
    <RowStyled className={className}>
      {children}
    </RowStyled>
  );
};
export default Row;
