import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-surface p-8 text-center">
          <h1 className="text-headline-xl text-on-surface mb-4">
            Something went wrong
          </h1>
          <p className="text-body-lg text-on-surface/70 mb-8 max-w-md">
            Please try refreshing the page. If the problem persists, contact us at{' '}
            <a href="mailto:kendollcastro@gmail.com" className="text-primary underline">
              kendollcastro@gmail.com
            </a>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-bold hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Refresh Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
