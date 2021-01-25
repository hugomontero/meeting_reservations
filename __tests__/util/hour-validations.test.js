const {filterBetween, filterBetweenOptimized} = require("../../src/utils/hours-validations")

describe("test filterBetween function", ()=>{
  it("returns false when the meetings received does not match", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "12:01", end_time: "13:35"}
    expect(filterBetween(occupedRoom, meeting)).toBe(false)
  })

  it("returns false when there is an space between 2 occuped rooms and the meeting fits", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "08:00", end_time: "09:00"}
    expect(filterBetween(occupedRoom, meeting)).toBe(false)
  })

  it("returns true when start_time of the meeting occurs inside another settled meeting", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "07:00", end_time: "07:30"}
    expect(filterBetween(occupedRoom, meeting)).toBe(true)
  })

  it("returns false when star_time is lower than the occuped date", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "06:00", end_time: "07:00"}
    expect(filterBetween(occupedRoom, meeting)).toBe(false)
  })
})


describe("test filterBetween Optimized function", ()=>{
  it("returns false when the meetings received does not match", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "12:01", end_time: "13:35"}
    expect(filterBetweenOptimized(occupedRoom, meeting)).toBe(false)
  })

  it("returns false when there is an space between 2 occuped rooms and the meeting fits", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "08:00", end_time: "09:00"}
    expect(filterBetweenOptimized(occupedRoom, meeting)).toBe(false)
  })

  it("returns true when start_time of the meeting occurs inside another settled meeting", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "07:00", end_time: "07:30"}
    expect(filterBetweenOptimized(occupedRoom, meeting)).toBe(true)
  })

  it("returns false when star_time is lower than the occuped date", ()=>{
    const occupedRoom = {start_time: "07:00", end_time: "08:00"}
    const meeting = {start_time: "06:00", end_time: "07:00"}
    expect(filterBetweenOptimized(occupedRoom, meeting)).toBe(false)
  })
})
