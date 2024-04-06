function sorter(textbooks) {
    return [...textbooks].sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a > b) - (a < b);
    });
}