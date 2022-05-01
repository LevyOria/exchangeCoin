import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { BsCurrencyExchange } from "react-icons/bs";

export default function Input({setRes}) {
  const [options, setOption] = useState([]);
  const [select1Val, setSelect1Val] = useState({});
  const [select2Val, setSelect2Val] = useState({});
  const [input, setInput] = useState(1);
  useEffect(() => {
    doApi();
  }, [])

  useEffect(() => {
    let str1 = input + " " + select1Val.label;
    let str2 = (input / select1Val.value * select2Val.value).toLocaleString() + " " + select2Val.label;
    setRes([str1, str2]);
}, [input, select1Val, select2Val])

  const doApi = async () => {
    let url = `https://api.currencyapi.com/v3/latest?apikey=bYyjFOjcG9dnx4h76EV8GAuWDnedaXzEqus41GCO`

    let resp = await fetch(url);
    let data = await resp.json();
    let tempArr = [];
    for (let key in data.data) {
      tempArr.push({ value: data.data[key].value, label: data.data[key].code });
    }
    console.log(tempArr)
    setOption(tempArr);
    setSelect1Val({ value: tempArr[140].value, label: tempArr[140].label })
    setSelect2Val({ value: tempArr[60].value, label: tempArr[60].label })
  }
  return (
    <div className=' col-md-5 p-0'>
      <div className=''><  input onChange={(event) => { setInput(event.target.valueAsNumber) }} min={1} defaultValue={1} type='number' style={{ width: '100%', outline: 'none', borderRadius: '6px', minHeight: '40px', }} /></div>
      <div className=' mt-4'> <Select value={select1Val} onChange={(item) => { setSelect1Val(item) }} options={options} className='text-center' /></div>
      <div className='text-center mt-4'>
        <BsCurrencyExchange onClick={() => { setSelect1Val(select2Val); setSelect2Val(select1Val) }} style={{ cursor: 'pointer' }} size="35px" color='white' />
      </div>
      <div className=' mt-4'> <Select value={select2Val} onChange={(item) => { setSelect2Val(item) }} options={options} className='text-center' /></div>

    </div>
  )
}
