// Added input validation (BUG FIX)
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Returns a new array to avoid mutating the original (CODE QUALITY)
function addItem(arr, item) {
    return [...arr, item];
}

// Refactored complex conditions (CODE QUALITY)
function checkStatus(user) {
    if (!user || !user.isActive || !user.hasPermission) {
        return false;
    }
    return user.role === 'admin';
}

// Used a named constant for clarity (CODE QUALITY)
const ITEM_UNIT_PRICE = 29.99;
function calculatePrice(quantity) {
    return quantity * ITEM_UNIT_PRICE;
}

// Handled promise with catch for error handling (BUG FIX)
function loadData() {
    return fetch('/api/data') // Return the promise for better async control
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error("Error loading data:", error);
            return null; // Or re-throw, depending on desired error handling
        });
}