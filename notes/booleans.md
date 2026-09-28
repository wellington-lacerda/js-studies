# Valores Booleanos

Os valores booleanos representam apenas dois estados:

```js
true
false
```

## `true`

Representa **verdadeiro**, **sim**, **ativo** ou **ligado**.

```js
const maiorDeIdade = true
const logado = true
const ativo = true
```

## `false`

Representa **falso**, **não**, **inativo** ou **desligado**.

```js
const maiorDeIdade = false
const logado = false
const ativo = false
```

## Booleanos em condições

```js
if (logado) {
  console.log("Usuário está logado")
}
```

É equivalente a:

```js
if (logado === true) {
  console.log("Usuário está logado")
}
```

Para verificar o contrário:

```js
if (!logado) {
  console.log("Usuário não está logado")
}
```

## Comparações que retornam booleano

Operadores de comparação sempre produzem `true` ou `false`.

```js
10 > 5        // true
10 < 5        // false
10 === 10     // true
10 !== 10     // false
10 >= 10      // true
5 <= 3        // false
```

## Operadores lógicos

### AND — `&&`

Só retorna `true` quando **todas** as condições são verdadeiras.

```js
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

### OR — `||`

Retorna `true` quando **pelo menos uma** condição é verdadeira.

```js
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

### NOT — `!`

Inverte o booleano.

```js
!true  // false
!false // true
```

## `Boolean()`

Converte um valor para booleano.

```js
Boolean(10)      // true
Boolean(0)       // false

Boolean("Olá")   // true
Boolean("")      // false

Boolean([])      // true
Boolean({})      // true
```

### Valores falsy

Em JavaScript, estes valores são considerados `false` em contextos booleanos:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Quase todo o resto é considerado **truthy**.

```js
"Olá"  // truthy
42     // truthy
[]     // truthy
{}     // truthy
```

> **Resumo:** em JavaScript, um booleano só possui dois valores possíveis: `true` e `false`.
