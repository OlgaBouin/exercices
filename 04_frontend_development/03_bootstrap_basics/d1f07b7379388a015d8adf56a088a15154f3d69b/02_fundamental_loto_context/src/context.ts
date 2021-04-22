import { exit } from "node:process";
import { lottery_draw } from "./lottery_draw";

type Draw = number[];

// ✓ Should return undefined (2 ms)
// ✕ Should console log 'You won' when the ticket is the same (3 ms)
// ✕ Should console log 'You lost...' when the ticket is not the same (1 ms)
// ✕ Should use the lottery_draw function (2 ms)

export function contextFunction(ticket: Draw): void {
  const ramdomTicket: Draw = lottery_draw();
  // if (ramdomTicket === undefined) {
  //   console.log("You lost...");
  //   exit;
  // }
  ticket[0] === ramdomTicket[0] &&
  ticket[1] === ramdomTicket[1] &&
  ticket[2] === ramdomTicket[2] &&
  ticket[3] === ramdomTicket[3] &&
  ticket[4] === ramdomTicket[4] &&
  ticket[5] === ramdomTicket[5]
    ? console.log("You won")
    : console.log("You lost...");
}
