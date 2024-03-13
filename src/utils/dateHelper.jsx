export const formatDateFr = (date) => {
    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');

    // Get the day name
    const days = ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Sabata"];
    const dayName = days[date.getDay()];
    // Return the formatted date string
    return [`${day}/${month}/${year}`, dayName];
}

export const formatDate = (date) => {
    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    // Return the formatted date string
    return `${year}-${month}-${day}`;
}
