// Array to store events
let events = [];

// Function to add an event
function addEvent() {
  const dateInput = document.getElementById("event-date");
  const titleInput = document.getElementById("event-title");

  const event = {
    date: dateInput.value,
    title: titleInput.value
  };

  events.push(event);

  // Clear the input fields
  dateInput.value = "";
  titleInput.value = "";

  // Render the calendar with events
  renderCalendar();
}

// Function to render the calendar with events
function renderCalendar() {
  const calendar = document.getElementById("calendar");

  // Clear the calendar
  calendar.innerHTML = "";

  // Loop through each day in the calendar month
  for (let day = 1; day <= 31; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");

    const dayHeader = document.createElement("h3");
    dayHeader.classList.add("day-header");
    dayHeader.innerText = day;

    const eventsList = document.createElement("ul");

    // Loop through each event and check if it matches the current day
    events.forEach(event => {
      const eventDate = new Date(event.date);
      if (eventDate.getDate() === day) {
        const eventItem = document.createElement("li");
        eventItem.classList.add("event");

        const eventTitle = document.createElement("span");
        eventTitle.classList.add("event-title");
        eventTitle.innerText = event.title;

        eventItem.appendChild(eventTitle);
        eventsList.appendChild(eventItem);
      }
    });

    dayElement.appendChild(dayHeader);
    dayElement.appendChild(eventsList);
    calendar.appendChild(dayElement);
  }
}
