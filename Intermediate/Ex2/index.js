console.log('Js is running...')

/* Ask the user to provide you with three numbers, which are the grades from Math, Physics and English. After it is provided to you, make the calculation and print them on the screen. Make sure that the variables are numbers.

E.g. If user puts the following grades 3, 4, 5 the result should be:

Sum:12

Average: 4

 */

const CalculateSumAndAvaerage = (event) => {
    /* Here we use event.preventDefault to prevent the default behavior of submit */
    event.preventDefault()
    console.log('button works')

    /* To get the value out of our input fields */
    /* We use parse int to convert the values to integers */
    const math = parseInt(document.getElementById('math').value)
    const phys = parseInt(document.getElementById('phys').value)
    const eng = parseInt(document.getElementById('english').value)

    /* We make our calculations */
    const sum = math + phys + eng
    const average = sum / 3

    /* We call here out helper function to generate the DOM elements */
    generateDOM(sum, average)

}

const generateDOM = (sum, average) => {
    /* Creating a paragraph */
    const p = document.createElement('p')
    /* To get our result div */
    const resultDiv = document.getElementById('result')
    /* We set the inner text of our paragraph */
    p.innerText = `Your sum is ${sum} and your awerage is ${average}`
    /* We append the par to the result div */
    resultDiv.appendChild(p)
}

