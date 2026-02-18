# 🪙 CriptoBi - Dashboard de Criptomonedas

Un dashboard moderno y dinámico para visualizar información en tiempo real de las principales criptomonedas del mercado, construido con React, TypeScript y TailwindCSS.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?logo=tailwindcss&logoColor=white)

## 📋 Descripción

CriptoBi es una aplicación web que consume la API de CoinGecko para mostrar información actualizada sobre criptomonedas. El proyecto demuestra el uso de React moderno con TypeScript, implementando patrones como Context API, custom hooks, y componentes reutilizables.

## ✨ Características

- 📊 **Dashboard en tiempo real**: Visualiza las principales criptomonedas ordenadas por capitalización de mercado
- 🔍 **Búsqueda dinámica**: Filtra criptomonedas por nombre o símbolo
- 📈 **Métricas globales**: Muestra el valor total del mercado, crecimiento promedio y moneda con mayor crecimiento
- 🔄 **Ordenamiento flexible**: Ordena las criptomonedas por mayor o menor crecimiento en 24h
- 💚 **Interfaz moderna**: Diseño limpio y responsivo con TailwindCSS
- ⚡ **Rendimiento optimizado**: Uso de `useMemo` para cálculos costosos
- 🎯 **TypeScript**: Tipado fuerte para mayor seguridad en el desarrollo
- 🔁 **Estado global**: Gestión de estado con Context API

## 🗂️ Estructura de Carpetas

```
criptoBi/
├── public/                    # Archivos estáticos
├── src/
│   ├── assets/               # Recursos (imágenes, iconos, etc.)
│   ├── components/           # Componentes de React
│   │   ├── Coin.tsx         # Componente individual de criptomoneda
│   │   ├── DashBoard.tsx    # Componente principal del dashboard
│   │   ├── Header.tsx       # Encabezado con búsqueda y filtros
│   │   ├── ListaCriptos.tsx # Contenedor de lista de criptomonedas
│   │   └── Metrica.tsx      # Componente para mostrar métricas
│   ├── context/              # Contextos de React
│   │   └── coinContext.tsx  # Context para estado global de monedas
│   ├── hooks/                # Custom hooks
│   │   └── criptoHook.ts    # Hook para consumir la API
│   ├── types/                # Definiciones de TypeScript
│   │   └── coin.ts          # Interfaz de Coin
│   ├── App.tsx               # Componente raíz
│   ├── App.css               # Estilos del componente App
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales con TailwindCSS
├── .gitignore                # Archivos ignorados por Git
├── eslint.config.js          # Configuración de ESLint
├── index.html                # HTML principal
├── package.json              # Dependencias y scripts
├── tsconfig.app.json         # Configuración de TypeScript para la app
├── tsconfig.json             # Configuración base de TypeScript
├── tsconfig.node.json        # Configuración de TypeScript para Node
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Este archivo
```

## 🚀 Tecnologías Utilizadas

### Core
- **React 19.2** - Biblioteca principal para UI
- **TypeScript 5.9** - Superset de JavaScript con tipado estático
- **Vite 7.3** - Build tool y dev server ultrarrápido

### Estilos
- **TailwindCSS 4.1** - Framework CSS utility-first

### Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **@vitejs/plugin-react** - Plugin de Vite para React con Fast Refresh

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd criptoBi
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run preview` - Previsualiza la versión de producción

## 📊 API Utilizada

Este proyecto consume la API pública de [CoinGecko](https://www.coingecko.com/):

```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc
```

La API proporciona datos como:
- Precio actual
- Capitalización de mercado
- Volumen de 24h
- Cambios de precio en 24h
- Máximos y mínimos históricos
- Y más...

## 🧩 Componentes Principales

### `<DashBoard />`
Componente principal que:
- Consume la API de CoinGecko
- Calcula métricas agregadas
- Filtra y ordena las criptomonedas
- Renderiza las métricas y la lista de monedas

### `<Header />`
Barra superior con:
- Campo de búsqueda para filtrar monedas
- Selector de ordenamiento (mayor/menor crecimiento)
- Branding de la aplicación

### `<Coin />`
Tarjeta individual que muestra:
- Ícono de la criptomoneda
- Nombre y símbolo
- Precio actual
- Porcentaje de cambio en 24h

### `<Metrica />`
Componente reutilizable para mostrar métricas clave del mercado

### `<ListaCriptos />`
Contenedor que renderiza la lista completa de criptomonedas

## 🎣 Custom Hooks

### `useFetch<T>(url: string)`
Hook genérico para realizar peticiones HTTP:
- Gestión automática del estado de carga
- Manejo de errores
- Cancelación de peticiones con AbortController
- Tipado genérico con TypeScript

```typescript
const { data, loading, error } = useFetch<CoinType[]>(API);
```

## 🌐 Context API

### `CoinContext`
Proporciona estado global para:
- `coinName`: Término de búsqueda actual
- `crecimiento`: Criterio de ordenamiento ("mayor" | "menor" | "default")

```typescript
const { coinName, setCoinName, crecimiento, setCrecimiento } = useCoinName();
```

## 📱 Características Técnicas

### Optimización de Rendimiento
- **useMemo**: Memorización de cálculos costosos (totales, promedios, ordenamiento)
- **Filtrado eficiente**: Búsqueda en tiempo real sin re-renders innecesarios
- **Fast Refresh**: HMR (Hot Module Replacement) con Vite

### Patrones Implementados
- **Custom Hooks**: Lógica reutilizable (`useFetch`)
- **Context API**: Estado global sin props drilling
- **Composición de componentes**: Componentes pequeños y reutilizables
- **TypeScript Interfaces**: Tipado fuerte para mayor seguridad

### Gestión de Estado
- Estado local con `useState`
- Estado global con Context API
- Optimización con `useMemo` y `useEffect`

## 🎨 Personalización

Para personalizar el dashboard, puedes:

1. **Modificar las métricas**: Edita `DashBoard.tsx` para agregar nuevas métricas
2. **Cambiar estilos**: Ajusta las clases de TailwindCSS en los componentes
3. **Agregar funcionalidades**: Implementa gráficos, favoritos, alertas, etc.
4. **Cambiar API**: Modifica la URL en `DashBoard.tsx` para usar otra fuente de datos

## 🔮 Posibles Mejoras

- [ ] Gráficos históricos de precios
- [ ] Sistema de favoritos con localStorage
- [ ] Modo oscuro/claro
- [ ] Más opciones de filtrado (por precio, volumen, etc.)
- [ ] Paginación o scroll infinito
- [ ] Notificaciones de cambios de precio
- [ ] Portfolio personal de criptomonedas
- [ ] Soporte multi-moneda (EUR, MXN, etc.)

## 📄 Licencia

Este proyecto es de código abierto y está disponible como ejemplo educativo.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue primero para discutir los cambios que te gustaría hacer.

---

**Desarrollado con ❤️ usando React + TypeScript + Vite**
