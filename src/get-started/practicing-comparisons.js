// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#practicing-comparisons

const dayStart = '07:30'
const dayEnd = '17:45'

function hhmmToMinutes(time) {
  const [hhStr, mmStr] = time.split(':')
  const hh = parseInt(hhStr, 10)
  const mm = parseInt(mmStr, 10)
  if (hh >= 0 && hh < 24 && mm >= 0 && mm < 60) {
    return parseInt(hh, 10) * 60 + parseInt(mm, 10)
  }
  console.log('Invalid time')
  return null
}

function scheduleMeeting(startTime, durationMinutes) {
  const dayStartMinutes = hhmmToMinutes(dayStart)
  const dayEndMinutes = hhmmToMinutes(dayEnd)
  const startTimeMinutes = hhmmToMinutes(startTime)

  if (dayStartMinutes && dayEndMinutes && startTimeMinutes) {
    return startTimeMinutes >= dayStartMinutes && dayEndMinutes >= startTimeMinutes + durationMinutes
  } else {
    console.log('Invalid time')
    return false
  }
}

console.log(scheduleMeeting('7:00', 15)) // false
console.log(scheduleMeeting('07:15', 30)) // false
console.log(scheduleMeeting('7:30', 30)) // true
console.log(scheduleMeeting('11:30', 60)) // true
console.log(scheduleMeeting('17:00', 45)) // true
console.log(scheduleMeeting('17:30', 30)) // false
console.log(scheduleMeeting('18:00', 15)) // false
