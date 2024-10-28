export function renderSidebar () {
  const slidebarOptions1 = [
    {
      pics: "./sidebar-pics/home-icon.png",
      name: 'Home'
    },
    {
      pics: "./sidebar-pics/shorts-logo.png",
      name: 'Shorts'
    },
    {
      pics: "./sidebar-pics/youtube-subscription-icon.png",
      name: 'Subscription'
    }
  ];
  let renderSlidebar1 = '';
  slidebarOptions1.forEach((options) => {
    renderSlidebar1 += `
      <div id="slidebar-options">
        <div class="side-part">
          <div class="buttons-of-side-icons">
            <div>
              <img class="side-icons" alt="Visit Example Website" src="${options.pics}">
            </div>
            <div class="side-icon-names">${options.name}</div>
          </div>
      </div>
    `;
  });
  document.querySelector('.render-slideBar-options1')
    .innerHTML = renderSlidebar1;

  const slidebarOptions2 = [
    {
      pics: "./sidebar-pics/history-icon.png",
      name: 'History'
    },
    {
      pics: "./sidebar-pics/playlist-icon.png",
      name: 'Playists'
    },
    {
      pics: "./sidebar-pics/watch-later-icon.png",
      name: 'Watch later'
    },
    {
      pics: "./sidebar-pics/like-icon.png",
      name: 'Liked videos'
    },
    {
      pics: "./sidebar-pics/download-icon.png",
      name: 'Downloads'
    },
  ];
  let renderSlidebar2 = `
    <div id="slidebar-options">
      <div class="side-part">
        <div class="buttons-of-side-icons">
          <div style="font-weight: 700" class="side-icon-names">You</div>
          <div>
            <img style="width: 6px; margin: 0px 0px 0px 13px" class="side-icons" src="./sidebar-pics/arrow-icon.png" alt="Visit Example Website">
          </div>
        </div>
    </div>`;
  slidebarOptions2.forEach((options) => {
    renderSlidebar2 += `
      <div id="slidebar-options">
        <div class="side-part">
          <div class="buttons-of-side-icons">
            <div>
              <img class="side-icons" src="${options.pics}" alt="Visit Example Website">
            </div>
            <div class="side-icon-names">${options.name}</div>
          </div>
      </div>
    `;
    document.querySelector('.render-slideBar-options2')
    .innerHTML = renderSlidebar2;
  });
}

export function optionExplore(exploreClass) {
  const exploreOptions = [
    {
      pics: "./sidebar-pics/trending-icon.png",
      name: 'Trending'
    },
    {
      pics: "./sidebar-pics/music-icon.png",
      name: 'Music'
    },
    {
      pics: "./sidebar-pics/gaming-icon.png",
      name: 'Gaming'
    },
    {
      pics: "./sidebar-pics/news-icon.png",
      name: 'News'
    },
    {
      pics: "./sidebar-pics/sports-icon.png",
      name: 'Sports'
    }
  ]
  let renderExploreOptions = `
    <div style="font-size: medium; font-weight: 700; font-family: Roboto, Arial;
      margin: 20px 0px 10px 13px;">
        Explore
    </div>
  `;
  exploreOptions.forEach((options) => {
    renderExploreOptions += `
      <div id="slidebar-options">
        <div class="side-part">
          <div class="buttons-of-side-icons">
            <div>
              <img class="side-icons" src="${options.pics}" alt="Visit Example Website">
            </div>
            <div class="side-icon-names">${options.name}</div>
          </div>
      </div>
    `;
  document.querySelector(exploreClass)
    .innerHTML = renderExploreOptions;
  });
}

export function optionMore(moreClass) {
  const youtubeOptions = [
    {
      pics: "./sidebar-pics/youtube-icon.png",
      name: 'Youtube Premium'
    },
    {
      pics: "./sidebar-pics/youtube-music-icon.png",
      name: 'Youtube Music'
    },
    {
      pics: "./sidebar-pics/youtube-kids-icon.png",
      name: 'Youtube Kids'
    }
  ]
  let renderYoutubeOptions = `
    <div style="font-size: medium; font-weight: 700; font-family: Roboto, Arial;
      margin: 20px 0px 10px 13px;">
        More from Youtube
    </div>
  `;
  youtubeOptions.forEach((options) => {
    renderYoutubeOptions += `
      <div id="slidebar-options">
        <div class="side-part">
          <div class="buttons-of-side-icons">
            <div>
              <img class="side-icons" src="${options.pics}" alt="Visit Example Website">
            </div>
            <div class="side-icon-names">${options.name}</div>
          </div>
      </div>
    `;
  document.querySelector(moreClass)
    .innerHTML = renderYoutubeOptions;
  });
}

export function moreOptions(Class) {
  const options = [
    {
      pics: "./sidebar-pics/settings-icon.png",
      name: 'Settings'
    },
    {
      pics: "./sidebar-pics/report-icon.png",
      name: 'Report history'
    },
    {
      pics: "./sidebar-pics/help-icon.png",
      name: 'Help'
    },
    {
      pics: "./sidebar-pics/feedback-icon.png",
      name: 'Send feedback'
    }
  ]
  let renderOptions = ``;
  options.forEach((options) => {
    renderOptions += `
      <div id="slidebar-options">
        <div class="side-part">
          <div class="buttons-of-side-icons">
            <div>
              <img class="side-icons" src="${options.pics}" alt="Visit Example Website">
            </div>
            <div class="side-icon-names">${options.name}</div>
          </div>
      </div>
    `;
  document.querySelector(Class)
    .innerHTML = renderOptions;
  });
}

const bodyElement = document.body;
const side = document.getElementById("sideBar");
const header = document.getElementById("header");
const sidebarHeader = document.getElementById("sideBar-header");
const elements = document.getElementById("sidebar-elements");
const overlay = document.getElementById('overlay');

export function bringSidebar() {
  side.classList.toggle('visible');
  side.style.position = 'fixed';
  bodyElement.classList.toggle('darken-effect');
  document.getElementById("sideBar").style.width = '250px';
  header.style.paddingRight = '20px';
  setTimeout(() => {
    sidebarHeader.style.position = 'fixed';
    elements.style.paddingTop = '70px';
  },1000/5);


  if (side.classList.contains('visible')) {
    bodyElement.style.overflow = 'hidden';
  } else {
    bodyElement.style.overflow = '';
  }
}

export function removeSidebar() {
  side.classList.remove('visible');
  document.getElementById("sideBar").style.width = '0px';
  bodyElement.classList.remove('darken-effect');
  bodyElement.style.overflow = '';
  header.style.paddingRight = '0px';
  sidebarHeader.style.position = 'relative';
  elements.style.paddingTop = '5px';
}

overlay.addEventListener('click', () => {
  removeSidebar();
});

window.addEventListener('resize', () => {
  side.style.display = 'block';
  if (window.innerWidth < 1229) {
    side.style.display = 'fixed';
  } else {
    side.style.display = 'none';
    removeSidebar();
  }
});
