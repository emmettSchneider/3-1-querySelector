// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

let headerEl = document.querySelector(".article__header");
console.log(headerEl);

headerEl.textContent = "Welcome to the Emmett blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let headers = document.querySelectorAll(".article__header");

console.log('headers list', headers);

for (let i=0; i < headers.length; i++) {
    headers[i].classList.add("important");
}

// 3. Obtain a reference to the element with a class of dash and remove it.

let dashedEl = document.querySelector(".dashed");
dashedEl.classList.remove(".dashed");

// 4. Obtain a reference to the element with a class of article__footer and add the class of goldenrod to it.

let footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");