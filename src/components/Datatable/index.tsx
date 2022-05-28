import React from "react";
import { formatNumber } from "../../utils/formatNumber";
import { Coin } from "../../types/Coin";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import "./styles.css";

interface Props {
  data: Coin[];
  isLoading: boolean;
}

const colorizeNumber = (num: number) => (num > 0 ? "success" : "danger");

const Datatable: React.FC<Props> = ({ data, isLoading }) => {
  return (
    <>
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">Coin</Th>
            <Th scope="col">Price</Th>
            <Th scope="col">24h</Th>
            <Th scope="col">7d</Th>
            <Th scope="col">30d</Th>
            <Th scope="col">Mkt cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          { !isLoading &&
          data.map((coin, count) => {
            const { market_data, id, image, name, symbol } = coin;
            return (
              <Tr key={id}>
                <Td scope="row">{count + 1}</Td>
                <Td>
                  <Flex>
                    <HStack spacing="16px">
                      {" "}
                      <img src={image.thumb} alt="" />
                      <span>
                        {name}
                        <span className="secondary"> ({symbol})</span>
                      </span>{" "}
                    </HStack>
                  </Flex>{" "}
                </Td>
                <Td>${formatNumber(market_data.current_price.usd)}</Td>
                <Td
                  className={colorizeNumber(
                    market_data.price_change_percentage_24h
                  )}
                >
                  {formatNumber(market_data.price_change_percentage_24h)}
                </Td>
                <Td
                  className={colorizeNumber(
                    market_data.price_change_percentage_7d
                  )}
                >
                  {formatNumber(market_data.price_change_percentage_7d)}
                </Td>
                <Td
                  className={colorizeNumber(
                    market_data.price_change_percentage_30d
                  )}
                >
                  {formatNumber(market_data.price_change_percentage_30d)}
                </Td>
                <Td>${market_data.market_cap.usd}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
    <Stack>
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
    <Skeleton height='25px' />
  </Stack>
  </>
  );
};
export default Datatable;
