<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <h1 class="welcome-title" data-testid="welcome-title">Vue Test</h1>
      <div class="welcome-animation">
        <div class="floating-icon">🧪</div>
      </div>
    </div>
    <h2 class="welcome-subtitle">
      Este é um ambiente voltado para testes unitários de componentes Vue.
    </h2>
    <div class="welcome-features">
      <div class="feature-card">
        <div class="component-wrapper">
          <ToDoList />
        </div>
      </div>
      <div class="feature-card">
        <div class="component-wrapper">
          <MiniQuiz />
        </div>
      </div>
    </div>
    <div class="stack-info">
      <p class="tech-stack">
        Criado com
        <a href="https://vitejs.dev/" target="_blank" rel="noopener" class="tech-link">
          <span class="tech-icon">⚡</span>
          Vite
        </a>
        <span style="margin: 0 0.5rem">+</span>
        <a href="https://vuejs.org/" target="_blank" rel="noopener" class="tech-link">
          <span class="tech-icon">💚</span>
          Vue 3
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToDoList from './ToDoList.vue'
import MiniQuiz from './MiniQuiz/MiniQuiz.vue'
</script>

<style scoped>
.welcome-container {
  max-width: 2200px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(135deg, #0b62e4 0%, #6f228d 100%);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.welcome-content {
  display: flex;
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.welcome-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.floating-icon {
  font-size: 4rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.welcome-features {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.component-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
}

.stack-info {
  margin-top: 2.5rem;
  font-size: 1.1rem;
}

.tech-stack {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.tech-link {
  color: #fff;
  text-decoration: none;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0 0.2rem;
}

.tech-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.tech-link:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.tech-icon {
  font-size: 1rem;
}

@media (max-width: 1200px) {

  /* notebooks grandes */
  .welcome-title {
    font-size: 2.2rem;
  }

  .feature-card {
    min-height: 250px;
  }
}

@media (max-width: 900px) {

  /* tablets e notebooks pequenos */
  .welcome-features {
    flex-direction: column;
    gap: 1rem;
  }

  .feature-card {
    min-height: 200px;
  }
}

@media (max-width: 768px) {
  .welcome-container {
    padding: 1rem;
  }

  .welcome-title {
    font-size: 2.5rem;
  }

  .welcome-subtitle {
    font-size: 1.1rem;
  }

  .feature-card {
    padding: 1.5rem;
    min-height: 350px;
  }
}

@media (max-width: 480px) {
  .welcome-title {
    font-size: 2rem;
  }

  .feature-card {
    padding: 1rem;
    min-height: 300px;
  }
}

@media (max-width: 600px) {

  /* celulares grandes */
  .welcome-title {
    font-size: 1.5rem;
  }

  .feature-card {
    padding: 0.5rem;
    min-height: 150px;
  }
}

@media (max-width: 400px) {

  /* celulares pequenos (320px+) */
  .welcome-title {
    font-size: 1.1rem;
  }

  .feature-card {
    min-height: 100px;
  }
}
</style>
