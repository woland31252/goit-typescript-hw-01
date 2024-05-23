enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || DayOfWeek.Sunday) {
    return true;
  } 
  return false;
}