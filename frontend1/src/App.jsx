import React from 'react';

function App() {
  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>🎯 Live Object Detection Feed</h1>

      <div style={styles.videoContainer}>
        <img 
          src="http://127.0.0.1:5000/video_feed" 
          alt="Live Feed" 
          style={styles.video}
        />
      </div>

      <div style={styles.footer}>
        Powered by Flask + OpenCV | <a href="#" style={styles.link}>More Info</a>
      </div>
    </div>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    animation: 'fadeIn 2s ease',
  },
  videoContainer: {
    border: '4px solid #00bcd4',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease-in-out',
  },
  video: {
    display: 'block',
    width: '720px',
    height: '540px',
  },
  footer: {
    marginTop: '30px',
    fontSize: '0.9rem',
    color: '#ccc',
  },
  link: {
    color: '#00bcd4',
    textDecoration: 'none',
  }
};

// Add keyframe animation to the page
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`, styleSheet.cssRules.length);

export default App;
