export default paraToSplit => {
    let orderedHtmlList = paraToSplit
        .split('\n')
        .map(data => `<li>${data}</li>`)
        .reduce((next, prev) => `${next}\n${prev}`, '');
    return `<ol>${orderedHtmlList}\n</ol>`;
}