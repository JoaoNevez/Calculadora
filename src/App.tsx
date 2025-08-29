import React, { useState } from 'react'

const App: React.FC = () => {
  const [input, setInput] = useState('')

  const handleClick = (value: string) => {
    if (value === 'C') {
      setInput('')
    } else if (value === '=') {
      try {
        // Usando eval apenas para simplificação (não recomendado em produção)
        // Substitui '×' e '÷' por '*' e '/'
        const expression = input.replace(/×/g, '*').replace(/÷/g, '/')
        setInput(eval(expression).toString())
      } catch {
        setInput('Erro')
      }
    } else {
      setInput(input + value)
    }
  }

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ]

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
      <div className="bg-gray-100 text-right p-4 rounded-lg mb-4 text-2xl font-mono">
        {input || '0'}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
