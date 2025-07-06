// Handle login submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication
    if (username && password) {
        // Redirect to diary.html after successful login
        window.location.href = 'diary.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Render calendar on the diary page
if (document.getElementById('calendar')) {
    const calendarElement = document.getElementById('calendar');
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    calendarElement.innerHTML = `<h2>${month} ${year}</h2>`;
    calendarElement.innerHTML += '<div class="calendar-grid"></div>';

    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
    const grid = calendarElement.querySelector('.calendar-grid');

    for (let i = 1; i <= daysInMonth; i++) {
        // Create a clickable day
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = i;

        // Add a click event listener to each day
        dayElement.onclick = function() {
            // Redirect to the entries page with the selected date
            window.location.href = `entries.html?date=${i}`;
        };

        grid.appendChild(dayElement);
    }

    // Adding simple CSS styles for the calendar grid
    const style = document.createElement('style');
    style.textContent = `
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
            margin-top: 10px;
            width: fit-content;
        }
        .calendar-day {
            background: #fff;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
            cursor: pointer; /* Show pointer cursor on hover */
            transition: background 0.3s; /* Smooth background transition */
        }
        .calendar-day:hover {
            background: #007bff; /* Change background color on hover */
            color: white; /* Change text color on hover */
        }
    `;
    document.head.appendChild(style);
}
