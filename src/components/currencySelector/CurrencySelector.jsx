import { Select } from 'antd'
import React, { useEffect, useState } from 'react'

const CurrencySelector = () => {
  const [currency, setCurrency] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState(null)

  useEffect(() => {
    async function fetchCurrency () {
      try {
        let data = await fetch('src/curriencies.json')
        let result = await data.json()
        setCurrency(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCurrency()
  }, [])

  const handleChangeCurrency = value => {
    setSelectedCurrency(value)
  }

  const handleSearch = input => {
    setSearchValue(input)
  }

  const filterOption = (input, option) => {
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  }

  return (
    <Select
      showSearch
      placeholder='Select a currency'
      optionFilterProp='children'
      value={selectedCurrency}
      onChange={handleChangeCurrency}
      onSearch={handleSearch}
      filterOption={filterOption}
      searchValue={searchValue}
    >
      {currency.map(currency => (
        <Select.Option
          key={currency.CurrencyCode}
          value={currency.CurrencyCode}
          label={currency.CurrencyName}
        >
          {currency.CurrencyCode}
          {currency.CurrencyName}
        </Select.Option>
      ))}
    </Select>
  )
}

export default CurrencySelector
