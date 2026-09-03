//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
<link href="css/style.css" rel="stylesheet" type="text/css" media="all">
    <header align="center">
        <a href="home.html"><img src="https://amazingobjectquiz.neocities.org/assets/banner%20logo.png" alt="" id="banner"/></a> 

        <div id="nav">
            <a href="home.html">HOME</a> |
            <a href="read.html">READ</a> |
            <a href="archive.html">ARCHIVE</a> |
             <a href="cast.html">CAST</a> |
            <a href="about.html">ABOUT</a> |
            <a href="extras.html">EXTRAS</a> |
             <a href="news.html">NEWS</a>
        </div>
    </header>
`;