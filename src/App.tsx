import { useState } from 'react'
import './App.css'

type OpT = '+' | '-' | '*' | '/'
type OpFn = (a: number, b: number) => number
type Op = { op: OpT, fn: OpFn }
export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const style = (a = 1) => ({ fontSize: `${a}em` });
  const botones: Op[] = [
    {op: '+', fn: (a, b) => (a + b)}
    ,{op: '-', fn: (a, b) => (a - b)}
    ,{op: '*', fn: (a, b) => (a * b)}
    ,{op: '/', fn: (a, b) => (a / b)}];
  const [op, setOp] = useState<Op>(botones[0])

  return (
    <>
    <h1>
    <input placeholder='A' style={{...style(2), width: '4em'}} value={a} 
      onChange={(e) => setA(Number.parseInt(e.target.value))} type="number" />
      <a style={style(2)}>(A)</a>
    <div style={style(2)}>{op.op}</div>
    <input placeholder='B' style={{...style(2), width: '4em' }} value={b} 
      onChange={(e) => setB(Number.parseInt(e.target.value))} type="number" />
      <a style={style(2)}>(B)</a>
    <div style={style(2)}>{op.fn(a,b)}</div>
    {botones.map((op) => <button style={{...style(4)}} onClick={() => setOp(() => op)}>{op.op}</button>)}
    </h1>
    </>
  )
}