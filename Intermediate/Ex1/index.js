console.log('Js is running...')

const capitalizeFirstLetter = (chars) => {
    const firstChar = chars.charAt(0).toUpperCase()

    console.log('FIRSTCHAR', firstChar)
    const newCharsArr = chars.split(' ')

    newCharsArr.splice(0, 1, firstChar)
    console.log('From inside new chars', newCharsArr)

    return newCharsArr.join(' ')
}

console.log(capitalizeFirstLetter('i am ...'))

const capitalizeFirstLetterShort = (chars) => {

    
    const sentence = chars.charAt(0).toUpperCase() + chars.slice(1);

    return sentence
}

console.log(capitalizeFirstLetterShort('some text'))