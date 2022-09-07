export const dateFormat = new Intl.DateTimeFormat('en-US');

export const moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});