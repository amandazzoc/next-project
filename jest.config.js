module.exports = {
  testEnvironment: 'jsdom', // Simula um navegador no Node.js
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignora os diretórios node_modules e .next
  collectCoverage: true, // O Jest irá gerar relatorios de cobertura, mostrando quais partes do código foram ou não testadas
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**'
  ], // Especifica quais arquivos devem ser incluídos na análise de cobertura
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Especifica um arquivo que será executado após o ambiente de teste ser configurado.
  modulePaths: ['<rootDir>/src/'], //Adiciona src como um caminho de módulo base.
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          [
            'next/babel',
            {
              'preset-react': {
                runtime: 'automatic'
              }
            }
          ]
        ]
      }
    ]
  },
  // Configura o Jest para transformar arquivos antes de testá-los:

  // ^.+\\.(js|jsx|ts|tsx)$: Indica que todos os arquivos com extensões .js, .jsx, .ts, ou .tsx serão transformados.
  // babel-jest: Usa o Babel para transpilar o código durante os testes.
  // { presets: ['next/babel'] }: Aplica o preset do Babel usado pelo Next.js, garantindo que os testes lidem corretamente com as features modernas do JavaScript/TypeScript e JSX.
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}
