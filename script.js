const logEntries = [
  {
    speaker: "Moderator",
    message: "7 players alive. Day 1 begins.",
    timestamp: "08:05",
  },
  {
    speaker: "Moderator",
    message: "Vote tally — Alex (3), Bri (2), Chen (1). Alex eliminated.",
    timestamp: "08:21",
  },
  {
    speaker: "Player Chat",
    message: "Reminder: keep to 2 minutes per statement during discussion.",
    timestamp: "08:24",
  },
];

const logList = document.querySelector(".chat-log");

const appendLogEntry = ({ speaker, message, timestamp }) => {
  if (!logList) {
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "chat-message";

  const header = document.createElement("div");
  header.className = "chat-header";

  const speakerLabel = document.createElement("span");
  speakerLabel.className = "chat-speaker";
  speakerLabel.textContent = speaker;

  header.appendChild(speakerLabel);

  if (timestamp) {
    const timeLabel = document.createElement("time");
    timeLabel.className = "chat-timestamp";
    timeLabel.textContent = timestamp;
    header.appendChild(timeLabel);
  }

  const body = document.createElement("p");
  body.className = "chat-body";
  body.textContent = message;

  listItem.appendChild(header);
  listItem.appendChild(body);
  logList.appendChild(listItem);
};

logEntries.forEach((entry) => appendLogEntry(entry));
