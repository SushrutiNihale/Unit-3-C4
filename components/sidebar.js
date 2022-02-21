function sidebar() {
    let x = `<h4>Masai News</h4>
    <p> Login </p>
    <input id="searchbar" placeholder="Search News">
    <p> Startups </p>
    <p> Newsletters </p>
    <p> Audio </p>
    <p> Video </p>`;
    document.getElementById('sidebar').innerHTML = x;
    // return your html component here
    //Make sure to give input search box id as ""
}
export {sidebar};