const participantNums =  [[1, 3, 2, 2, 1], 
[3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
[9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35]
]

const duplication = function (arr)  {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) continue
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] == arr[j]){
        arr[i] = 0
        arr[j] = 0
      }
    }
  }
  return arr
}

const zerofilter = (num) => {
  return num > 0
}

const new_participantNums = participantNums.map(duplication)
for (const arr of new_participantNums) {
  const radish = arr.filer(zerofilter)
  console.log(radish)
}


const input = [1,3,5,7,9]

for (let i = 0; i < 10; i++) {
  if(i in input) console.log(i, true)
  else console.log(i, false)
}

