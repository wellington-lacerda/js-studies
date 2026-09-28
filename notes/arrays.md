# 📦 Arrays

Arrays são usados para armazenar listas de valores.

```js
const numeros = [1, 2, 3]
```

---

# Propriedades

## .length

Retorna a quantidade de elementos.

```js
numeros.length
```

Resultado:

```js
3
```

---

# Métodos Básicos

## .push()

Adiciona um elemento ao final do array.

```js
numeros.push(4)
```

Resultado:

```js
[1, 2, 3, 4]
```

## .pop()

Remove o último elemento.

```js
numeros.pop()
```

Resultado:

```js
[1, 2]
```

## .unshift()

Adiciona um elemento no início.

```js
numeros.unshift(0)
```

Resultado:

```js
[0, 1, 2, 3]
```

## .shift()

Remove o primeiro elemento.

```js
numeros.shift()
```

Resultado:

```js
[2, 3]
```

## .includes()

Verifica se o valor existe no array.

```js
numeros.includes(2)
```

Resultado:

```js
true
```

## .indexOf()

Retorna a posição do elemento.

```js
numeros.indexOf(2)
```

Resultado:

```js
1
```

## .slice()

Copia uma parte do array.

```js
numeros.slice(1, 3)
```

Resultado:

```js
[2, 3]
```

## .splice()

Remove ou adiciona elementos.

```js
numeros.splice(1, 1)
```

Resultado:

```js
[1, 3]
```

## .reverse()

Inverte a ordem.

```js
numeros.reverse()
```

Resultado:

```js
[3, 2, 1]
```

## .sort()

Ordena os elementos.

```js
numeros.sort()
```

Resultado:

```js
[1, 2, 3]
```

## .join()

Transforma array em string.

```js
numeros.join("-")
```

Resultado:

```js
"1-2-3"
```

---

# Métodos de Iteração

## .forEach()

Executa uma função para cada elemento.

```js
numeros.forEach(num => {
  console.log(num)
})
```

## .map()

Cria um novo array transformando cada elemento.

```js
numeros.map(num => num * 2)
```

Resultado:

```js
[2, 4, 6]
```

## .filter()

Filtra elementos que atendem a uma condição.

```js
numeros.filter(num => num > 1)
```

Resultado:

```js
[2, 3]
```

## .find()

Retorna o primeiro elemento encontrado.

```js
numeros.find(num => num > 1)
```

Resultado:

```js
2
```

## .some()

Retorna true se pelo menos um elemento atender à condição.

```js
numeros.some(num => num > 2)
```

Resultado:

```js
true
```

## .every()

Retorna true se todos atenderem à condição.

```js
numeros.every(num => num > 0)
```

Resultado:

```js
true
```

## .reduce()

Acumula valores em um único resultado.

```js
numeros.reduce((acc, num) => acc + num, 0)
```

Resultado:

```js
6
```

---

# Métodos Mais Usados

1. .length
2. .push()
3. .pop()
4. .includes()
5. .slice()
6. .join()
7. .map()
8. .filter()
9. .find()
10. .some()
11. .every()
12. .reduce()

---

# Resumo

| Método | O que faz |
|----------|----------|
| push() | Adiciona no final |
| pop() | Remove do final |
| unshift() | Adiciona no início |
| shift() | Remove do início |
| includes() | Verifica se existe |
| indexOf() | Retorna a posição |
| slice() | Copia parte do array |
| splice() | Remove ou adiciona elementos |
| sort() | Ordena |
| reverse() | Inverte |
| join() | Junta em uma string |
| map() | Transforma |
| filter() | Filtra |
| find() | Encontra o primeiro |
| some() | Pelo menos um |
| every() | Todos |
| reduce() | Acumula valores |
