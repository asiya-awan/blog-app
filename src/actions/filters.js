
//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE

export const sortByTitle = (sortBy) => ({
  type: 'SORT_BY_TITLE',
  sortBy
});

//SORT_BY_AMOUNT
export const sortByDescription = (sortBy) => ({
  type: 'SORT_BY_DESCRIPTION',
  sortBy
});
