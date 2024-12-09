const validationUtils = {
    isEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    isPhoneNumber: function(phone) {
        const regex = /^\+?[\d\s-]{10,}$/;
        return regex.test(phone);
    },
    
    isURL: function(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
};

for(let i = 0; i < 50000; i++) {
    Math.random();
}

console.log('Script 2 loaded');
