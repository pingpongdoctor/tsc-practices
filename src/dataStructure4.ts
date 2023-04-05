//SHOWCASE OF TYPE ASSERTION USAGE IN DOM
//GET THE TEXT
const getText = document.querySelector(".text") as HTMLParagraphElement;
//GET THE CURRENT YEAR
const currentYear: string = new Date().getFullYear().toString();
//SET THE CURRENT YEAR TO THE TEXT ATTRIBUTE
getText.setAttribute("title", currentYear);
getText.textContent = currentYear;
