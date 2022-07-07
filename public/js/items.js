'use strict';

let allItems = [];
const listCategory = document.getElementById('list-category');
const listName = document.getElementById('list-name');
const listSku = document.getElementById('list-sku');
const listManufacturer = document.getElementById('list-manufacturer');
const listReleaseDate = document.getElementById('list-releaseDate');
const listPrice = document.getElementById('list-price');

loadAllItems();

const initpage = () => {
  let url = new URL(window.location.href);
  let params = url.searchParams;
  let getSku = params.get('sku');
  
  allItems.forEach((item)=>{
    if(item.sku === getSku){
      console.log('=== category ===', item.category);
      listCategory.textContent = item.category;
      listName.textContent = item.name;
      listSku.textContent = item.sku;
      listManufacturer.textContent = item.manufacturer;
      listReleaseDate.textContent = item.releaseDate;
      listPrice.textContent = item.price;
    };
  });
};

initpage();