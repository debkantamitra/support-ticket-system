// "use strict";

const agentAlice = {
  name: "Alice",
  level: "Pro",
};

const agentBob = {
  name: "Bob",
  level: "Beginner",
};

const handleLogging = (log) => {
  const logEle = document.createElement("li");
  logEle.textContent = log;

  document.getElementById("log").appendChild(logEle);
};

function handleTicket(ticketId, priority) {
  handleLogging(
    `${this.name} (Level: ${this.level}) is handling ticket ${ticketId} with ${priority} priority.`
  );
}

document.getElementById("assignCall").addEventListener("click", () => {
  handleTicket.call(agentAlice, "TCK-101", "High");
});

document.getElementById("assignApply").addEventListener("click", () => {
  handleTicket.apply(agentBob, ["TCK-102", "Medium"]);
});

document.getElementById("assignBind").addEventListener("click", () => {
  const bindedHandler = handleTicket.bind(agentAlice, "TCK-103", "Low");

  bindedHandler();
});

// Binding Function can act as below as well. It recieves args from direct bind()
// and the bounded function can also recieve args. it goes like [...args]
const agentDebkanta = {
  studentName: "Debkanta",
  studentLevel: "Pro",
};

function handleBindingFunction(name, level) {
  console.log(this.studentName, this.studentLevel, name, level);
}

const bindedHandleBindingFunction = handleBindingFunction.bind(
  agentDebkanta,
  "Pro1"
);

bindedHandleBindingFunction("Pro2", "Pro3");

const handleFunc = () => {
  console.log(this);
};

function handleFunc2() {
  handleFunc();
}

function handleFunc3() {
  handleFunc2();
}

handleFunc3();
