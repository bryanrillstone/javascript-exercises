// Exercism - Amusement Park

// Task 1 - Create a new visitor

function createVisitor(name, age, ticketId) {
    const visiter = {
      'name': name,
      'age': age,
      'ticketId': ticketId
    } 
    return visiter;
}

// Task 2 - Revoke the ticket

function revokeTicket(visitor) {
    visitor.ticketId = null;
      return visitor;
}

// Task 3 - Determine the ticket status

function ticketStatus(tickets, ticketId) {
    let ticketStatus = null;
    if (tickets[ticketId] === undefined) {
      ticketStatus = 'unknown ticket id';
    } else if (tickets[ticketId] === null){
      ticketStatus = 'not sold';
    } else {
      ticketStatus = 'sold to ' + tickets[ticketId];
    } return ticketStatus;
}

// Task 4 - Improve the ticket status response

function simpleTicketStatus(tickets, ticketId) {
    let ticketStatus = null;
    if (tickets[ticketId] === undefined) {
      ticketStatus = 'invalid ticket !!!';
    } else if (tickets[ticketId] === null){
      ticketStatus = 'invalid ticket !!!';
    } else {
      ticketStatus = tickets[ticketId];
    } return ticketStatus;
}

// Task 5 - Dtermine the version of terms and conditions

function gtcVersion(visitor) {
    return visitor.gtc?.version;
}