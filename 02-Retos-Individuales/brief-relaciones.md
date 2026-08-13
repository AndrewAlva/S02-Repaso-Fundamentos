# Relaciones

**Brief S2 · círculos en canvas**

> Ningún círculo decide su estado solo. Cada uno se comporta según quién tiene cerca.

Arrancas del mismo archivo que todos. Los pasos 0 a 7 del starter —array de círculos, loop de dibujo, rebote en los bordes— son tu punto de partida, no el ejercicio. Hazlos rápido.

Este brief no se evalúa por lo técnico. Se evalúa por si la pieza dice algo y por si aguanta el peso que le pongas encima.

---

## Pasos

### 1. Termina la base

Pasos 0 a 7 del starter, con 60 círculos. No inviertas tiempo aquí: es el sustrato, no la pieza.

### 2. Escribe la frase

Antes de tocar el editor, en papel: **una sola frase** con lo que quieres que la pieza diga. No de qué está hecha — qué dice.

Dóblala y entrégamela. No la vuelves a ver hasta la crítica.

Si la frase no sale, escríbela igual aunque no te convenza. Una frase mala te da algo contra qué medir; ninguna frase te deja programando a ciegas.

### 3. Define la relación

Elige **una** relación medible entre dos círculos. Algunas opciones: distancia entre centros, cuántos vecinos hay dentro de cierto radio, diferencia de tamaño, si van en la misma dirección o en contra.

Escríbela en pseudocódigo antes de programarla. Un paso por línea, verbos concretos.

Una sola. Si eliges tres, la pieza se vuelve ruido y no se puede leer.

### 4. Impleméntala

Una función que reciba dos círculos y devuelva un número. Después, recorre el array comparando cada círculo contra los demás.

Con ese número decides qué cambia: color, tamaño, velocidad, opacidad. Tú eliges cuál de esas expresa mejor tu frase — esa elección es la mitad del ejercicio.

### 5. Aguanta el peso

Sube la cantidad de círculos hasta que los 60 fps se caigan. Anota el número.

Después optimiza: baja el número de comparaciones, salta cuadros, divide el espacio en zonas, lo que se te ocurra. Solo con arrays, objetos, condicionales, loops y funciones.

Vuelve a medir. Entregas los dos números.

### 6. Quita una cosa

Antes de entregar, elimina el elemento que menos aporte a la frase del paso 2.

Si la pieza no se debilita al quitarlo, sobraba.

---

## Reglas

- Sin librerías. Sin delta time. Sin clases ni módulos. Las mismas cinco piezas: arrays, objetos, condicionales, loops y funciones.
- Comparar todos contra todos crece al cuadrado: 500 círculos son 250 000 comparaciones por cuadro. Si quieres una rejilla espacial para bajarlo, la escribes tú.
- En la crítica presentas la pieza **sin decir de qué es**. El grupo la nombra.
- Si usas IA, va a la bitácora: qué consultaste, qué aceptaste, qué descartaste y por qué.

---

## Está listo cuando

- [ ] Alguien del grupo describe lo que ve y se acerca a tu frase.
- [ ] Tienes dos números medidos: antes y después de optimizar.
- [ ] Puedes señalar cualquier línea del archivo y decir qué se pierde si la borras.

---

## Preguntas de defensa

Las vas a contestar en voz alta frente al grupo. Tenlas pensadas antes, no improvisadas.

- ¿Qué relación elegiste entre elementos y por qué esa expresa tu idea?
- ¿Qué probaste antes y descartaste?
- Si te sobraran 500 elementos más, ¿prefieres más densidad o más precisión en el comportamiento? ¿Por qué?
- ¿Qué quitaste en el paso 6 y qué te costó quitarlo?

---

## Antes de cerrar la sesión

- **60 fps** es restricción de la pieza, no un extra. Ten el medidor abierto mientras trabajas.
- **Bitácora** al día: qué consultaste, qué aceptaste, qué descartaste y por qué.
- **Subes el ejercicio** al repositorio y lo publicas.
- **Lo defiendes en voz alta** en la crítica. Se evalúa cómo sostienes tus decisiones, no solo que corra.
