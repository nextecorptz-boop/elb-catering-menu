/**
 * ELB Catering Menu - Application Logic v4.0
 * Premium Interactive Menu with 4-Week Selection, URL Parameter Routing, WhatsApp Sharing & QR Table Tent
 */

// Abstract food SVG illustrations — using CSS custom variables for dynamic themes
const DAY_ILLUSTRATIONS = {
    Monday: `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="90" fill="var(--primary)"/>
        <!-- Abstract rice bowl — layered curves -->
        <ellipse cx="100" cy="72" rx="62" ry="14" fill="var(--secondary)" opacity="0.3"/>
        <ellipse cx="100" cy="68" rx="55" ry="18" fill="var(--background)" opacity="0.08"/>
        <path d="M48 68 Q100 30 152 68" fill="var(--background)" opacity="0.9"/>
        <path d="M55 68 Q100 38 145 68" fill="var(--secondary)" opacity="0.4"/>
        <!-- Steam wisps -->
        <path d="M80 55 Q78 44 82 36 Q84 28 80 20" fill="none" stroke="var(--background)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
        <path d="M100 52 Q98 41 102 33 Q104 25 100 17" fill="none" stroke="var(--background)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
        <path d="M120 55 Q118 44 122 36 Q124 28 120 20" fill="none" stroke="var(--background)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
        <!-- Vegetable accent dots -->
        <circle cx="70" cy="62" r="5" fill="var(--accent)" opacity="0.8"/>
        <circle cx="85" cy="58" r="4" fill="var(--secondary)" opacity="0.9"/>
        <circle cx="115" cy="58" r="4" fill="var(--secondary)" opacity="0.9"/>
        <circle cx="130" cy="62" r="5" fill="var(--accent)" opacity="0.8"/>
        <circle cx="100" cy="56" r="6" fill="var(--accent)" opacity="0.7"/>
        <!-- Garnish leaf -->
        <path d="M100 56 Q110 45 118 48 Q108 52 100 56Z" fill="var(--secondary)" opacity="0.9"/>
    </svg>`,

    Tuesday: `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="90" fill="var(--primary)"/>
        <!-- Abstract pilau spices — geometric pattern -->
        <polygon points="100,8 115,32 142,32 121,50 129,76 100,60 71,76 79,50 58,32 85,32" fill="var(--secondary)" opacity="0.15"/>
        <polygon points="100,18 111,36 130,36 115,48 120,68 100,56 80,68 85,48 70,36 89,36" fill="var(--secondary)" opacity="0.25"/>
        <!-- Spice mounds -->
        <ellipse cx="65" cy="70" rx="22" ry="10" fill="var(--accent)" opacity="0.85"/>
        <ellipse cx="100" cy="65" rx="28" ry="12" fill="var(--secondary)" opacity="0.9"/>
        <ellipse cx="135" cy="70" rx="22" ry="10" fill="var(--primary)" opacity="0.9"/>
        <!-- Grain texture dots -->
        <circle cx="65" cy="68" r="2" fill="var(--background)" opacity="0.6"/>
        <circle cx="72" cy="72" r="1.5" fill="var(--background)" opacity="0.4"/>
        <circle cx="58" cy="71" r="1.5" fill="var(--background)" opacity="0.4"/>
        <circle cx="100" cy="63" r="2" fill="var(--background)" opacity="0.6"/>
        <circle cx="108" cy="67" r="1.5" fill="var(--background)" opacity="0.4"/>
        <circle cx="92" cy="67" r="1.5" fill="var(--background)" opacity="0.4"/>
        <circle cx="135" cy="68" r="2" fill="var(--background)" opacity="0.6"/>
        <!-- Cinnamon stick accent -->
        <rect x="155" y="42" width="5" height="32" rx="2" fill="var(--accent)" opacity="0.7" transform="rotate(-20 157 58)"/>
        <rect x="162" y="38" width="5" height="28" rx="2" fill="var(--secondary)" opacity="0.5" transform="rotate(-15 164 52)"/>
        <!-- Cardamom -->
        <ellipse cx="42" cy="52" rx="6" ry="10" fill="var(--secondary)" opacity="0.7" transform="rotate(25 42 52)"/>
    </svg>`,

    Wednesday: `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="90" fill="var(--primary)"/>
        <!-- Abstract fries — stacked golden rods -->
        <rect x="55" y="35" width="9" height="42" fill="var(--secondary)" opacity="0.9" transform="rotate(-5 59 56)"/>
        <rect x="68" y="30" width="9" height="46" fill="var(--accent)" opacity="0.8" transform="rotate(2 72 53)"/>
        <rect x="81" y="33" width="9" height="44" fill="var(--secondary)" opacity="0.85" transform="rotate(-3 85 55)"/>
        <rect x="94" y="28" width="9" height="48" fill="var(--background)" opacity="0.75" transform="rotate(4 98 52)"/>
        <rect x="107" y="32" width="9" height="44" fill="var(--secondary)" opacity="0.9" transform="rotate(-2 111 54)"/>
        <rect x="120" y="30" width="9" height="46" fill="var(--accent)" opacity="0.8" transform="rotate(5 124 53)"/>
        <rect x="133" y="34" width="9" height="42" fill="var(--secondary)" opacity="0.85" transform="rotate(-4 137 55)"/>
        <!-- Abstract serving vessel shadow -->
        <ellipse cx="100" cy="80" rx="65" ry="8" fill="var(--primary)" opacity="0.5"/>
        <!-- Abstract chicken/BBQ smoke -->
        <path d="M40 40 Q36 28 42 18 Q46 10 40 4" fill="none" stroke="var(--background)" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
        <path d="M160 38 Q156 26 162 16" fill="none" stroke="var(--background)" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
        <!-- Diagonal accent line -->
        <line x1="0" y1="90" x2="200" y2="0" stroke="var(--secondary)" stroke-width="0.5" opacity="0.15"/>
    </svg>`,

    Thursday: `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="90" fill="var(--primary)"/>
        <!-- Abstract banana/ndizi — organic curved form -->
        <path d="M30 72 Q50 30 90 20 Q130 12 165 35 Q150 40 120 38 Q85 38 60 65Z" fill="var(--secondary)" opacity="0.9"/>
        <path d="M35 70 Q54 32 92 22 Q128 15 160 37 Q148 40 118 39 Q84 40 62 63Z" fill="var(--background)" opacity="0.4"/>
        <!-- Shadow underside -->
        <path d="M40 72 Q60 82 100 80 Q140 78 165 65" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
        <!-- Stew drip/sauce pools -->
        <ellipse cx="55" cy="78" rx="18" ry="6" fill="var(--accent)" opacity="0.7"/>
        <ellipse cx="145" cy="76" rx="15" ry="5" fill="var(--accent)" opacity="0.6"/>
        <!-- Green bean accents -->
        <path d="M108 70 Q118 58 130 62" fill="none" stroke="var(--secondary)" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
        <path d="M112 72 Q122 60 134 64" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`,

    Friday: `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="90" fill="var(--primary)"/>
        <!-- Abstract biryani — layered opulent mound -->
        <ellipse cx="100" cy="75" rx="70" ry="12" fill="var(--primary)" opacity="0.6"/>
        <ellipse cx="100" cy="73" rx="65" ry="14" fill="var(--accent)" opacity="0.3"/>
        <!-- Rice mound layers -->
        <path d="M35 72 Q100 20 165 72" fill="var(--secondary)" opacity="0.9"/>
        <path d="M45 72 Q100 28 155 72" fill="var(--background)" opacity="0.12"/>
        <path d="M55 72 Q100 36 145 72" fill="var(--secondary)" opacity="0.2"/>
        <path d="M65 72 Q100 44 135 72" fill="var(--background)" opacity="0.08"/>
        <!-- Saffron threads -->
        <path d="M80 55 Q90 48 88 40" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
        <path d="M100 50 Q110 43 108 35" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
        <path d="M120 55 Q128 47 126 39" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
        <!-- Saffron tip dots -->
        <circle cx="88" cy="40" r="2.5" fill="var(--accent)" opacity="0.9"/>
        <circle cx="108" cy="35" r="2.5" fill="var(--accent)" opacity="0.9"/>
        <circle cx="126" cy="39" r="2.5" fill="var(--accent)" opacity="0.9"/>
    </svg>`
};

class MenuApplication {
    constructor(data) {
        this.data = data;
        this.currentTheme = 'classic';
        this.tweaks = { theme: 'classic', printLayout: 'menu' };
        this.activeDay = 'Monday';
        this.activeWeek = 1; // Default to Week 1
        this.mobileViewMode = 'single'; // 'single' (tabbed) or 'full' (all days)
        this.init();
    }

    init() {
        this.parseUrlParameters();
        this.setupEventListeners();
        this.renderWeekSelector();
        this.renderMenu();
        this.renderMobileTabs();
        this.loadSavedTweaks();
        this.updateMobileViewLayout();
        this.generateQRCodeImages();
    }

    parseUrlParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Active Week Parsing (1-4)
        const weekParam = urlParams.get('week');
        if (weekParam && [1, 2, 3, 4].includes(parseInt(weekParam))) {
            this.activeWeek = parseInt(weekParam);
        }

        // Active Day Parsing
        const dayParam = urlParams.get('day');
        const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        if (dayParam && validDays.includes(dayParam)) {
            this.activeDay = dayParam;
        }
    }

    updateUrlParameters() {
        const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?week=${this.activeWeek}&day=${this.activeDay}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        // Refresh QR codes since parameters changed
        this.generateQRCodeImages();
    }

    setupEventListeners() {
        // Theme selection
        document.getElementById('themeSelect').addEventListener('change', (e) => {
            this.setTheme(e.target.value);
        });

        // Print Selection
        document.getElementById('printLayoutSelect').addEventListener('change', (e) => {
            this.setPrintLayout(e.target.value);
        });

        // Print Trigger
        document.getElementById('printBtn').addEventListener('click', () => {
            window.print();
        });

        // Customization panel toggle
        const tweaksToggle = document.querySelector('.tweaks-toggle');
        const tweaksPanel = document.querySelector('.tweaks-panel');
        const tweaksClose = document.querySelector('.tweaks-close');

        tweaksToggle.addEventListener('click', () => {
            tweaksPanel.classList.toggle('active');
        });

        tweaksClose.addEventListener('click', () => {
            tweaksPanel.classList.remove('active');
        });

        // Close panels when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.tweaks-panel') && !e.target.closest('.tweaks-toggle') && tweaksPanel.classList.contains('active')) {
                tweaksPanel.classList.remove('active');
            }
        });

        // Share Modal elements
        const shareBtn = document.getElementById('shareBtn');
        const shareModal = document.getElementById('shareModal');
        const shareModalClose = document.getElementById('shareModalClose');
        const whatsappCopyBtn = document.getElementById('whatsappCopyBtn');

        shareBtn.addEventListener('click', () => {
            tweaksPanel.classList.remove('active');
            shareModal.classList.add('active');
        });

        shareModalClose.addEventListener('click', () => {
            shareModal.classList.remove('active');
        });

        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                shareModal.classList.remove('active');
            }
        });

        // WhatsApp Copy Menu
        whatsappCopyBtn.addEventListener('click', () => {
            this.copyWhatsAppMenu();
        });

        // Mobile View Toggle
        const viewToggleBtn = document.getElementById('viewToggleBtn');
        viewToggleBtn.addEventListener('click', () => {
            this.mobileViewMode = this.mobileViewMode === 'single' ? 'full' : 'single';
            this.updateMobileViewLayout();
        });
    }

    renderWeekSelector() {
        const container = document.getElementById('weekNavButtonsContainer');
        container.innerHTML = '';

        [1, 2, 3, 4].forEach(w => {
            const btn = document.createElement('button');
            btn.className = 'week-nav-btn';
            if (w === this.activeWeek) btn.classList.add('active');
            
            // Premium double digit formatting
            btn.innerHTML = `<span class="week-num">0${w}</span><span class="week-lbl">Week</span>`;

            btn.addEventListener('click', () => {
                this.setWeek(w);
            });

            container.appendChild(btn);
        });
    }

    setWeek(weekNumber) {
        this.activeWeek = weekNumber;
        
        // Update active class on buttons
        document.querySelectorAll('.week-nav-btn').forEach((btn, index) => {
            btn.classList.toggle('active', (index + 1) === weekNumber);
        });

        this.renderMenu();
        this.updateUrlParameters();
    }

    renderMenu() {
        const container = document.getElementById('menuContainer');
        container.innerHTML = '';

        const grid = document.createElement('div');
        grid.className = 'week-grid';

        const weekData = this.data.weeks[this.activeWeek] || this.data.weeks[1];

        weekData.forEach(day => {
            const cell = document.createElement('div');
            cell.className = `day-cell day-${day.dayName.toLowerCase()}`;
            cell.dataset.day = day.dayName;

            if (day.dayName === this.activeDay) {
                cell.classList.add('active-day');
            }

            // SVG illustration header
            const artWrapper = document.createElement('div');
            artWrapper.className = 'day-art';
            artWrapper.innerHTML = DAY_ILLUSTRATIONS[day.dayName] || DAY_ILLUSTRATIONS['Monday'];
            cell.appendChild(artWrapper);

            // Day name bar with gold line overlay
            const dayName = document.createElement('div');
            dayName.className = 'day-name';
            dayName.innerHTML = `<span>${day.dayName}</span><span class="day-dot">✦</span>`;
            cell.appendChild(dayName);

            // Meal content deck
            const contentDeck = document.createElement('div');
            contentDeck.className = 'meal-content-deck';

            // Meal categories
            const categories = [
                { label: 'Starch Options', key: 'mainStarch', class: 'cat-starch' },
                { label: 'Primary Protein', key: 'protein1', class: 'cat-protein-primary' },
                { label: 'Alternative Protein', key: 'protein2', class: 'cat-protein-alt' },
                { label: 'Fresh Vegetables', key: 'vegetables', class: 'cat-veg' },
                { label: 'Traditional Sides', key: 'sides', class: 'cat-sides' },
                { label: 'Daily Dessert Fruit', key: 'fruit', class: 'cat-fruit' }
            ];

            categories.forEach(cat => {
                const row = document.createElement('div');
                row.className = `meal-row ${cat.class}`;

                const label = document.createElement('span');
                label.className = 'meal-label';
                label.textContent = cat.label;

                const item = document.createElement('div');
                item.className = 'meal-item';
                item.textContent = day.meals[cat.key];

                row.appendChild(label);
                row.appendChild(item);
                contentDeck.appendChild(row);
            });

            cell.appendChild(contentDeck);
            grid.appendChild(cell);
        });

        container.appendChild(grid);
    }

    renderMobileTabs() {
        const tabsContainer = document.getElementById('mobileTabsContainer');
        tabsContainer.innerHTML = '';

        const weekData = this.data.weeks[this.activeWeek] || this.data.weeks[1];

        weekData.forEach(day => {
            const btn = document.createElement('button');
            btn.className = 'mobile-tab-btn';
            if (day.dayName === this.activeDay) btn.classList.add('active');
            
            // Text content (short for mobile)
            btn.textContent = day.dayName.substring(0, 3);
            btn.dataset.day = day.dayName;

            btn.addEventListener('click', () => {
                this.setActiveDay(day.dayName);
            });

            tabsContainer.appendChild(btn);
        });
    }

    setActiveDay(dayName) {
        this.activeDay = dayName;
        
        // Update tab buttons
        document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.day === dayName);
        });

        // Update day cell classes
        document.querySelectorAll('.day-cell').forEach(cell => {
            cell.classList.toggle('active-day', cell.dataset.day === dayName);
        });

        this.updateUrlParameters();
    }

    updateMobileViewLayout() {
        const container = document.querySelector('.menu-container');
        const viewToggleBtn = document.getElementById('viewToggleBtn');
        const tabsContainer = document.getElementById('mobileTabsContainer');

        if (this.mobileViewMode === 'single') {
            container.classList.add('view-single-day');
            container.classList.remove('view-full-week');
            viewToggleBtn.textContent = "Show Full Week";
            tabsContainer.style.display = "flex";
        } else {
            container.classList.remove('view-single-day');
            container.classList.add('view-full-week');
            viewToggleBtn.textContent = "Show Single Day";
            tabsContainer.style.display = "none";
        }
    }

    setTheme(themeName) {
        this.currentTheme = themeName;
        this.tweaks.theme = themeName;
        document.body.className = document.body.className.replace(/\btheme-\S+/g, '');
        document.body.classList.add(`theme-${themeName}`);
        this.saveTweaks();
    }

    setPrintLayout(layoutType) {
        this.tweaks.printLayout = layoutType;
        if (layoutType === 'flyer') {
            document.body.classList.add('print-flyer-mode');
        } else {
            document.body.classList.remove('print-flyer-mode');
        }
        this.saveTweaks();
    }

    saveTweaks() {
        localStorage.setItem('elbMenuTweaks_v4', JSON.stringify(this.tweaks));
    }

    loadSavedTweaks() {
        const saved = localStorage.getItem('elbMenuTweaks_v4');
        if (saved) {
            try {
                this.tweaks = { ...this.tweaks, ...JSON.parse(saved) };
                document.getElementById('themeSelect').value = this.tweaks.theme;
                document.getElementById('printLayoutSelect').value = this.tweaks.printLayout;
                this.setTheme(this.tweaks.theme);
                this.setPrintLayout(this.tweaks.printLayout);
            } catch (e) {
                // Corrupt storage — ignore
            }
        } else {
            this.setTheme('classic');
            this.setPrintLayout('menu');
        }
    }

    // Dynamic QR generation using a public reliable chart API
    generateQRCodeImages() {
        let currentUrl = window.location.href;
        // Mock url for local testing file protocol
        if (currentUrl.startsWith('file://')) {
            currentUrl = `https://elbcatering.com/office-lunch-menu?week=${this.activeWeek}&day=${this.activeDay}`;
        }
        
        const size = 300;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&color=0f3020&data=${encodeURIComponent(currentUrl)}`;
        
        // Modal QR code
        const modalQr = document.getElementById('modalQrCode');
        modalQr.innerHTML = `<img src="${qrUrl}" alt="Menu QR Code" style="max-width: 100%; height: auto; border: 8px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"/>`;

        // Flyer QR code
        const flyerQr = document.getElementById('flyerQrCode');
        flyerQr.innerHTML = `<img src="${qrUrl}" alt="Menu QR Code" style="max-width: 100%; height: auto; border: 12px solid white; box-shadow: 0 6px 20px rgba(0,0,0,0.08);"/>`;

        // Flyer URL text representation
        const shortUrl = currentUrl.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
        document.getElementById('flyerUrlText').textContent = shortUrl.toUpperCase();
    }

    copyWhatsAppMenu() {
        let currentUrl = window.location.href;
        if (currentUrl.startsWith('file://')) {
            currentUrl = `https://elbcatering.com/office-lunch-menu?week=${this.activeWeek}&day=${this.activeDay}`;
        }

        const weekSpellings = ["ONE", "TWO", "THREE", "FOUR"];
        const currentWeekSpelling = weekSpellings[this.activeWeek - 1] || "ONE";

        let message = `🍽️ *ELB CATERING SERVICES* \n`;
        message += `*Office Lunch Menu — WEEK ${currentWeekSpelling}*\n\n`;

        const weekData = this.data.weeks[this.activeWeek] || this.data.weeks[1];

        weekData.forEach(day => {
            message += `📅 *${day.dayName.toUpperCase()}*\n`;
            message += `• _Starch:_ ${day.meals.mainStarch}\n`;
            message += `• _Protein:_ ${day.meals.protein1}\n`;
            if (day.meals.protein2) {
                message += `• _Alt Protein:_ ${day.meals.protein2}\n`;
            }
            message += `• _Vegetables:_ ${day.meals.vegetables}\n`;
            message += `• _Sides:_ ${day.meals.sides}\n`;
            message += `• _Daily Fruit:_ ${day.meals.fruit}\n\n`;
        });

        message += `👉 *View the full interactive menu & request custom color themes here:* \n`;
        message += `${currentUrl}\n\n`;
        message += `📞 *Call to Order:* +255 715 279061 | +255 754 279061\n`;

        navigator.clipboard.writeText(message).then(() => {
            const badge = document.getElementById('copySuccessBadge');
            badge.classList.add('show');
            setTimeout(() => {
                badge.classList.remove('show');
            }, 2500);
        }).catch(err => {
            alert('Failed to copy text. Please select and copy manually.');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new MenuApplication(MENU_DATA);
    window.menuApp = app;
});
