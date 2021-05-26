`use strict`;

document.addEventListener(`DOMContentLoaded`, function (){
    console.log(`The DOM content has loaded.`);

    const allParagraphs = document.querySelectorAll(`p`);
    console.log(`How many paragraphs? `, allParagraphs.length);
    console.log(allParagraphs);
    // This will loop through ALL paragraphs
    allParagraphs.forEach(function(paragraph, index) {
        // Inside this loop we are working with EACH individual paragraph
        console.log(index, paragraph);
        const spanElement = document.createElement(`span`);
        spanElement.innerText = `This paragraph is at index ${index}.`
        spanElement.classList.add(`bold`);
        paragraph.append(spanElement);
        // if (index % 2 === 0) {
        //     // paragraph.classList.add(`bold`);
        // }
    });
});

