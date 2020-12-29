import RowStyled from "./Row.styled";

const Row = ({children, className, wrap, align = false}) => {
  return (
    <RowStyled className={className} wrap={wrap} align={align}>
      {children}
    </RowStyled>
  );
};
export default Row;
