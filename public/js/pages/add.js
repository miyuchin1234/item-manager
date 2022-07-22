'use strict';

let allItems = [];
let item = {};

const inputCategory = document.getElementById('input-category');
const inputName = document.getElementById('input-name');
const inputSku = document.getElementById('input-sku');
const inputManufacturer = document.getElementById('input-manufacturer');
const inputReleaseDate = document.getElementById('input-releaseDate');
const inputPrice = document.getElementById('input-price');
const inputDates = document.querySelectorAll('input[type="text"]');
const addBtn = document.getElementById('add-btn');

const initPage = () => {
  loadAllItems();
};
initPage();

const addItem = () => {
  if (validate(item, createRules)) {
    console.log('バリデーション成功')
    allItems.push(item);
    alert('商品を登録しました');
    saveAllItems();
    clearForm();
  } else {
    alert('入力に不備があります。')
  }
};

const clearForm = () => {
  inputCategory.value = '';
  inputSku.value = '';
  inputName.value = '';
  inputManufacturer.value = '';
  inputReleaseDate.value = '';
  inputPrice.value = '';
};

document.addEventListener('change',(e) => {
  const prop = e.target.getAttribute('data-prop');
  if (prop === 'price') {
    item[prop] = parseInt(e.target.value)
  } else {
    item[prop] = e.target.value
  }
  console.log('== item ====',item);
});

addBtn.addEventListener('click', () => {
  addItem();
});