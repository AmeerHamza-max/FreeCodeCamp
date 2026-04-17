const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records,id,prop,value){
  if(value==""){
    delete records[id][prop]
  }
  else if (prop !== "tracks"){
    records[id][prop]=value;
  }
else if(prop === "tracks" && !records[id].hasOwnProperty("tracks")){
  records[id][prop]=[value];
}
else{
  records[id][prop].push(value)
}
return records;
}


let records = {
  5439: {
    albumTitle: "ABBA Gold"
  }
}

let input1=updateRecords(records, 5439, "artist", "ABBA");

let input2=updateRecords(records, 5439, "tracks", "Song 1");

let input3=updateRecords(records, 5439, "tracks", "Song 2");

let input4=updateRecords(records, 5439, "artist", "")
console.log(input1);
console.log(input2);
console.log(input3);
console.log(input4);