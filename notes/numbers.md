# 🔢 Numbers

Numbers são usados para representar valores numéricos em JavaScript.

```js
const idade = 22
const preco = 15.99
```

## .toFixed()

Define a quantidade de casas decimais.

```js
preco.toFixed(2)
```

Resultado:

```js
"15.99"
```

## .toString()

Converte o número para string.

```js
idade.toString()
```

Resultado:

```js
"22"
```

## Number.parseInt()

Converte texto para número inteiro.

```js
Number.parseInt("22")
```

Resultado:

```js
22
```

## Number.parseFloat()

Converte texto para número decimal.

```js
Number.parseFloat("15.99")
```

Resultado:

```js
15.99
```

## Number.isInteger()

Verifica se é um número inteiro.

```js
Number.isInteger(10)
```

Resultado:

```js
true
```

## Number.isNaN()

Verifica se o valor é NaN.

```js
Number.isNaN(NaN)
```

Resultado:

```js
true
```

## .toLocaleString()

Formata números.

```js
preco.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
})
```

Resultado:

```js
R$ 15,99
```

# Math

## Math.max()

```js
Math.max(10, 20, 30)
```

Resultado:

```js
30
```

## Math.min()

```js
Math.min(10, 20, 30)
```

Resultado:

```js
10
```

## Math.round()

```js
Math.round(10.6)
```

Resultado:

```js
11
```

## Math.floor()

```js
Math.floor(10.9)
```

Resultado:

```js
10
```

## Math.ceil()

```js
Math.ceil(10.1)
```

Resultado:

```js
11
```

## Math.random()

```js
Math.random()
```

Resultado:

```js
0.548712...
```