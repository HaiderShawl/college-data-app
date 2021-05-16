const XLSX = require('xlsx');
const fs = require('fs')


var workbook = XLSX.readFile('././data/data.xlsx');
names = workbook.SheetNames[1]

sheet1 = XLSX.utils.sheet_to_json(workbook.Sheets[names])
console.log(sheet1[2])

const data = []
for (let i = 1; i < sheet1.length; i++) {
    var college = {
        name: sheet1[i].__EMPTY,
        state: sheet1[i].__EMPTY_1,
        type: sheet1[i].__EMPTY_2,
        total_intl_UG: sheet1[i].__EMPTY_8,
        fin_aid: sheet1[i].__EMPTY_9,
        aid_intl_UG: sheet1[i].__EMPTY_11,
        avg_aid: sheet1[i].__EMPTY_12,
        tuition: sheet1[i].__EMPTY_14,
    }
    data.push(college)
}
console.log(data[0])




