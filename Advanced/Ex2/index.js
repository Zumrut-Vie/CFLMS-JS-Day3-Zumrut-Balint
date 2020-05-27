console.log('Js is running...')

/* .g. If we pass as an argument the following string 'Feb 23, 2017'  the program should output 'Wed Feb 22 2017'

 */

const yesterday = (dateString) => {
    const date = new Date(dateString)
    date.setDate(date.getDate()-1)

    return date

}

console.log(yesterday('Feb 25, 2017'))
