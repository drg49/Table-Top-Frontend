export const convertSnakeCaseToReadable = (snakeCaseKeyword = '') => {
  const removeUnderscoreArray = snakeCaseKeyword.split('_');

  const capitalizedWords = removeUnderscoreArray.map((word) => capitalizeWord(word)).join(' ');
  
  return capitalizedWords;
}

const capitalizeWord = (word = '') => word.charAt(0).toUpperCase() + word.slice(1);