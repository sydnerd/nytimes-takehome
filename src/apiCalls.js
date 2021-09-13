export const getArticles = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Hp4GCcdl56jOlKuYvTAuq2mM4t8YfeR9')
    .then(response => response.json())
}