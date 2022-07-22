const createRules = [
  {
    prop: 'category',
    label: 'カテゴリ',
    regexp: /^.{1,20}$/,
    message: 'カテゴリは20文字列以内で入力してください。',
  },
  {
    prop: 'name',
    label: 'アイテム名',
    regexp: /^.{1,20}$/,
    message: 'アイテム名は20文字列以内で入力してください。',
  },
  {
    prop: 'sku',
    label: 'SKU',
    regexp: /^([a-zA-Z0-9]{1,6})$/,
    message: 'SKUは半角英数字6文字以内で入力してください。',
  },
  {
    prop: 'manufacturer',
    label: '製造元',
    regexp: /^.{1,20}$/,
    message: '製造元は20文字列以内で入力してください。',
  },
  {
    prop: 'releaseDate',
    label: '発売日',
    regexp: /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/,
    message: '発売日はYYYY/MM/DD形式で入力してください。',
  },
  {
    prop: 'price',
    label: '定価',
    regexp: /^[0-9]{1,12}$/,
    message: '定価は半角数字12桁以内で入力してください。',
  },
]

const updateRules = [
  {
    prop: 'category',
    label: 'カテゴリ',
    regexp: /^.{1,20}$/,
    message: 'カテゴリは20文字列以内で入力してください。',
  },
  {
    prop: 'name',
    label: 'アイテム名',
    regexp: /^.{1,20}$/,
    message: 'アイテム名は20文字列以内で入力してください。',
  },
  {
    prop: 'manufacturer',
    label: '製造元',
    regexp: /^.{1,20}$/,
    message: '製造元は20文字列以内で入力してください。',
  },
  {
    prop: 'releaseDate',
    label: '発売日',
    regexp: /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/,
    message: '発売日はYYYY/MM/DD形式で入力してください。',
  },
  {
    prop: 'price',
    label: '定価',
    regexp: /^[0-9]{1,12}$/,
    message: '定価は半角数字12桁以内で入力してください。',
  },
]

const validate = (item, validationRules) => {
  let result = true
  validationRules.forEach((rule) => {
    const messageTag = document.getElementById(`${rule.prop}-message`)

    // 必須チェック
    if (!item[rule.prop]) {
      messageTag.style.visibility ="visible";
      messageTag.textContent = `${rule.label}の入力は必須です。`
      result = false
      return
    }

    // 入力規則チェック
    const valid = rule.regexp.test(item[rule.prop])
    if (!valid) {
      messageTag.style.visibility ="visible";
      messageTag.textContent = rule.message
      result = false
    } else {
      messageTag.style.visibility ="hidden";
    }
  })

  return result
}