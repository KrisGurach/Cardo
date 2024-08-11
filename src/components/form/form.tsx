import { ChangeEvent, FC, useState } from "react";
import React from "react";
import style from './style.module.css';
import { TFormData, TInputValues } from "../types/types";

const Form:FC<TFormData> = ({data, inputValues, defaultValues}) =>  {

  const [values, setValues] = useState<TInputValues>({
    ...inputValues || defaultValues
	});

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

  return (
    <form className={style.form}>
      {data.map(data => {
        return (
          <fieldset className={style.fieldset}>
            <h2 className={style.title}>{data.title}</h2>
            {data.inputs.map((input) => {
              const nam = input.name;
              const val = values[nam as keyof typeof values];
              return (
                <input
                  value={val}
                  name={input.name}
                  placeholder={input.placeholder}
                  className={style.input}
                  onChange={onInputChange}
                  type={input.type && input.type}
                />
              )
            })}
          </fieldset>
        )
      })}
    </form>
  );
}

export default Form;