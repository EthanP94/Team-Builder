const generateManagerCard = (manager) => {
    return `
    <div class="card">
        <h3>${manager.getName()}<h3>
        <p><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}r</p>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.getId()}</li>
                <li class="list-group-item">Email: <a herf="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

const generateEngineerCard = (engineer) => {
    return `
    <div class="card">
        <h3>${engineer.getName()}<h3>
        <p><i class="fa-solid fa-mug-hot"></i>${engineer.getRole()}r</p>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.getId()}</li>
                <li class="list-group-item">Email: <a herf="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
}

const generateInternCard = (intern) => {
    return `
    <div class="card">
        <h3>${intern.getName()}<h3>
        <p><i class="fa-solid fa-mug-hot"></i>${intern.getRole()}r</p>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.getId()}</li>
                <li class="list-group-item">Email: <a herf="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}

const baseHtml = (htmlArr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta N="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>Document</title>
</head>
<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <h1 class="display-4 heading">My Team</h1>
        </div>
    </header>
    <div id="container">
    <div class="card-deck">
        ${htmlArr.join(' ')}
    </div>
    </div>
  </body>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>
`

module.exports = {
    generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml
}