function titleCase(sentence){
  const capitalized = sentence
    .toLowerCase() 
    .split(' ')
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');

  return capitalized;
}