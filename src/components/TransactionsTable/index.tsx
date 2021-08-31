import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './style'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>09/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$1.100</td>
            <td>Casa</td>
            <td>01/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
