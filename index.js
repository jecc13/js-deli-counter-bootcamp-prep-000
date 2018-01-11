var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return katzDeliLine.length;
}

function nowServing(katzDeliLine) {
  var nextUp = "There is nobody waiting to be served!";
  if (katzDeliLine.length > 0) {
    nextUp = katzDeliLine[0];
    katzDeliLine.shift();
  }
  return NextUp;
}

function currentLine(katzDeliLine) {
  var lineString = "The line is currently empty."
  if (katzDeliLine.length > 0) {
    lineString = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineString = lineString + (i + 1) + ". " + katzDeliLine[i];
      if (i <= (katzDeliLine.length - 2) ) {
        lineString = lineString + ", ";
      }
    }
  }
  return lineString;
}
