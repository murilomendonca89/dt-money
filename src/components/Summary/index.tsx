import { Container } from './styles'
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>R$2500,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong> - R$1000,00</strong>
      </div>

      <div className="total-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$1500,00</strong>
      </div>
    </Container>
  )
}
