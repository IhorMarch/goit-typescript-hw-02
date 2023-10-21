/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  monday ,
  tuesday, 
  wednesday ,
  thursday ,
  friday ,
  saturday ,
  sunday 

}

function isWeekend(day: Week): boolean {
  return (day === Week.saturday||day === Week.sunday)
}

console.log(isWeekend(Week.saturday));
