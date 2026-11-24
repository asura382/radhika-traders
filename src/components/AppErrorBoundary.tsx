import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

type Props = { children: ReactNode };
type State = { error: Error | null };

/** Keeps component render errors visible instead of leaving an empty page. */
export default class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[Radhika Traders] A page failed to render.', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main className="app-error-screen" role="alert">
        <div className="app-error-card">
          <span className="app-error-icon"><AlertTriangle size={23} /></span>
          <p className="app-error-kicker">RADHIKA TRADERS / PREVIEW</p>
          <h1>The showroom could not load.</h1>
          <p className="app-error-copy">A component encountered an error while rendering. The detail below can help us identify the exact issue.</p>
          <pre className="app-error-detail">{this.state.error.message || String(this.state.error)}</pre>
          <button className="button button-gold" type="button" onClick={() => window.location.reload()}>
            Reload preview <RotateCcw size={15} />
          </button>
        </div>
      </main>
    );
  }
}
