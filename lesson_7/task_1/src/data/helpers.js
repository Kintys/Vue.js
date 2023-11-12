export function getNewListWith5Score(studentsList) {
  return studentsList.map((student) => ({
    ...student,
    mark: getScoreIn5(student.mark),
  }));
}
export function getScoreIn5(mark) {
  let res;
  if (mark > 12) res = 6;
  else if (mark >= 10) res = 5;
  else if (mark >= 7) res = 4;
  else if (mark >= 5) res = 3;
  else res = 2;
  return res;
}
