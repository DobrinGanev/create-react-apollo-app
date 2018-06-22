#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { exec } = require('child_process')
const packageJson = require('../package.json')
const scripts = `"start": "webpack-dev-server --hot"`

const getDeps = deps => {
    return Object.entries(deps)
        .map(dep => `${dep[0]}@${dep[1]}`)
        .toString()
        .replace(/,/g, ' ')
        .replace(/^/g, '')
        // exclude the plugin only used in this file, nor relevant to the boilerplate
        .replace(/fs-extra[^\s]+/g, '')
}
console.log(`Creating a new React Apollo app in ${process.argv[2]}`)

// create folder and initialize npm
exec(`mkdir ${process.argv[2]} && cd ${process.argv[2]} && npm init -f`, initErr => {
    if (initErr) {
        console.error(`${initErr}`)
        return
    }
    const packageJSON = `${process.argv[2]}/package.json`
    fs.readFile(packageJSON, (err, file) => {
        if (err) { throw err }
        const data = file.toString()
            .replace('"test": "echo \\"Error: no test specified\\" && exit 1"', scripts)
        // .replace('"license": "ISC"', jestConfig);
        fs.writeFile(packageJSON, data, err2 => err2 || true)
    })

    const filesToCopy = ['README.md', 'webpack.config.js', '.eslintrc', '.babelrc']

    for (let i = 0; i < filesToCopy.length; i += 1) {
        fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`))
            .pipe(fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`))
    }

    // installing dependencies
    console.log('Installing packages. This might take a couple of minutes.');
    const devDeps = getDeps(packageJson.devDependencies);
    const deps = getDeps(packageJson.dependencies);
    exec(`cd ${process.argv[2]} && npm i -D ${devDeps} && npm i -S ${deps}`,
        (npmErr) => {
            if (npmErr) {
                console.error(`npm error ${npmErr}`)
                return
            }
            console.log('Dependencies installed')

            console.log('Copying additional files..')
            // copy additional source files
            fs.copy(path.join(__dirname, '../template'), `${process.argv[2]}/template`)
                .then(() =>
                    console.log(`All done!\nYour project is now started into ${process.argv[2]}
                         folder, refer to the README for the project structure.\nHappy Coding!`))
                .catch(err => console.error(err));
        },
    );
},
);
