const filterBetween = (occupedRoom, meeting) => {
 return (
  (occupedRoom.start_time >= meeting.start_time && occupedRoom.start_time < meeting.end_time) ||
  (occupedRoom.end_time > meeting.start_time && occupedRoom.end_time <= meeting.end_time) ||
  (meeting.start_time >= occupedRoom.start_time && meeting.start_time < occupedRoom.end_time) ||
  (meeting.end_time > occupedRoom.start_time && meeting.end_time <= occupedRoom.end_time)
 )
}

const filterBetweenOptimized = (occupedRoom, meeting) => {
 if (occupedRoom.start_time > meeting.start_time)
  return (
   (occupedRoom.start_time >= meeting.start_time && occupedRoom.start_time < meeting.end_time) ||
   (occupedRoom.end_time > meeting.start_time && occupedRoom.end_time <= meeting.end_time)
  )
 return (
  (meeting.start_time >= occupedRoom.start_time && meeting.start_time < occupedRoom.end_time) ||
  (meeting.end_time > occupedRoom.start_time && meeting.end_time <= occupedRoom.end_time)
 )
}

module.exports = {
 filterBetween,
 filterBetweenOptimized,
}
