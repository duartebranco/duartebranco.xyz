import React from "react";

const About = () => {
  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        backgroundColor: '#9fb7d2',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          margin: '0 0 2rem 0', 
          color: '#f8f8ff',
          textAlign: 'center'
        }}>
           About Me
        </h1>

        <div style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          color: '#f8f8ff',
          textAlign: 'left'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Hi there! I'm Alex, a passionate creative developer and digital artist who loves bringing 
            ideas to life through code and visual design. With over 5 years of experience in web development 
            and a deep appreciation for clean, minimal aesthetics, I create digital experiences that are 
            both functional and beautiful.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            When I'm not coding, you'll find me sketching, experimenting with digital art, or exploring 
            new creative techniques. I believe that the intersection of technology and creativity is where 
            the most innovative solutions emerge.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            I specialize in React development, UI/UX design, and digital illustration. My work focuses 
            on creating fast, accessible, and user-friendly applications that solve real problems while 
            maintaining a strong visual identity.
          </p>

          <div style={{
            backgroundColor: '#829cba',
            padding: '1.5rem',
            borderRadius: '12px',
            marginTop: '2rem'
          }}>
            <h3 style={{ 
              margin: '0 0 1rem 0', 
              color: '#f8f8ff',
              fontSize: '1.3rem'
            }}>
               Skills & Interests
            </h3>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '1.5rem',
              color: '#f8f8ff'
            }}>
              <li>Frontend Development (React, JavaScript, CSS)</li>
              <li>Digital Art & Illustration</li>
              <li>UI/UX Design</li>
              <li>Minimalist Design Philosophy</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;