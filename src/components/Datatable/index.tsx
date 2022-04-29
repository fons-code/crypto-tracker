import React from 'react'
import {formatNumber} from '../../utils/formatNumber'
import {Coin} from '../../types/Coin'

interface Props {
    data: Coin[]
}

const Datatable : React.FC<Props> = ({data}) => {
  return (
    <table>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Coin</th>
            <th scope='col'>Price</th>
            <th scope='col'>24h</th>
            <th scope='col'>7d</th>
            <th scope='col'>30d</th>
            <th scope='col'>Mkt cap</th>
          </tr>
        </thead>
        <tbody>
            {data.map((coin, count) => {
              const {market_data,id,image,name, symbol} = coin 
              return(
                <tr key={id}>
                  <td scope='row'>{count + 1}</td>
                  <td><img src={image.thumb} alt="" /> {name} ({symbol})</td>
                  <td>${formatNumber(market_data.current_price.usd)}</td>
                  <td>{formatNumber(market_data.price_change_percentage_24h)}</td>
                  <td>{formatNumber(market_data.price_change_percentage_7d)}</td>
                  <td>{formatNumber(market_data.price_change_percentage_30d)}</td>
                  <td>${market_data.market_cap.usd}</td>
                </tr>
              )
            })
            }
        </tbody>
      </table>
  )
}
export default Datatable