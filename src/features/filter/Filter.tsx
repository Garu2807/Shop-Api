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
<<<<<<< Updated upstream
=======
  SelectChangeEvent,
>>>>>>> Stashed changes
} from '@mui/material';

type FilterProps = {
  searchQuery: string;
  selectedCategory: string;
  uniqueCategories: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
<<<<<<< Updated upstream
  onCategoryChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
=======
  onCategoryChange: (event: SelectChangeEvent) => void;
>>>>>>> Stashed changes
};

const categoryTranslations: { [key: string]: string } = {
  "men's clothing": 'Мужская одежда',
  "women's clothing": 'Женская одежда',
  jewelery: 'Ювелирные изделия',
  electronics: 'Электроника',
};

// Обычная функция
function Filter({
  searchQuery,
  selectedCategory,
  uniqueCategories,
  onSearchChange,
  onCategoryChange,
}: FilterProps) {
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
                {/* Если категория есть в объекте, выводим перевод */}
                {categoryTranslations[category] || category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyledSelect>
    </FiltersContainer>
  );
}

export default Filter;
