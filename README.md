# Inicio Proyecto Vite + Tailwind + Storybook


## Project setup
# [Instalacion de Tailwind](https://tailwindcss.com/docs/guides/vite)

Para comenzar, se instalo el paquete de vite con el siguiente comando:
```npm create vite@latest my-project -- --template react```

Luego, se instalo el paquete de tailwind con el siguiente comando:
```npm install -D tailwindcss@latest postcss@latest autoprefixer@latest```

Se creo el archivo de configuracion de tailwind con el siguiente comando:
```npx tailwindcss init -p```

Se completo el archivo de configuracion de tailwind con el siguiente contenido:
```
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
   },
   plugins: [],
}
```

Se agregaron las directivas de tailwind en el archivo index.css con el siguiente contenido:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# [Instalacion de Storybook](https://storybook.js.org/blog/first-class-vite-support-in-storybook/)

Se instalo el paquete de storybook con el siguiente comando:
```npx storybook init --builder=vite```
