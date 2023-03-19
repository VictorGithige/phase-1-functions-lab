// Code your solution in this file!
// Distance from Hq in Blocks.
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickupLocation);
  }

  //Distance from hq in feet
  function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * 264;
  }

  //Distance travelled in feet

  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * 264;
  }

  //Calculate fare price

  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }