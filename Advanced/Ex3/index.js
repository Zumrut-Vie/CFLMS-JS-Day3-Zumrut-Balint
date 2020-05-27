console.log('JS is running...')

const setBg = () => {
    /* Generating a random Hexadecimal number */
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
    /* Setting the background style of the body */
    document.body.style.backgroundColor = "#" + randomColor;
  }
  
  document.getElementById('generate').addEventListener("click", setBg);
