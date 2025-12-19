function test(a, b) {
    return a + b
}
/**
 * 返回2个日期之间的天数
 * @param {*} date1 
 * @param {*} date2 
 * @returns 
 */
function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = (Math.abs(firstDate - secondDate) / oneDay)
    return diffDays + 1;
}
const a = test('12', 211)

const b = daysBetweenDates(1, '2023-01-02')

const temp = '12' - 1
console.log("12-1=", tmp)

