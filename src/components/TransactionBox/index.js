"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import {
  AddButton,
  Box,
  InputsWrapper,
  MainTitle,
  StyledInput,
  StyledTextField,
} from "./style";

import axios from "axios";

const TransactionBox = ({ title, upOrDown, revenue, handleNewTransaction, selectedMonth }) => {
    const [form, setForm] = useState({
        name: "",
        value: "",
        description: "",
        revenue: revenue,
        month: selectedMonth
    })
    
    useEffect(() => {
        setForm(prevForm => ({
            ...prevForm,
            month: selectedMonth
        }));
    }, [selectedMonth]);

    console.log(form.month)

    const handleButtonClick = () => {
        axios.post('http://localhost:3000/api/transactions', form).then(response => {
            console.log(response.data.data, 'Transação cadastrada!')

            handleNewTransaction(response.data.data)
            setForm({
                name: "",
                value: "",
                description: "",
                revenue: revenue,
                month: selectedMonth
            })
        })
    }

    const handleChange = e => {
        const { name, value } = e.target
        
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
        
            <Box>
            <MainTitle>
                {title}
                <div
                style={{
                    borderRadius: "20px",
                    backgroundColor: "#E3E2E4",
                    padding: "10px 15px",
                }}
                >
                <Image
                    src={`/images/${upOrDown}`}
                    alt="up-tend"
                    height={25}
                    width={25}
                />
                </div>
            </MainTitle>
            <InputsWrapper>
                <StyledInput
                    name="value"
                    placeholder="Valor.."
                    onChange={(e) => handleChange(e)}
                    value={form.value}
                />
                <StyledInput
                    name="name"
                    placeholder="Nome da Transação.."
                    onChange={(e) => handleChange(e)}
                    value={form.name}
                />
            </InputsWrapper>
            <StyledTextField
                name="description"
                placeholder="Detalhes da transação.."
                onChange={(e) => handleChange(e)}
                value={form.description}
            />
            <AddButton onClick={() => handleButtonClick(revenue)}>
                <Image
                src="/images/add-icon.svg"
                alt="add"
                width={35}
                height={35}
                />
            </AddButton>
            </Box>
        
        </>
  );
};

export default TransactionBox;
