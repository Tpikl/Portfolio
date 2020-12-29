import CategoryStyled from "./Category.styled";

const Category =({category})=> {
  return (
    <CategoryStyled>
      <i className={`cat_icon ${category.fa}`}></i>
      <div className='cat_title'>{category.name}</div>
      <div className='cat_skills'>
        {category.skills.map((item, i) =>
          `${item}${category.skills.length !== i+1 ? ',':''} `
        )}
      </div>
    </CategoryStyled>
  );
};
export default Category;
