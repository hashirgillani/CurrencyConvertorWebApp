import React from "react";
import { useId } from "react";

function Input({
  label,
  amount,
  currency,
  currency_options_list = [],
  onAmountChange,
  onCurrencyChange,
  imgSrc,
  readonly = false,
}) {
  const lable_id = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor={lable_id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={lable_id}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          readOnly={readonly}
          value={amount}
          onChange={(e) => {
         onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right items-center gap-2">
        <img
          src={imgSrc}
          alt="flag"
          className="w-6 h-6 rounded-full object-cover border border-gray-300"
        />
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currency_options_list.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
