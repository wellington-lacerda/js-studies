# 📝 Strings

Usados em textos.

```js
const nome = "Wellington"
```

## .length

Quantidade de caracteres.

```js
nome.length
```

## .toUpperCase()

Transforma em maiúsculo.

```js
nome.toUpperCase()
```

## .toLowerCase()

Transforma em minúsculo.

```js
nome.toLowerCase()
```

## .trim()

Remove espaços extras.

```js
" Wellington ".trim()
```

## .includes()

Verifica se contém um texto.

```js
nome.includes("ton")
```

## .startsWith()

Verifica se começa com algo.

```js
nome.startsWith("Wel")
```

## .endsWith()

Verifica se termina com algo.

```js
nome.endsWith("ton")
```

## .replace()

Substitui texto.

```js
nome.replace("Wellington", "João")
```
## .replaceAll()

Substitui todas as ocorrências.

```js
"banana".replaceAll("a", "o")
```

Resultado:

```js
"bonono"
```

## .slice()

Pega parte da string.

```js
nome.slice(0, 4)
```

## .split()

Transforma string em array.

```js
"maçã,uva,banana".split(",")
```

## .padStart()

Adiciona caracteres no início da string até atingir um tamanho.

```js
"5".padStart(2, "0")
```

Resultado:

```js
"05"
