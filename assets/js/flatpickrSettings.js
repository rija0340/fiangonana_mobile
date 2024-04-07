// Initialize Flatpickr
flatpickr("#datePicker", {
    // Set the date format
    dateFormat: "Y-m-d",
    mode: "multiple",

    // Enable only specific days of the week (0 = Sunday, 1 = Monday, ...)
    enable: [
        function (date) {
            // Enable Wednesday (3), Friday (5), and Saturday (6) dates
            return [3, 5, 6].includes(date.getDay());
        },
    ],
    onChange: function (selectedDates, dateStr, instance) {
        // This function is called when the date is changed
        // You can add your custom logic here
        console.log("Selected Dates:", selectedDates);
        console.log("Date String:", dateStr);

        // Example: Perform an AJAX request to search in the database
        // You can replace this with your own logic
    }
});