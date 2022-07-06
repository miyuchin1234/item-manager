'use strict';

const saveAllItems = () => {
  let json = JSON.stringify(allItems);
  localStorage.setItem('allItems', json);
  console.log(' === allitemsをセーブしました ===', allItems);
};

const loadAllItems = () => {
  const allItemsJson = localStorage.getItem('allItems');
  allItems = JSON.parse(allItemsJson);
  console.log('=== allitemsをロードしました ===。', allItems);
};