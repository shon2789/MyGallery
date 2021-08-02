var gProjects = [];
createProjs();
function createProj(name, title, desc, url, image, publishedAt, labels) {
    var proj = {
        id: makeId(),
        name,
        title,
        desc,
        url,
        image,
        publishedAt,
        labels,
    }
    return proj;
}


function createProjs() {
    gProjects.push(createProj('MineSweeper', 'Avoid The Mines',
        'Reveal the cells without stepping on a mine, be careful and patient, use the flags to mark safe cells',
        'https://shon2789.github.io/mine_Sweeper',
        '../img/portfolio/mineSweeper1.PNG', '22/07/2021', ['Test', 'Test2']));

    gProjects.push(createProj('Pacman', 'Avoid The Ghosts',
        'Your goal is to eat all the food on board, avoid the ghosts and make your best to survive!',
        'https://shon2789.github.io/pacman/',
        '../img/portfolio/pacman.PNG',
        '19/07/21', ['Test', 'Test2']))

    gProjects.push(createProj('Touch The Num', 'Check Your Speed!',
        'Your goal is to press the numbers in the right order, be as quick as possible, and move up the difficulties!',
        'https://shon2789.github.io/touch_the_num/',
        '../img/portfolio/touchthenum.PNG',
        '15/07/21', ['Test', 'Test2']))

}

function getProjectsToShow() {
    return gProjects;
}