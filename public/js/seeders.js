'use strict';

const testDataBtn = document.getElementById('test-data-btn');
testDataBtn.addEventListener('click', () => {
  saveTestData();
});

const saveTestData = () => {
  let json = JSON.stringify([
    {sku: 'A001', category: '本', name: 'オレオレ通信', manufacturer: 'オレオレ書店', releaseDate: '2022/06/22', price: 890, value: 'book'},
    {sku: 'A002', category: '家電', name: 'オレオレ掃除機', manufacturer: 'Toshiba', releaseDate: '2020/08/22', price: 25000, value: 'consumer-electronics'},
    {sku: 'A003', category: '食品', name: 'バナナ', manufacturer: 'ドール', releaseDate: '2022/06/22', price: 150, value: 'food'},
    {sku: 'A004', category: 'ファッション', name: 'オレオレTシャツ', manufacturer:'ユニクロ', releaseDate:'2021/05/22', price: 1500, value: 'fashion'},
    {sku: 'A005', category: '本', name: 'vogue', manufacturer: 'オレオレ社', releaseDate: '2022/10/02', price: 1080,value: 'book'},
    {sku: 'A006', category: '家電', name: 'ドラム式洗濯機', manufacturer: 'Panasonic', releaseDate: '2021/01/10', price: 78000, value: 'consumer-electronics'},
    {sku: 'A007', category: '食品', name: '鰯の缶詰', manufacturer: '味の素', releaseDate: '2019/05/09', price: 480, value: 'food'},
    {sku: 'A008', category: 'ファッション', name: 'ジャケット', manufacturer: 'h&m', releaseDate: '2021/12/05', price: 17000, value: 'fashion'},
    {sku: 'A009', category: '本', name: '東京散歩', manufacturer: '東京カンパニー', releaseDate: '2021/08/29', price: 1280, value: 'book'},
    {sku: 'A010', category: '家電', name: 'TV', manufacturer: 'sony', releaseDate:'2018/02/17', price: 350000, value: 'consumer-electronics'},
    {sku: 'A011', category: '食品', name: '玉ねぎドレッシング', manufacturer: 'キューピー', releaseDate: '2022/03/22', price: 350, value: 'food'},
    {sku: 'A012', category: 'ファッション', name: 'ワンピース', manufacturer: '無印良品', releaseDate: '2021/09/11', price: 3980, value: 'fashion'},
    {sku: 'A013', category: '家電', name: '電子レンジ', manufacturer: '日立', releaseDate: '2020/04/22', price: 34500, value: 'consumer-electronics'},
    {sku: 'A014', category: '家電', name: 'ホットプレート', manufacturer: 'SHARP', releaseDate: '2022/12/27', price: 8873, value: 'consumer-electronics'},
    {sku: 'A015', category: '家電', name: '炊飯器', manufacturer: '象印', releaseDate: '2020/03/15', price: 38600, value: 'consumer-electronics'},
    {sku: 'A016', category: '家電', name: 'クーラー', manufacturer: 'ダイキン', releaseDate: '2020/08/22', price: 89800, value: 'consumer-electronics'},
    {sku: 'A017', category: '食品', name: 'マウイチップス', manufacturer: 'ハワイ堂', releaseDate: '2022/01/22', price: 298, value: 'food'},
    {sku: 'A018', category: 'ファッション', name: 'デニム', manufacturer: 'ZOZOcompany', releaseDate: '2021/05/05', price: 5980, value: 'fashion'},
    {sku: 'A019', category: 'ファッション', name: 'タンクトップ', manufacturer: '楽天', releaseDate: '2022/11/09', price: 2980, value: 'fashion'},
    {sku: 'A020', category: 'ファッション', name: 'スーツ', manufacturer: 'aoki', releaseDate: '2021/05/22', price: 59000, value: 'fashion'},
    {sku: 'A021', category: '家電', name: 'ドラム式洗濯機', manufacturer: '日立', releaseDate: '2020/04/22', price: 104500, value: 'consumer-electronics'},
    {sku: 'A022', category: '家電', name: 'ドラム式洗濯機', manufacturer: 'SHARP', releaseDate: '2022/12/27', price: 56000, value: 'consumer-electronics'},
  ]);
  localStorage.setItem('allItems', json);
  window.location.reload();
};