export async function fetchArticle(article_id) {
  return await fetch(
    `https://api.blog.quidam.re/api/getArticle.php?id=${article_id}`
  ).then((r) => r.json());
}


