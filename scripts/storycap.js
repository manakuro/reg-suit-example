const crossSpawn = require('cross-spawn')

const spawn = (command) => {
  const [c, ...args] = command.split(' ')
  return crossSpawn(c, args, { stdio: 'inherit' })
}

const serve = () => spawn('yarn storybook')

const run = (served) => {
  const result = spawn(
    `npx storycap http://localhost:6006`
  )

  result.on('close', (code) => {
    served.kill()
    process.exit(code)
  })
}

const served = serve()
run(served)
