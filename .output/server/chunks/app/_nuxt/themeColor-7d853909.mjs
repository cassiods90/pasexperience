import { h as defineStore } from '../server.mjs';

const themeColor = defineStore("theme", {
  state: function() {
    return {
      color: [
        "rgba(34, 255, 255, 1)",
        "rgba(34, 255, 255, 0.8)",
        "rgba(34, 255, 255, 0.6)",
        "rgba(34, 255, 255, 0.4)",
        "rgba(34, 255, 255, 0.2)"
      ]
    };
  },
  actions: {
    changeColor(color) {
      if (color == "yellow") {
        this.color = [
          "rgba(255, 199, 34, 1)",
          "rgba(255, 199, 34, 0.8)",
          "rgba(255, 199, 34, 0.6)",
          "rgba(255, 199, 34, 0.4)",
          "rgba(255, 199, 34, 0.2)"
        ];
      } else if (color == "pink") {
        this.color = [
          "rgba(255, 34, 255, 1)",
          "rgba(255, 34, 255, 0.8)",
          "rgba(255, 34, 255, 0.6)",
          "rgba(255, 34, 255, 0.4)",
          "rgba(255, 34, 255, 0.2)"
        ];
      } else if (color == "green") {
        this.color = [
          "rgba(123, 255, 36, 1)",
          "rgba(123, 255, 36, 0.8)",
          "rgba(123, 255, 36, 0.6)",
          "rgba(123, 255, 36, 0.4)",
          "rgba(123, 255, 36, 0.2)"
        ];
      } else {
        this.color = [
          "rgba(34, 255, 255, 1)",
          "rgba(34, 255, 255, 0.8)",
          "rgba(34, 255, 255, 0.6)",
          "rgba(34, 255, 255, 0.4)",
          "rgba(34, 255, 255, 0.2)"
        ];
      }
    },
    ballsRandom() {
      const ballsToRemove = document.querySelectorAll(".ball");
      ballsToRemove.forEach((ball) => ball.remove());
      const colors = this.color;
      const numBalls = 100;
      const balls = [];
      for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;
        balls.push(ball);
        const particlesBackground = document.querySelector(".particles-background");
        particlesBackground.appendChild(ball);
      }
      balls.forEach((el, i, ra) => {
        let to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12
        };
        el.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
          duration: (Math.random() + 1) * 2e3,
          // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        });
      });
    }
  },
  getters: {
    getColor(state) {
      return state.color;
    }
  }
});

export { themeColor as t };
//# sourceMappingURL=themeColor-7d853909.mjs.map
