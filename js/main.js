'use strict';

let allItems = [];

let itemsBeforePagitation = [];
let displayedItems = [];

const listTable = document.getElementById('list-table');
const itemList = document.getElementById('item-list');
const selectTag = document.getElementById('display-Count');
const checkboxies = document.querySelectorAll('input[type="checkbox"]');
const priceSearchBtn = document.getElementById('price-search');
const wordSearchBtn = document.getElementById('word-search');
const wordSearchInput = document.getElementById('input-word');
const maxPriceInput = document.getElementById('max-price');
const minPriceInput = document.getElementById('min-price');
const minimumPriceValue = Math.min(...allItems.map((item) => item.price));
const maximumPriceValue = Math.max(...allItems.map((item) => item.price));
const paginaitonUl = document.getElementById('paginaiton');
const noItemMessage = document.getElementById('noItem-message');

let currentPageIndex = 0;
let displayCount = 3;
let pageCount = Math.ceil(allItems.length / displayCount); 
const getPageCount = (items, displayCount) => {
  return Math.ceil(items.length / displayCount); 
};

const renderItems = (displayedItems) => {
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }
  noItemMessage.setAttribute('hidden',true);

  if(displayedItems.length === 0){
    noItemMessage.hidden = false;
  }
  displayedItems.forEach((item) =>{
    const tr = document.createElement('tr');
    const tdCategory = document.createElement('td');
    const tdName = document.createElement('td');
    const tdSku = document.createElement('td');
    const tdManufacturer = document.createElement('td');
    const tdReleaseDate = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdAction = document.createElement('td');
    const aTagName= document.createElement('a');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    tdCategory.textContent = item.category;
    tdSku.textContent = item.sku;
    tdManufacturer.textContent = item.manufacturer;
    tdReleaseDate.textContent = item.releaseDate;
    tdPrice.textContent = item.price;
    aTagName.href = `./items.html?sku=${item.sku}`;
    aTagName.textContent = item.name;
    editBtn.textContent = '編集';
    editBtn.addEventListener('click', () => {
      location.href = `./itemEdit.html?sku=${item.sku}`;
    });
    deleteBtn.textContent = '削除';
    tr.appendChild(tdCategory);
    tr.appendChild(tdName);
    tr.appendChild(tdSku);
    tr.appendChild(tdManufacturer);
    tr.appendChild(tdReleaseDate);
    tr.appendChild(tdPrice);
    tdName.appendChild(aTagName);
    tdAction.appendChild(editBtn)
    tdAction.appendChild(deleteBtn)
    tr.appendChild(tdAction);
    itemList.appendChild(tr);

    deleteBtn.addEventListener('click', () => {
    let deleteConfirm = window.confirm('削除してもよろしいですか？');
    if(deleteConfirm) {
      const sku = item.sku
      allItems = allItems.filter((item) => {
        if(item.sku !== sku) {
          return true;
        } else {
          return false;
        }
      });
      saveAllItems();

      const oldPageCont = pageCount; 
      pageCount =  getPageCount(allItems, displayCount) 
      if(oldPageCont !== pageCount && currentPageIndex !== 0 && currentPageIndex === oldPageCont - 1) {
          currentPageIndex --;
      }
      setDisplayedItems(currentPageIndex);
    }
    });
  });
};

const setDisplayedItems = (pageIndex) => {
  currentPageIndex = pageIndex;
  displayedItems = allItems;

  const fliteredItemsByCheckbox = filterItemsByCheckboxies(allItems);
  const fliteredItemsByPriceSearch = filterItemsByPriceSearch(fliteredItemsByCheckbox, maxPriceInput, minPriceInput);
  itemsBeforePagitation = filterItemsByWordSearch(fliteredItemsByPriceSearch);

  displayCount = parseInt(selectTag.value);
  pageCount = getPageCount(itemsBeforePagitation, displayCount);
  renderPagination(itemsBeforePagitation, displayCount);
  displayedItems = getItemsByPage(itemsBeforePagitation, currentPageIndex, displayCount);
 
  renderItems(displayedItems);
};

checkboxies.forEach((checkbox)=>{
  checkbox.addEventListener('change', () => {
    setDisplayedItems(0);
  });
});

priceSearchBtn.addEventListener('click', () => {
  setDisplayedItems(0);
});

wordSearchBtn.addEventListener('click', () => {
  setDisplayedItems(0);
});

selectTag.addEventListener('change',() => {
  setDisplayedItems(0);
});

const filterItemsByCheckboxies = (items) => {
  const checkboxArray = Array.from(checkboxies);
  const checkedInput = checkboxArray.find((checkbox) => {
    if (checkbox.checked) {
      return true;
    }
  });

  if(!checkedInput){
    return items;
  }

  let filteredItem = [];
  checkboxies.forEach((checkbox)=>{
    if(checkbox.checked){
      items.forEach((item)=>{
        if(checkbox.value === item.value){
          filteredItem.push(item);
        } 
      });
    }
  });
  return filteredItem;
};

const filterItemsByPriceSearch = (items, maxPriceInput, minPriceInput) => {
  const minPrice = minPriceInput.value
  const maxPrice = maxPriceInput.value
  let filteredItem = [];

  if(minPrice !== '' && maxPrice !== ''){
    items.forEach((item) => {
      if(minPrice <= item.price && maxPrice >= item.price) {
        filteredItem.push(item);
      } 
    });
  } else if(minPrice !==''){
    items.forEach((item) => {
      if(minPrice <= item.price) {
        filteredItem.push(item);
        } 
    });
  } else if(maxPrice !==''){
    items.forEach((item) => {
      if(maxPrice >= item.price) {
        filteredItem.push(item);
      } 
    });
  } else {
    return items;
  }
  return filteredItem;
};

const filterItemsByWordSearch = (items) =>{
  const wordSearch = wordSearchInput.value;
  let filteredItem = [];

  if(wordSearch !== ''){
    items.forEach((item) => {
      if(item.name.indexOf(wordSearch) !== -1){
        filteredItem.push(item);
      }
    })
  } else {
    return items;
  }

  return filteredItem;
}; 

const filterItemsByDisplayCount = (items, displayCount) => {
  let limitedItems = [];

  items.forEach((item, index) => {
    if (index < displayCount){
      limitedItems.push(item);
    }
  });
  return limitedItems;
};

const renderPagination = (items, displayCount) => {
  while(paginaitonUl.firstChild){
    paginaitonUl.removeChild(paginaitonUl.firstChild);
  }

  for(let i = 0; i < pageCount; i++){
    const pageLi = document.createElement('li');
    const pageBtn = document.createElement('button');
    if(currentPageIndex === i) {
      pageBtn.setAttribute('class', 'active');
    }
    pageBtn.textContent = i +1;
    pageBtn.addEventListener('click', () => {
      currentPageIndex = i;
      setDisplayedItems(currentPageIndex);
    });
    pageLi.appendChild(pageBtn);
    paginaitonUl.appendChild(pageLi);
  }
}; 

const getItemsByPage = (items, pageIndex, dCount)=> {
  const intDsplayCount = parseInt(dCount);
  return items.filter((_,index) => {
    return (index >= pageIndex * intDsplayCount && index < ( pageIndex * intDsplayCount) + intDsplayCount);
  });
};

const initpage = (displayedItems, displayCount) => {
  loadAllItems();
  saveAllItems();
  displayedItems = allItems;
  pageCount = getPageCount(displayedItems, displayCount)
  renderPagination(displayedItems, displayCount);
  displayedItems = getItemsByPage(allItems, currentPageIndex, displayCount);
  renderItems(displayedItems);
}
initpage(displayedItems, displayCount);