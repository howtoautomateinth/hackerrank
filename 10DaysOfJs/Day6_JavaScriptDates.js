function getDayName(dateString) {
    let dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Write your code here
    const dayIndex = new Date(dateString).getDay();
    let dayName = dayWeek[dayIndex];
    return dayName;
}