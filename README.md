# 🪙 CriptoBi - Dashboard de Criptomonedas

Un dashboard moderno y dinámico para visualizar información en tiempo real de las principales criptomonedas del mercado, construido con React, TypeScript y TailwindCSS.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Descripción

CriptoBi es una aplicación web que consume la API de CoinGecko para mostrar información actualizada sobre criptomonedas. El proyecto demuestra el uso de React moderno con TypeScript, implementando patrones como Context API, custom hooks, y componentes reutilizables.

## ✨ Características

- 📊 **Dashboard en tiempo real**: Visualiza las principales criptomonedas ordenadas por capitalización de mercado
- 🔍 **Búsqueda dinámica**: Filtra criptomonedas por nombre o símbolo
- 📈 **Métricas globales**: Muestra el valor total del mercado, crecimiento promedio y moneda con mayor crecimiento
- 🔄 **Ordenamiento flexible**: Ordena las criptomonedas por mayor o menor crecimiento en 24h
- 💚 **Interfaz moderna**: Diseño limpio y responsivo con TailwindCSS

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

**Desarrollado con ❤️ usando React + TypeScript + Vite**
