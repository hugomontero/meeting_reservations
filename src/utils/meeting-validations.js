const fs = require("fs")
const readLine = require("readline")
const { filterBetween, filterBetweenOptimized } = require("./hours-validations")

const room1 = []
const room2 = []

const scheduleMeeting = ({ name, start_time, end_time }) => {
 const meeting = { name, start_time, end_time }
 const meetingsOnRoom1 = room1.filter((room) => filterBetweenOptimized(room, meeting))
 if (!meetingsOnRoom1.length) {
  room1.push(meeting)
  return { ...meeting, details: "at room 1", status: "accepted" }
 }
 const meetingOnRoom2 = room2.filter((room) => filterBetweenOptimized(room, meeting))
 if (!meetingOnRoom2.length) {
  room2.push(meeting)
  return { ...meeting, details: "at room 2", status: "accepted" }
 }
 return { ...meeting, details: "there are meetings already scheduled", status: "rejected" }
}

const scheduleMeetingFile = async (filePath) => {
 let lineStream = readLine.createInterface({ input: fs.createReadStream(filePath) })
 for await (line of lineStream) {
  const [name, start_time, end_time] = line.split(",")
  let meetingResponse = scheduleMeeting({ name, start_time, end_time })
  console.log(
   `The meeting was ${meetingResponse.status} details: ${meetingResponse.details}, meeting info: name : ${meetingResponse.name} starts at ${meetingResponse.start_time} - end at: ${meetingResponse.end_time}`
  )
 }
}

module.exports = {
 scheduleMeetingFile,
}
