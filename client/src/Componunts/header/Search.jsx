import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20;
  width: 100%;
  font-size: unset;
`;
const SearchInconwraper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;
const Listwaper = styled(List)`
  position: absolute;
  color: #000;
  background: #b2e0b8;
  margin-top: 36px;
`;
const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };
  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="search for product"
        onChange={(e) => getText(e.target.value)}
      />
      <SearchInconwraper>
        <SearchIcon />
      </SearchInconwraper>
      {text && (
        <Listwaper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </Listwaper>
      )}
    </SearchContainer>
  );
};
export default Search;
