import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import Datatable from "../components/Datatable";
import { Search2Icon } from "@chakra-ui/icons";
import { useAuth } from "../hooks/useAuth";
import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  VStack
} from "@chakra-ui/react";
import { Coin } from "../types/Coin";

export default function Home() {
  const [cryptoData, setCryptoData] = useState<Coin[] | []>([]);
  const [isCryptoDataLoading, setIsCryptoDataLoading] = useState(false)
  const [search, setSearch] = useState<string>("");

  const [filteredCoins, setFilteredCoins] = useState<Coin[] | []>([]);

  const searchCoins = (name: string) => {
    setSearch(name);
    setFilteredCoins(
      cryptoData.filter((crypto) =>
        crypto.name.toLowerCase().includes(name.toLowerCase().trim())
      )
    );
  };

  const getData = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/");
    const data = await res.json();
    setCryptoData(data);
    setFilteredCoins(data);
    setIsCryptoDataLoading(false)
  };
  useEffect(() => {
    setIsCryptoDataLoading(true)
    getData();
  }, []);
  console.log(useAuth());
  return (
    <VStack>
      <h1 className="sr-only">Crypto tracker</h1>
      <div>
        <Box maxW='350px'>
        <FormControl>
          <FormLabel htmlFor="search">Search</FormLabel>
          <InputGroup>
            <InputRightElement children={<Search2Icon />} />
            <Input
              type="text"
              id="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        </Box>
        <Datatable data={filteredCoins} isLoading={isCryptoDataLoading}/>
      </div>
    </VStack>
  );
}

