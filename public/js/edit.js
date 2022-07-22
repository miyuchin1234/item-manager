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

document.addEventListener('change',(e) => {
  const prop = e.target.getAttribute('data-prop');
  if (prop === 'price') {
    updatedItem[prop] = parseInt(e.target.value)
  } else {
    updatedItem[prop] = e.target.value
  }
  console.log('== updatedItem ====',updatedItem);
});

const updateItem = (item) => {
  if (validate(item, updateRules)) {
    console.log('更新成功')
    for(let i = 0; i < allItems.length; i++){
      if (allItems[i].sku === item.sku) {
        allItems[i] = item
      }
    }
    console.log('=== updated item ===', item);
    console.log('=== allItems ===', allItems);
    saveAllItems();
    alert('商品を更新しました。')
  } else {
    alert('入力に不備があります。')
  }
}

updateBtn.addEventListener('click', () => {
  updateItem(updatedItem);
});


