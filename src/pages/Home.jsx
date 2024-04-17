import React from "react";

function Home() {
  return (
    <div className="bg-sky-700 h-full text-white">
      <div className="flex sm:flex-row flex-col justify-self-center pt-12 pl-24">
        <img
          className="mt-8 sm:mr-0 ml-16 h-36 w-36 rounded-full"
          alt="profilepic"
          src="/myprofile.jpg"
        />

        <div class="p-6">
          <h1 class="text-2xl font-bold mb-2">UROOJ AKBAR</h1>
          <h2 class="text-lg font-semibold mb-4">Full Stack Developer</h2>
          <p class="text-base">
          Hey there! I'm  a passionate full-stack developer with a knack for crafting exceptional digital experiences.<br/>
           My journey in the world of technology began with a curiosity-driven exploration of coding languages and design principles,<br /> and it has evolved into a fulfilling career focused on building innovative solutions.
          </p>
        </div>
      </div>

     
      <div className=" flex flex-col justify-center items-center text-[#E2E8F0] mt-24 mb-10 mx-8">
      <h2 className="text-xl md:text-2xl">Let us create awesome products!</h2>
      <p className=" mt-2 text-center text-xs md:text-md">
      If you're looking to bring your ideas to life, I'm here to help.
      Whether you need a sleek web application,<br /> a scalable API, or a dynamic mobile experience, 
      I have the skills and dedication to deliver.
      Let's collaborate, innovate, and create something truly remarkable together. <br />
      Feel free to explore my portfolio to see some of my recent projects and get in touch to discuss how we can work together to make your vision a reality.
      </p>
    </div>

      <div className="flex flex-col items-center justify-center border-t-2 border-b-2 bg-sky-900 mt-8 border-white">
        <h2 class="text-lg font-semibold mb-4 mt-4">Contact Me</h2>

        <div className="flex sm:flex-row flex-col justify-center items-center mb-4 gap-4">
          <div className="flex">
            Github
            <a href="https://github.com/UroojAkbar/"target="_blank" class="px-2">
              
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
          <div className="flex">
          LinkedIn
            <a href="https://www.linkedin.com/in/urooj-akbar-2280b02bb/"target="_blank" class="px-2">
              
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
          <div className="flex">
            Youtube
            <a href="j" class="px-2">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
          <div className="flex">
            Facebook{" "}
            <a href="j" class="px-2">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 p-2 pl-8">
        <text>© 2024 Urooj Akbar All rights reserved.</text>
      </div>
    </div>
  );
}

export default Home;
