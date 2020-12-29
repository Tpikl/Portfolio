import ColumnStyled from "./Column.styled";

const Column = ({children, className}) => {
  return (
    <ColumnStyled className={className}>
      {children}
    </ColumnStyled>
  );
};
export default Column;
