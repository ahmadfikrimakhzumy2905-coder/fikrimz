// Cybernetic Interface Protocols (JavaScripts)

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ Cyber System Online: KAI ZENITH Standalone Engine Mounted.');

  // 1. Skill progress animate bar on scroll-into-view
  const skillBars = document.querySelectorAll('.scale-x-0');
  
  const animateSkills = () => {
    skillBars.forEach(bar => {
      bar.classList.remove('scale-x-0');
    });
  };

  // Simple delayed loading for local standalone environment
  setTimeout(animateSkills, 500);

  // 2. Optional: Micro Typing effect on subtitle role
  const titleEl = document.querySelector('.typing-title');
  if (titleEl) {
    const originalText = titleEl.textContent ? titleEl.textContent.trim() : '';
    titleEl.textContent = '';
    let idx = 0;
    const type = () => {
      if (idx < originalText.length) {
        titleEl.textContent += originalText.charAt(idx);
        idx++;
        setTimeout(type, 35);
      }
    };
    setTimeout(type, 800);
  }
});
