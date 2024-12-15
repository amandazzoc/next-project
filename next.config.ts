const path = require('path')

module.exports = {
  experimental: {
    appDir: true // Garante que o Next.js saiba que estamos usando o App Router
  },
  // Adicionando suporte a estrutura dentro de src
  srcDir: path.join(__dirname, 'src')
}
