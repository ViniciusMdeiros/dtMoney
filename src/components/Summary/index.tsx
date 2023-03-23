import React, {useContext} from 'react';
import { Container } from "./styles";
import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saídas.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from '../../TransactionsContext';
 
export function Summary() {
    const {transactions} = useContext(TransactionsContext);

    console.log(transactions);

    return (
        <Container> 
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}