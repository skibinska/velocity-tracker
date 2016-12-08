function sortByWeek(issues, state) {
  return issues
  .filter( function(issue) {
    if(state && issue.state !== state) { return false; }
    var created_date = new Date(issue.created_at);
    var dateNow = new Date();
    if(dateNow - created_date < 6.048e+8) {
      return issue;
    }
  })
  .map( function(issue) {
    return `<p>${issue.title}</p><br>
            <p>${issue.created_at}</p>`;

  });
}

module.exports = sortByWeek;