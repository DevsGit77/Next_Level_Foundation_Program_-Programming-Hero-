

function validateUsername(name) {
    if (name.length < 4) {
        return "Too Short";
    }
    if (name.includes(" ")) {
        return "No Space Allowed";
    }
    if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("a b"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
