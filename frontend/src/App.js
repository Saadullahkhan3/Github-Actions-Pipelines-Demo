import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to React Demo</h1>
                <p>This is a simple React application for GitHub Actions demo.</p>
                <div className="features">
                    <h2>Features:</h2>
                    <ul>
                        <li>✅ ESLint configured for code quality</li>
                        <li>✅ Jest and React Testing Library for testing</li>
                        <li>✅ Webpack for building and bundling</li>
                        <li>✅ Ready for CI/CD pipeline</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;