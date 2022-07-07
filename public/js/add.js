'use strict';

let allItems = [];

const initPage = () => {
  loadAllItems();
};
initPage();

const inputCategory = document.getElementById('input-category');
const inputName = document.getElementById('input-name');
const inputSku = document.getElementById('input-sku');
const inputManufacturer = document.getElementById('input-manufacturer');
const inputReleaseDate = document.getElementById('input-releaseDate');
const inputPrice = document.getElementById('input-price');
const inputDates = document.querySelectorAll('input[type="text"]');
const addBtn = document.getElementById('add-btn');

const addItem = () => {
  if(inputCategory.value !== '' && inputName.value !== '' && inputSku.value !== '' && inputManufacturer.value !== '' && inputReleaseDate.value !== '' && inputPrice.value !== ''){
    const newItem = {};
    newItem.sku = inputSku.value;
    newItem.category = inputCategory.value;
    newItem.name = inputName.value;
    newItem.manufacturer = inputManufacturer.value;
    newItem.releaseDate = inputReleaseDate.value;
    newItem.price = inputPrice.value;
    allItems.push(newItem);
    console.log('=== newItem ===', newItem);
    console.log('=== allItems ===', allItems);
    alert('登録しました');
    saveAllItems();
    clearForm();
  }else {
    alert('全て入力して下さい');
    console.log('=== allitemsをセーブできませんでした ===', allItems);
  };
};

addBtn.addEventListener('click', () => {
  addItem();
});

const clearForm = () => {
  inputCategory.value = '';
  inputSku.value = '';
  inputName.value = '';
  inputManufacturer.value = '';
  inputReleaseDate.value = '';
  inputPrice.value = '';
};