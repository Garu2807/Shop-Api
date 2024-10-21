import React from 'react';
import {
  FiltersContainer,
  StyledSelect,
  StyledTextField,
} from './Filter.styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent, // Используем SelectChangeEvent для onCategoryChange
} from '@mui/material';

type FilterProps = {
  searchQuery: string;
  selectedCategory: string;
  uniqueCategories: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: SelectChangeEvent) => void; // изменен тип события на SelectChangeEvent
};

const categoryTranslations: { [key: string]: string } = {
  "men's clothing": 'Мужская одежда',
  "women's clothing": 'Женская одежда',
  jewelery: 'Ювелирные изделия',
  electronics: 'Электроника',
};

const Filter: React.FC<FilterProps> = ({
  searchQuery,
  selectedCategory,
  uniqueCategories,
  onSearchChange,
  onCategoryChange,
}) => {
  return (
    <FiltersContainer>
      <StyledTextField>
        <TextField
          placeholder="Поиск по товарам"
          variant="outlined"
          value={searchQuery}
          onChange={onSearchChange}
          fullWidth
        />
      </StyledTextField>

      <StyledSelect>
        <FormControl fullWidth>
          <InputLabel>Фильтр по категориям</InputLabel>
          <Select value={selectedCategory} onChange={onCategoryChange}>
            <MenuItem value="">Все категории</MenuItem>
            {uniqueCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {categoryTranslations[category] || category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyledSelect>
    </FiltersContainer>
  );
};

export default Filter;
