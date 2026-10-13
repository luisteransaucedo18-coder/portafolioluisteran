import React, { Component } from "react";
import en from "../i18n/en";
import es from "../i18n/es";
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Portfolio render error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      let language = "en";
      try {
        language =
          localStorage.getItem("portfolio-language") === "es" ? "es" : "en";
      } catch {
        /* Use English when storage is unavailable. */
      }
      const text = (language === "es" ? es : en).error;
      return (
        <main className="app-error" lang={language}>
          <div className="app-error-card">
            <h1>{text.title}</h1>
            <p>{text.description}</p>
            <button
              className="button primary"
              onClick={() => window.location.reload()}
            >
              {text.retry} ↗
            </button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
