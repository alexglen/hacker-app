export const baseUrl: string = "https://hacker-news.firebaseio.com/v0/";

const fetchNewsIds = async () => {
    const body = await fetch(`${baseUrl}newstories.json`);
    const ids = await body.json()
    return ids.slice(0, 100);
};

export const fetchOneNews = async (newsId: number) => {
    const body = await fetch(`${baseUrl}item/${newsId}.json`);
    return await body.json()
};

export const fetchNewsList = async () => {
    const ids = await fetchNewsIds();
    const promises = ids.map((id: number) => fetchOneNews(id));
    return Promise.all(promises);
}

export const fetchComments = async(comments: number[])  => {
    const promises = comments.map((id: number) => fetchOneNews(id));
    return Promise.all(promises);
}