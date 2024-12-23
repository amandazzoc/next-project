import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    const { container } = render(<Main />)
    // busca o elemento e verifica a existência do texto 'react avançado'
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //geraar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
