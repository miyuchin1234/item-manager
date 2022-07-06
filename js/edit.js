'use strict';

let allItems = [];
let updatedItem
let url = new URL(window.location.href);
let params = url.searchParams;
let sku = params.get('sku');

const inputCategory = document.getElementById('input-category');
const inputtName = document.getElementById('input-name');
const inputManufacturer = document.getElementById('input-manufacturer');
const inputReleaseDate = document.getElementById('input-releaseDate');
const inputPrice = document.getElementById('input-price');
const updateBtn = document.getElementById('update-btn');
const inputItems = document.querySelectorAll('input[type="text"]');

const initPage = () => {
  loadAllItems();

  allItems.forEach((item)=>{
    if(item.sku === sku){
      updatedItem = item;
      inputCategory.value = item.category;
      inputtName.value = item.name;
      inputManufacturer.value = item.manufacturer;
      inputReleaseDate.value = item.releaseDate;
      inputPrice.value = item.price;
    };
  });
};
initPage();

inputItems.forEach((input) => {
  input.addEventListener('change', (e) => {
    const id = input.id;
    const prop = id.replace('input-', '');
    updatedItem[prop] = e.target.value;
  });
});

updateBtn.addEventListener('click', () => {
  saveAllItems();
});