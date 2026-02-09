# 🪵 Carpintería Placito — Página Web

## ¿Qué es esto?
La página web de la carpintería. Cuando alguien pregunte "¿qué hacen?", manda este link:

**https://carpinteria-placito.vercel.app**

---

## 📸 Cómo agregar fotos

1. **Tomar la foto** — Papá toma la foto con su celular
2. **Mandar por WhatsApp** — Se las manda a ustedes
3. **Guardar la foto** en la carpeta `/public/fotos/` del proyecto
4. **Abrir el archivo** `/lib/gallery.ts`
5. **Agregar una línea** dentro de los corchetes `[]`:

```typescript
{ src: "/fotos/cocina-roble.jpg", title: "Cocina integral", material: "Roble" },
```

6. **Guardar y hacer deploy** (ver abajo)

---

## 💬 Cómo cambiar el número de WhatsApp

1. Abrir el archivo `/lib/config.ts`
2. Cambiar el número en la línea que dice `number:`
3. Poner el número con código de país: `5233XXXXXXXX`

---

## ✍️ Cómo agregar testimonios

1. Abrir el archivo `/lib/testimonials.ts`
2. Agregar una línea con este formato:
```typescript
{ quote: "Lo que dijo el cliente", name: "Nombre", detail: "Cliente desde 2020" },
```

---

## 🚀 Cómo hacer deploy

Si tienen Vercel conectado (ya está), solo hagan push a GitHub:

```bash
git add .
git commit -m "nuevas fotos"
git push
```

El deploy es automático. En 1-2 minutos se actualiza la página.

---

## 📁 Estructura del proyecto

```
lib/
  config.ts         ← Número WhatsApp, dirección, horario
  gallery.ts        ← Fotos de muebles
  testimonials.ts   ← Testimonios de clientes
  services.ts       ← Servicios que ofrecemos
public/
  fotos/            ← Carpeta para fotos del taller
```

---

Hecho por [duendes.app](https://duendes.app) 🐝
