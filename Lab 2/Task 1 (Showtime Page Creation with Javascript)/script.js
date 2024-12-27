function showTime() {
    const now = new Date();
    const formattedTime = now.toLocaleString();
    document.getElementById('time-display').textContent = formattedTime;
}
