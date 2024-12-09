const dateUtils = {
    formatDate: function(date) {
        return new Date(date).toLocaleDateString();
    },
    
    getDaysBetween: function(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    },
    
    isWeekend: function(date) {
        const day = new Date(date).getDay();
        return day === 0 || day === 6;
    }
};

for(let i = 0; i < 75000; i++) {
    Math.tan(i);
}

console.log('Script 3 loaded');
