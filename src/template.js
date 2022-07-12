const generateCards = data => {
console.log('data :', data.name);
    return `
                <div class="card">
                    <div class="card-title">
                        <h3>${data.name}</h3>
                    </div>
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
            ${templateData.map(profile => {
            console.log('profile :', profile);
                generateCards(profile);
            })}
        </main>

        <footer>
        </footer>
    </body>
    `
}