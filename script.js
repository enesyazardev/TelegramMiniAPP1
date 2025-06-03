// Telegram Web App SDK kullanıma hazır olduğunda
Telegram.WebApp.ready();
Telegram.WebApp.expand(); // Mini uygulamayı tam ekrana genişlet

// Tema renklerini güncelle
function updateTheme() {
    const themeParams = Telegram.WebApp.themeParams;
    if (themeParams) {
        document.documentElement.style.setProperty('--tg-theme-bg-color', themeParams.bg_color);
        document.documentElement.style.setProperty('--tg-theme-text-color', themeParams.text_color);
        document.documentElement.style.setProperty('--tg-theme-link-color', themeParams.link_color);
        document.documentElement.style.setProperty('--tg-theme-hint-color', themeParams.hint_color);
        document.documentElement.style.setProperty('--tg-theme-button-color', themeParams.button_color);
        document.documentElement.style.setProperty('--tg-theme-button-text-color', themeParams.button_text_color);
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', themeParams.secondary_bg_color);
        document.documentElement.style.setProperty('--tg-theme-header-bg-color', themeParams.header_bg_color);
        document.documentElement.style.setProperty('--tg-theme-bottom-bar-bg-color', themeParams.bottom_bar_bg_color);
        document.documentElement.style.setProperty('--tg-theme-accent-text-color', themeParams.accent_text_color);
        document.documentElement.style.setProperty('--tg-theme-section-bg-color', themeParams.section_bg_color);
        document.documentElement.style.setProperty('--tg-theme-section-header-text-color', themeParams.section_header_text_color);
        document.documentElement.style.setProperty('--tg-theme-section-separator-color', themeParams.section_separator_color);
        document.documentElement.style.setProperty('--tg-theme-subtitle-text-color', themeParams.subtitle_text_color);
        document.documentElement.style.setProperty('--tg-theme-destructive-text-color', themeParams.destructive_text_color);
    }
}

// Tema değiştiğinde güncelle
Telegram.WebApp.onEvent('themeChanged', updateTheme);

// Başlangıçta temayı ayarla
updateTheme();


const newsArticles = [
    {
        title: "Haber Başlığı 1",
        summary: "Bu ilk haberin kısa bir özetidir. Mini uygulamanızda görüntülenecektir.",
        link: "#" // Gerçek haber linki buraya gelecek
    },
    {
        title: "Haber Başlığı 2",
        summary: "İkinci haberin özeti burada yer alıyor. Uygulamanın nasıl çalıştığını göstermek için.",
        link: "#"
    },
    {
        title: "Haber Başlığı 3",
        summary: "Üçüncü haberin kısa özeti. Mini uygulamanızda haberlerin listelendiğini göreceksiniz.",
        link: "#"
    }
];

const newsContainer = document.getElementById('news-container');

function displayNews() {
    newsContainer.innerHTML = ''; // Konteyneri temizle
    newsArticles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h2');
        const link = document.createElement('a');
        link.href = article.link;
        link.textContent = article.title;
        link.target = "_blank"; // Harici linkleri yeni sekmede aç
        title.appendChild(link);


        const summary = document.createElement('p');
        summary.textContent = article.summary;

        newsItem.appendChild(title);
        newsItem.appendChild(summary);

        newsContainer.appendChild(newsItem);
    });
}

// Sayfa yüklendiğinde haberleri göster
document.addEventListener('DOMContentLoaded', displayNews); 