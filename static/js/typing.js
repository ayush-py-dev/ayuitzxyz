const cursor = document.getElementById("typewriter-text")

const texts = ["Student", "Software Developer", "Web Developer", "Freelancer", "Gamer", "Web Designer"];

const timeout = ms => new Promise(r => setTimeout(r, ms));

(async () => {
     while (true) {
          for (const text of texts) {
               for (const chr of text) {
                    await timeout(100);
                    cursor.textContent += chr;
               }
               await timeout(1000);

               let i = 0;
               for (const _chr of text) {
                    await timeout(50);
                    cursor.textContent = cursor.textContent.substring(0, text.length - ++i);
               }
          }
     }
})();