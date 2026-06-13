import './LoadingScreen.css'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen__glow"></div>

      <div className="loading-screen__content">
        <div className="loading-screen__logo">MZ</div>

        <h1>Moch Zidan</h1>
        <p>Menyiapkan portfolio...</p>

        <div className="loading-screen__bar">
          <span></span>
        </div>
      </div>
    </div>
  )
}