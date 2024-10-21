import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ProductItem from './ProductItem';
import { loadProducts } from './ProductSlice';
import { Container } from './Product.styles';
import Filter from '../filter/Filter';
import { Snackbar, Alert } from '@mui/material';

function ProductList() {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<string>('');
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  const products = useAppSelector((store) => store.products.products);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedCategory(event.target.value as string);
  };
  const handleAddToCart = (productTitle: string) => {
    setAddedProduct(productTitle);
    setSnackbarOpen(true);
  };
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === '' || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <Container>
      <Filter
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        uniqueCategories={uniqueCategories}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <Container>
        {filteredProducts.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            onAddToCart={() => handleAddToCart(product.title)}
          />
        ))}
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {`${addedProduct} добавлен в корзину!`}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ProductList;
