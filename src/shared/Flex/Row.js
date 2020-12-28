import RowStyled from "./Row.styled";

const Row = ({children}) => {
  return (
    <RowStyled>
      {children}
    </RowStyled>
  );
};
export default Row;
