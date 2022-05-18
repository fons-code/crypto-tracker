import React from 'react'
import {formatNumber} from '../../utils/formatNumber'
import {Coin} from '../../types/Coin'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import './styles.css'

interface Props {
    data: Coin[]
}

const colorizeNumber = (num : number) => num > 0 ? 'success' : 'danger'


const Datatable : React.FC<Props> = ({data}) => {
  return (
    <TableContainer>
    <Table>
        <Thead>
          <Tr>
            <Th scope='col'>#</Th>
            <Th scope='col'>Coin</Th>
            <Th scope='col'>Price</Th>
            <Th scope='col'>24h</Th>
            <Th scope='col'>7d</Th>
            <Th scope='col'>30d</Th>
            <Th scope='col'>Mkt cap</Th>
          </Tr>
        </Thead>
        <Tbody>
            {data.map((coin, count) => {
              const {market_data,id,image,name, symbol} = coin 
              return(
                <Tr key={id}>
                  <Td scope='row'>{count + 1}</Td>
                  <Td><img src={image.thumb} alt="" /> {name} <span className='secondary'>({symbol})</span> </Td>
                  <Td>${formatNumber(market_data.current_price.usd)}</Td>
                  <Td className={colorizeNumber(market_data.price_change_percentage_24h)}>{formatNumber(market_data.price_change_percentage_24h)}</Td>
                  <Td className={colorizeNumber(market_data.price_change_percentage_7d)}>{formatNumber(market_data.price_change_percentage_7d)}</Td>
                  <Td className={colorizeNumber(market_data.price_change_percentage_30d)}>{formatNumber(market_data.price_change_percentage_30d)}</Td>
                  <Td>${market_data.market_cap.usd}</Td>
                </Tr>
              )
            })
            }
        </Tbody>
      </Table>
    </TableContainer>
  )
}
export default Datatable