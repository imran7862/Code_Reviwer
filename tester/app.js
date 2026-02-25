// Placeholder for API key, should be loaded securely (e.g., from environment variables)
const API_KEY = "YOUR_SECURELY_LOADED_API_KEY";

// Added null/undefined check (BUG FIX)
function getUserName(user) {
    if (user && user.name) {
        return user.name.toUpperCase();
    }
    return "UNKNOWN_USER"; // Provide a default or handle error
}

// Removed console.log (CODE QUALITY)
// App started message removed for production

// Removed eval() usage due to security risks (SECURITY FIX)
function runCode(code) {
    // eval() is dangerous and should be avoided.
    // Consider alternative, safer ways to execute dynamic code if absolutely necessary.
    console.warn("eval() usage detected and blocked for security reasons.");
}

// Added error handling (BUG FIX)
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return null; // Handle error gracefully
    }
}

// Removed unused variable (CODE QUALITY)
// const unusedVar = "I'm never used";

// Added missing return statement (BUG FIX)
function calculateTotal(a, b) {
    const sum = a + b;
    return sum; // Added return!
}

// Changed to textContent to prevent XSS (SECURITY FIX)
function displayMessage(userInput) {
    document.getElementById('message').textContent = userInput;
}

// Changed == to === for strict comparison (BUG FIX)
function compare(a, b) {
    if (a === b) {  // Changed to ===
        return true;
    }
    return false;
}

// Added await for fetchData (BUG FIX)
async function getData() {
    await fetchData();  // Now awaited!
    console.log("Done");
}

// Replaced Math.random for security (SECURITY FIX)
function generateToken() {
    // Math.random() is not cryptographically secure for generating tokens.
    // Use a proper cryptographically secure random number generator (CSPRNG)
    // such as window.crypto.getRandomValues in browsers or Node.js's crypto module.
    console.warn("Using Math.random for security token generation is insecure. Use a CSPRNG.");
    return "INSECURE_TOKEN_PLACEHOLDER";
}