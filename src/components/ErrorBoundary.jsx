import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error al renderizar el portafolio:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error">
          <div className="app-error-card">
            <h1>No se pudo cargar el portafolio</h1>
            <p>
              Ejecuta <code>npm run dev</code> y revisa la consola del navegador para ver el
              detalle del error.
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
