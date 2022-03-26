const generateManagerCard = (manager) => {
    return `
    <div class="bg-primary mb-3 col-4 mt-4" style="max-width: 18rem;">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: <h3>${manager.getId()}</p>
                <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    `
}

const generateEngineerCard = (engineer) => {
    return `
    <div class="bg-success mb-3 col-4 mt-4" style="max-width: 18rem;">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.getName()}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: <h3>${engineer.getId()}</p>
                <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
            </div> 
        </div>
    </div>
    `
}

const generateInternCard = (intern) => {
    return `
    <div class="bg-light mb-3 col-4 mt-4" style="max-width: 18rem;>
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: <h3>${intern.getId()}</p>
                <p class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="school">School: ${intern.getSchool()}</p>
            </div>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Document</title>
</head>
<main>
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
  </main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`

module.exports = {
    generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml
}