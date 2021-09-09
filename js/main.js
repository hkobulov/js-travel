alert('Xush kelibsiz');

var userName = prompt('Ismingizni kiriting', 'Ali');
var userBudget = prompt (userName + ", iltimos, o'zingidagi mablag'ni so'mda kiriting!")

var userExpenseUsd = 750 * 9433.34;
var userExpenseYev = 120 * 10354.03;
var userExpense = Number(userExpenseUsd) + Number(userExpenseYev);

if (userBudget > userExpense) {
    console.log(alert(`${userName}, oq yo'l!`));
} else {
    console.log (alert(`Uzr endi, ${userName}. Siz sayohatga chiqishingiz uchun ${userExpense - userBudget} so'm kerak bo'larkan. Yana ozroq ishlang)))`));
}

