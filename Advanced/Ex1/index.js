console.log('JS is running...')

/* Create a JavaScript function that will return the number of minutes, in hours and minutes. The function should accept only one argument.

E.g. If we call the function and pass the number of minutes 200 we should get the message "200 minutes = 3 hour(s) and 20 minute(s)."

 */

const calculateTime = (event) => {
    event.preventDefault()
    console.log('submit works')

    const timeInMin = parseInt(document.getElementById('min').value)
    console.log(timeInMin)

    const hours = Math.floor(timeInMin / 60)
    const minutes = timeInMin % 60

    generateDOM(hours, minutes)
    document.getElementById('min').value = ''

}

const generateDOM = (hours, minutes) => {
    document.getElementById('result').innerHTML = ''
    const resultDiv = document.getElementById('result')
    const p = document.createElement('p')
    p.innerText = `${minutes} minutes = ${hours} hour(s) and ${minutes} minute(s).`

    resultDiv.appendChild(p)
}