# 📅 Dates

O objeto Date é usado para trabalhar com datas e horários.

```js
const today = new Date()
```

---

# Criando Datas

## Data Atual

```js
const today = new Date()
```

Resultado:

```js
Data atual do sistema
```

---

## Data Específica

```js
const birthday = new Date("2003-06-14")
```

Resultado:

```js
Sat Jun 14 2003 ...
```

---

# Obtendo Informações

## .getFullYear()

Retorna o ano.

```js
today.getFullYear()
```

Resultado:

```js
2026
```

---

## .getMonth()

Retorna o mês.

⚠️ Janeiro = 0 e Dezembro = 11

```js
today.getMonth()
```

Resultado:

```js
5
```

---

## .getDate()

Retorna o dia do mês.

```js
today.getDate()
```

Resultado:

```js
12
```

---

## .getDay()

Retorna o dia da semana.

```js
today.getDay()
```

Resultado:

```js
5
```

Tabela:

```js
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
```

---

## .getHours()

Retorna a hora.

```js
today.getHours()
```

Resultado:

```js
14
```

---

## .getMinutes()

Retorna os minutos.

```js
today.getMinutes()
```

Resultado:

```js
35
```

---

## .getSeconds()

Retorna os segundos.

```js
today.getSeconds()
```

Resultado:

```js
12
```

---

# Alterando Datas

## .setFullYear()

Define o ano.

```js
today.setFullYear(2030)
```

---

## .setMonth()

Define o mês.

```js
today.setMonth(11)
```

---

## .setDate()

Define o dia.

```js
today.setDate(25)
```

---

# Formatação

## .toDateString()

Retorna apenas a data.

```js
today.toDateString()
```

Resultado:

```js
Fri Jun 12 2026
```

---

## .toTimeString()

Retorna apenas o horário.

```js
today.toTimeString()
```

Resultado:

```js
14:35:20 GMT...
```

---

## .toLocaleDateString()

Formata a data para o idioma escolhido.

```js
today.toLocaleDateString("pt-BR")
```

Resultado:

```js
12/06/2026
```

---

## .toLocaleTimeString()

Formata o horário.

```js
today.toLocaleTimeString("pt-BR")
```

Resultado:

```js
14:35:20
```

---

## .toLocaleString()

Formata data e hora.

```js
today.toLocaleString("pt-BR")
```

Resultado:

```js
12/06/2026, 14:35:20
```

---

# Timestamp

## .getTime()

Retorna os milissegundos desde 01/01/1970.

```js
today.getTime()
```

Resultado:

```js
1749730000000
```

---

# Métodos Mais Usados

1. new Date()
2. .getFullYear()
3. .getMonth()
4. .getDate()
5. .getDay()
6. .getHours()
7. .getMinutes()
8. .toLocaleDateString()
9. .toLocaleTimeString()
10. .toLocaleString()
11. .getTime()

---

# Resumo

| Método | O que faz |
|----------|----------|
| new Date() | Cria uma data |
| getFullYear() | Retorna o ano |
| getMonth() | Retorna o mês |
| getDate() | Retorna o dia do mês |
| getDay() | Retorna o dia da semana |
| getHours() | Retorna a hora |
| getMinutes() | Retorna os minutos |
| getSeconds() | Retorna os segundos |
| setFullYear() | Define o ano |
| setMonth() | Define o mês |
| setDate() | Define o dia |
| toDateString() | Formata apenas a data |
| toTimeString() | Formata apenas a hora |
| toLocaleDateString() | Formata a data |
| toLocaleTimeString() | Formata a hora |
| toLocaleString() | Formata data e hora |
| getTime() | Retorna o timestamp |