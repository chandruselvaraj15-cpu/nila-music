import { useState } from "react";
import {
  Home, Search, Library, Heart, Play, Pause,
  SkipBack, SkipForward, Music2, Headphones, Sparkles
} from "lucide-react";
export default function App() {
  const [playing, setPlaying] = useState(false);
  const [tab, setTab] = useState("Home");
  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon"><Music2 /></div>
          <div>
            <h1>NILA<span> MUSIC</span></h1>
            <small>FEEL EVERY BEAT</small>
          </div>
        </div>
        <button className="avatar"><Sparkles /></button>
      </header>
      <section className="welcome">
        <p className="eyebrow">YOUR MUSIC UNIVERSE</p>
        <h2>Every beat has<br /><span>a feeling.</span></h2>
        <p>Welcome to your world of music.</p>
      </section>
      <section className="section">
        <div className="section-title">
          <h3>Made for you</h3>
          <span>Explore all</span>
        </div>
        <div className="music-card">
          <div className="art"><Headphones size={54} /></div>
          <div>
            <h3>Dreamy Nights</h3>
            <p>Your personal music universe</p>
            <button className="play" onClick={() => setPlaying(!playing)}>
              {playing ? <Pause /> : <Play fill="currentColor" />}
              {playing ? "Pause" : "Explore"}
            </button>
          </div>
        </div>
      </section>
      <section className="section">
        <h3>Quick access</h3>
        <div className="quick-grid">
          {["Recently played", "Favorites", "Your playlists", "Offline music"].map(item => (
            <div className="quick-card" key={item}>
              <Music2 size={19} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="mini-player">
        <div className="mini-art"><Music2 /></div>
        <div className="track">
          <strong>Discover your sound</strong>
          <small>NILA MUSIC</small>
        </div>
        <button onClick={() => setPlaying(!playing)}>
          {playing ? <Pause /> : <Play />}
        </button>
      </div>
    <nav className="navigation">
        {[
          ["Home", Home],
          ["Search", Search],
          ["Library", Library],
          ["Favorites", Heart]
        ].map(([name, Icon]: any) => (
          <button
            key={name}
            className={tab === name ? "active" : ""}
            onClick={() => setTab(name)}
          >
           <Icon size={21} />
            <small>{name}</small>
          </button>
        ))}
      </nav>
    </main>
  );
}
