const events = [
    { id: 1, name: "Event 1", date: "2024-06-22" },
    { id: 2, name: "Event 2", date: "2024-07-15" },
    { id: 3, name: "Event 3", date: "2024-08-30" }
];

function getEventById(eventId) {
    return events.find(event => event.id === eventId) || null;
}

const eventId = 2;
const event = getEventById(eventId);
if (event) {
    console.log(`Event found: ${JSON.stringify(event)}`);
} else {
    console.log("Event not found");
}
