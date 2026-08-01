import { Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default class PageErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Ark of Bones page error', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section className="page-error" role="alert">
        <p className="eyebrow">Page interrupted</p>
        <h1>This page did not finish loading.</h1>
        <p>The rest of Ark of Bones remains available. Reload this page or return to the homepage.</p>
        <div className="hero-actions">
          <button className="button button--gold" type="button" onClick={() => window.location.reload()}>
            <RotateCcw aria-hidden="true" />Reload page
          </button>
          <Link className="button button--outline" to="/"><ArrowLeft aria-hidden="true" />Return home</Link>
        </div>
      </section>
    );
  }
}
