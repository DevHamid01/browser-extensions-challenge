const extensions = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ];
  
  const container = document.getElementById("extensionsList");
  
  function renderExtensions(filter = "all") {
    container.innerHTML = "";
  
    const filtered = extensions.filter(ext => {
      if (filter === "active") return ext.isActive;
      if (filter === "inactive") return !ext.isActive;
      return true;
    });
  
    filtered.forEach((ext, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class = card-desc>
          <img src="${ext.logo}" alt="${ext.name} icon" class="logo">
         <div class = 'detail'>
            <h3>${ext.name}</h3>
             <p>${ext.description}</p>
         </div>
        </div>
        
        <div class= 'remove'>
          <button class="remove-btn">Remove</button>
          <label class="toggle">
             <input type="checkbox" ${ext.isActive ? "checked" : ""} data-index="${i}">
          </label>
        </div>
        
      `;
      container.appendChild(card);
    });
  
    // Toggle switch event
    document.querySelectorAll("input[type=checkbox]").forEach(input => {
      input.addEventListener("change", (e) => {
        const index = e.target.dataset.index;
        extensions[index].isActive = e.target.checked;
      });
    });
  }
  
  renderExtensions();
  
  // Theme toggle
  
  document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  });
  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderExtensions(btn.dataset.filter);
    });
  });
  