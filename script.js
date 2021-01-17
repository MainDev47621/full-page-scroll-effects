const page = document.querySelector('.page');

const data = {
    styling: [
        {
            sectNum: 'sec-1',
            bgColor: 'red',
            bgImage: 'images/image2.jpg',
            bgSize: 'cover',
            bgPositionY: '40%'
        }
    ]
}

const source = document.getElementById('sect').innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(data);
page.innerHTML = compiledHtml;

for (let i of data.styling) {
    const sec = document.getElementById(i.sectNum);
    sec.style.backgroundColor = i.bgColor;
    sec.style.backgroundImage = 'url(' + i.bgImage + ')';
    sec.style.backgroundSize = i.bgSize;
    sec.style.backgroundPosition = i.bgPositionY;
}