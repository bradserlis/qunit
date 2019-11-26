const addMachine = (number1, number2) => {
  return number1 + number2
}



// This is what the setup of that function looks like from their website

test('this is a test that is going to check if addMachine works', (assert) => {
  let sum = addMachine(4, 6);
  let expected = 10
  assert.deepEqual(10, expected);
})

const getChange = (total, amountPaid) => {
  let totalDifference = amountPaid - total;
  // total is total cost
  //amountPaid is what was entered into machine by user
  
  // change is coin values. i.e [25, 25, 10] for 60 cents
  const change = [];
  
  while (totalDifference > 0) {
     // break into coins until 0 
      if (totalDifference - 25 >= 0) {
        change.push(25)
        totalDifference -= 25
      } else if(totalDifference - 10 >= 0) {
        change.push(10);
        totalDifference -= 10;
      } else if (totalDifference - 5 >= 0) {
          change.push(5);
          totalDifference -= 5;
      } else {
          change.push(1);
          totalDifference -= 1;
        }        
  }
  console.log(change);
  return change;
}


test('the test should return empty array', (assert) => {
  const result = getChange(1, 1);
  const expected = [];
  assert.deepEqual(result, expected);
})

test('getChange(1,1) should equal [] - an empty array', (assert) => {
  var result = getChange(1, 1); // no change/coins just an empty array
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(75,100) should equal 25', (assert) => {
  var result = getChange(75, 100); // no change/coins just an empty array
  var expected = [25];
  assert.deepEqual(result, expected);
});

//write a test that would return 1 of each coin

test('getChange(59,100) should equal [25, 10, 5, 1]', (assert) => {
  var result = getChange(59, 100); // no change/coins just an empty array
  var expected = [25, 10, 5, 1];
  assert.deepEqual(result, expected);
});
