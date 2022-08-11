function mudarURL(file) {
    const currentURL = document.location.href;
    const newURL = currentURL.replace('index', file);

    document.location.href = newURL;
}