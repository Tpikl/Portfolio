import RowStyled from "./Row.styled";

const Row = ({children, id, className, wrap, align = false}) => {
  return (
    <RowStyled id={id} className={className} wrap={wrap} align={align}>
      {children}
    </RowStyled>
  );
};
export default Row;
