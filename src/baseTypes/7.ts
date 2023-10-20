/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  monday = 'work',
  tuesday = 'work',
  wednesday = 'work',
  thursday = 'work',
  friday = 'work',
  saturday = 'weekend',
  sunday = 'weekend'

}

function isWeekend(day: Week): boolean {
  return day === 'weekend'
}

console.log(isWeekend(Week.saturday));
