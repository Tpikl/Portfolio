import { Children } from "react";
import ColumnStyled from "./Column.styled";

const Column = ({children}) => {
  return (
    <ColumnStyled>
      {children}
    </ColumnStyled>
  );
};
export default Column;
