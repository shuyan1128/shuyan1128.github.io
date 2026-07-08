(function () {
  var state = { view: 'about', openId: null, transitioning: false };
  var goToTimer = null;

  var projectMap = {
    health: {
      status: 'Shipped', tag: 'Personal · LLM',
      title: 'Health Journal Assistant',
      oneLiner: 'A journaling companion that turns plain-language notes about how you feel into structured, trackable health data.',
      appUrl: '#', githubUrl: 'https://github.com/shuyanyan/health-journal'
    },
    stylist: {
      status: 'In progress', tag: 'Personal · AI',
      title: 'AI Stylist',
      oneLiner: 'An AI stylist that learns your taste and builds outfits from the clothes you already own.',
      appUrl: '#', githubUrl: 'https://github.com/shuyanyan/ai-stylist'
    },
    ordering: {
      status: 'Shipped', tag: 'Mobile',
      title: 'College Ordering App',
      oneLiner: 'A campus food-ordering app that streamlines order-ahead and pickup for students and dining halls.',
      appUrl: '#', githubUrl: 'https://github.com/shuyanyan/college-ordering'
    },
    music: {
      status: 'Creative', tag: 'Side project',
      title: 'Music Map',
      oneLiner: 'A map-based way to explore music — turning listening into a sense of place.',
      appUrl: '#', githubUrl: 'https://github.com/shuyanyan/music-map'
    }
  };

  var viewRoot = document.getElementById('view-root');
  var sections = {
    about: document.getElementById('view-about'),
    work: document.getElementById('view-work'),
    projects: document.getElementById('view-projects')
  };
  var navButtons = {
    about: document.getElementById('nav-about'),
    work: document.getElementById('nav-work'),
    projects: document.getElementById('nav-projects')
  };
  var modal = document.getElementById('project-modal');
  var modalStatus = document.getElementById('modal-status');
  var modalTag = document.getElementById('modal-tag');
  var modalTitle = document.getElementById('modal-title');
  var modalOneLiner = document.getElementById('modal-oneliner');
  var modalAppLink = document.getElementById('modal-app-link');
  var modalGithubLink = document.getElementById('modal-github-link');

  function applyView() {
    Object.keys(sections).forEach(function (key) {
      sections[key].classList.toggle('hidden', key !== state.view);
      navButtons[key].classList.toggle('active', key === state.view);
    });
  }

  window.goTo = function (view) {
    if (view === state.view || state.transitioning) return;
    var start = window.scrollY;
    window.scrollTo({ top: 0, behavior: start > 40 ? 'smooth' : 'auto' });
    var delay = start > 40 ? 260 : 120;
    state.transitioning = true;
    viewRoot.classList.add('transitioning');
    clearTimeout(goToTimer);
    goToTimer = setTimeout(function () {
      state.view = view;
      applyView();
      state.transitioning = false;
      viewRoot.classList.remove('transitioning');
    }, delay);
  };

  window.openProject = function (id) {
    var p = projectMap[id];
    if (!p) return;
    state.openId = id;
    modalStatus.textContent = p.status;
    modalTag.textContent = p.tag;
    modalTitle.textContent = p.title;
    modalOneLiner.textContent = p.oneLiner;
    modalAppLink.href = p.appUrl;
    modalGithubLink.href = p.githubUrl;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeProject = function () {
    state.openId = null;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeProject();
  });

  applyView();
})();
