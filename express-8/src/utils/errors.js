// utils/errors.js
const showError = (message, type = 'error') => {
    console.error(message);

    if(type === 'error') {
        alert(`error: ${message}`);
    } else if (type === 'warning') {
        alert(`warning: ${message}`);
    } else if (type === 'info') {
        alert(`info: ${message}`);
    }
};

module.exports = { showError }; 
