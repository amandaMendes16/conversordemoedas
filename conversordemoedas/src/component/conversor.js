import React, { useState } from 'react';
function ConversorMoedas(){
  const [valor, setValor] = useState('');
  const [Real, setReal] = useState('Real');
  const [Dolar, setDolar] = useState('Dólar');
  const [valorConvertido, setValorConvertido] = useState(null);

  const converterMoeda = () => {
    const Conversao = 0.2;
    const valorConvertido = parseFloat(valor) * Conversao;

    setValorConvertido(valorConvertido);
  };

  return (
    <div className='App'>

        <label>
            Valor em {Real}:
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        </label>

        <label>
            <button onClick={converterMoeda}>Converter Moeda</button>
        </label>

      {valorConvertido !== null && (
        <p>
          {valor} {Real} é igual a {valorConvertido} {Dolar}.
        </p>
      )}
    </div>
  );
};

export default ConversorMoedas;
