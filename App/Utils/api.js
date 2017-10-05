var api = {
getBio(username){
  username = username.toLowerCase().trim();
  var url = `https://api.github.com/users/${username}`;
  return fetch(url).then((res) => res.json());
  },

  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getNotes(username){
    console.log("in get notes")
    username = username.toLowerCase().trim();
    var url = `https://githubnoter-71269.firebaseio.com/${username}.json`;
    console.log(url);
    console.log(fetch(url).then((res) => res.json()));
    return fetch(url).then((res) => res.json());
  },
  addNotes(username, note){
    console.log("in ADD notes")
    username = username.toLowerCase().trim();
    var url = `https://githubnoter-71269.firebaseio.com/${username}.json`;
    return fetch(url,{
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};
module.exports = api;
