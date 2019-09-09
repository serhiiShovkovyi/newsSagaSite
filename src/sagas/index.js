import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews({country}) {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    `country=${country}&` +
    "apiKey=55fe93ba7e4146ee983cb8c0c4535985";
  const data = yield fetch(url).then(body => body.json());
  yield put({ type: "NEWS_RECEIVED", payload: data });
}


function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga(arg) {

  yield all([actionWatcher()]);
}
