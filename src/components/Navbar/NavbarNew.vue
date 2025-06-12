<template>
  <header
    class="flex justify-center m-auto font-medium text-[14px] text-center"
  >
    <!-- <router-link
      v-for="navRoute in navRoutes"
      :key="navRoute.name"
      class="inset-shadow inset-shadow-sm hover:inset-shadow-lg m-2 px-[20px] py-[10px] border-[var(--primary)] hover:border-[var(--primary)] rounded-[10px] text-[16px]/normal text-[var(--text)] hover:text-[var(--accent)] transition-all hover:transition-all hover:duration-500 hover:ease-in-out"
      :to="navRoute.path"
      >{{ navRoute.name }}</router-link
    > -->

    <div class="container">
      <div class="tabs">
        <input type="radio" name="tabs" id="radio-1" checked />
        <label for="radio-1" class="tab"
          >
          <router-link to="/">Home</router-link>
          <!-- <span class="badge">4</span> -->
        </label>
        <input type="radio" name="tabs" id="radio-2" />
        <label for="radio-2" class="tab">Projects</label>
        <input type="radio" name="tabs" id="radio-3" />
        <label for="radio-3" class="tab">Categories</label>
        <input type="radio" name="tabs" id="radio-4" />
        <label for="radio-4" class="tab">Custom Components</label>
        <span class="slider"></span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navRoutes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/all-categories',
    name: 'Categories',
  },
  {
    path: '/custom-components',
    name: 'CustomComponents',
  },
]
</script>

<style scoped>
.container {
  /* position: absolute; */
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabs {
  display: flex;
  position: relative;
  background-color: white;
  padding: 16px;
  border-radius: 80px;
  box-shadow: 0 6px 12px rgba(24, 94, 224, 0.15);
}

.tabs * {
  z-index: 4;
}

input[type='radio'] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 200px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 14px;
  border-radius: 50%;
  background-color: #f56565;
}

input[type='radio']:checked + label {
  color: #1a202c;
}

input[type='radio']:checked + label > .badge {
  background-color: #f56565;
  color: white;
}

input[id='radio-1']:checked ~ .slider {
  transform: translateX(0);
}

input[id='radio-2']:checked ~ .slider {
  transform: translateX(100%);
}

input[id='radio-3']:checked ~ .slider {
  transform: translateX(200%);
}

input[id='radio-4']:checked ~ .slider {
  transform: translateX(300%);
}

.slider {
  position: absolute;
  display: flex;
  height: 56px;
  width: 200px;
  background-color: #2183c4;
  z-index: 1;
  border-radius: 80px;
  transition: transform 0.25s ease-out;
}

@media (max-width: 768px) {
  .tabs {
    flex-direction: column;
    transform: scale(0.6);
  }
}
</style>
