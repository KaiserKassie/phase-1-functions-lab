// Code your solution in this file!
const distanceFromHqInBlocks = function (distance) {
    return Math.abs(42 - distance)
}

function distanceFromHqInFeet(distance) {
    return 264 * distanceFromHqInBlocks(distance);
}

const distanceTravelledInFeet = function (start, destination) {
    return Math.abs(start-destination) * 264
}

function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    if (feetDistance > 400 && feetDistance <= 2000) {
        return ((feetDistance - 400) * .02)
    } else
    if (feetDistance > 2000 && feetDistance <= 2500) {
        return 25
    } else
    if (feetDistance > 2500) {
        return "cannot travel that far"
    } else {
        return 0
    }
}