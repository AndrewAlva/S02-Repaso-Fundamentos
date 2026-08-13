# El rebote que no se siente falso

**Brief S2 · círculos en canvas**

> El rebote del ejercicio base es mentira. Una pelota real pierde energía, se deforma al golpear y termina por quedarse quieta.

Este brief no tiene código más difícil que el de nadie. Tiene una vara más alta en otra cosa: que el movimiento se sienta bien. Eso no se resuelve con más sintaxis, se resuelve con ojo y con tres números bien elegidos.

Arrancas del mismo starter. El paso 0 viene resuelto.

---

## Pasos

### 1. Termina la base, pero con pocos

Pasos 0 a 7 del starter con **3 a 5 círculos**, no 60.

Aquí importa cómo se mueve uno, no cuántos hay.

### 2. Dibuja la curva primero

Antes de escribir nada: en papel, o en el editor de gráficos de After Effects si lo tienes a la mano, dibuja cómo debería caer y asentarse una pelota.

Cuántos rebotes, qué tan alto queda cada uno respecto al anterior, cuánto tarda en quedarse quieta.

Foto de la curva a la bitácora. **Esa curva es el brief; el código nada más la ejecuta.**

### 3. Pierde energía

Al rebotar, la velocidad no se invierte igual: se invierte **y se reduce**.

El factor de pérdida es un número dentro del objeto de cada círculo. Prueba 0.9, luego 0.6, luego 0.3.

Cada número es un material distinto: una pelota de goma, una de tenis, una bolsa de arena. Elige el tuyo con el ojo.

### 4. Que se asiente

Un rebote real termina. Ahorita el tuyo va a seguir vibrando infinitamente con rebotes microscópicos.

Condicional: si al tocar el piso la velocidad es menor a cierto umbral, el círculo se queda quieto.

El umbral lo eliges viendo, no calculando.

### 5. Deforma el impacto

Una función que dibuje el círculo **aplastado durante el contacto** y estirado cuando cae rápido. Sin cambiar su radio real: solo cómo se dibuja.

Esto es squash & stretch y es lo que más va a subir la sensación de peso.

Te doy la herramienta porque no es el punto del ejercicio: `ctx.ellipse(x, y, radioX, radioY, 0, 0, Math.PI * 2)` dibuja un círculo con dos radios distintos.

### 6. Ponlas lado a lado

Divide la pantalla: a la izquierda el rebote duro del ejercicio base, a la derecha el tuyo.

La comparación **es** el argumento. Sin ella, quien lo vea no tiene contra qué medir.

### 7. Enséñaselo a alguien que no programe

Si no señala cuál de los dos se siente real en menos de tres segundos, todavía no está.

No le expliques nada antes. Si necesitas explicarlo, no funcionó.

---

## Reglas

- Sin librerías de física. Todo con arrays, objetos, condicionales, loops y funciones.
- Sin delta time. La velocidad va en píxeles por cuadro; con eso alcanza hoy.
- El squash se **dibuja**, no se simula. Estás dirigiendo el movimiento, no calculando física real. La diferencia importa: buscas que se vea bien, no que sea correcto.
- Presentas tú al grupo en la crítica del cierre.

---

## Está listo cuando

- [ ] Alguien que no sabe programar señala cuál se siente real sin que le expliques.
- [ ] Los tres números —pérdida de energía, umbral de reposo, cuánto deforma— están en el objeto y los puedes cambiar en vivo frente al grupo.
- [ ] Lo que pasa en pantalla se parece a la curva que dibujaste en el paso 2.

---

## Preguntas de defensa

Las vas a contestar en voz alta frente al grupo. Tenlas pensadas antes, no improvisadas.

- ¿Qué número controla la pérdida de energía y cómo llegaste a él?
- ¿En qué se parece esto a mover manubrios en un editor de curvas y en qué no?
- ¿Qué le falta todavía para que se sienta pesado en vez de ligero?
- ¿Por qué el squash y no solamente la pérdida de energía? ¿Cuál de los dos aporta más?

---

## Antes de cerrar la sesión

- **60 fps** es restricción de la pieza, no un extra. Ten el medidor abierto mientras trabajas.
- **Bitácora** al día: qué consultaste, qué aceptaste, qué descartaste y por qué.
- **Subes el ejercicio** al repositorio y lo publicas.
- **Lo defiendes en voz alta** en la crítica. Se evalúa cómo sostienes tus decisiones, no solo que corra.
