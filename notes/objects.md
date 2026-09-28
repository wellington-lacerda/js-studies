# 📦 Objects

Objetos são usados para armazenar dados em formato de chave e valor.

```js
const user = {
  name: "Wellington",
  age: 22
}
```

---

# Acessando Propriedades

## Notação de ponto

```js
user.name
```

Resultado:

```js
"Wellington"
```

---

## Notação de colchetes

```js
user["age"]
```

Resultado:

```js
22
```

---

# Métodos do Object

## Object.keys()

Retorna todas as chaves do objeto.

```js
Object.keys(user)
```

Resultado:

```js
["name", "age"]
```

---

## Object.values()

Retorna todos os valores.

```js
Object.values(user)
```

Resultado:

```js
["Wellington", 22]
```

---

## Object.entries()

Retorna chave e valor.

```js
Object.entries(user)
```

Resultado:

```js
[
  ["name", "Wellington"],
  ["age", 22]
]
```

---

## Object.assign()

Copia propriedades para outro objeto.

```js
Object.assign({}, user)
```

Resultado:

```js
{
  name: "Wellington",
  age: 22
}
```

---

## Object.freeze()

Impede alterações.

```js
Object.freeze(user)
```

---

## Object.seal()

Permite alterar valores, mas impede adicionar ou remover propriedades.

```js
Object.seal(user)
```

---

## Object.hasOwn()

Verifica se a propriedade existe.

```js
Object.hasOwn(user, "name")
```

Resultado:

```js
true
```

---

# Operadores Muito Usados

## in

Verifica se a propriedade existe.

```js
"name" in user
```

Resultado:

```js
true
```

---

## delete

Remove uma propriedade.

```js
delete user.age
```

Resultado:

```js
{
  name: "Wellington"
}
```

---

# Desestruturação

## Extraindo propriedades

```js
const { name, age } = user
```

Resultado:

```js
name // Wellington
age // 22
```

---

# Spread Operator

## Copiando objetos

```js
const copy = { ...user }
```

---

## Adicionando propriedades

```js
const newUser = {
  ...user,
  city: "Campos Sales"
}
```

Resultado:

```js
{
  name: "Wellington",
  age: 22,
  city: "Campos Sales"
}
```

---

# Métodos Mais Usados

1. Object.keys()
2. Object.values()
3. Object.entries()
4. Object.hasOwn()
5. delete
6. spread (...)
7. desestruturação
8. Object.assign()

---

# Resumo

| Método | O que faz |
|----------|----------|
| Object.keys() | Retorna as chaves |
| Object.values() | Retorna os valores |
| Object.entries() | Retorna chave e valor |
| Object.assign() | Copia propriedades |
| Object.freeze() | Congela o objeto |
| Object.seal() | Sela o objeto |
| Object.hasOwn() | Verifica propriedade |
| in | Verifica existência |
| delete | Remove propriedade |
| ... (spread) | Copia ou adiciona propriedades |
| { name } | Desestrutura propriedades |