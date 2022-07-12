const renderManagerInfo = data => {
    return `<li class="list-item id">ID: ${data.id}</li>
                                <li class="list-item email">Email: ${data.email}</li>
                                <li class=list-item office-number">Office Number: ${data.officeNumber}</li>`
}

const renderInternInfo = data => {

}

const renderEngineerInfo = data => {
    
}

const generateCards = data => {
    return `
                <div class="container-cards">
                ${data.map(profile => {
                    return `
                    <div class="card">
                        <div class="card-title">
                            <h3 class="name">${profile.name}</h3>
                        </div>

                        <div class="card-body">
                            <ul class="info">
                                ${(profile.role == 'Manager') ? renderManagerInfo(profile) : ' '}
                            </ul>
                        </div>
                    </div>
                    `
                }).join('')}
                </div>
            `
}

module.exports = templateData => {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container header">
                <h1 class="page-title">Team Profile</h1>
            </div>
        </header>

        <main class="container main">
            ${generateCards(templateData)}
        </main>

        <footer>
        </footer>
    </body>
    `
}