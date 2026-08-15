# Círculos

**Ejercicio en clase · Sesión 2 · Interacción y Renderizado Web Avanzado**

> Cinco conceptos, una sola pieza: **arrays**, **objetos**, **condicionales**, **loops** y **funciones**.

Vas a construir círculos que se mueven, rebotan en los bordes y cambian según reglas que tú decides. Sin librerías y sin copiar código: al terminar tienes que poder explicar cualquier línea del archivo.

---

## Cómo correrlo

Doble clic en `index.html`. Ya está.

No necesitas servidor, ni instalar nada, ni terminal. Si usas VS Code y tienes la extensión **Live Server**, mejor —recarga sola cada vez que guardas—, pero no es obligatorio.

Ten abierta la consola todo el tiempo: `F12` › pestaña **Console**. Ahí es donde el navegador te dice qué está mal.

---

## Los archivos

```
circulos/
├── index.html    → el canvas y nada más. Casi no lo vas a tocar.
└── main.js       → aquí vive el ejercicio completo
```

`main.js` ya trae el **paso 0 resuelto**: el canvas responsivo y el loop de animación. Eso no lo escribes tú — léelo, entiéndelo, y confirma que al abrir el archivo ves una pantalla oscura sin errores en consola.

Del paso 1 en adelante es tuyo.

---

## Cómo se trabaja este ejercicio

Cada paso está escrito como un **comentario en pseudocódigo** dentro de `main.js`. Escribe tu código debajo del comentario, sin borrarlo: al final los comentarios te quedan de mapa de lo que construiste.

Tres reglas de método:

1. **No pases al siguiente paso hasta ver el anterior funcionando en pantalla.** Si acumulas tres pasos sin probar, cuando truene no vas a saber cuál de los tres fue.
2. **Si algo truena, lee la consola antes de preguntar.** El error casi siempre trae el número de línea.
3. **Atorarse es el trabajo, no la interrupción del trabajo.** Todos los errores de este ejercicio tienen explicación y están abajo, en la tabla.

Los números entre corchetes —`[07]`, `[10]`— remiten a los conceptos del cheatsheet. Si un paso no se entiende, la pieza que falta está más arriba en esa lista.

---

## Los pasos

El pseudocódigo completo de cada uno está en `main.js`. Esto es el mapa.

### 0 · Canvas responsivo y loop · *ya resuelto*
Léelo. Dos cosas están pasando: sincronizar el tamaño real del canvas con el que ocupa en pantalla, y pedirle al navegador que ejecute tu función una vez por cuadro.

**Lo sabes cuando** → abres el archivo y ves una pantalla oscura, sin errores.

### 1 · Un círculo es un objeto · `[08]`
Un círculo todavía no es un dibujo: son datos. Posición, radio, color, velocidad.

Elige números concretos. Si te sale "mediano", todavía no sabes qué quieres.

**Lo sabes cuando** → `console.log(circulo)` te muestra el objeto en consola.

### 2 · Dibujarlo · `[11]`
Una función que reciba **un** círculo y lo pinte. Recibe el círculo como parámetro, no lee la variable de afuera — en el paso 6 vas a llamar la misma función con círculos distintos.

**Lo sabes cuando** → ves un círculo quieto en pantalla.

### 3 · Que se mueva
Nada se mueve solo: se mueve porque cada cuadro está un poco más allá que el anterior.

Antes de seguir, prueba con velocidad `0.5` y luego con `20`. ¿En cuál se siente bien? Ese número es una decisión de diseño, igual que un color.

**Lo sabes cuando** → el círculo cruza la pantalla y se va. Que se escape está bien: lo atrapamos en el paso 7.

### 4 · Una fábrica de círculos · `[11]` `[07]`
Hasta ahora hay un círculo escrito a mano. Para tener muchos no se copia y pega: se escribe la receta una vez. Una función que **devuelva** el objeto, y un array donde guardarlo.

**Lo sabes cuando** → se ve exactamente igual que en el paso 3. Si algo cambió visualmente, algo se rompió.

### 5 · Muchos · `[10]`
Si la receta ya existe, pedirla 200 veces cuesta lo mismo que pedirla una.

**Lo sabes cuando** → `console.log(circulos.length)` marca la cantidad que pusiste. En pantalla sigue habiendo uno: normal, eso se arregla en el paso 6.

### 6 · Dibujarlos todos · `[10]`
Recorrer el array en cada cuadro: actualizar y dibujar cada círculo.

Fíjate en la diferencia entre este loop y el del paso 5. Aquel necesitaba un contador —cuántas veces—; este solo necesita los valores.

**Lo sabes cuando** → todos los círculos se mueven.

### 7 · Que reboten · `[09]`
Un rebote es una decisión: *"si te pasaste del borde, regrésate"*. Eso es un `if`.

Dos cosas que te van a morder:
- El borde del círculo no es su centro. Toca la pared cuando `x - radio` llega a 0, no cuando `x` llega a 0.
- Si **solo** inviertes la velocidad, algunos se van a quedar vibrando pegados a la orilla. Piensa por qué, y qué le falta a la instrucción.

**Lo sabes cuando** → nadie se escapa y nadie se atora en el borde.

### 8 · Color con criterio · `[09]`
A partir de aquí la regla la pones tú. El código ya lo sabes escribir; **lo que se evalúa es qué decides.**

| | |
|---|---|
| ✅ | *"Los de arriba son claros y los de abajo oscuros, porque simula profundidad."* Es una regla. Se puede defender. |
| ❌ | *"Colores al azar."* No es una regla. Es la ausencia de una decisión. |

**Lo sabes cuando** → puedes explicar tu regla en una frase, sin usar la palabra "if".

### 9 · Tamaño con criterio · `[09]`
Lo mismo que el 8, pero sobre el radio.

Ojo: si el radio cambia, el rebote del paso 7 tiene que seguir funcionando. ¿Qué pasa si un círculo crece justo cuando está pegado a la pared?

**Lo sabes cuando** → la pieza sigue a 60 fps y nadie se atora.

---

## Si algo truena

| Lo que ves | Qué está pasando |
|---|---|
| Una maraña de líneas rellenas en vez de círculos | Falta `beginPath()`. Sin él, el canvas encadena todos los arcos en un solo trazo. |
| Pantalla vacía y `NaN` en la consola | Estás creando círculos antes de que el canvas se haya medido. El orden de las llamadas importa. |
| Todos los círculos encimados en el mismo punto | Tu fábrica devuelve siempre lo mismo. Ahí es donde entra `Math.random()`. |
| Círculos vibrando pegados a la pared | Invertir el rumbo no lo saca de donde ya está. Le falta un paso a tu rebote. |
| Un rastro que se acumula y nunca se borra | Te comiste el `clearRect` al inicio de `cuadro()`. |
| Todo se ve borroso | Tocaste el `setTransform` del paso 0. Regrésalo. |

---

## 60 fps

Es la restricción permanente del curso, no un tema del final del semestre. Desde hoy:

1. `F12` para abrir Dev Tools
2. `Cmd/Ctrl + Shift + P` y escribe **"Rendering"**
3. Activa **Frame Rendering Stats** → te aparece el contador encima de la página
4. Sube la cantidad de círculos hasta que se caiga de 60. **Anota ese número en tu bitácora.**

Ese número es distinto en cada computadora del salón. Por eso la restricción del curso es *60 fps en el equipo más lento*, y no en el tuyo.

---

## Si te sobra tiempo

Tres extensiones. Ninguna necesita sintaxis nueva.

**A · Rastro.** En lugar de borrar el cuadro anterior con `clearRect`, pinta encima un rectángulo negro semitransparente. Los círculos van a dejar estela. Juega con la opacidad hasta que se sienta bien — es una decisión visual, no técnica.

**B · Reaccionar al cursor.** Escucha el evento `mousemove` `[13]` y guarda la posición. Después, una condicional: los círculos que estén cerca del cursor cambian de algo. Tú decides de qué.

**C · Que la velocidad tenga consecuencia visual.** Ahorita el tamaño y la velocidad no tienen relación. Haz que sí: los más rápidos más chicos, o más claros, o al revés. Que se vea que hay una regla, aunque nadie te la explique.

Puedes hacer las tres, pero **una bien defendida vale más que tres a medias.**

---

## Está listo cuando

- [ ] La pieza corre sin errores en consola
- [ ] Llegaste al menos al paso 7: nadie se escapa y nadie se atora
- [ ] Tus reglas de los pasos 8 y 9 las puedes explicar en una frase cada una
- [ ] Mediste tu número de fps y está anotado en la bitácora
- [ ] Puedes señalar cualquier línea del archivo y decir qué hace

Llegar al paso 7 y defenderlo bien vale más que llegar al 9 sin poder explicarlo.

---

## Preguntas de defensa

Las vas a contestar en voz alta frente al grupo. Tenlas pensadas antes, no improvisadas: se evalúa cómo sostienes tus decisiones, no nada más que la pieza corra.

- ¿Por qué esa cantidad de círculos y no otra?
- ¿Qué regla propusiste en el paso 8, y qué descartaste antes de llegar a ella?
- ¿Cuál es tu número de fps y qué harías para subirlo?
- Te señalo una línea al azar: ¿qué hace y por qué está ahí?

---

## Antes de cerrar la sesión

1. **Commit y push** con la versión de cierre
2. **GitHub Pages activo**, y abre tu URL al menos una vez desde el celular
3. **Bitácora al día** — qué consultaste, qué aceptaste, qué descartaste y por qué. *"No usé IA, y esto fue lo que me costó"* también es una entrada válida
4. **Tus respuestas de defensa** pensadas
