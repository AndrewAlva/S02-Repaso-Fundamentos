# Nada repetido, nada suelto

**Brief S2 · círculos en canvas**

> La misma pieza, con tres reglas de arquitectura. Ninguna te pide sintaxis nueva; las tres te piden decidir mejor.

El código que corre y el código que se puede cambiar no son el mismo código. Este brief entrena el segundo.

Arrancas del starter que tienen todos. El paso 0 viene resuelto.

---

## Pasos

### 1. Termina la base

Pasos 0 a 7 del starter: array de círculos, loop de dibujo, rebote en los bordes.

### 2. Saca los números

Un objeto `config` arriba del archivo con todos los valores: cantidad, rango de tamaños, rango de velocidades, paleta, factor de rebote.

Dentro de la lógica no queda **ni un número suelto**.

Prueba que funcionó: cambia solo el `config` y la pieza debe cambiar de carácter, no nada más de tamaño.

### 3. Caza lo repetido

El rebote en x y el rebote en y son el mismo bloque escrito dos veces con los nombres cambiados. Conviértelo en **una función que reciba el eje**.

Después busca en todo el archivo: cualquier cosa escrita dos veces con una variable distinta es candidata a lo mismo.

### 4. Dos tipos de círculo

Agrega a cada objeto una propiedad `tipo` — `"ligero"` y `"pesado"`, o los que decidas.

El tipo decide comportamiento: qué tan rápido va, cómo rebota, cómo se ve.

**Un solo array. Una sola función de actualización** que se ramifica con un condicional. No dos arrays, no dos funciones paralelas.

Esto es lo importante del brief: los **datos** deciden el comportamiento, no la estructura del archivo.

### 5. Que la proporción sea un parámetro

Cuántos hay de cada tipo se decide en el `config`, no en el loop.

Pasar de mitad y mitad a 90/10 tiene que ser cambiar un número.

### 6. Mide

Sube la cantidad hasta que los 60 fps se caigan. Dev tools › Rendering › Frame Rendering Stats.

Anota el número en la bitácora. Es el presupuesto de tu máquina.

### 7. Léelo como si fuera de alguien más

Abre el archivo y pregúntate qué línea no entenderías si la vieras en dos semanas.

Renómbrala o coméntala. Un comentario que dice **por qué**, no qué.

---

## Reglas

- Un solo array para los dos tipos. Si terminas con dos arrays, la regla 4 no se cumplió.
- Sin librerías, sin clases, sin módulos. Las mismas cinco piezas.
- Nombres en español o en inglés, tú decides, pero consistentes en todo el archivo. No mezcles.
- Si usas IA, va a la bitácora: qué consultaste, qué aceptaste, qué descartaste y por qué.

---

## Está listo cuando

- [ ] Un compañero cambia solo el `config` y la pieza cambia de carácter.
- [ ] Buscas cualquier bloque de tu código y no encuentras un duplicado.
- [ ] Podrías agregar un tercer tipo tocando el `config` y una rama del condicional, nada más.

---

## Preguntas de defensa

Las vas a contestar en voz alta frente al grupo. Tenlas pensadas antes, no improvisadas.

- ¿Qué distingue a tus dos tipos y por qué esa distinción y no otra?
- ¿Qué pusiste en el `config` y qué dejaste fuera a propósito?
- ¿Dónde estuviste a punto de copiar y pegar?
- ¿Qué tan difícil sería agregar un tercer tipo? Demuéstralo.

---

## Antes de cerrar la sesión

- **60 fps** es restricción de la pieza, no un extra. Ten el medidor abierto mientras trabajas.
- **Bitácora** al día: qué consultaste, qué aceptaste, qué descartaste y por qué.
- **Subes el ejercicio** al repositorio y lo publicas.
- **Lo defiendes en voz alta** en la crítica. Se evalúa cómo sostienes tus decisiones, no solo que corra.
