 const getNews = (country='ua') =>{
    return {type:'GET_NEWS', country}
};

export {
    getNews
}