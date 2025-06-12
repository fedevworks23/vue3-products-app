<template>
  <div class="justify-center content-center grid m-auto h-[80vh] text-2xl">
    <div class="flex flex-col">
      <div class="relative watermark2"></div>
      <div class="container">
        <div class="relative flex flex-row justify-center hero-content">
          <div class="relative flex-2/3 details">
            <h1
              class="z-0 relative font-extrabold text-[4rem] text-base/18.5 letter-spacing-[0.2rem] quicksand-500"
              :style="{ margin: '-60px -60px 30px 240px' }"
            >
              <span>
                My Self,
                <br />
                <span class="text-[#ff6f6f] name2">Sriman</span>
              </span>
            </h1>

            <p
              class="pr-5 font-medium text-[#555555] text-[20px] text-base/7 text-right"
            >
              I am a passionate <code>frontend developer</code> with a strong
              focus on creating user-friendly and visually appealing web
              applications.
              <br />
              I have a solid understanding of <code>HTML, CSS,</code> and
              <code>JavaScript</code>, and I am proficient in using modern
              frontend framework such as Vue.js. <br />
              I have experience in building responsive and interactive web
              applications that provide a seamless user experience.
            </p>

            <a
              href=""
              class="right-5.5 absolute mt-8 px-4 py-2.5 border-[#333333] border-1 rounded-2xl font-medium text-[#555555] text-[20px] text-base/8"
              >Download Resume</a
            >
          </div>

          <div class="flex-2/3 image">
            <img
              class="hover:z-2 hover:shadow-2xl rounded-2xl w-[400px] h-[500px] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
              src="https://maraviyainfotech.com/wrapbootstrap/brog-package/brog-bootstrap/assets/img/hero/my-img.png"
              alt=""
            />
            <span
              class="top-2.5 z-[-1] absolute opacity-15 ml-2.5 border-2 rounded-2xl w-[400px] h-[500px] image-span"
            ></span>
          </div>

          <div
            class="relative flex-2/3 text-[#555555] text-[38px] text-base/14 profession"
          >
            <h1 class="bottom-0 absolute">
              I am a,
              <br />
              <span class="text-[#ff6f6f]">Frontend Developer</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="relative watermark1"></div>
      
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.watermark1::after {
  content: 'SRIMAN';
  margin: auto;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  font-size: 20rem;
  font-weight: 700;
  color: #f5f5f5;
  line-height: 60px;
  text-shadow:
    5px -5px 10px #000,
    -1px 0 0 #000,
    0 1px 0 #000,
    0 -1px 0 #000,
    1px 1px #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000;
  opacity: 0.05;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: -1;
}
.watermark2::after {
  content: 'Front End Developer';
  margin: auto;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 0;
  right: 0;
  font-size: 10rem;
  font-weight: 700;
  color: #f5f5f5;
  line-height: 10rem;
  letter-spacing: 3rem;
  text-shadow:
    5px -5px 10px #000,
    -1px 0 0 #000,
    0 1px 0 #000,
    0 -1px 0 #000,
    1px 1px #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000;
  opacity: 0.03;
  -webkit-transform: translateY(-100%);
  transform: translateY(-50%);
}
</style>
